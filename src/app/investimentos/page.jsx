"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, TrendingUp, DollarSign, PieChart } from "lucide-react"
import { CDBInvestments } from "@/components/cdb-investments"
import { StockInvestments } from "@/components/stock-investments"
import { FIIInvestments } from "@/components/fii-investments"
import { AddTransactionModal } from "@/components/add-transaction-modal"

export default function InvestmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Dados simulados para o resumo geral
  const totalInvestments = 85420.0
  const totalReturns = 6850.0
  const returnPercentage = ((totalReturns / totalInvestments) * 100).toFixed(2)

  return (
    <div className="space-y-8">
      {/* Header da página */}
      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Investimentos</h1>
          <p className="text-slate-600">Acompanhe sua carteira de investimentos</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-xl border-violet-200 hover:bg-violet-50">
            <PieChart className="h-4 w-4 mr-2" />
            Diversificação
          </Button>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-[#9b56f7] hover:bg-[#8a4ae6]">
            <Plus className="h-4 w-4 mr-2" />
            Novo investimento
          </Button>
        </div>
      </div>
      {/* Cards de resumo */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Investido</CardTitle>
            <div
              className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center text-[#9b56f7]">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalInvestments)}
            </div>
            <p className="text-xs text-slate-500 mt-1">Valor total aplicado</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Valor Atual</CardTitle>
            <div
              className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center text-[#9b56f7]">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#9b56f7]">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalInvestments + totalReturns)}
            </div>
            <p className="text-xs text-slate-500 mt-1">Valor atualizado da carteira</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Rentabilidade</CardTitle>
            <div
              className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+{returnPercentage}%</div>
            <p className="text-xs text-green-600 mt-1">
              +
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalReturns)}
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Seção CDB */}
      <CDBInvestments />
      {/* Seção Ações */}
      <StockInvestments />
      {/* Seção FIIs */}
      <FIIInvestments />
      {/* Gráfico de distribuição */}
      <Card className="rounded-2xl border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-900">Distribuição da Carteira</CardTitle>
          <CardDescription>Alocação por tipo de investimento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center">
            <p className="text-slate-500">Gráfico de distribuição da carteira</p>
          </div>
        </CardContent>
      </Card>
      {/* Modal de novo investimento */}
      <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
