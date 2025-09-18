import { createTransaction } from "@/lib/actions/transactions/createTransaction";
import { CATEGORIES } from "@/lib/ENUMS";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

const incomeCategories = Object.keys(CATEGORIES)
  .filter((key) => CATEGORIES[key].type === 'INCOME')
  .map((key) => CATEGORIES[key].key)

const expenseCategories = Object.keys(CATEGORIES)
  .filter((key) => CATEGORIES[key].type === 'EXPENSE')
  .map((key) => CATEGORIES[key].key)

const getData = () => {
  const walletId = faker.helpers.arrayElement(['cmfpkz4sz0000ta2gkasynqg9', 'cmfpkzj620001ta2gj0ktkc2b']);

  const type = faker.helpers.arrayElement(['INCOME', 'INCOME', 'EXPENSE']);

  const category = type === 'INCOME' ? faker.helpers.arrayElement(incomeCategories) : faker.helpers.arrayElement(expenseCategories);

  const description = faker.finance.transactionDescription()

  const amount = faker.finance.amount()

  const createdAt = faker.date.between({ from: new Date('2023-01-01'), to: new Date() })

  return {
    walletId,
    type,
    category,
    description,
    amount,
    createdAt
  }

}

export async function GET(req) {

  for (let i = 0; i <= 10000; i++) {

    const {
      walletId,
      category,
      type,
      amount,
      description,
      createdAt
    } = await getData()

    const newTransaction = await createTransaction({
      walletId,
      category,
      type,
      amount,
      description,
      createdAt
    });

    console.log(`#${i} - R$ ${newTransaction.amount} | Type: ${newTransaction.type} | Category: ${newTransaction.category}`)
  };

  return NextResponse.json({
    success: true
  })
}