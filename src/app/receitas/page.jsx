"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, TrendingUp } from "lucide-react"
import { DateFilterComponent } from "@/components/date-filter"
import { CategoryChart } from "@/components/charts/category-chart"
import { mockTransactions, filterTransactionsByDate, groupTransactionsByCategory } from "@/lib/mock-data"
import { useDateFilter } from "@/hooks/use-date-filter";

export default function IncomePage() {
  const { currentFilter } = useDateFilter()
  const [activeFilter, setActiveFilter] = useState(currentFilter)
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar apenas receitas
  const income = useMemo(() => {
    return mockTransactions.filter((t) => t.type === "income");
  }, [])

  // Aplicar filtros de data e busca
  const filteredIncome = useMemo(() => {
    let filtered = filterTransactionsByDate(income, activeFilter.startDate, activeFilter.endDate)

    if (searchTerm) {
      filtered = filtered.filter((income) =>
        income.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        income.category.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    return filtered
  }, [income, activeFilter, searchTerm])

  // Calcular estatísticas
  const totalIncome = useMemo(() => {
    return filteredIncome.reduce((sum, income) => sum + income.amount, 0);
  }, [filteredIncome])

  // Agrupar por categoria
  const incomeByCategory = useMemo(() => {
    return groupTransactionsByCategory(filteredIncome);
  }, [filteredIncome])

  // Dados para gráfico
  const chartData = useMemo(() => {
    return incomeByCategory.map((group) => ({
      name: group.category,
      value: group.total,
      fill: getCategoryColor(group.category),
    }));
  }, [incomeByCategory])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <div className="space-y-6">
      {/* Header da página */}
      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Receitas</h1>
          <p className="text-slate-600">Acompanhe suas fontes de renda</p>
        </div>

        <div className="flex gap-2">
          <DateFilterComponent onFilterChange={handleFilterChange} />
          <Button className="rounded-xl bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Nova receita
          </Button>
        </div>
      </div>
      {/* Cards de resumo */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total de Receitas</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalIncome)}
            </div>
            <p className="text-xs text-slate-500">{activeFilter.label}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Número de Transações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{filteredIncome.length}</div>
            <p className="text-xs text-slate-500">Receitas registradas</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Média por Transação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(filteredIncome.length > 0 ? totalIncome / filteredIncome.length : 0)}
            </div>
            <p className="text-xs text-slate-500">Valor médio</p>
          </CardContent>
        </Card>
      </div>
      {/* Gráfico e categorias */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">Receitas por Categoria</CardTitle>
            <CardDescription>Distribuição das fontes de renda</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryChart data={chartData} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">Ranking de Categorias</CardTitle>
            <CardDescription>Maiores fontes de renda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {incomeByCategory.slice(0, 6).map((category, index) => (
                <div key={category.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 capitalize">{category.category}</p>
                      <p className="text-sm text-slate-500">{category.count} transações</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(category.total)}
                    </p>
                    <p className="text-sm text-slate-500">{((category.total / totalIncome) * 100).toFixed(1)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Lista de receitas */}
      <Card className="rounded-2xl border-slate-200">
        <CardHeader>
          <div
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="text-slate-900">Lista de Receitas</CardTitle>
              <CardDescription>Todas as receitas do período selecionado</CardDescription>
            </div>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar receitas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-10 rounded-xl border-slate-200" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredIncome.map((income) => (
              <div
                key={income.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{income.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="capitalize">{income.category}</span>
                      <span>•</span>
                      <span>{income.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 text-lg">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(income.amount)}
                  </p>
                  <p className="text-sm text-slate-500">{income.wallet}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getCategoryColor(category) {
  const colors = {
    salario: "#22c55e",
    freelance: "#3b82f6",
    investimentos: "#a855f7",
    vendas: "#f97316",
    bonus: "#eab308",
    presente: "#ec4899",
    outros: "#6b7280",
  }
  return colors[category] || "#6b7280"
}
