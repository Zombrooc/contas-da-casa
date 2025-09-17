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

  const {
    _sum: { amount: incomeBalance },
  } = await prisma.transactions.aggregate({
    where: {
      type: "INCOME",
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