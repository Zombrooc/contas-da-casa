"use client";
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Calculator, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const investmentSchema = z.object({
  type: z.string().min(1, "Selecione o tipo de investimento"),
  ticker: z.string().optional(),
  quantity: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Quantidade deve ser maior que zero",
  }),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Preço deve ser maior que zero",
  }),
  date: z.string().min(1, "Selecione a data da operação"),
  broker: z.string().optional(),
  fees: z.string().refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
    message: "Taxas devem ser um número válido",
  }),
  notes: z.string().optional(),
})

export function InvestmentForm({
  onClose
}) {
  const [calculatedTotal, setCalculatedTotal] = useState(0)
  const [netTotal, setNetTotal] = useState(0)

  const form = useForm({
    resolver: zodResolver(investmentSchema),
    defaultValues: {
      type: "",
      ticker: "",
      quantity: "",
      price: "",
      date: "",
      broker: "",
      fees: "",
      notes: "",
    },
  })

  const watchQuantity = form.watch("quantity")
  const watchPrice = form.watch("price")
  const watchFees = form.watch("fees")

  // Calcular totais automaticamente
  useEffect(() => {
    const quantity = Number(watchQuantity) || 0
    const price = Number(watchPrice) || 0
    const fees = Number(watchFees) || 0

    const total = quantity * price
    const totalWithFees = total + fees

    setCalculatedTotal(total)
    setNetTotal(totalWithFees)
  }, [watchQuantity, watchPrice, watchFees])

  const onSubmit = (data) => {
    const investmentData = {
      ...data,
      quantity: Number(data.quantity),
      price: Number(data.price),
      fees: Number(data.fees) || 0,
      total: calculatedTotal,
      netTotal: netTotal,
    }

    console.log("Investimento adicionado:", investmentData)
    onClose()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Investimento *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cdb">CDB</SelectItem>
                    <SelectItem value="stock">Ação</SelectItem>
                    <SelectItem value="fii">FII</SelectItem>
                    <SelectItem value="tesouro">Tesouro Direto</SelectItem>
                    <SelectItem value="lci">LCI</SelectItem>
                    <SelectItem value="lca">LCA</SelectItem>
                    <SelectItem value="debenture">Debênture</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="ticker"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código/Ticker</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: PETR4, HGLG11"
                    className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="1"
                    placeholder="Ex: 100"
                    className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço Unitário *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    {...field} />
                </FormControl>
                <FormMessage />
                {watchPrice && (
                  <p className="text-sm text-slate-600">
                    Preço:{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(watchPrice))}
                  </p>
                )}
              </FormItem>
            )} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data da Operação *</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="broker"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Corretora</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400">
                      <SelectValue placeholder="Selecione a corretora" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="xp">XP Investimentos</SelectItem>
                    <SelectItem value="btg">BTG Pactual</SelectItem>
                    <SelectItem value="inter">Banco Inter</SelectItem>
                    <SelectItem value="nubank">Nubank</SelectItem>
                    <SelectItem value="rico">Rico</SelectItem>
                    <SelectItem value="clear">Clear</SelectItem>
                    <SelectItem value="avenue">Avenue</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
        </div>

        <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Taxas e Corretagem</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                  {...field} />
              </FormControl>
              <FormMessage />
              {watchFees && (
                <p className="text-sm text-slate-600">
                  Taxas:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(watchFees))}
                </p>
              )}
            </FormItem>
          )} />

        {/* Cálculos automáticos */}
        {calculatedTotal > 0 && (
          <Card className="rounded-xl border-violet-100 bg-violet-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-[#9b56f7] flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Cálculos Automáticos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600">Valor Bruto</p>
                  <p className="text-lg font-bold text-slate-900">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(calculatedTotal)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total com Taxas</p>
                  <p className="text-lg font-bold text-[#9b56f7]">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(netTotal)}
                  </p>
                </div>
              </div>

              {Number(watchFees) > 0 && (
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Taxa aplicada:</strong> {((Number(watchFees) / calculatedTotal) * 100).toFixed(2)}% do valor
                    investido
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Estratégia, objetivo, ou outras informações relevantes..."
                  className="rounded-xl border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                  rows={3}
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

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
            className="flex-1 rounded-xl bg-[#9b56f7] hover:bg-[#8a4ae6] text-white">
            <LineChart className="h-4 w-4 mr-2" />
            Adicionar Investimento
          </Button>
        </div>
      </form>
    </Form>
  );
}
