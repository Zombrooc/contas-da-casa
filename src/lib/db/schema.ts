import { pgTable, serial, text, decimal, timestamp, boolean, integer, date, pgEnum } from "drizzle-orm/pg-core"

// Enums
export const transactionTypeEnum = pgEnum("transaction_type", ["income", "expense"])
export const walletTypeEnum = pgEnum("wallet_type", ["cash", "checking", "savings", "credit"])
export const investmentTypeEnum = pgEnum("investment_type", [
  "cdb",
  "stock",
  "fii",
  "tesouro",
  "lci",
  "lca",
  "debenture",
])
export const frequencyEnum = pgEnum("frequency", ["weekly", "monthly", "quarterly", "yearly"])

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Wallets table
export const wallets = pgTable("wallets", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  name: text("name").notNull(),
  type: walletTypeEnum("type").notNull(),
  bank: text("bank"),
  accountNumber: text("account_number"),
  balance: decimal("balance", { precision: 12, scale: 2 }).notNull().default("0"),
  creditLimit: decimal("credit_limit", { precision: 12, scale: 2 }),
  description: text("description"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Categories table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: transactionTypeEnum("type").notNull(),
  color: text("color"),
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
})

// Transactions table
export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  walletId: integer("wallet_id")
    .references(() => wallets.id)
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  type: transactionTypeEnum("type").notNull(),
  description: text("description").notNull(),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  date: date("date").notNull(),
  paymentMethod: text("payment_method"),
  notes: text("notes"),
  isRecurring: boolean("is_recurring").default(false),
  parentTransactionId: integer("parent_transaction_id").references(() => transactions.id),
  frequency: frequencyEnum("frequency"),
  endDate: date("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Investments table
export const investments = pgTable("investments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  type: investmentTypeEnum("type").notNull(),
  ticker: text("ticker"),
  name: text("name"),
  quantity: decimal("quantity", { precision: 12, scale: 4 }).notNull(),
  purchasePrice: decimal("purchase_price", { precision: 12, scale: 2 }).notNull(),
  currentPrice: decimal("current_price", { precision: 12, scale: 2 }),
  purchaseDate: date("purchase_date").notNull(),
  broker: text("broker"),
  fees: decimal("fees", { precision: 12, scale: 2 }).default("0"),
  sector: text("sector"),
  dividendYield: decimal("dividend_yield", { precision: 5, scale: 2 }),
  maturityDate: date("maturity_date"),
  rate: text("rate"),
  notes: text("notes"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Investment transactions (buy/sell)
export const investmentTransactions = pgTable("investment_transactions", {
  id: serial("id").primaryKey(),
  investmentId: integer("investment_id")
    .references(() => investments.id)
    .notNull(),
  type: text("type").notNull(), // 'buy' or 'sell'
  quantity: decimal("quantity", { precision: 12, scale: 4 }).notNull(),
  price: decimal("price", { precision: 12, scale: 2 }).notNull(),
  fees: decimal("fees", { precision: 12, scale: 2 }).default("0"),
  date: date("date").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
})

// Budgets table
export const budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  name: text("name").notNull(),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  period: text("period").notNull(), // 'monthly', 'yearly'
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Goals table
export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  targetAmount: decimal("target_amount", { precision: 12, scale: 2 }).notNull(),
  currentAmount: decimal("current_amount", { precision: 12, scale: 2 }).default("0"),
  targetDate: date("target_date"),
  isCompleted: boolean("is_completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})
