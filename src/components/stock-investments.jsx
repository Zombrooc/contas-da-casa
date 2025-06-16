"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Building } from "lucide-react"

export function StockInvestments() {
  const stockInvestments = [
    {
      ticker: "PETR4",
      companyName: "Petrobras",
      quantity: 100,
      averagePrice: 28.5,
      currentPrice: 32.15,
      sector: "Petróleo e Gás",
      change: 3.65,
      changePercent: 12.81,
    },
    {
      ticker: "VALE3",
      companyName: "Vale",
      quantity: 50,
      averagePrice: 65.2,
      currentPrice: 58.9,
      sector: "Mineração",
      change: -6.3,
      changePercent: -9.66,
    },
    {
      ticker: "ITUB4",
      companyName: "Itaú Unibanco",
      quantity: 200,
      averagePrice: 25.8,
      currentPrice: 28.45,
      sector: "Bancos",
      change: 2.65,
      changePercent: 10.27,
    },
    {
      ticker: "BBDC4",
      companyName: "Bradesco",
      quantity: 150,
      averagePrice: 18.9,
      currentPrice: 16.75,
      sector: "Bancos",
      change: -2.15,
      changePercent: -11.38,
    },
    {
      ticker: "WEGE3",
      companyName: "WEG",
      quantity: 80,
      averagePrice: 42.3,
      currentPrice: 45.8,
      sector: "Máquinas e Equipamentos",
      change: 3.5,
      changePercent: 8.27,
    },
  ]

  const totalInvested = stockInvestments.reduce((acc, stock) => acc + stock.quantity * stock.averagePrice, 0)
  const totalCurrent = stockInvestments.reduce((acc, stock) => acc + stock.quantity * stock.currentPrice, 0)
  const totalReturn = totalCurrent - totalInvested
  const returnPercentage = ((totalReturn / totalInvested) * 100).toFixed(2)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Ações - Bolsa de Valores (B3)</h3>
          <p className="text-sm text-slate-600">Investimentos em renda variável</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Rentabilidade Total</p>
          <p
            className={`text-xl font-bold ${Number.parseFloat(returnPercentage) >= 0 ? "text-green-600" : "text-red-600"}`}>
            {Number.parseFloat(returnPercentage) >= 0 ? "+" : ""}
            {returnPercentage}%
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stockInvestments.map((stock, index) => (
          <Card
            key={index}
            className="rounded-xl border-slate-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-slate-900">{stock.ticker}</CardTitle>
                    <p className="text-xs text-slate-500">{stock.companyName}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs bg-slate-50 text-slate-700 border-slate-200">
                  {stock.sector}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Quantidade</span>
                <span className="font-medium">{stock.quantity} cotas</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Preço Médio</span>
                <span className="font-medium">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stock.averagePrice)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Preço Atual</span>
                <span className="font-bold text-[#9b56f7]">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stock.currentPrice)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Valor Total</span>
                <span className="font-bold text-slate-900">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(stock.quantity * stock.currentPrice)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Variação</span>
                <div
                  className={`flex items-center gap-1 ${stock.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {stock.changePercent >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  <span className="text-sm font-medium">
                    {stock.changePercent >= 0 ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card
        className="rounded-xl border-slate-200 bg-gradient-to-r from-green-50 to-violet-50">
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
