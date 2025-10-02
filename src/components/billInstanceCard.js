"use client"

import { CheckCircle, AlertTriangle, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { formatCurrency, getCategoryIcon } from "@/lib/mock-data"
export const formatCurrency = (amountInCents) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amountInCents / 100)
}

export const getCategoryIcon = (category) => {
  const icons = {
    FOOD: "🍽️",
    TRANSPORT: "🚗",
    ENTERTAINMENT: "🎬",
    UTILITIES: "⚡",
    HEALTH: "🏥",
    EDUCATION: "📚",
    SHOPPING: "🛍️",
    SALARY: "💰",
    FREELANCE: "💼",
    INVESTMENT: "📈",
    GIFT: "🎁",
    OTHER: "📋",
  }
  return icons[category] || "📋"
}

export function BillInstanceCard({ billInstance, onMarkAsPaid, onMarkAsUnpaid }) {
  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getBillStatus = () => {
    if (billInstance.isPaid) return { status: "paid", color: "bg-green-500", text: "Pago", icon: CheckCircle }

    const daysUntilDue = getDaysUntilDue(billInstance.dueDate)
    if (daysUntilDue < 0) return { status: "overdue", color: "bg-red-500", text: "Vencido", icon: AlertTriangle }
    if (daysUntilDue <= 3) return { status: "urgent", color: "bg-yellow-500", text: "Urgente", icon: AlertTriangle }
    return { status: "pending", color: "bg-blue-500", text: "Pendente", icon: Clock }
  }

  const billStatus = getBillStatus()
  const daysUntilDue = getDaysUntilDue(billInstance.dueDate)
  const StatusIcon = billStatus.icon

  return (
    <Card className="border-border/50 hover:border-border transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <span className="text-2xl">{getCategoryIcon(billInstance.recurringBill.category)}</span>
              <StatusIcon
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${billInstance.isPaid
                  ? "text-green-500"
                  : daysUntilDue < 0
                    ? "text-red-500"
                    : daysUntilDue <= 3
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
              />
            </div>
            <div>
              <h4 className="font-medium text-card-foreground">{billInstance.recurringBill.name}</h4>
              <p className="text-sm text-muted-foreground">
                Vencimento: {new Date(billInstance.dueDate).toLocaleDateString("pt-BR")}
                {!billInstance.isPaid && (
                  <span className="ml-2">
                    ({daysUntilDue > 0 ? `${daysUntilDue} dias` : `${Math.abs(daysUntilDue)} dias atraso`})
                  </span>
                )}
              </p>
              {billInstance.isPaid && billInstance.paidAt && (
                <p className="text-xs text-green-600">
                  Pago em {new Date(billInstance.paidAt).toLocaleDateString("pt-BR")}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="font-semibold text-card-foreground">{formatCurrency(billInstance.amount)}</p>
              <Badge variant="secondary" className={`${billStatus.color} text-white text-xs`}>
                {billStatus.text}
              </Badge>
            </div>
            {!billInstance.isPaid ? (
              <Button
                size="sm"
                onClick={() => onMarkAsPaid?.(billInstance.id, billInstance.amount)}
                className="bg-green-600 hover:bg-green-700"
              >
                <DollarSign className="w-4 h-4 mr-1" />
                Pagar
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={() => onMarkAsUnpaid?.(billInstance.id)}>
                Desfazer
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
