"use client";

import { useState, useMemo, useEffect, use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { WalletsSection } from "@/components/wallets-section";
import { DateFilterComponent } from "@/components/date-filter";
import { CashFlowChart } from "@/components/charts/cash-flow-chart";
import { CategoryChart } from "@/components/charts/category-chart";
import {
  mockTransactions,
  filterTransactionsByDate,
  calculateStats,
  generateChartData,
} from "@/lib/mock-data";
import { useDateFilter } from "@/hooks/use-date-filter";

export default function HomePage() {
  const { currentFilter } = useDateFilter();
  const [activeFilter, setActiveFilter] = useState(currentFilter);

  const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getWallets = async () => {
      const res = await fetch("/api/wallets");

      const { wallets: newWallets } = await res.json();

      console.log("Wallets: ", newWallets);

      setWallets(newWallets);
    };

    const transactionData = async () => {
      const res = await fetch("/api/transactions");

      console.log("Chegou aqui ");

      const { transactions } = await res.json();

      console.log("Transactions aqui: ", transactions);

      // Atualizar mockTransactions com os dados reais
      setFilteredTransactions(
        filterTransactionsByDate(
          transactions,
          activeFilter.startDate,
          activeFilter.endDate
        )
      );

      const chartData = generateChartData(
        transactions,
        activeFilter.startDate,
        activeFilter.endDate
      );

      console.log(chartData);

      setChartData(chartData);
      setTransactions(transactions);
    };

    getWallets();
    transactionData();
  }, []);

  useEffect(() => {
    console.log("Filter change", activeFilter);
    const newFilteredTransactions = filterTransactionsByDate(
      transactions,
      activeFilter.startDate,
      activeFilter.endDate
    );

    const chartData = generateChartData(
      transactions,
      activeFilter.startDate,
      activeFilter.endDate
    );

    console.log(chartData);

    setChartData(chartData);

    setFilteredTransactions(newFilteredTransactions);
  }, [activeFilter, transactions]);

  const stats = useMemo(() => {
    return calculateStats(filteredTransactions);
  }, [filteredTransactions]);

  // const filteredTransactions = useMemo(() => {
  //   return filterTransactionsByDate(
  //     transactions,
  //     activeFilter.startDate,
  //     activeFilter.endDate
  //   );
  // }, [activeFilter]);

  // Calcular estatísticas

  // useEffect(() => {
  //   const chartData = generateChartData(
  //     transactions,
  //     activeFilter.startDate,
  //     activeFilter.endDate
  //   );

  //   console.log(chartData);

  //   setChartData(chartData);
  // }, [activeFilter]);
  // Gerar dados para gráficos
  // const chartData = useMemo(() => {
  //   return generateChartData(
  //     transactions,
  //     activeFilter.startDate,
  //     activeFilter.endDate
  //   );
  // }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="space-y-6">
      {/* Header da página */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
          <p className="text-slate-600">
            Acompanhe suas finanças em tempo real
          </p>
        </div>

        <div className="flex gap-2">
          <DateFilterComponent onFilterChange={handleFilterChange} />
          <Button className="rounded-xl bg-[#9b56f7] hover:bg-[#8a4ae6]">
            <Plus className="h-4 w-4 mr-2" />
            Nova transação
          </Button>
        </div>
      </div>
      {/* Cards de saldo - agora com dados filtrados */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Saldo do Período
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold mb-2 ${
                stats.balance >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(stats.balance)}
            </div>
            <p className="text-xs text-slate-500">{activeFilter.label}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Receitas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 mb-2">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(stats.income)}
            </div>
            <p className="text-xs text-slate-500">
              {filteredTransactions.filter((t) => t.type === "income").length}{" "}
              transações
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Despesas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 mb-2">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(stats.expenses)}
            </div>
            <p className="text-xs text-slate-500">
              {filteredTransactions.filter((t) => t.type === "expense").length}{" "}
              transações
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Economia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#9b56f7] mb-2">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Math.max(0, stats.balance))}
            </div>
            <p className="text-xs text-slate-500">
              {stats.balance > 0 ? "Superávit" : "Déficit"} no período
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Seção de Carteiras */}
      <WalletsSection wallets={wallets} />
      {/* Gráficos funcionais */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">Fluxo de Caixa</CardTitle>
            <CardDescription>
              Receitas e despesas do período selecionado
            </CardDescription>
          </CardHeader>
          <CardContent>
            {chartData && <CashFlowChart data={chartData.dailyData} />}
          </CardContent>
        </Card>

        <Card className="col-span-3 rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Categorias de Despesas
            </CardTitle>
            <CardDescription>
              Distribuição de gastos por categoria
            </CardDescription>
          </CardHeader>
          <CardContent>
            {chartData?.categoryData && (
              <CategoryChart data={chartData.categoryData} />
            )}
          </CardContent>
        </Card>
      </div>
      {/* Transações recentes */}
      <Card className="rounded-2xl border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-900">
            Transações do Período
          </CardTitle>
          <CardDescription>Movimentações financeiras filtradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredTransactions.slice(0, 10).map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      transaction.type === "income"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-slate-900">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-slate-500">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                </div>
                <div
                  className={`font-bold ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
