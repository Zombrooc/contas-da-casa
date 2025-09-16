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
import { createBillSchema } from "@/schemas/bills";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CATEGORIES } from "@/lib/getCategory";

export default function CreateNewBillForm({ defaultRecurringInterval }) {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(createBillSchema),
    defaultValues: {
      amount: "",
      category: "",
      name: "",
      dueDay: "",
      recurringInterval: "",
      category: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const res = await fetch(`/api/bills/`, {
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da conta</FormLabel>
                  <FormControl>
                    <Input placeholder="CEMIG" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription>*/}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recurringInterval"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intervalo de Recorrencia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o intervalo de cobrança" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {defaultRecurringInterval.map((interval) => (
                        <SelectItem key={interval.value} value={interval.value}>
                          {interval.label}
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
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.filter(({ type }) => type === "EXPENSE").map(
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
            {/* <FormField
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
            />*/}
            <FormField
              control={form.control}
              name="dueDay"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>

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
