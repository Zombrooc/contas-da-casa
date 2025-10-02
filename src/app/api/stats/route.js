import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const now = new Date();
  const referenceYear = now.getFullYear();
  const referenceMonth = now.getMonth() + 1;
  const startOfMonth = new Date(referenceYear, referenceMonth - 1, 1);
  const endOfMonth = new Date(referenceYear, referenceMonth, 0, 23, 59, 59);

  const [walletAgg, transactionsCount, incomeAgg, expenseAgg] =
    await Promise.all([
      prisma.wallets.aggregate({
        _sum: { balance: true },
      }),
      prisma.transactions.count({
        where: {
          createdAt: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
        },
      }),
      prisma.transactions.aggregate({
        where: {
          type: "INCOME",
          createdAt: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
        },
        _sum: { amount: true },
      }),
      prisma.transactions.aggregate({
        where: {
          type: "EXPENSE",
          createdAt: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
        },
        _sum: { amount: true },
      }),
    ]);

  return NextResponse.json({
    success: true,
    data: {
      balance: walletAgg._sum.balance,
      incomeBalance: incomeAgg._sum.amount,
      expenseBalance: expenseAgg._sum.amount,
      transactionsCount,
    },
  });
}
