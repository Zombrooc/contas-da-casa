"use client";
import {
  Banknote,
  Building2,
  CreditCard,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function WalletCard({ name, type, balance, bank, lastDigits, icon }) {
  const typeColors = {
    cash: "bg-green-50 text-green-700 border-green-200",
    checking: "bg-blue-50 text-blue-700 border-blue-200",
    savings: "bg-violet-50 text-[#9b56f7] border-violet-200",
    credit: "bg-orange-50 text-orange-700 border-orange-200",
  };

  const typeLabels = {
    cash: "Dinheiro",
    checking: "Conta Corrente",
    savings: "Poupança",
    credit: "Cartão de Crédito",
  };

  const typeIcon = {
    cash: <Wallet className="h-5 w-5" />,
    checking: <Building2 className="h-5 w-5" />,
    savings: <PiggyBank className="h-5 w-5" />,
    credit: <CreditCard className="h-5 w-5" />,
  };

  return (
    <Card className="rounded-xl border-slate-200 hover:shadow-md transition-all duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
              {typeIcon[type]}
            </div>
            <div>
              <CardTitle className="text-sm font-semibold text-slate-900">
                {name}
              </CardTitle>
              {bank && (
                <p className="text-xs text-slate-500">
                  {bank}
                  {/* {lastDigits && `•••• ${lastDigits}`} */}
                </p>
              )}
            </div>
          </div>
          <Badge variant="outline" className={`text-xs ${typeColors[type]}`}>
            {typeLabels[type]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xl font-bold text-slate-900">R$ {balance}</div>
        {type === "credit" && (
          <div className="mt-2 text-xs text-slate-500">
            Limite disponível: R$ 2.500,00
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function WalletsSection({ wallets }) {
  // const wallets = [
  //   {
  //     name: "Carteira Física",
  //     type: "cash",
  //     balance: "R$ 450,00",
  //     icon: <Wallet className="h-5 w-5" />,
  //   },
  //   {
  //     name: "Conta Corrente",
  //     type: "checking",
  //     balance: "R$ 8.750,00",
  //     bank: "Banco do Brasil",
  //     lastDigits: "1234",
  //     icon: <Building2 className="h-5 w-5" />,
  //   },
  //   {
  //     name: "Poupança",
  //     type: "savings",
  //     balance: "R$ 15.200,00",
  //     bank: "Caixa Econômica",
  //     lastDigits: "5678",
  //     icon: <PiggyBank className="h-5 w-5" />,
  //   },
  //   {
  //     name: "Nubank",
  //     type: "credit",
  //     balance: "R$ 1.250,00",
  //     bank: "Nubank",
  //     lastDigits: "9012",
  //     icon: <CreditCard className="h-5 w-5" />,
  //   },
  //   {
  //     name: "Conta Salário",
  //     type: "checking",
  //     balance: "R$ 3.420,00",
  //     bank: "Itaú",
  //     lastDigits: "3456",
  //     icon: <Banknote className="h-5 w-5" />,
  //   },
  // ];

  const totalBalance = wallets
    .filter((w) => w.type !== "credit")
    .reduce((acc, wallet) => {
      // const value = Number.parseFloat(
      //   wallet.balance.replace("R$ ", "").replace(".", "").replace(",", ".")
      // );
      return acc + Number(wallet.balance);
    }, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Minhas Carteiras</h2>
          <p className="text-sm text-slate-600">
            Gerencie suas contas e carteiras
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">Total disponível</p>
          <p className="text-2xl font-bold text-[#9b56f7]">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalBalance)}
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wallets.map((wallet, index) => (
          <WalletCard
            key={index}
            name={wallet.name}
            type={wallet.type}
            balance={wallet.balance}
            bank={wallet.bank}
            lastDigits={wallet.lastDigits}
            icon={wallet.icon}
          />
        ))}
      </div>
    </div>
  );
}
