import { ChartAreaInteractive } from "@/components/chart-area-interactive";
// import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { Badge } from "@/components/ui/badge";
import { ptBR } from "date-fns/locale";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { format } from "date-fns";
import { getUrl } from "@/lib/getUrl";
import { CATEGORIES } from "@/lib/ENUMS";

async function fetchData() {
  const [statsResponse, transactionResponse] = await Promise.all([
    fetch(`${getUrl(`/api/stats`)}`, {
      next: {
        tags: ["stats", "balance", "transactions"],
        revalidate: 60,
      },
    }),
    fetch(`${getUrl("/api/transactions")}`, {
      next: {
        tags: ["transactions", "balance", "stats"],
        revalidate: 60,
      },
    }),
  ]);

  const { data: statsData } = await statsResponse.json();
  const { data: transactionsData } = await transactionResponse.json();

  const { balance, incomeBalance, expenseBalance } = statsData;
  const { transactions } = transactionsData;

  return {
    stats: {
      balance,
      incomeBalance,
      expenseBalance,
    },
    transactions,
  };
}

export default async function HomePage() {
  const { stats, transactions } = await fetchData();

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards stats={stats} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <div className="px-4 lg:px-6">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-foreground">
              Lista de Transações
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {transactions.length} transações encontradas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg  hover:cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      transaction.type === "INCOME"
                        ? "bg-green-500/10"
                        : "bg-red-500/10"
                    }`}
                  >
                    {transaction.type === "INCOME" ? (
                      <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="">
                        <>
                          {CATEGORIES.find(
                            (category) => category.key === transaction.category,
                          )?.value || "S/C"}
                        </>
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4  text-muted-foreground">
                      <span>{`${format(
                        new Date(transaction.createdAt),
                        "iiii '-' dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR },
                      )}`}</span>
                      <span>•</span>
                      <span>{transaction.wallet.name}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={` ${
                      transaction.type === "INCOME"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "INCOME" ? "+" : ""}R${" "}
                    {(transaction.amount / 100).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <p className=" text-muted-foreground">
                    {transaction.type === "INCOME" ? "Receita" : "Despesa"}
                  </p>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {/* {totalPages > 1 && (
                <div className="flex items-center justify-between pt-4 border-t ">
                  <p className=" text-muted-foreground">
                    Página {currentPage} de {totalPages}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage === 1}
                      className=" rounded-lg"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className=" rounded-lg"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )} */}
          </CardContent>
        </Card>
        {/* <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">
                Transações do Período
              </CardTitle>
              <CardDescription>
                Movimentações financeiras filtradas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions &&
                  transactions.map((transaction, index) => {
                    console.log(`Transaction ${index}: `, transaction);

                    return (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              transaction.type === "INCOME"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          <div>
                            <p className="text-sm text-slate-500">
                              {transaction.category || "S/C"} •{" "}
                              {transaction.createdAt.toLocaleDateString(
                                "pt-BR"
                              )}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`font-bold ${
                            transaction.type === "INCOME"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "INCOME" ? "+" : "-"}
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(transaction.amount / 100)}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card> */}
        {/* <DataTable data={data} /> */}
      </div>
    </div>
  );
}
