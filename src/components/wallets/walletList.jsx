import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WalletList({ wallets }) {
  if (wallets.length === 0) {
    return "Nenhum carteira cadastrada";
  }

  return (
    <>
      {wallets.length > 0 &&
        wallets.map(({ id, name, balance }) => (
          <li key={id}>
            {" "}
            {name} -{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balance / 100)}
            <Button variant="outline" asChild>
              <Link href={`/wallets/${id}/add-balance`}>
                {" "}
                Adicionar Valores{" "}
              </Link>
            </Button>
          </li>
        ))}
    </>
  );
}
