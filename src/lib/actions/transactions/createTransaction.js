'use server'

import { prisma } from "@/lib/prisma";
import { format } from 'date-fns'

import { CATEGORIES } from '@/lib/ENUMS'

const createTransaction = async ({
  walletId,
  category,
  amount,
  type,
  billId = null,
  description,
}) => {

  let query = {
    wallet: {
      connect: {
        id: walletId,
      },
    },
    category,
    amount: amount * 100,
    type,
    description: description || `${CATEGORIES.find(key => category === key.key).value} | ${format(new Date(), 'MM/yyyy')}`
  };

  if (billId) {
    query.billId = billId;
  }

  const newTransaction = await prisma.transactions.create({ data: query });

  if (type === 'EXPENSE') {

    await prisma.wallets.update({
      where: {
        id: walletId
      },
      data: {
        balance: {
          decrement: amount * 100
        }
      }
    })
  } else {
    await prisma.wallets.update({
      where: {
        id: walletId
      },
      data: {
        balance: { increment: amount * 100 }
      }
    })
  }

  return newTransaction;
};

export { createTransaction };
