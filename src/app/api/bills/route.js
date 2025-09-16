import { prisma } from "@/lib/prisma";
import { createBillSchema } from "@/schemas/bills";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const validatedFields = createBillSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({
      success: false,
      data: {
        errors: validatedFields.error.flatten().fieldErrors,
      },
    });
  }

  const { data } = validatedFields;

  let query = {
    name: data.name,
    category: data.category,
  };

  if (data.recurringInterval) {
    query.dueDay = new Date(data.dueDay).getDate();
    query.interval = data.recurringInterval;
  }

  const newBill = await prisma.recurringBills.create({
    data: query,
  });

  console.log("New Bills: ", newBill);

  if (!newBill) {
    return NextResponse.json({
      success: false,
      data: {
        errors: ["Erro ao criar a conta."],
      },
    });
  }

  revalidateTag("bills");

  return NextResponse.json({
    success: true,
    data: newBill,
  });
}

export async function GET(req) {
  const bills = await prisma.recurringBills.findMany({
    include: {
      instances: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: {
      bills: bills || [],
    },
  });
}
