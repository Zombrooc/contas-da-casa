// wallets.ts
import { walletInserSchema, wallets as walletTable } from "@/db/schema";
import { db } from "@/lib/drizzle";
import { zValidator } from "@hono/zod-validator";
import { eq, sql } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const wallets = await db.select().from(walletTable);

  return c.json({ wallets });
});

app.post("/", zValidator("json", walletInserSchema), async (c) => {
  const {
    name,
    userId,
    type,
    bank,
    accountNumber,
    balance,
    creditLimit,
    description,
  } = await c.req.valid("json");

  console.log("Creating wallet with data:", {
    name,
    type,
    bank,
    accountNumber,
    balance,
    creditLimit,
    description,
    userId,
  });

  const newWallet = await db
    .insert(walletTable)
    .values({
      name,
      type,
      userId,
      bank,
      description,
      accountNumber,
      creditLimit,
    })
    .returning();

  return c.json({
    message: "create wallet",
    body: newWallet,
  });
});

app.post("/:walletId/add-balance", async (c) => {
  const walletId = await c.req.param("walletId");
  const { amount } = await c.req.json();

  if (!amount || isNaN(amount)) {
    return c.json({ message: "Invalid amount" }, 400);
  }

  const wallet = await db
    .select()
    .from(walletTable)
    .where(eq(walletTable.id, walletId));

  console.log(wallet[0].balance + amount);

  if (wallet.length === 0) {
    return c.json({ message: "Wallet not found" }, 404);
  }

  const updatedWallet = await db
    .update(walletTable)
    .set({ balance: sql`${walletTable.balance} + ${amount}` })
    .where(eq(walletTable.id, walletId))
    .returning();

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
