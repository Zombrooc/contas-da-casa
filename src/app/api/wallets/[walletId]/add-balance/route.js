import { createTransaction } from "@/lib/actions/transactions/createTransaction";
import { addWalletBalanceSchema } from "@/schemas/wallets";
import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";


export const POST = async (req, { params }) => {

  const body = await req.json();
  const { walletId } = await params;

  const validatedFields = addWalletBalanceSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({
      success: false,
      errors: {
        ...validatedFields.error.flatten().fieldErrors
      }
    })
  };

  const { amount, category } = validatedFields.data;

  const newTransaction = await createTransaction({
    walletId,
    category,
    amount: amount,
    type: 'INCOME'
  });

  revalidateTag("wallets")

  return NextResponse.json({
    success: true,
    data: {
      transaction: newTransaction.id,
      // wallet: updatedWalletAmount
    }

  })
}