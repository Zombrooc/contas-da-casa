"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DollarSign,
  CreditCard,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { CATEGORIES } from "@/lib/ENUMS";
import { format } from "date-fns";
// import { useSearchParams } from "next/navigation";

export default function TransactionPageClient({
  transactions,
  pagination,
  stats,
  currentFilter
}) {
  // const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(currentFilter?.searchTerm);
  const [categoryFilter, setCategoryFilter] = useState(currentFilter?.categoryFilter);
  const [typeFilter, setTypeFilter] = useState(currentFilter?.type);
  const [currentPage, setCurrentPage] = useState(pagination.currentPage);
  const [transactionList, setTransactionList] = useState(transactions);
  const [totalPages, setTotalPages] = useState(pagination.totalPages);
  const [hasNext, setHasNext] = useState(pagination.hasNext);
  const [currentParams, setCurrentParams] = useState()

  // Filtrar transações
  // const filteredTransactions = useMemo(async () => {

  useEffect(() => {
    async function updateData() {
      const params = new URLSearchParams();

      if (searchTerm) {
        params.append("searchTerm", searchTerm);
      }

      if (categoryFilter && categoryFilter !== "all") {
        params.append("categoryFilter", categoryFilter);
      }

      if (typeFilter && typeFilter !== "all") {
        params.append("type", typeFilter);
      }

      setCurrentParams(params)

      const transactionResponse = await fetch(
        `/api/transactions?${params.toString() || ""}`,
      );

      const { pagination, data } = await transactionResponse.json();

      setTransactionList(data.transactions);
      setCurrentPage(pagination.currentPage);
      setHasNext(pagination.hasNext);
      setTotalPages(pagination.totalPages);

      window.history.replaceState(
        null,
        "",
        `/transactions?${params.toString()}`
      );

    }

    updateData();
  }, [searchTerm, categoryFilter, typeFilter]);

  async function getPage(page) {

    const transactionResponse = await fetch(`/api/transactions?page=${page}&${currentParams.toString() || ""}`);

    const { pagination, data } = await transactionResponse.json();

    setTransactionList(data.transactions);
    setCurrentPage(pagination.currentPage);
    setHasNext(pagination.hasNext);
    setTotalPages(pagination.totalPages);
  }

  // Estatísticas das transações filtradas
  // const stats = useMemo(() => {
  //   const totalIncome = filteredTransactions
  //     .filter((t) => t.type === "INCOME")
  //     .reduce((sum, t) => sum + t.amount, 0);

  //   const totalExpenses = filteredTransactions
  //     .filter((t) => t.type === "EXPENSE")
  //     .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  //   return {
  //     totalIncome,
  //     totalExpenses,
  //     balance: totalIncome - totalExpenses,
  //     count: filteredTransactions.length,
  //   };
  // }, [filteredTransactions]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-muted/30">
      <main className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-muted-foreground">
                Total de Transações
              </CardDescription>
              <CardTitle className="tabular-nums">
                <p className="text-2xl font-semibold">
                  {" "}
                  {stats.transactionsCount}{" "}
                </p>
                <p className="text-sm text-muted-foreground">transações</p>
              </CardTitle>
              <CardAction>
                <Badge
                  variant="secondary"
                  className="p-2 rounded-lg bg-green-500/10"
                >
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-muted-foreground">
                Receitas
              </CardDescription>

              <CardTitle className="tabular-nums">
                <p className="text-2xl font-semibold">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stats.incomeBalance / 100)}
                </p>
                <p className="text-sm  text-green-600 dark:text-green-400">
                  entradas
                </p>
              </CardTitle>
              <CardAction>
                <Badge
                  variant="secondary"
                  className="p-2 rounded-lg bg-green-500/10"
                >
                  <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-muted-foreground">
                Total Despesas
              </CardDescription>
              <CardTitle className="tabular-nums">
                <p className="text-2xl font-semibold">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stats.expenseBalance / 100)}
                </p>
                <p className="text-sm  text-red-600 dark:text-red-400">
                  saídas
                </p>
              </CardTitle>
              <CardAction>
                <Badge
                  variant="secondary"
                  className="p-2 rounded-lg bg-green-500/10"
                >
                  <ArrowDownRight className="h-4 w-4 text-red-600 dark:text-red-400" />
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-muted-foreground">
                Balanço atual
              </CardDescription>
              <CardTitle className="tabular-nums">
                <p
                  className={`text-2xl font-semibold  ${stats.balance >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format((stats.incomeBalance - stats.expenseBalance) / 100)}
                </p>
                <p className="text-sm text-muted-foreground">diferença</p>
              </CardTitle>
              <CardAction>
                <Badge
                  variant="secondary"
                  className="p-2 rounded-lg bg-purple-500/10"
                >
                  <DollarSign className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </Badge>
              </CardAction>
            </CardHeader>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="@container/card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-foreground">
                  Filtros e Ações
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Filtre e gerencie suas transações
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className=" rounded-lg bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-muted-foreground">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar transações..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-muted-foreground">Categoria</label>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Todas as categorias" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Categorias</SelectItem>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.key} value={category.key}>
                        {category.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-muted-foreground">Tipo</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="INCOME">Receitas</SelectItem>
                    <SelectItem value="EXPENSE">Despesas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-muted-foreground">Período</label>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-lg bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Este mês
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-foreground">
              Lista de Transações
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Exibindo {transactionList.length} transações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactionList.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg  hover:cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${transaction.type === "INCOME"
                      ? "bg-green-500/10"
                      : "bg-red-500/10"
                      }`}
                  >
                    {transaction.type === "INCOME" ? (
                      <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className=" text-foreground">
                        {transaction.description}
                      </p>
                      <Badge variant="secondary" className="">
                        {CATEGORIES.find(
                          (category) => category.key === transaction.category,
                        )?.value || "S/C"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4  text-muted-foreground">
                      <span>
                        {transaction.createdAt}
                      </span>
                      <span>•</span>
                      <span>{transaction.wallet.name}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={` ${transaction.type === "INCOME"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                      }`}
                  >
                    {transaction.type === "INCOME" ? "+" : "-"}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount / 100)}
                  </div>
                  <p className=" text-muted-foreground">
                    {transaction.type === "INCOME" ? "Receita" : "Despesa"}
                  </p>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between pt-4 border-t ">
                <p className=" text-muted-foreground">
                  Página {currentPage} de {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => getPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className=" rounded-lg"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      getPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={!hasNext}
                    className=" rounded-lg"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
