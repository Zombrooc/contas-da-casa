import { PayInstanceButton } from "@/components/bills/payButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getUrl } from "@/lib/getUrl";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

async function fetchData() {
  const [billResponse, walletResponse] = await Promise.all([
    fetch(`${getUrl("/api/bills")}`, {
      next: {
        tags: ["bills"],
        revalidate: 60,
      },
    }),
    fetch(`${getUrl("/api/wallets")}`, {
      next: {
        tags: ["wallets", "balance"],
        revalidate: 60,
      },
    }),
  ]);

  const { data: billsData } = await billResponse.json();
  const { data: walletData } = await walletResponse.json();

  const { bills } = billsData;
  const { wallets } = walletData;

  return { bills: bills || [], wallets: wallets || [] };
}

export default async function InstacesPage() {
  const { bills, wallets } = await fetchData();

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
            <h1>Contas</h1>
            <Button asChild>
              <Link href="/bills/create">Criar nova conta</Link>
            </Button>
            <ul>
              {bills &&
                bills.map((bill) => (
                  <li key={bill.id}>
                    {" "}
                    {bill.name} | Dia de Vencimento: {bill.dueDay}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
            <h1>Lista de Faturas</h1>
            <Button asChild>
              <Link href="/bills/instances/create">Criar nova fatura</Link>
            </Button>
            <ul>
              {bills &&
                bills.map((bill) =>
                  bill.instances.map((instance) => (
                    <li key={instance.id}>
                      {new Date(instance.dueDate) < new Date() ? (
                        <Badge variant="destructive"> Atrasada </Badge>
                      ) : (
                        ""
                      )}
                      {!instance.isPaid && !instance.paidAt ? (
                        <Badge variant="destructive"> Não Pago </Badge>
                      ) : (
                        <Badge> Pago </Badge>
                      )}{" "}
                      {bill.name} | Vencimento:{" "}
                      {format(new Date(instance.dueDate), "dd/MM/yyyy", {
                        locale: ptBR,
                      })}{" "}
                      | Valor:
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(instance.amount / 100)}
                      {!instance.isPaid && !instance.paidAt && (
                        <PayInstanceButton
                          instanceId={instance.id}
                          billName={bill.name}
                          wallets={wallets}
                        >
                          {" "}
                          Pagar{" "}
                        </PayInstanceButton>
                      )}
                    </li>
                  )),
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
