"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function CDBInvestments() {
  const cdbInvestments = [
    {
      bank: "Banco Inter",
      type: "CDB Pós-fixado",
      investedAmount: 10000,
      currentValue: 10850,
      rate: "110% CDI",
      maturityDate: "15/08/2025",
      daysToMaturity: 180,
    },
    {
      bank: "Nubank",
      type: "CDB Pré-fixado",
      investedAmount: 5000,
      currentValue: 5320,
      rate: "12,5% a.a.",
      maturityDate: "22/12/2024",
      daysToMaturity: 45,
    },
    {
      bank: "BTG Pactual",
      type: "CDB Híbrido",
      investedAmount: 15000,
      currentValue: 16200,
      rate: "IPCA + 6,2%",
      maturityDate: "10/03/2026",
      daysToMaturity: 420,
    },
  ]

  const totalInvested = cdbInvestments.reduce((acc, inv) => acc + inv.investedAmount, 0)
  const totalCurrent = cdbInvestments.reduce((acc, inv) => acc + inv.currentValue, 0)
  const totalReturn = totalCurrent - totalInvested
  const returnPercentage = ((totalReturn / totalInvested) * 100).toFixed(2)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">CDB - Certificado de Depósito Bancário</h3>
          <p className="text-sm text-slate-600">Investimentos em renda fixa</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Rentabilidade Total</p>
          <p className="text-xl font-bold text-[#9b56f7]">+{returnPercentage}%</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cdbInvestments.map((investment, index) => (
          <Card
            key={index}
            className="rounded-xl border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-slate-900">{investment.bank}</CardTitle>
                    <p className="text-xs text-slate-500">{investment.type}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                  {investment.rate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Investido</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(investment.investedAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Valor Atual</span>
                <span className="font-bold text-[#9b56f7]">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(investment.currentValue)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1 text-slate-600">
                  <Calendar className="h-3 w-3" />
                  <span>Vencimento</span>
                </div>
                <span className="text-slate-900">{investment.maturityDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">Dias restantes</span>
                <span className="text-slate-900">{investment.daysToMaturity} dias</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card
        className="rounded-xl border-slate-200 bg-gradient-to-r from-blue-50 to-violet-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-slate-600">Total Investido</p>
              <p className="text-xl font-bold text-slate-900">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalInvested)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Valor Atual</p>
              <p className="text-xl font-bold text-[#9b56f7]">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalCurrent)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Lucro</p>
              <p className="text-xl font-bold text-green-600">
                +
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalReturn)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
