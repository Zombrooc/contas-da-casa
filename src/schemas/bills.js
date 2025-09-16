import { z } from "zod";
import { RECURRING_INTERVAL } from "../../generated/prisma";
import { CATEGORIES } from "@/lib/getCategory";

const createBillSchema = z.object({
  name: z
    .string({
      required_error: "O nome da conta é obrigatório.",
    })
    .min(2, {
      message: "O nome da conta deve ter pelo menos 2 caracteres.",
    })
    .max(100, {
      message: "O nome da conta deve ter no máximo 100 caracteres.",
    }),
  amount: z.coerce.number({
    required_error: "O valor da conta é obrigatório.",
    invalid_type_error: "O valor da conta deve ser um número.",
  }),
  recurringInterval: z
    .enum(Object.values(RECURRING_INTERVAL), {
      required_error: "O intervalo de recorrência é obrigatório.",
    })
    .optional(),
  dueDay: z.coerce.date({
    required_error: "O dia de vencimento é obrigatório.",
  }),
  category: z.enum(
    Object.keys(CATEGORIES)
      .filter((key) => CATEGORIES[key].type === "EXPENSE")
      .map((key) => CATEGORIES[key].key),
    {
      required_error: "A categoria da conta é obrigatória.",
    },
  ),
});

const createBillInstanceSchema = z.object({
  recurringBill: z.string({
    required_error: "É necessário informar a qual conta essa fatura pertence",
  }),
  referenceMonth: z.string({
    required_error: "O mês de referência é obrigatório",
  }),
  amount: z.coerce.number(),
});

export { createBillSchema, createBillInstanceSchema };
