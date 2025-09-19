import { WalletList } from "@/components/wallets/walletList";
import { getUrl } from "@/lib/getUrl";

async function fetchData() {
  const response = await fetch(`${getUrl("/api/wallets")}`, {
    next: {
      tags: ["wallets", "balance"],
      revalidate: 1200,
    },
  });

  const { success, data } = await response.json();

  const { wallets } = data;

  return { success, wallets };
}

export default async function WalletPage() {
  const { success, wallets } = await fetchData();

  if (!wallets) {
    return "Nenhuma carteira criada";
  }

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 p-4 pt-0 md:gap-6 md:py-4">
          <h1>Lista de Carteiras</h1>
          <ul>
            {success ? (
              <WalletList wallets={wallets} />
            ) : (
              <h1> Nenhum carteira criada até o momento</h1>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
