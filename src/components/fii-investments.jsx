"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, TrendingDown } from "lucide-react"

export function FIIInvestments() {
  const fiiInvestments = [
    {
      ticker: "HGLG11",
      fundName: "CSHG Logística",
      quantity: 50,
      averagePrice: 158.5,
      currentPrice: 162.3,
      sector: "Logística",
      dividendYield: 8.2,
      lastDividend: 1.15,
      change: 3.8,
      changePercent: 2.4,
    },
    {
      ticker: "XPML11",
      fundName: "XP Malls",
      quantity: 80,
      averagePrice: 95.2,
      currentPrice: 89.75,
      sector: "Shopping Centers",
      dividendYield: 9.5,
      lastDividend: 0.85,
      change: -5.45,
      changePercent: -5.73,
    },
    {
      ticker: "BCFF11",
      fundName: "BTG Pactual Corporate",
      quantity: 100,
      averagePrice: 85.4,
      currentPrice: 88.9,
      sector: "Corporativo",
      dividendYield: 7.8,
      lastDividend: 0.72,
      change: 3.5,
      changePercent: 4.1,
    },
    {
      ticker: "KNRI11",
      fundName: "Kinea Renda Imobiliária",
      quantity: 60,
      averagePrice: 142.8,
      currentPrice: 138.2,
      sector: "Híbrido",
      dividendYield: 8.9,
      lastDividend: 1.05,
      change: -4.6,
      changePercent: -3.22,
    },
  ]

  const totalInvested = fiiInvestments.reduce((acc, fii) => acc + fii.quantity * fii.averagePrice, 0)
  const totalCurrent = fiiInvestments.reduce((acc, fii) => acc + fii.quantity * fii.currentPrice, 0)
  const totalReturn = totalCurrent - totalInvested
  const returnPercentage = ((totalReturn / totalInvested) * 100).toFixed(2)
  const averageDividendYield = (
    fiiInvestments.reduce((acc, fii) => acc + fii.dividendYield, 0) / fiiInvestments.length
  ).toFixed(1)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">FIIs - Fundos de Investimento Imobiliário</h3>
          <p className="text-sm text-slate-600">Investimentos em renda passiva imobiliária</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Dividend Yield Médio</p>
          <p className="text-xl font-bold text-[#9b56f7]">{averageDividendYield}%</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {fiiInvestments.map((fii, index) => (
          <Card
            key={index}
            className="rounded-xl border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-slate-900">{fii.ticker}</CardTitle>
                    <p className="text-xs text-slate-500">{fii.fundName}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                  {fii.sector}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-600">Quantidade</p>
                  <p className="font-medium">{fii.quantity} cotas</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Preço Médio</p>
                  <p className="font-medium">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(fii.averagePrice)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-600">Preço Atual</p>
                  <p className="font-bold text-[#9b56f7]">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(fii.currentPrice)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Valor Total</p>
                  <p className="font-bold text-slate-900">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(fii.quantity * fii.currentPrice)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-600">Dividend Yield</p>
                  <p className="font-bold text-green-600">{fii.dividendYield}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Último Dividendo</p>
                  <p className="font-medium text-green-600">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(fii.lastDividend)}
                  </p>
                </div>
              </div>

              <div
                className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="text-sm text-slate-600">Variação</span>
                <div
                  className={`flex items-center gap-1 ${fii.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {fii.changePercent >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  <span className="text-sm font-medium">
                    {fii.changePercent >= 0 ? "+" : ""}
                    {fii.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card
        className="rounded-xl border-slate-200 bg-gradient-to-r from-orange-50 to-violet-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-4 gap-4 text-center">
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
              <p className="text-sm text-slate-600">Resultado</p>
              <p
                className={`text-xl font-bold ${totalReturn >= 0 ? "text-green-600" : "text-red-600"}`}>
                {totalReturn >= 0 ? "+" : ""}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalReturn)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Renda Mensal Est.</p>
              <p className="text-xl font-bold text-green-600">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format((totalCurrent * (Number.parseFloat(averageDividendYield) / 100)) / 12)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
