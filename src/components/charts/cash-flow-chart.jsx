"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function CashFlowChart({
  data
}) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
        <YAxis
          stroke="#64748b"
          fontSize={12}
          tickFormatter={(value) =>
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(value)
          } />
        <Tooltip
          formatter={(value, name) => [
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value),
            name === "receitas" ? "Receitas" : name === "despesas" ? "Despesas" : "Saldo",
          ]}
          labelFormatter={(label) => `Data: ${label}`}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="receitas"
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: "#22c55e", strokeWidth: 2 }} />
        <Line
          type="monotone"
          dataKey="despesas"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2 }} />
        <Line
          type="monotone"
          dataKey="saldo"
          stroke="#9b56f7"
          strokeWidth={2}
          dot={{ fill: "#9b56f7", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: "#9b56f7", strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
