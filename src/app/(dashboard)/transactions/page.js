import { getUrl } from "@/lib/getUrl";
import TransactionPageClient from "./page-client";

export default async function TransactionsPage() {
  const transactionResponse = await fetch(getUrl("/api/transactions"));

  const { data } = await transactionResponse.json();

  const { transactions } = data;

  if (transactions.length <= 0) {
    return (<h1> Nenhuma transação disponível</h1>)
  }

  return <TransactionPageClient transactions={transactions} />;
}
