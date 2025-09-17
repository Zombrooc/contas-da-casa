"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { addWalletBalanceSchema } from "@/schemas/wallets";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/ENUMS";

export default function AddBalanceForm({ walletId }) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(addWalletBalanceSchema),
    defaultValues: {
      amount: "",
      category: "",
    },
  });

  async function onSubmit({ amount, category }) {
    const res = await fetch(`/api/wallets/${walletId}/add-balance`, {
      method: "POST",
      body: JSON.stringify({
        amount,
        category,
      }),
    });

    const { success, data } = await res.json();

    if (!success) {
      alert("Algo deu errado");
      form.reset();
      return;
    }

    // Do something with the successful response data
    router.push("/wallets");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.filter(({ type }) => type === "INCOME").map(
                        (category) => (
                          <SelectItem value={category.key} key={category.key}>
                            {category.value}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor da transação</FormLabel>
                  <FormControl>
                    <Input placeholder="1000" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription>*/}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Registrar</Button>
      </form>
    </Form>
  );
}
