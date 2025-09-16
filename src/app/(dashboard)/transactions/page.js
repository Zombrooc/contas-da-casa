import { getUrl } from "@/lib/getUrl";
import TransactionPageClient from "./page-client";

export default async function TransactionsPage() {
  const transactionResponse = await fetch(`${getUrl("/api/transactions")}`);

  const { data } = await transactionResponse.json();

  const { transactions } = data;

  return <TransactionPageClient transactions={transactions} />;
}
