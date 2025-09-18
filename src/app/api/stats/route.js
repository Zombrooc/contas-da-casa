import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {

  const {
    _sum: { balance },
  } = await prisma.wallets.aggregate({
    _sum: {
      balance: true,
    },
  });

  const now = new Date();
  const referenceYear = now.getFullYear();
  const referenceMonth = now.getMonth() + 1;

  const {
    _sum: { amount: incomeBalance },
  } = await prisma.transactions.aggregate({
    where: {
      type: "INCOME",
      createdAt: {
        gte: new Date(referenceYear, referenceMonth - 1, 1),
        lte: new Date(referenceYear, referenceMonth, 0, 23, 59, 59),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const {
    _sum: { amount: expenseBalance },
  } = await prisma.transactions.aggregate({
    where: {
      type: "EXPENSE",
      createdAt: {
        gte: new Date(referenceYear, referenceMonth - 1, 1),
        lte: new Date(referenceYear, referenceMonth, 0, 23, 59, 59),
      },
    },
    _sum: {
      amount: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: {
      balance,
      incomeBalance,
      expenseBalance
    }
  })
}