"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"

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


export function BillForm({ isOpen, onClose, onSubmit, bill, isLoading }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(recurringBillSchema),
    defaultValues: bill
      ? {
        name: bill.name,
        category: bill.category,
        dueDay: bill.dueDay,
        interval: bill.interval,
        isActive: bill.isActive,
      }
      : {
        name: "",
        category: "UTILITIES",
        dueDay: 1,
        interval: "MONTHLY",
        isActive: true,
      },
  })

  const category = watch("category")
  const interval = watch("interval")
  const isActive = watch("isActive")

  const categories = [
    { value: "FOOD", label: "Alimentação" },
    { value: "TRANSPORT", label: "Transporte" },
    { value: "ENTERTAINMENT", label: "Entretenimento" },
    { value: "UTILITIES", label: "Utilidades" },
    { value: "HEALTH", label: "Saúde" },
    { value: "EDUCATION", label: "Educação" },
    { value: "SHOPPING", label: "Compras" },
    { value: "OTHER", label: "Outros" },
  ]

  const intervals = [
    { value: "DAILY", label: "Diário" },
    { value: "WEEKLY", label: "Semanal" },
    { value: "MONTHLY", label: "Mensal" },
    { value: "YEARLY", label: "Anual" },
  ]

  const handleFormSubmit = (data) => {
    onSubmit(data)
    reset()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {bill ? "Editar Conta Recorrente" : "Nova Conta Recorrente"}
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form>
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Conta</Label>
            <Input
              id="name"
              placeholder="Ex: Conta de Luz, Internet, Netflix"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger className={errors.category ? "border-destructive" : ""}>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <div className="flex items-center space-x-2">
                      <span>{getCategoryIcon(cat.value)}</span>
                      <span>{cat.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dueDay">Dia do Vencimento</Label>
              <Input
                id="dueDay"
                type="number"
                min="1"
                max="31"
                placeholder="15"
                {...register("dueDay", { valueAsNumber: true })}
                className={errors.dueDay ? "border-destructive" : ""}
              />
              {errors.dueDay && <p className="text-sm text-destructive">{errors.dueDay.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="interval">Frequência</Label>
              <Select value={interval} onValueChange={(value) => setValue("interval", value)}>
                <SelectTrigger className={errors.interval ? "border-destructive" : ""}>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {intervals.map((int) => (
                    <SelectItem key={int.value} value={int.value}>
                      {int.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interval && <p className="text-sm text-destructive">{errors.interval.message}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="isActive">Conta Ativa</Label>
              <p className="text-sm text-muted-foreground">Contas ativas geram faturas automaticamente</p>
            </div>
            <Switch id="isActive" checked={isActive} onCheckedChange={(checked) => setValue("isActive", checked)} />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Salvando..." : bill ? "Atualizar" : "Criar Conta"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
