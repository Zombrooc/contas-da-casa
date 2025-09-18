import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const rawData = await prisma.transactions.groupBy({
    by: ["createdAt", "type"],
    _sum: {
      amount: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const grouped = {};

  rawData.forEach((row) => {
    console.log(row);
    const day = row.createdAt.toISOString().split("T")[0];
    if (!grouped[day]) {
      grouped[day] = { income: 0, expense: 0 };
    }
    if (row.type === "INCOME") {
      grouped[day].income += row._sum.amount ?? 0;
    } else if (row.type === "EXPENSE") {
      grouped[day].expense += row._sum.amount ?? 0;
    }
  });

  console.log("Grouped: ", grouped);
  const aggregatedData = Object.entries(grouped).map(([date, values]) => ({
    date,
    income: values.income / 100,
    expense: values.expense / 100,
  }));

  return NextResponse.json({
    success: true,
    data: {
      aggregatedData: aggregatedData,
    },
  });
}
