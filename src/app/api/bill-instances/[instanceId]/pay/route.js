import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

async function PUT(req, { params }) {
  const { instanceId } = await params;

  const { wallet: walletId } = await req.json();

  try {
    await prisma.$transaction(async (tx) => {
      const instance = await tx.billInstances.findUnique({
        where: {
          id: instanceId,
        },
      });

      const recurringBill = await tx.recurringBills.findUnique({
        where: {
          id: instance.recurringBillId,
        },
      });

      const { balance } = await tx.wallets.findUnique({
        where: {
          id: walletId,
        },
        select: {
          balance: true,
        },
      });

      if (balance <= instance.amount) {
        throw new Error("INSUFICIENT_BALANCE");
      }

      const newBalance = balance - instance.amount;

      await tx.wallets.update({
        where: {
          id: walletId,
        },
        data: {
          balance: newBalance,
        },
      });

      const newTransaction = await tx.transactions.create({
        data: {
          walletId: walletId,
          billInstanceId: instanceId,
          amount: instance.amount,
          type: "EXPENSE",
          category: recurringBill.category,
        },
      });

      await tx.billInstances.update({
        where: {
          id: instanceId,
        },
        data: {
          isPaid: true,
          paidAt: new Date(),
        },
      });
    });

    revalidateTag("stats");
    revalidateTag("balance");

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      errors: err.message,
    });
  }
}

export { PUT };
