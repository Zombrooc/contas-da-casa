// import { PayInstanceButton } from "@/components/bills/payButton";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { getUrl } from "@/lib/getUrl";
// import { format } from "date-fns";
// import { ptBR } from "date-fns/locale";
// import Link from "next/link";

// async function fetchData() {
//   const [billResponse, walletResponse] = await Promise.all([
//     fetch(`${getUrl("/api/bills")}`, {
//       next: {
//         tags: ["bills"],
//         revalidate: 1200,
//       },
//     }),
//     fetch(`${getUrl("/api/wallets")}`, {
//       next: {
//         tags: ["wallets", "balance"],
//         revalidate: 1200,
//       },
//     }),
//   ]);

//   const { data: billsData } = await billResponse.json();
//   const { data: walletData } = await walletResponse.json();

//   const { bills } = billsData;
//   const { wallets } = walletData;

//   return { bills: bills || [], wallets: wallets || [] };
// }

// export default async function InstacesPage() {
//   const { bills, wallets } = await fetchData();

//   return (
//     <div className="flex flex-1 flex-col ">
//       <div className="@container/main flex flex-1 flex-col gap-2">
//         <div className="grid grid-cols-2 gap-2">
//           <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
//             <h1>Contas</h1>
//             <Button asChild>
//               <Link href="/bills/create">Criar nova conta</Link>
//             </Button>
//             <ul>
//               {bills &&
//                 bills.map((bill) => (
//                   <li key={bill.id}>
//                     {" "}
//                     {bill.name} | Dia de Vencimento: {bill.dueDay}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//           <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
//             <h1>Lista de Faturas</h1>
//             <Button asChild>
//               <Link href="/bills/instances/create">Criar nova fatura</Link>
//             </Button>
//             <ul>
//               {bills &&
//                 bills.map((bill) =>
//                   bill.instances.map((instance) => (
//                     <li key={instance.id}>
//                       {new Date(instance.dueDate) < new Date() ? (
//                         <Badge variant="destructive"> Atrasada </Badge>
//                       ) : (
//                         ""
//                       )}
//                       {!instance.isPaid && !instance.paidAt ? (
//                         <Badge variant="destructive"> Não Pago </Badge>
//                       ) : (
//                         <Badge> Pago </Badge>
//                       )}{" "}
//                       {bill.name} | Vencimento:{" "}
//                       {format(new Date(instance.dueDate), "dd/MM/yyyy", {
//                         locale: ptBR,
//                       })}{" "}
//                       | Valor:
//                       {new Intl.NumberFormat("pt-BR", {
//                         style: "currency",
//                         currency: "BRL",
//                       }).format(instance.amount / 100)}
//                       {!instance.isPaid && !instance.paidAt && (
//                         <PayInstanceButton
//                           instanceId={instance.id}
//                           billName={bill.name}
//                           wallets={wallets}
//                         >
//                           {" "}
//                           Pagar{" "}
//                         </PayInstanceButton>
//                       )}
//                     </li>
//                   )),
//                 )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState } from "react"
import { Plus, Search, Filter, Calendar, AlertTriangle } from "lucide-react"
import { BillCard } from "@/components/billCard"
import { BillInstanceCard } from "@/components/billInstanceCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BillForm } from "@/components/billForm"

// Mock data
export const mockWallets = [
  {
    id: "1",
    name: "Conta Corrente",
    balance: 850000, // R$ 8,500.00 in cents
    walletType: "BANK",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    name: "Carteira Digital",
    balance: 320000, // R$ 3,200.00 in cents
    walletType: "DIGITAL_WALLET",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "3",
    name: "Cartão de Crédito",
    balance: -125000, // R$ -1,250.00 in cents (debt)
    walletType: "CREDIT_CARD",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-12-01"),
  },
]

