import { prisma } from "@/lib/prisma";
import { createBillInstanceSchema } from "@/schemas/bills";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

async function POST(req) {
  const body = await req.json();

  console.log("Body: ", body);

  const validatedFields = createBillInstanceSchema.safeParse(body);

  console.log(validatedFields);
  if (!validatedFields.success) {
    return NextResponse.json({
      success: false,
      data: {
        errors: validatedFields.error.flatten().fieldErrors,
      },
    });
  }

  const { data } = validatedFields;

  const bill = await prisma.recurringBills.findUnique({
    where: {
      id: data.recurringBill,
    },
  });

  const query = {
    recurringBillId: data.recurringBill,
    referenceMonth: new Date(
      new Date().getFullYear(),
      data.referenceMonth - 1,
      1,
    ),
    dueDate: new Date(
      new Date().getFullYear(),
      data.referenceMonth - 1,
      bill.dueDay,
    ),
    amount: data.amount * 100,
  };

  const newBillInstance = await prisma.billInstances.create({
    data: query,
  });

  revalidateTag("bills");

  return NextResponse.json({
    success: true,
    data: {
      billInstance: newBillInstance,
    },
  });
}

export { POST };
