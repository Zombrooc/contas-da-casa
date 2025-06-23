import { format } from "date-fns"

// Dados simulados de transações
export const mockTransactions = [
  // Receitas
  {
    id: 1,
    type: "income",
    description: "Salário",
    amount: 5000,
    category: "salario",
    date: "2024-12-01",
    wallet: "Conta Corrente",
  },
  {
    id: 2,
    type: "income",
    description: "Freelance",
    amount: 1200,
    category: "freelance",
    date: "2024-12-05",
    wallet: "Conta Corrente",
  },
  {
    id: 3,
    type: "income",
    description: "Dividendos",
    amount: 150,
    category: "investimentos",
    date: "2024-12-10",
    wallet: "Conta Corrente",
  },
  {
    id: 4,
    type: "income",
    description: "Venda produto",
    amount: 300,
    category: "vendas",
    date: "2024-12-12",
    wallet: "Dinheiro",
  },

  // Despesas
  {
    id: 5,
    type: "expense",
    description: "Supermercado",
    amount: 450,
    category: "alimentacao",
    date: "2024-12-02",
    paymentMethod: "debito",
    wallet: "Conta Corrente",
  },
  {
    id: 6,
    type: "expense",
    description: "Gasolina",
    amount: 200,
    category: "transporte",
    date: "2024-12-03",
    paymentMethod: "credito",
    wallet: "Nubank",
  },
  {
    id: 7,
    type: "expense",
    description: "Aluguel",
    amount: 1200,
    category: "moradia",
    date: "2024-12-05",
    paymentMethod: "transferencia",
    wallet: "Conta Corrente",
  },
  {
    id: 8,
    type: "expense",
    description: "Internet",
    amount: 89,
    category: "moradia",
    date: "2024-12-06",
    paymentMethod: "debito",
    wallet: "Conta Corrente",
  },
  {
    id: 9,
    type: "expense",
    description: "Academia",
    amount: 120,
    category: "saude",
    date: "2024-12-07",
    paymentMethod: "debito",
    wallet: "Conta Corrente",
  },
  {
    id: 10,
    type: "expense",
    description: "Restaurante",
    amount: 85,
    category: "alimentacao",
    date: "2024-12-08",
    paymentMethod: "credito",
    wallet: "Nubank",
  },
  {
    id: 11,
    type: "expense",
    description: "Uber",
    amount: 25,
    category: "transporte",
    date: "2024-12-09",
    paymentMethod: "credito",
    wallet: "Nubank",
  },
  {
    id: 12,
    type: "expense",
    description: "Farmácia",
    amount: 45,
    category: "saude",
    date: "2024-12-11",
    paymentMethod: "debito",
    wallet: "Conta Corrente",
  },
  {
    id: 13,
    type: "expense",
    description: "Cinema",
    amount: 60,
    category: "lazer",
    date: "2024-12-13",
    paymentMethod: "credito",
    wallet: "Nubank",
  },
  {
    id: 14,
    type: "expense",
    description: "Roupas",
    amount: 180,
    category: "vestuario",
    date: "2024-12-14",
    paymentMethod: "credito",
    wallet: "Nubank",
  },
  {
    id: 15,
    type: "expense",
    description: "Livros",
    amount: 95,
    category: "educacao",
    date: "2024-12-15",
    paymentMethod: "debito",
    wallet: "Conta Corrente",
  },
]

// Dados simulados de investimentos
export const mockInvestments = [
  {
    id: 1,
    type: "stock",
    ticker: "PETR4",
    name: "Petrobras",
    quantity: 100,
    purchasePrice: 28.5,
    currentPrice: 32.15,
    purchaseDate: "2024-01-15",
    broker: "XP",
    sector: "Petróleo",
  },
  {
    id: 2,
    type: "stock",
    ticker: "VALE3",
    name: "Vale",
    quantity: 50,
    purchasePrice: 65.2,
    currentPrice: 58.9,
    purchaseDate: "2024-02-20",
    broker: "XP",
    sector: "Mineração",
  },
  {
    id: 3,
    type: "fii",
    ticker: "HGLG11",
    name: "CSHG Logística",
    quantity: 50,
    purchasePrice: 158.5,
    currentPrice: 162.3,
    purchaseDate: "2024-03-10",
    broker: "XP",
    sector: "Logística",
  },
  {
    id: 4,
    type: "cdb",
    name: "CDB Banco Inter",
    quantity: 1,
    purchasePrice: 10000,
    currentPrice: 10850,
    purchaseDate: "2024-01-05",
    broker: "Inter",
    sector: "Renda Fixa",
  },
]

// Função para filtrar transações por data
export function filterTransactionsByDate(transactions, startDate, endDate) {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date)
    return transactionDate >= startDate && transactionDate <= endDate
  });
}

// Função para calcular estatísticas
export function calculateStats(transactions) {
  const income = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + Number(t.amount), 0)

  const expenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + Number(t.amount), 0)

  const balance = income - expenses

  return { income, expenses, balance }
}

// Função para agrupar transações por categoria
export function groupTransactionsByCategory(transactions) {

  console.log('Transactions function: ', transactions);
  const groups = transactions.reduce((acc, transaction) => {
    const category = transaction.categoryName
    if (!acc[category]) {
      acc[category] = {
        category,
        total: 0,
        count: 0,
        transactions: [],
      }
    }
    acc[category].total += Number(transaction.amount)
    acc[category].count += 1
    acc[category].transactions.push(transaction)
    return acc
  }, {})

  return Object.values(groups).sort((a, b) => b.total - a.total);
}

// Dados para gráficos
export function generateChartData(transactions, startDate, endDate) {


  const filteredTransactions = filterTransactionsByDate(transactions, startDate, endDate)

  // Dados para gráfico de linha (fluxo de caixa)
  const dailyData = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    const dateStr = format(currentDate, "yyyy-MM-dd")
    const dayTransactions = filteredTransactions.filter((t) => t.date === dateStr)

    const income = dayTransactions.filter((t) => t.type === "income").reduce((sum, t) => sum + Number(t.amount), 0)

    const expenses = dayTransactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + Number(t.amount), 0)

    dailyData.push({
      date: format(currentDate, "dd/MM"),
      receitas: income,
      despesas: expenses,
      saldo: income - expenses,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  // Dados para gráfico de pizza (categorias)
  const categoryData = groupTransactionsByCategory(filteredTransactions.filter((t) => t.type === "expense")).map((group) => {
    console.log(group)

    return {
      name: group.categoryName,
      value: group.total,
      fill: getCategoryColor(group.categoryName),
    }
  })

  console.log('categoryData: ', categoryData);
  return { dailyData, categoryData }
}

function getCategoryColor(category) {
  const colors = {
    alimentacao: "#ef4444",
    transporte: "#f97316",
    moradia: "#eab308",
    saude: "#22c55e",
    educacao: "#3b82f6",
    lazer: "#a855f7",
    vestuario: "#ec4899",
    outros: "#6b7280",
  }
  return colors[category] || "#6b7280"
}
