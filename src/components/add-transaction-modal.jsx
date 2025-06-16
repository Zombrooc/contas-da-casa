"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingDown, TrendingUp, LineChart, Wallet } from "lucide-react"
import { ExpenseForm } from "./expense-form"
import { IncomeForm } from "./income-form"
import { InvestmentForm } from "./investment-form"
import { WalletForm } from "./wallet-form"

export function AddTransactionModal({
  isOpen,
  onClose
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">Adicionar Transação</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="expense" className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-xl bg-slate-100">
            <TabsTrigger
              value="expense"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-red-100 data-[state=active]:text-red-700">
              <TrendingDown className="h-4 w-4" />
              Despesas
            </TabsTrigger>
            <TabsTrigger
              value="income"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              <TrendingUp className="h-4 w-4" />
              Receitas
            </TabsTrigger>
            <TabsTrigger
              value="investment"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-violet-100 data-[state=active]:text-[#9b56f7]">
              <LineChart className="h-4 w-4" />
              Investimentos
            </TabsTrigger>
            <TabsTrigger
              value="wallet"
              className="flex items-center gap-2 rounded-lg data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              <Wallet className="h-4 w-4" />
              Carteiras
            </TabsTrigger>
          </TabsList>

          <TabsContent value="expense" className="mt-6">
            <ExpenseForm onClose={onClose} />
          </TabsContent>

          <TabsContent value="income" className="mt-6">
            <IncomeForm onClose={onClose} />
          </TabsContent>

          <TabsContent value="investment" className="mt-6">
            <InvestmentForm onClose={onClose} />
          </TabsContent>

          <TabsContent value="wallet" className="mt-6">
            <WalletForm onClose={onClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
