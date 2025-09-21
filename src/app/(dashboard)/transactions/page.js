import { getUrl } from "@/lib/getUrl";
import TransactionPageClient from "./page-client";

async function fetchData() {
  const transactionResponse = await fetch(`${getUrl("/api/transactions")}`, {
    next: {
      tags: ["transactions", "balance"],
    },
  });

  const statsResponse = await fetch(`${getUrl("/api/stats")}`, {
    next: {
      tags: ["transactions", "balance"],
    },
  });

  const { data: statsData } = await statsResponse.json();
  const { data: transactionsData, pagination } =
    await transactionResponse.json();

  const { transactions } = transactionsData;

  return { transactions: transactions || [], pagination, stats: statsData };
}

export default async function TransactionsPage() {
  const { transactions, pagination, stats } = await fetchData();

  if (!transactions) {
    return "Nenhuma transação efetuada";
  }

  return (
    <TransactionPageClient
      transactions={transactions}
      pagination={pagination}
      stats={stats}
    />
  );
}
