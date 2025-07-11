ALTER TABLE "transactions" DROP CONSTRAINT "transactions_parent_transaction_id_transactions_id_fk";
--> statement-breakpoint
ALTER TABLE "transactions" DROP COLUMN "parent_transaction_id";