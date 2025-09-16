"use client";

import { useState, useMemo } from "react";
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

import { CATEGORIES } from "@/lib/getCategory";
import { format } from "date-fns";

export default function TransactionPageClient({ transactions }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar transações
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        !searchTerm.trim() || // ← Se vazio, passa por todas
        transaction?.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        CATEGORIES.find((cat) => cat.key === transaction.category)
          ?.value?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      console.log("Matches Search: ", matchesSearch);
      const matchesCategory =
        categoryFilter === "all" ||
        CATEGORIES.find((cat) => cat.key === transaction.category)?.value ===
        categoryFilter;
      const matchesType =
        typeFilter === "all" || transaction.type === typeFilter;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, categoryFilter, typeFilter]);

  // Paginação
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Estatísticas das transações filtradas
  const stats = useMemo(() => {
    const totalIncome = filteredTransactions
      .filter((t) => t.type === "INCOME")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = filteredTransactions
      .filter((t) => t.type === "EXPENSE")
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
      count: filteredTransactions.length,
    };
  }, [filteredTransactions]);

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
                <p className="text-2xl font-semibold"> {stats.count} </p>
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
                  }).format(stats.totalIncome / 100)}
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
                  }).format(stats.totalExpenses / 100)}
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
                  }).format(stats.balance / 100)}
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
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 rounded-lg"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Transação
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
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.key} value={category.value}>
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
              {filteredTransactions.length} transações encontradas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {paginatedTransactions.map((transaction) => (
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
                        {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
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
                    {transaction.type === "INCOME" ? "+" : ""}
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
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-4 border-t ">
                <p className=" text-muted-foreground">
                  Página {currentPage} de {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className=" rounded-lg"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
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
