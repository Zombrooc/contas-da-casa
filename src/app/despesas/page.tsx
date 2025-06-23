"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, TrendingDown } from "lucide-react";
import { DateFilterComponent } from "@/components/date-filter";
import { CategoryChart } from "@/components/charts/category-chart";
import {
  mockTransactions,
  filterTransactionsByDate,
  groupTransactionsByCategory,
} from "@/lib/mock-data";
import { useDateFilter, type DateFilter } from "@/hooks/use-date-filter";

export default function ExpensesPage() {
  const { currentFilter } = useDateFilter();
  const [activeFilter, setActiveFilter] = useState<DateFilter>(currentFilter);
  const [searchTerm, setSearchTerm] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [expensesByCategory, setExpensesByCategory] = useState([]);
  const [chartData, setChartData] = useState([]);

  // Filtrar apenas despesas
  useEffect(() => {
    const getExpenseTransactions = async () => {
      const res = await fetch(
        `/api/transactions?${new URLSearchParams({
          type: "expense",
        }).toString()}`,
        {}
      );

      const { transactions } = await res.json();

      console.log("Expense transactions: ", transactions);
      setExpenses(transactions);
      return transactions;
    };

    getExpenseTransactions();
  }, []);

  // Aplicar filtros de data e busca
  useEffect(() => {
    let filtered = filterTransactionsByDate(
      expenses,
      activeFilter.startDate,
      activeFilter.endDate
    );

    if (searchTerm) {
      filtered = filtered.filter(
        (expense) =>
          expense.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          expense.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredExpenses(filtered);
  }, [activeFilter, expenses, searchTerm]);

  const [totalExpenses, setTotalExpenses] = useState(0);
  // Calcular estatísticas
  useEffect(() => {
    const expenses = filteredExpenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0
    );

    setTotalExpenses(expenses);
  }, [filteredExpenses]);

  // Agrupar por categoria
  useEffect(() => {
    const filtered = groupTransactionsByCategory(filteredExpenses);

    setExpensesByCategory(filtered);
  }, [filteredExpenses]);

  // Dados para gráfico
  useEffect(() => {
    const filtered = expensesByCategory.map((group) => {
      console.log("Group: ", group);

      return {
        name: group.category,
        value: group.total,
        fill: getCategoryColor(group.category),
      };
    });

    setChartData(filtered);
  }, [expensesByCategory]);

  const handleFilterChange = (filter: DateFilter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="space-y-6">
      {/* Header da página */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Despesas</h1>
          <p className="text-slate-600">Gerencie e acompanhe seus gastos</p>
        </div>

        <div className="flex gap-2">
          <DateFilterComponent onFilterChange={handleFilterChange} />
          <Button className="rounded-xl bg-red-600 hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            Nova despesa
          </Button>
        </div>
      </div>

      {/* Cards de resumo */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total de Despesas
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalExpenses)}
            </div>
            <p className="text-xs text-slate-500">{activeFilter.label}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Número de Transações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {filteredExpenses.length}
            </div>
            <p className="text-xs text-slate-500">Despesas registradas</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Média por Transação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                filteredExpenses.length > 0
                  ? totalExpenses / filteredExpenses.length
                  : 0
              )}
            </div>
            <p className="text-xs text-slate-500">Valor médio</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico e categorias */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Despesas por Categoria
            </CardTitle>
            <CardDescription>Distribuição dos gastos</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryChart data={chartData} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Ranking de Categorias
            </CardTitle>
            <CardDescription>Maiores gastos por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expensesByCategory.slice(0, 6).map((category, index) => (
                <div
                  key={category.category}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 capitalize">
                        {category.category}
                      </p>
                      <p className="text-sm text-slate-500">
                        {category.count} transações
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(category.total)}
                    </p>
                    <p className="text-sm text-slate-500">
                      {((category.total / totalExpenses) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de despesas */}
      <Card className="rounded-2xl border-slate-200">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="text-slate-900">
                Lista de Despesas
              </CardTitle>
              <CardDescription>
                Todas as despesas do período selecionado
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar despesas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-10 rounded-xl border-slate-200"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {expense.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="capitalize">{expense.category}</span>
                      <span>•</span>
                      <span>{expense.date}</span>
                      {expense.paymentMethod && (
                        <>
                          <span>•</span>
                          <span className="capitalize">
                            {expense.paymentMethod}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600 text-lg">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(expense.amount)}
                  </p>
                  <p className="text-sm text-slate-500">{expense.wallet}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    alimentacao: "#ef4444",
    transporte: "#f97316",
    moradia: "#eab308",
    saude: "#22c55e",
    educacao: "#3b82f6",
    lazer: "#a855f7",
    vestuario: "#ec4899",
    outros: "#6b7280",
  };
  return colors[category] || "#6b7280";
}