export const mockRecurringBills = [
  {
    id: "1",
    name: "Conta de Luz",
    category: "UTILITIES",
    dueDay: 15,
    interval: "MONTHLY",
    isActive: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Internet",
    category: "UTILITIES",
    dueDay: 20,
    interval: "MONTHLY",
    isActive: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "3",
    name: "Netflix",
    category: "ENTERTAINMENT",
    dueDay: 25,
    interval: "MONTHLY",
    isActive: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "4",
    name: "Plano de Saúde",
    category: "HEALTH",
    dueDay: 10,
    interval: "MONTHLY",
    isActive: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "5",
    name: "Seguro do Carro",
    category: "TRANSPORT",
    dueDay: 5,
    interval: "MONTHLY",
    isActive: false,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-06-01"),
  },
]

export const mockBillInstances = [
  {
    id: "1",
    recurringBillId: "1",
    recurringBill: mockRecurringBills[0],
    referenceMonth: new Date("2024-12-01"),
    amount: 12000, // R$ 120.00
    dueDate: new Date("2024-12-15"),
    isPaid: true,
    paidAt: new Date("2024-12-04"),
    createdAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    recurringBillId: "2",
    recurringBill: mockRecurringBills[1],
    referenceMonth: new Date("2024-12-01"),
    amount: 8500, // R$ 85.00
    dueDate: new Date("2024-12-20"),
    isPaid: false,
    createdAt: new Date("2024-12-01"),
  },
  {
    id: "3",
    recurringBillId: "3",
    recurringBill: mockRecurringBills[2],
    referenceMonth: new Date("2024-12-01"),
    amount: 2990, // R$ 29.90
    dueDate: new Date("2024-12-25"),
    isPaid: false,
    createdAt: new Date("2024-12-01"),
  },
  {
    id: "4",
    recurringBillId: "4",
    recurringBill: mockRecurringBills[3],
    referenceMonth: new Date("2024-12-01"),
    amount: 35000, // R$ 350.00
    dueDate: new Date("2024-12-10"),
    isPaid: true,
    paidAt: new Date("2024-12-08"),
    createdAt: new Date("2024-12-01"),
  },
  {
    id: "5",
    recurringBillId: "1",
    recurringBill: mockRecurringBills[0],
    referenceMonth: new Date("2025-01-01"),
    amount: 12500, // R$ 125.00
    dueDate: new Date("2025-01-15"),
    isPaid: false,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "6",
    recurringBillId: "2",
    recurringBill: mockRecurringBills[1],
    referenceMonth: new Date("2025-01-01"),
    amount: 8500, // R$ 85.00
    dueDate: new Date("2025-01-20"),
    isPaid: false,
    createdAt: new Date("2025-01-01"),
  },
]

export const mockTransactions = [
  {
    id: "1",
    walletId: "1",
    wallet: mockWallets[0],
    amount: -8500, // R$ -85.00
    type: "EXPENSE",
    category: "FOOD",
    description: "Supermercado Extra",
    createdAt: new Date("2024-12-08"),
    updatedAt: new Date("2024-12-08"),
  },
  {
    id: "2",
    walletId: "2",
    wallet: mockWallets[1],
    amount: 500000, // R$ 5,000.00
    type: "INCOME",
    category: "SALARY",
    description: "Salário Dezembro",
    createdAt: new Date("2024-12-05"),
    updatedAt: new Date("2024-12-05"),
  },
  {
    id: "3",
    walletId: "1",
    wallet: mockWallets[0],
    amount: -4200, // R$ -42.00
    type: "EXPENSE",
    category: "TRANSPORT",
    description: "Uber",
    createdAt: new Date("2024-12-07"),
    updatedAt: new Date("2024-12-07"),
  },
  {
    id: "4",
    walletId: "3",
    wallet: mockWallets[2],
    amount: -15000, // R$ -150.00
    type: "EXPENSE",
    category: "SHOPPING",
    description: "Amazon",
    createdAt: new Date("2024-12-06"),
    updatedAt: new Date("2024-12-06"),
  },
  {
    id: "5",
    walletId: "1",
    wallet: mockWallets[0],
    amount: -12000, // R$ -120.00
    type: "EXPENSE",
    category: "UTILITIES",
    description: "Conta de Luz",
    createdAt: new Date("2024-12-04"),
    updatedAt: new Date("2024-12-04"),
  },
]

