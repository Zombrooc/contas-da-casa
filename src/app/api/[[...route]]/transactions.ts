// wallets.ts
import {
  transactions as transactionTable,
  transactionsInsertSchema,
  categories as categoriesTable,
} from "@/db/schema";
import db from "@/lib/drizzle";
import { zValidator } from "@hono/zod-validator";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono();

export const transactionTypes = ["expense", "income"] as const;

export type TransactionType = (typeof transactionTypes)[number];

app.get("/", async (c) => {
  const type = await c.req.query("type");

  let queries = [];

  if (type) {
    queries.push(eq(transactionTable.type, type as TransactionType));
  }

  const transactions = await db
    .select({
      id: transactionTable.id,
      walletId: transactionTable.walletId,
      categoryId: transactionTable.categoryId,
      type: transactionTable.type,
      description: transactionTable.description,
      amount: transactionTable.amount,
      date: transactionTable.date,
      paymentMethod: transactionTable.paymentMethod,
      notes: transactionTable.notes,
      isRecurring: transactionTable.isRecurring,
      frequency: transactionTable.frequency,
      endDate: transactionTable.endDate,
      createdAt: transactionTable.createdAt,
      updatedAt: transactionTable.updatedAt,
      categoryName: categoriesTable.name,
      categoryType: categoriesTable.type,
      categoryColor: categoriesTable.color,
      categoryIcon: categoriesTable.icon,
    })
    .from(transactionTable)
    .where(and(...queries))
    .leftJoin(
      categoriesTable,
      eq(transactionTable.categoryId, categoriesTable.id)
    );
  return c.json({ transactions });
});

app.post("/", zValidator("json", transactionsInsertSchema), async (c) => {
  const {
    walletId,
    categoryId,
    amount,
    description,
    date,
    paymentMethod,
    notes,
    isRecurring,
    type,
  } = await c.req.valid("json");

  console.log("Creating transaction with data:", {
    walletId,
    categoryId,
    amount,
    description,
    date,
    paymentMethod,
    notes,
    isRecurring,
    type,
  });

  const newTransaction = await db
    .insert(transactionTable)
    .values({
      walletId,
      categoryId,
      amount,
      description,
      date,
      paymentMethod,
      notes,
      isRecurring,
      type,
    })
    .returning();

  return c.json({
    message: "create transaction",
    transactions: newTransaction,
  });
});

app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
