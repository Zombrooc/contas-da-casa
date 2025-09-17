import { Button } from "@/components/ui/button";

import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { PlusIcon } from "lucide-react";
import { getUrl } from "@/lib/getUrl";
import CreateNewTransactionForm from "./createNewTransactionForm";

async function CreateTransactionDrawer() {
  const walletResponse = await fetch(`${getUrl("/api/wallets")}`, {
    cache: 'no-store'
  });

  const { data } = await walletResponse.json();

  const { wallets } = data;
  return (
    // <Button onClick={() => payInstance({ instanceId })}>{children}</Button>
    //
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="hidden sm:flex">
          <PlusIcon className="h-4 w-4" /> Nova Movimentação
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Crie aqui uma nova movimentação</DrawerTitle>
            <DrawerDescription>
              Cafés da manhã, presentes, pagamentos recebidos e outros.
            </DrawerDescription>
          </DrawerHeader>
          {wallets.length > 0 ? (
            <CreateNewTransactionForm wallets={wallets} />
          ) : (
            "Nenhuma carteira criada para poder criar novas transações"
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export { CreateTransactionDrawer };
