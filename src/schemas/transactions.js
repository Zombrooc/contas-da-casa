import { CATEGORIES } from "@/lib/getCategory";
import { z } from "zod";

const createTransactionSchema = z.object({
  amount: z.coerce.number().min(0, {
    message: "O número deve ser maior que 0.",
  }),
  category: z.enum(
    Object.keys(CATEGORIES)
      .map((key) => CATEGORIES[key].key),
    {
      required_error: "A categoria da conta é obrigatória.",
    },
  ),
  description: z
    .string()
    .max(100, { message: "No máximo 100 caracteres" }).optional(),

  wallet: z.string().min(1, { message: "Por favor, selecione uma carteira." }),
  type: z.enum(["INCOME", "EXPENSE"], {
    required_error: "Por favor, selecione um tipo de transação.",
  }),
});

export { createTransactionSchema };
