import { getUrl } from "@/lib/getUrl";
import TransactionPageClient from "./page-client";

async function fetchData() {
  const transactionResponse = await fetch(`${getUrl("/api/transactions")}`, {
    cache: 'no-store'
  });

  const { data } = await transactionResponse.json();

  const { transactions } = data;

  return { transactions: transactions || [] }
}

export default async function TransactionsPage() {

  const { transactions } = await fetchData();

  if (!transactions) {
    return 'Nenhuma transação efetuada'
  }

  return (<TransactionPageClient transactions={transactions} />)
}
