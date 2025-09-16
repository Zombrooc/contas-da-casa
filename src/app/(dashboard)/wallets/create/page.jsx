"use client";

import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { createWalletSchema } from "@/schemas/wallets";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateWalletPage() {
  const form = useForm({
    resolver: zodResolver(createWalletSchema),
    defaultValues: {
      name: "",
      // amount: 0,
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data: ", data);

    const { name, walletType } = data;

    const result = await fetch("/api/wallets", {
      method: "POST",
      body: JSON.stringify({ name, walletType }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result?.errors) {
      for (const [field, messages] of Object.entries(result.errors)) {
        form.setError(field, { message: messages.join(", ") });
      }
    } else {
      redirect("/wallets");
    }
  };

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
          <h2 className="text-lg font-medium">Criar nova carteira</h2>
          {/* <Card className="@container/card">
            <CardHeader>
              <h2 className="text-lg font-medium">Criar nova carteira</h2>
            </CardHeader>
            <CardContent> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Carteira</FormLabel>
                        <FormControl>
                          <Input placeholder="Banco Inter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="walletType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Carteira</FormLabel>
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
                            <SelectItem value="CASH">Dinheiro</SelectItem>
                            <SelectItem value="BANK">Banco</SelectItem>
                            <SelectItem value="CREDIT_CARD">
                              Cartão de Crédito
                            </SelectItem>
                            <SelectItem value="DIGITAL_WALLET">
                              Carteira Digital
                            </SelectItem>
                            <SelectItem value="VOUCHER">VR</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <div className="grid gap-3">
                  <Label htmlFor="amount">Saldo</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1000"
                    {...register("amount")}
                  />
                  {errors.amount && (
                    <p className="text-red-500">{errors.amount.message}</p>
                  )}
                </div>*/}
                <Button type="submit">Criar carteira</Button>
              </div>
            </form>
          </Form>
          {/* </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
