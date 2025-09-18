import { createTransaction } from "@/lib/actions/transactions/createTransaction";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/schemas/transactions";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req) {

  const searchParams = req.nextUrl.searchParams

  const filter = Object.fromEntries(searchParams)

  const {
    from,
    to,
    referenceMonth,
    referenceYear,
    categoryIds,
    type,
    minAmount,
    maxAmount,
  } = filter

  const hasRange = from || to
  const hasReference = referenceMonth && referenceYear

  if (hasRange && hasReference) {
    return NextResponse.json({
      success: false,
      error: ["Use apenas intervalo (from/to) OU mês/ano de referência, nunca ambos."]
    })
  }

  const where = {}

  if (hasRange) {
    where.date = {
      ...(from ? { gte: new Date(from) } : {}),
      ...(to ? { lte: new Date(to) } : {}),
    }
  }

  if (hasReference) {
    const start = new Date(referenceYear, referenceMonth - 1, 1)
    const end = new Date(referenceYear, referenceMonth, 0, 23, 59, 59)

    where.createdAt = {
      gte: start,
      lte: end,
    }
  }

  if (!hasReference && !hasRange) {
    const now = new Date();
    const referenceYear = now.getFullYear();
    const referenceMonth = now.getMonth() + 1;
    const start = new Date(referenceYear, referenceMonth - 1, 1);
    const end = new Date(referenceYear, referenceMonth, 0, 23, 59, 59);

    console.log('Chegou aqui sem range e sem referencia', referenceMonth, referenceYear)
    where.createdAt = {
      gte: start,
      lte: end,
    }
  }

  if (categoryIds?.length) {
    where.categoryId = { in: categoryIds }
  }

  if (type) {
    where.type = type
  }

  if (minAmount || maxAmount) {
    where.amount = {
      ...(minAmount ? { gte: minAmount } : {}),
      ...(maxAmount ? { lte: maxAmount } : {}),
    }
  }

  const transactions = await prisma.transactions.findMany({
    where,
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
      transactions: transactions || [],
    },
  });
}

export const POST = async (req) => {
  const body = await req.json();

  const validatedFields = createTransactionSchema.safeParse(body);

  if (!validatedFields.success) {
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
    category: validatedFields.data.category,
  };

  if (validatedFields.data.description) {
    newTransactionData.description = validatedFields.data.description;
  }

  const newTransaction = await createTransaction({
    ...newTransactionData,
  });

  revalidateTag("transactions");
  revalidateTag("stats");
  revalidateTag("balance");

  return NextResponse.json({
    success: true,
    data: {
      transaction: newTransaction,
    },
  });
};
