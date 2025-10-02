"use client";

import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function PayInstanceButton({ instanceId, billName, wallets, children }) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      wallet: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //
    const res = await fetch(`/api/bill-instances/${instanceId}/pay`, {
      method: "PUT",
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
    // <Button onClick={() => payInstance({ instanceId })}>{children}</Button>
    //
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              Escolha a cateira que usará para pagar a conta {billName}
            </DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="p-4 pb-0">
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="wallet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Carteira</FormLabel>
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
                              {wallets.map((wallet) => (
                                <SelectItem key={wallet.id} value={wallet.id}>
                                  {wallet.name} |{" "}
                                  {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                  }).format(wallet.balance / 100)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button type="submit">Pagar fatura</Button>
                  {/* <Button variant="outline">Cancel</Button> */}
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export { PayInstanceButton };