export const formatCurrency = (amountInCents) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amountInCents / 100)
}


export default function BillsPage() {
  const [recurringBills, setRecurringBills] = useState(mockRecurringBills)
  const [billInstances, setBillInstances] = useState(mockBillInstances)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingBill, setEditingBill] = useState()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  // Filter recurring bills
  const filteredRecurringBills = recurringBills.filter((bill) => {
    const matchesSearch = bill.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || bill.category === filterCategory
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && bill.isActive) ||
      (filterStatus === "inactive" && !bill.isActive)
    return matchesSearch && matchesCategory && matchesStatus
  })

  // Filter bill instances
  const today = new Date()
  const upcomingInstances = billInstances.filter((instance) => !instance.isPaid && new Date(instance.dueDate) >= today)
  const overdueInstances = billInstances.filter((instance) => !instance.isPaid && new Date(instance.dueDate) < today)
  const paidInstances = billInstances.filter((instance) => instance.isPaid)

  // Calculate totals
  const totalPending = upcomingInstances.reduce((sum, instance) => sum + instance.amount, 0)
  const totalOverdue = overdueInstances.reduce((sum, instance) => sum + instance.amount, 0)
  const totalPaidThisMonth = paidInstances
    .filter((instance) => {
      const paidDate = new Date(instance.paidAt)
      return paidDate.getMonth() === today.getMonth() && paidDate.getFullYear() === today.getFullYear()
    })
    .reduce((sum, instance) => sum + instance.amount, 0)

  const handleCreateBill = async (data) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newBill = {
      id: Date.now().toString(),
      name: data.name,
      category: data.category,
      dueDay: data.dueDay,
      interval: data.interval,
      isActive: data.isActive,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setRecurringBills([...recurringBills, newBill])
    setIsFormOpen(false)
    setIsLoading(false)
  }

  const handleEditBill = async (data) => {
    if (!editingBill) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const updatedBills = recurringBills.map((bill) =>
      bill.id === editingBill.id
        ? {
          ...bill,
          name: data.name,
          category: data.category,
          dueDay: data.dueDay,
          interval: data.interval,
          isActive: data.isActive,
          updatedAt: new Date(),
        }
        : bill,
    )

    setRecurringBills(updatedBills)
    setEditingBill(undefined)
    setIsFormOpen(false)
    setIsLoading(false)
  }

  const handleDeleteBill = async (billId) => {
    if (confirm("Tem certeza que deseja excluir esta conta recorrente?")) {
      setRecurringBills(recurringBills.filter((bill) => bill.id !== billId))
    }
  }

  const handleToggleActive = async (billId, isActive) => {
    const updatedBills = recurringBills.map((bill) =>
      bill.id === billId ? { ...bill, isActive, updatedAt: new Date() } : bill,
    )
    setRecurringBills(updatedBills)
  }

  const handleMarkAsPaid = async (instanceId, amount) => {
    const updatedInstances = billInstances.map((instance) =>
      instance.id === instanceId ? { ...instance, isPaid: true, paidAt: new Date() } : instance,
    )
    setBillInstances(updatedInstances)
  }

  const handleMarkAsUnpaid = async (instanceId) => {
    const updatedInstances = billInstances.map((instance) =>
      instance.id === instanceId ? { ...instance, isPaid: false, paidAt: undefined } : instance,
    )
    setBillInstances(updatedInstances)
  }

  const openEditForm = (bill) => {
    setEditingBill(bill)
    setIsFormOpen(true)
  }

  const openCreateForm = () => {
    setEditingBill(undefined)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setEditingBill(undefined)
  }

  return (

    <>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Contas</h1>
              <p className="text-muted-foreground">Gerencie suas contas recorrentes e faturas</p>
            </div>
            <Button onClick={openCreateForm} className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nova Conta
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Contas Pendentes</h3>
                <Calendar className="w-4 h-4 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500">{formatCurrency(totalPending)}</p>
              <p className="text-xs text-muted-foreground">{upcomingInstances.length} contas</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Contas Vencidas</h3>
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-2xl font-bold text-red-500">{formatCurrency(totalOverdue)}</p>
              <p className="text-xs text-muted-foreground">{overdueInstances.length} contas</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Pago este Mês</h3>
                <Calendar className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-green-500">{formatCurrency(totalPaidThisMonth)}</p>
              <p className="text-xs text-muted-foreground">{paidInstances.length} contas</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="instances" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="instances">Faturas</TabsTrigger>
              <TabsTrigger value="recurring">Contas Recorrentes</TabsTrigger>
            </TabsList>

            {/* Bill Instances Tab */}
            <TabsContent value="instances" className="space-y-6">

              {/* Overdue Bills */}
              {overdueInstances.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-500 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Contas Vencidas ({overdueInstances.length})
                  </h3>
                  <div className="space-y-3">
                    {overdueInstances.map((instance) => (
                      <BillInstanceCard
                        key={instance.id}
                        billInstance={instance}
                        onMarkAsPaid={handleMarkAsPaid}
                        onMarkAsUnpaid={handleMarkAsUnpaid}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Bills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Próximas Contas ({upcomingInstances.length})
                </h3>
                <div className="space-y-3">
                  {upcomingInstances.map((instance) => (
                    <BillInstanceCard
                      key={instance.id}
                      billInstance={instance}
                      onMarkAsPaid={handleMarkAsPaid}
                      onMarkAsUnpaid={handleMarkAsUnpaid}
                    />
                  ))}
                </div>
              </div>

              {/* Paid Bills */}
              {paidInstances.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-500 flex items-center">
                    Contas Pagas ({paidInstances.length})
                  </h3>
                  <div className="space-y-3">
                    {paidInstances.slice(0, 5).map((instance) => (
                      <BillInstanceCard
                        key={instance.id}
                        billInstance={instance}
                        onMarkAsPaid={handleMarkAsPaid}
                        onMarkAsUnpaid={handleMarkAsUnpaid}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Recurring Bills Tab */}
            <TabsContent value="recurring" className="space-y-6">
              {/* Filters */}

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar contas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  <SelectItem value="FOOD">Alimentação</SelectItem>
                  <SelectItem value="TRANSPORT">Transporte</SelectItem>
                  <SelectItem value="ENTERTAINMENT">Entretenimento</SelectItem>
                  <SelectItem value="UTILITIES">Utilidades</SelectItem>
                  <SelectItem value="HEALTH">Saúde</SelectItem>
                  <SelectItem value="EDUCATION">Educação</SelectItem>
                  <SelectItem value="SHOPPING">Compras</SelectItem>
                  <SelectItem value="OTHER">Outros</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                </SelectContent>
              </Select>


              {/* Recurring Bills Grid */}

              {filteredRecurringBills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecurringBills.map((bill, index) => (

                    <BillCard
                      key={index}
                      bill={bill}
                      onEdit={openEditForm}
                      onDelete={handleDeleteBill}
                      onToggleActive={handleToggleActive}
                      onClick={(bill) => {
                        console.log("Navigate to bill details:", bill.id)
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {searchTerm || filterCategory !== "all" || filterStatus !== "all"
                      ? "Nenhuma conta encontrada"
                      : "Nenhuma conta recorrente criada"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm || filterCategory !== "all" || filterStatus !== "all"
                      ? "Tente ajustar os filtros de busca"
                      : "Comece criando sua primeira conta recorrente"}
                  </p>
                  {!searchTerm && filterCategory === "all" && filterStatus === "all" && (
                    <Button onClick={openCreateForm} className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Criar Primeira Conta
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>

        </div>
      </main>
      <BillForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSubmit={editingBill ? handleEditBill : handleCreateBill}
        bill={editingBill}
        isLoading={isLoading}
      />
    </>
  )
}
