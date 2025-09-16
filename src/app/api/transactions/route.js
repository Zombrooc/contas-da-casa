import { createTransaction } from "@/lib/actions/transactions/createTransaction";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/schemas/transactions";
import { NextResponse } from "next/server";

export async function GET(req) {
  const transactions = await prisma.transactions.findMany({
    include: {
      wallet: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({
    success: true,
    data: {
      transactions,
    },
  });
}

export const POST = async (req) => {
  const body = await req.json();

  const validatedFields = createTransactionSchema.safeParse(body);

  if (!validatedFields.success) {
    console.log('Errors: ', validatedFields.error)
    return NextResponse.json({
      success: false,
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
      },
    });
  }

  let newTransactionData = {
    walletId: validatedFields.data.wallet,
    amount: validatedFields.data.amount,
    type: validatedFields.data.type,
    category: validatedFields.data.category
  }

  if (validatedFields.data.description) {
    newTransactionData.description = validatedFields.data.description
  }

  const newTransaction = await createTransaction({
    ...newTransactionData
  });

  return NextResponse.json({
    success: true,
    data: {
      transaction: newTransaction,
    },
  });
};
