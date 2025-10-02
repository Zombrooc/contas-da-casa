import { createTransaction } from "@/lib/actions/transactions/createTransaction";
import { CATEGORIES } from "@/lib/ENUMS";
import { faker } from "@faker-js/faker";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const incomeCategories = Object.keys(CATEGORIES)
  .filter((key) => CATEGORIES[key].type === "INCOME")
  .map((key) => CATEGORIES[key].key);

const expenseCategories = Object.keys(CATEGORIES)
  .filter((key) => CATEGORIES[key].type === "EXPENSE")
  .map((key) => CATEGORIES[key].key);

const getData = () => {
  const walletId = faker.helpers.arrayElement([
    "cmg8ehqsw00005kq0imc2jk4k",
  ]);

  const type = faker.helpers.arrayElement(["INCOME", "INCOME", "EXPENSE"]);

  const category =
    type === "INCOME"
      ? faker.helpers.arrayElement(incomeCategories)
      : faker.helpers.arrayElement(expenseCategories);

  const description = faker.finance.transactionDescription();

  const amount = faker.finance.amount({ max: 3500 });

  const createdAt = faker.date.between({
    from: new Date("2023-01-01"),
    to: new Date(),
  });

  return {
    walletId,
    type,
    category,
    description,
    amount,
    createdAt,
  };
};

export async function GET(req) {
  const total = 100000; // Ajuste para evitar sobrecarga do servidor
  const batchSize = 1000;
  for (let i = 0; i < total; i += batchSize) {
    const batch = [];
    for (let j = 0; j < batchSize && i + j < total; j++) {
      const data = getData();
      batch.push(
        createTransaction(data).then((newTransaction) => {
          console.log(
            `#${i + j} - R$ ${newTransaction.amount} | Type: ${newTransaction.type} | Category: ${newTransaction.category}`,
          );
        })
      );
    }
    await Promise.all(batch);
  }

  revalidateTag("wallet");
  revalidateTag("transactions");
  revalidateTag("stats");

  return NextResponse.json({
    success: true,
  });
}
