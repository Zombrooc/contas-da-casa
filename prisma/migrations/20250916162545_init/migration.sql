-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "public"."RECURRING_INTERVAL" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "public"."TRANSACTION_CATEGORY" AS ENUM ('SALARY', 'FREELANCE', 'INVESTMENTS', 'GIFTS', 'RENTAL_INCOME', 'BONUS', 'REIMBURSEMENT', 'OTHER_INCOME', 'HOUSING', 'UTILITIES', 'GROCERIES', 'BAKERY', 'MARKET', 'PHARMACY', 'HEALTHCARE', 'TRANSPORTATION', 'FUEL', 'EDUCATION', 'ENTERTAINMENT', 'RESTAURANT', 'CLOTHING', 'INSURANCE', 'SUBSCRIPTIONS', 'TRAVEL', 'TAXES');

-- CreateEnum
CREATE TYPE "public"."WALLET_TYPE" AS ENUM ('CASH', 'BANK', 'CREDIT_CARD', 'DIGITAL_WALLET', 'VOUCHER');

-- CreateTable
CREATE TABLE "public"."RecurringBills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "public"."TRANSACTION_CATEGORY",
    "dueDay" INTEGER NOT NULL,
    "interval" "public"."RECURRING_INTERVAL" NOT NULL DEFAULT 'MONTHLY',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecurringBills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BillInstances" (
    "id" TEXT NOT NULL,
    "recurringBillId" TEXT NOT NULL,
    "referenceMonth" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillInstances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Wallets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "walletType" "public"."WALLET_TYPE" NOT NULL DEFAULT 'CASH',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transactions" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "billInstanceId" TEXT,
    "amount" INTEGER NOT NULL,
    "type" "public"."TransactionType" NOT NULL DEFAULT 'INCOME',
    "category" "public"."TRANSACTION_CATEGORY",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_billInstanceId_key" ON "public"."Transactions"("billInstanceId");

-- AddForeignKey
ALTER TABLE "public"."BillInstances" ADD CONSTRAINT "BillInstances_recurringBillId_fkey" FOREIGN KEY ("recurringBillId") REFERENCES "public"."RecurringBills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transactions" ADD CONSTRAINT "Transactions_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "public"."Wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transactions" ADD CONSTRAINT "Transactions_billInstanceId_fkey" FOREIGN KEY ("billInstanceId") REFERENCES "public"."BillInstances"("id") ON DELETE SET NULL ON UPDATE CASCADE;
