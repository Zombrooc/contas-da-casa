import { getUrl } from "@/lib/getUrl";
import TransactionPageClient from "./page-client";

async function fetchData({ searchParams }) {
  // Criar objeto de parâmetros de forma segura para servidor
  const params = new Map();

  // Paginação (valores padrão)
  params.set("page", searchParams?.page ?? "1");
  params.set("items", searchParams?.items ?? "10");
  params.set("type", searchParams?.type ?? "all");
  params.set("categoryFilter", searchParams?.categoryFilter ?? "all");


  // Filtro por período
  if (searchParams?.from && searchParams?.to) {
    params.set("from", searchParams.from);
    params.set("to", searchParams.to);
  } else if (searchParams?.referenceMonth && searchParams?.referenceYear) {
    params.set("referenceMonth", searchParams.referenceMonth);
    params.set("referenceYear", searchParams.referenceYear);
  }

  // Filtros de transação

  if (searchParams?.minAmount) {
    params.set("minAmount", searchParams.minAmount);
  }
  if (searchParams?.maxAmount) {
    params.set("maxAmount", searchParams.maxAmount);
  }
  if (searchParams?.searchTerm) {
    params.set("searchTerm", searchParams.searchTerm);
  }

  // Construir query string de forma segura
  const queryString = Array.from(params.entries())
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");

  console.log(queryString)
  // Fazer as chamadas à API com os parâmetros
  const transactionResponse = await fetch(
    `${getUrl(`/api/transactions${queryString ? `?${queryString}` : ""}`)}`,
    {
      next: {
        tags: ["transactions", "balance"],
      },
    }
  );

  const statsResponse = await fetch(
    `${getUrl("/api/stats")}`,
    {
      next: {
        tags: ["transactions", "balance"],
      },
    }
  );

  const { data: statsData } = await statsResponse.json();
  const { data: transactionsData, pagination } = await transactionResponse.json();

  const { transactions } = transactionsData;

  return {
    transactions: transactions || [],
    pagination,
    stats: statsData,
    currentFilters: Object.fromEntries(params.entries()),
  };
}

export default async function TransactionsPage({ searchParams }) {
  const { transactions, pagination, stats, currentFilters } = await fetchData({
    searchParams: await searchParams,
  });

  console.log('Current Filters:', currentFilters);
  if (!transactions) {
    return "Nenhuma transação efetuada";
  }

  return (
    <TransactionPageClient
      transactions={transactions}
      pagination={pagination}
      stats={stats}
      currentFilters={currentFilters}
    />
  );
}
