export const CATEGORIES = [
  { key: "SALARY", value: "Salário", type: "INCOME" },
  { key: "FREELANCE", value: "Freelance", type: "INCOME" },
  { key: "INVESTMENTS", value: "Investimentos", type: "INCOME" },
  { key: "GIFTS", value: "Presentes", type: "INCOME" },
  { key: "RENTAL_INCOME", value: "Aluguel Recebido", type: "INCOME" },
  { key: "BONUS", value: "Bônus", type: "INCOME" },
  { key: "REIMBURSEMENT", value: "Reembolso", type: "INCOME" },
  { key: "OTHER_INCOME", value: "Outras Receitas", type: "INCOME" },

  { key: "HOUSING", value: "Moradia", type: "EXPENSE" },
  { key: "UTILITIES", value: "Contas Fixas", type: "EXPENSE" },
  { key: "GROCERIES", value: "Supermercado", type: "EXPENSE" },
  { key: "BAKERY", value: "Padaria", type: "EXPENSE" },
  { key: "MARKET", value: "Feira/Mercado", type: "EXPENSE" },
  { key: "PHARMACY", value: "Farmácia", type: "EXPENSE" },
  { key: "HEALTHCARE", value: "Saúde", type: "EXPENSE" },
  { key: "TRANSPORTATION", value: "Transporte", type: "EXPENSE" },
  { key: "FUEL", value: "Combustível", type: "EXPENSE" },
  { key: "EDUCATION", value: "Educação", type: "EXPENSE" },
  { key: "ENTERTAINMENT", value: "Lazer", type: "EXPENSE" },
  { key: "RESTAURANT", value: "Restaurante", type: "EXPENSE" },
  { key: "CLOTHING", value: "Vestuário", type: "EXPENSE" },
  { key: "INSURANCE", value: "Seguro", type: "EXPENSE" },
  { key: "SUBSCRIPTIONS", value: "Assinaturas", type: "EXPENSE" },
  { key: "TRAVEL", value: "Viagem", type: "EXPENSE" },
  { key: "TAXES", value: "Impostos", type: "EXPENSE" },
  { key: "DEBT_PAYMENT", value: "Pagamento de Dívidas", type: "EXPENSE" },
  { key: "OTHER_EXPENSE", value: "Outras Despesas", type: "EXPENSE" },
];

export const getCategory = (key) => {
  const category = CATEGORIES.find((item) => item.key === key);
  return category ? category.value : null;
};
