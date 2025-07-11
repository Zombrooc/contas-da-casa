// wallets.ts
import {
  transactions as transactionTable,
  transactionsInsertSchema,
  walletInserSchema,
  wallets as walletTable,
} from "@/db/schema";
import db from "@/lib/drizzle";
import { zValidator } from "@hono/zod-validator";
import { eq, sql } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const wallets = await db.select().from(walletTable);

  return c.json({ wallets });
});

app.post("/", zValidator("json", walletInserSchema), async (c) => {
  const { name, type, bank, accountNumber, balance, creditLimit, description } =
    await c.req.valid("json");

  console.log("Creating wallet with data:", {
    name,
    type,
    bank,
    accountNumber,
    balance,
    creditLimit,
    description,
  });

  try {
    const newWallet = await db
      .insert(walletTable)
      .values({
        name,
        type,
        bank,
        description,
        accountNumber,
        creditLimit,
        balance,
      })
      .returning();

    return c.json({
      message: "create wallet",
      body: newWallet,
    });
  } catch (err) {
    return c.json({ message: "Error creating wallet", error: err }, 500);
  }
});

app.post("/:walletId/add-balance", async (c) => {
  const walletId = await c.req.param("walletId");
  const { amount }: { amount: number } = await c.req.json();

  if (!amount) {
    return c.json({ message: "Invalid amount" }, 400);
  }

  const wallet = await db
    .select()
    .from(walletTable)
    .where(eq(walletTable.id, walletId));

  if (wallet.length === 0) {
    return c.json({ message: "Wallet not found" }, 404);
  }

  const updatedWallet = await db
    .update(walletTable)
    .set({ balance: sql`${walletTable.balance} + ${amount}` })
    .where(eq(walletTable.id, walletId))
    .returning();

  const today: Date = new Date();
  const yyyy: number = today.getFullYear();
  let mm: number | string = today.getMonth() + 1; // Months start at 0!
  let dd: number | string = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const transaction: typeof transactionTable.$inferInsert = {
    walletId,
    amount: amount.toString(),
    description: `Balance added: ${amount}`,
    date: formattedToday,
    isRecurring: false,
    type: "income",
  };

  await db.insert(transactionTable).values(transaction).returning();

  return c.json({
    message: "Balance updated",
    wallet: updatedWallet[0],
  });
});

app.get("/:walletId", async (c) => {
  const walletId = await c.req.param("walletId");

  const wallet = await db
    .select()
    .from(walletTable)
    .where(eq(walletTable.id, walletId));

  if (wallet.length === 0) {
    return c.json({ message: "Wallet not found" }, 404);
  }
  return c.json(wallet[0]);
});

export default app;
