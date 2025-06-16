"use client";
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Calendar, DollarSign, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const incomeSchema = z.object({
  description: z.string().min(2, "Descrição deve ter pelo menos 2 caracteres"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Valor deve ser maior que zero",
  }),
  category: z.string().min(1, "Selecione uma categoria"),
  source: z.string().optional(),
  notes: z.string().optional(),
  receiveDate: z.string().optional(),
  frequency: z.string().optional(),
  endDate: z.string().optional(),
})

export function IncomeForm({
  onClose
}) {
  const [isFutureTransaction, setIsFutureTransaction] = useState(false)
  const [isRecurring, setIsRecurring] = useState(false)
  const [totalRecurringAmount, setTotalRecurringAmount] = useState(0)

  const form = useForm({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      description: "",
      amount: "",
      category: "",
      source: "",
      notes: "",
      receiveDate: "",
      frequency: "",
      endDate: "",
    },
  })

  const watchAmount = form.watch("amount")
  const watchFrequency = form.watch("frequency")
  const watchReceiveDate = form.watch("receiveDate")
  const watchEndDate = form.watch("endDate")

  // Calcular total de receitas recorrentes
  useEffect(() => {
    if (isRecurring && watchAmount && watchFrequency && watchReceiveDate && watchEndDate) {
      const amount = Number(watchAmount)
      const startDate = new Date(watchReceiveDate)
      const endDate = new Date(watchEndDate)

      if (startDate < endDate) {
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        let occurrences = 0
        switch (watchFrequency) {
          case "weekly":
            occurrences = Math.floor(diffDays / 7) + 1
            break
          case "monthly":
            occurrences = Math.floor(diffDays / 30) + 1
            break
          case "quarterly":
            occurrences = Math.floor(diffDays / 90) + 1
            break
          case "yearly":
            occurrences = Math.floor(diffDays / 365) + 1
            break
        }

        setTotalRecurringAmount(amount * occurrences)
      }
    } else {
      setTotalRecurringAmount(0)
    }
  }, [watchAmount, watchFrequency, watchReceiveDate, watchEndDate, isRecurring])

  const onSubmit = (data) => {
    const incomeData = {
      ...data,
      amount: Number(data.amount),
      isFuture: isFutureTransaction,
      isRecurring,
      totalRecurringAmount: isRecurring ? totalRecurringAmount : Number(data.amount),
    }

    console.log("Receita adicionada:", incomeData)
    onClose()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Salário, Freelance"
                    className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                    {...field} />
                </FormControl>
                <FormMessage />
                {watchAmount && (
                  <p className="text-sm text-slate-600">
                    Valor:{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(watchAmount))}
                  </p>
                )}
              </FormItem>
            )} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="salario">Salário</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="investimentos">Rendimentos</SelectItem>
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="bonus">Bônus</SelectItem>
                    <SelectItem value="presente">Presente</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fonte</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Empresa XYZ"
                    className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Informações adicionais sobre esta receita..."
                  className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                  rows={3}
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        {/* Opções de agendamento */}
        <Card className="rounded-xl border-green-100 bg-green-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-green-700 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Opções de Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Recebimento Futuro</Label>
                <p className="text-xs text-slate-600">Agendar para uma data específica</p>
              </div>
              <Switch checked={isFutureTransaction} onCheckedChange={setIsFutureTransaction} />
            </div>

            {isFutureTransaction && (
              <FormField
                control={form.control}
                name="receiveDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Recebimento</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            )}

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Receita Recorrente</Label>
                <p className="text-xs text-slate-600">Repetir automaticamente</p>
              </div>
              <Switch
                checked={isRecurring}
                onCheckedChange={setIsRecurring}
                disabled={!isFutureTransaction} />
            </div>

            {isRecurring && isFutureTransaction && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequência</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400">
                              <SelectValue placeholder="Repetir a cada..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weekly">Semanal</SelectItem>
                            <SelectItem value="monthly">Mensal</SelectItem>
                            <SelectItem value="quarterly">Trimestral</SelectItem>
                            <SelectItem value="yearly">Anual</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Repetir até</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="rounded-xl border-slate-200 focus:border-green-400 focus:ring-green-400"
                            {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>

                {totalRecurringAmount > 0 && (
                  <Alert className="border-green-200 bg-green-50">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Total estimado:</strong>{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalRecurringAmount)}
                      <br />
                      <span className="text-xs text-slate-600">Baseado na frequência e período selecionados</span>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1 rounded-xl border-slate-200 hover:bg-slate-50">
            Cancelar
          </Button>
          <Button
            type="submit"
            className="flex-1 rounded-xl bg-green-600 hover:bg-green-700 text-white">
            <DollarSign className="h-4 w-4 mr-2" />
            Adicionar Receita
          </Button>
        </div>
      </form>
    </Form>
  );
}
