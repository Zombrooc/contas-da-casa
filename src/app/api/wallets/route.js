import { prisma } from "@/lib/prisma";

import { createWalletSchema } from "@/schemas/wallets";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();

  const validatedFields = createWalletSchema.safeParse({
    name: body.name,
    walletType: body.walletType,
    // amount: body.amount,
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    return NextResponse.json({
      errors: validatedFields.error.flatten().fieldErrors,
    }).status(400);
  }

  const { data } = validatedFields;

  const newWallet = await prisma.wallets.create({
    data: {
      name: data.name,
      balance: 0,
      walletType: data.walletType,
    },
  });

  revalidateTag("wallets");
  // Se sucesso, vai retornar { success: true, data: { name: 'Banco Inter', amount: 1000 } }
  return NextResponse.json({
    success: true,
    data: newWallet,
  });
};

export const GET = async () => {
  try {
    const wallets = await prisma.wallets.findMany({});

    return NextResponse.json({
      success: true,
      data: { wallets: wallets || [] },
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};
