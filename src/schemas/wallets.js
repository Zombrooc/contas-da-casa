import { CATEGORIES } from "@/lib/getCategory";
import { z } from "zod";

const createWalletSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  amount: z.coerce
    .number()
    .min(0, "Saldo deve ser um número positivo")
    .optional(),
  walletType: z.enum(
    ["CASH", "BANK", "CREDIT_CARD", "DIGITAL_WALLET", "VOUCHER"],
    {
      required_error: "Por favor, selecione um tipo de carteira.",
    },
  ),
});

const addWalletBalanceSchema = z.object({
  amount: z.coerce.number().min(0, {
    message: "O número deve ser maior que 0.",
  }),

  category: z.enum(
    Object.keys(CATEGORIES)
      .filter((key) => CATEGORIES[key].type === "INCOME")
      .map((key) => CATEGORIES[key].key),
    {
      required_error: "A categoria da adição de valores é obrigatória.",
    },
  )
});

export { createWalletSchema, addWalletBalanceSchema };
