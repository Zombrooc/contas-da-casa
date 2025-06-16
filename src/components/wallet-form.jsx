"use client";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Wallet, Building2, CreditCard, PiggyBank } from "lucide-react"

const walletSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  type: z.enum(["cash", "checking", "savings", "credit"], {
    required_error: "Selecione o tipo de carteira",
  }),
  bank: z.string().optional(),
  accountNumber: z.string().optional(),
  initialBalance: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Saldo inicial deve ser um número válido",
  }),
  creditLimit: z.string().optional(),
  description: z.string().optional(),
})

export function WalletForm({
  onClose
}) {
  const [selectedType, setSelectedType] = useState("")

  const form = useForm({
    resolver: zodResolver(walletSchema),
    defaultValues: {
      name: "",
      type: undefined,
      bank: "",
      accountNumber: "",
      initialBalance: "0",
      creditLimit: "",
      description: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Carteira adicionada:", data)
    onClose()
  }

  const getWalletIcon = (type) => {
    switch (type) {
      case "cash":
        return <Wallet className="h-5 w-5" />;
      case "checking":
        return <Building2 className="h-5 w-5" />;
      case "savings":
        return <PiggyBank className="h-5 w-5" />;
      case "credit":
        return <CreditCard className="h-5 w-5" />;
      default:
        return <Wallet className="h-5 w-5" />;
    }
  }

  const getWalletColor = (type) => {
    switch (type) {
      case "cash":
        return "bg-green-100 text-green-700 border-green-200"
      case "checking":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "savings":
        return "bg-violet-100 text-[#9b56f7] border-violet-200"
      case "credit":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Carteira *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Conta Corrente Principal"
                    className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo *</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    setSelectedType(value)
                  }}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cash">Dinheiro</SelectItem>
                    <SelectItem value="checking">Conta Corrente</SelectItem>
                    <SelectItem value="savings">Poupança</SelectItem>
                    <SelectItem value="credit">Cartão de Crédito</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
        </div>

        {selectedType && selectedType !== "cash" && (
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="bank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banco/Instituição</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                        <SelectValue placeholder="Selecione o banco" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="banco-do-brasil">Banco do Brasil</SelectItem>
                      <SelectItem value="caixa">Caixa Econômica Federal</SelectItem>
                      <SelectItem value="itau">Itaú</SelectItem>
                      <SelectItem value="bradesco">Bradesco</SelectItem>
                      <SelectItem value="santander">Santander</SelectItem>
                      <SelectItem value="nubank">Nubank</SelectItem>
                      <SelectItem value="inter">Banco Inter</SelectItem>
                      <SelectItem value="c6">C6 Bank</SelectItem>
                      <SelectItem value="next">Next</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Últimos 4 dígitos</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1234"
                      maxLength={4}
                      className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="initialBalance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{selectedType === "credit" ? "Limite Disponível" : "Saldo Inicial"} *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          {selectedType === "credit" && (
            <FormField
              control={form.control}
              name="creditLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limite Total</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
          )}
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informações adicionais sobre esta carteira..."
                  className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        {/* Preview da carteira */}
        {selectedType && (
          <Card className={`rounded-xl border-2 ${getWalletColor(selectedType)}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                {getWalletIcon(selectedType)}
                Preview da Carteira
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Nome:</span>
                  <span className="font-medium">{form.watch("name") || "Nome da carteira"}</span>
                </div>
                {form.watch("bank") && (
                  <div className="flex justify-between">
                    <span className="text-sm">Banco:</span>
                    <span className="font-medium">{form.watch("bank")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm">{selectedType === "credit" ? "Limite:" : "Saldo:"}</span>
                  <span className="font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(form.watch("initialBalance")) || 0)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
            className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
            <Wallet className="h-4 w-4 mr-2" />
            Adicionar Carteira
          </Button>
        </div>
      </form>
    </Form>
  );
}
