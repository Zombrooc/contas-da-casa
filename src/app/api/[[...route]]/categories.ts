import { categories } from "./../../../db/schema";
// wallets.ts
import {
  categories as categoriesTable,
  categoriesInsertSchema,
} from "@/db/schema";
import db from "@/lib/drizzle";
import { zValidator } from "@hono/zod-validator";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";

export const categoryTypes = ["expense", "income"] as const;

export type CategoryType = (typeof categoryTypes)[number];

const app = new Hono();

app.get("/", async (c) => {
  const type = await c.req.query("type");

  let queries = [];

  if (type) {
    queries.push(eq(categoriesTable.type, type as CategoryType));
  }

  const categories = await db
    .select()
    .from(categoriesTable)
    .where(and(...queries));

  return c.json({ categories });
});

app.post("/", zValidator("json", categoriesInsertSchema), async (c) => {
  const { name, type, color, icon } = await c.req.valid("json");

  console.log("Creating transaction with data:", { name, type, color, icon });

  const newCategory = await db
    .insert(categoriesTable)
    .values({ name, type, color, icon })
    .returning();

  return c.json({
    message: "create category",
    body: newCategory,
  });
});

app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
