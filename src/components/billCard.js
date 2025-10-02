"use client"

import { MoreHorizontal, Calendar, Edit, Trash2, Pause, Play } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const getWalletTypeIcon = (type) => {
  const icons = {
    CASH: "💵",
    BANK: "🏦",
    CREDIT_CARD: "💳",
    DIGITAL_WALLET: "📱",
    VOUCHER: "🎫",
  }
  return icons[type] || "💳"
}

export const getCategoryName = (category) => {
  const names = {
    FOOD: "Alimentação",
    TRANSPORT: "Transporte",
    ENTERTAINMENT: "Entretenimento",
    UTILITIES: "Utilidades",
    HEALTH: "Saúde",
    EDUCATION: "Educação",
    SHOPPING: "Compras",
    SALARY: "Salário",
    FREELANCE: "Freelance",
    INVESTMENT: "Investimento",
    GIFT: "Presente",
    OTHER: "Outros",
  }
  return names[category] || category
}

export const getIntervalName = (interval) => {
  const names = {
    DAILY: "Diário",
    WEEKLY: "Semanal",
    MONTHLY: "Mensal",
    YEARLY: "Anual",
  }
  return names[interval] || interval
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

export function BillCard({ bill, onEdit, onDelete, onToggleActive, onClick }) {
  const getCategoryColor = (category) => {
    const colors = {
      FOOD: "from-orange-500/20 to-red-500/20",
      TRANSPORT: "from-blue-500/20 to-cyan-500/20",
      ENTERTAINMENT: "from-purple-500/20 to-pink-500/20",
      UTILITIES: "from-yellow-500/20 to-orange-500/20",
      HEALTH: "from-green-500/20 to-emerald-500/20",
      EDUCATION: "from-indigo-500/20 to-blue-500/20",
      SHOPPING: "from-pink-500/20 to-rose-500/20",
      OTHER: "from-gray-500/20 to-slate-500/20",
    }
    return colors[category] || "from-gray-500/20 to-slate-500/20"
  }

  return (
    <>
      <Card
        className={`relative overflow-hidden border-border/50 hover:border-border transition-all cursor-pointer ${!bill.isActive ? "opacity-60" : ""
          }`}
        onClick={() => onClick?.(bill)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(bill.category)} opacity-50`} />
        <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getCategoryIcon(bill.category)}</span>
            <div>
              <h3 className="font-semibold text-card-foreground">{bill.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {getCategoryName(bill.category)}
                </Badge>
                <Badge variant={bill.isActive ? "default" : "secondary"} className="text-xs">
                  {bill.isActive ? "Ativo" : "Inativo"}
                </Badge>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation()
                  onEdit?.(bill)
                }}
              >
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleActive?.(bill.id, !bill.isActive)
                }}
              >
                {bill.isActive ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Ativar
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete?.(bill.id)
                }}
                className="text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Vencimento</span>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold text-card-foreground">
              Dia {bill.dueDay} • {getIntervalName(bill.interval)}
            </p>
            <p className="text-xs text-muted-foreground">
              Criado em {new Date(bill.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
