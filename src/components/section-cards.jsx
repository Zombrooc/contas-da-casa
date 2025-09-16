import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export async function SectionCards() {
  const {
    _sum: { balance },
  } = await prisma.wallets.aggregate({
    _sum: {
      balance: true,
    },
  });

  const {
    _sum: { amount: incomeBalance },
  } = await prisma.transactions.aggregate({
    where: {
      type: "INCOME",
    },
    _sum: {
      amount: true,
    },
  });

  const {
    _sum: { amount: expenseBalance },
  } = await prisma.transactions.aggregate({
    where: {
      type: "EXPENSE",
    },
    _sum: {
      amount: true,
    },
  });

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total em conta</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$
            {(balance / 100).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </CardTitle>
          {/* <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction> */}
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Entrada</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$
            {((incomeBalance || 0) / 100).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </CardTitle>
          {/* <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction> */}
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Saída</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$
            {((expenseBalance || 0) / 100).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </CardTitle>
          {/* <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction> */}
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Sobra do mês</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$
            {(
              ((incomeBalance || 0) - (expenseBalance || 0)) /
              100
            ).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </CardTitle>
          {/* <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction> */}
        </CardHeader>
      </Card>
    </div>
  );
}
