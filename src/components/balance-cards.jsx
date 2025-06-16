"use client";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function BalanceCard({
  title,
  value,
  change,
  changeType,
  icon
}) {
  const changeColor = {
    positive: "text-[#9b56f7]",
    negative: "text-red-600",
    neutral: "text-slate-600",
  }[changeType]

  const changeBg = {
    positive: "bg-violet-50",
    negative: "bg-red-50",
    neutral: "bg-slate-50",
  }[changeType]

  return (
    <Card
      className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        <div
          className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center text-[#9b56f7]">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900 mb-2">{value}</div>
        <div
          className={`flex items-center text-sm ${changeBg} ${changeColor} px-2 py-1 rounded-lg w-fit`}>
          {changeType === "positive" && <ArrowUpIcon className="h-3 w-3 mr-1" />}
          {changeType === "negative" && <ArrowDownIcon className="h-3 w-3 mr-1" />}
          <span className="font-medium">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function BalanceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <BalanceCard
        title="Saldo Total"
        value="R$ 12.450,00"
        change="+12.5% este mês"
        changeType="positive"
        icon={<DollarSign className="h-4 w-4" />} />
      <BalanceCard
        title="Receitas"
        value="R$ 8.200,00"
        change="+8.2% este mês"
        changeType="positive"
        icon={<TrendingUp className="h-4 w-4" />} />
      <BalanceCard
        title="Despesas"
        value="R$ 3.750,00"
        change="-2.1% este mês"
        changeType="negative"
        icon={<ArrowDownIcon className="h-4 w-4" />} />
      <BalanceCard
        title="Economia"
        value="R$ 4.450,00"
        change="+18.7% este mês"
        changeType="positive"
        icon={<TrendingUp className="h-4 w-4" />} />
    </div>
  );
}
