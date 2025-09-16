"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
import { createBillInstanceSchema } from "@/schemas/bills";

export default function CreateNewBillInstanceForm({ bills }) {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(createBillInstanceSchema),
    defaultValues: {
      amount: "",
      recurringBill: "",
      referenceMonth: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //
    console.log("Data: ", data);
    const res = await fetch(`/api/bill-instances`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const { success } = await res.json();

    if (!success) {
      alert("Algo deu errado");
      return;
    }

    router.push("/bills");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="recurringBill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conta</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a conta dessa fatura" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {bills.map((bill) => (
                        <SelectItem key={bill.id} value={bill.id}>
                          {bill.name}
                        </SelectItem>
                      ))}
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
                  <FormLabel>Valor da conta</FormLabel>
                  <FormControl>
                    <Input placeholder="1000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceMonth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mês de Referencia</FormLabel>
                  <FormControl>
                    <Input placeholder="01, 02, 03... 12" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Criar Fatura</Button>
      </form>
    </Form>
  );
}
