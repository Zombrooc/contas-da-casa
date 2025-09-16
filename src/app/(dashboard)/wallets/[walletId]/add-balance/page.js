import { Card, CardContent } from "@/components/ui/card";
import AddBalanceForm from "@/components/wallets/addBalanceForm";

export default async function AddWalletBalance({ params }) {

  const { walletId } = await params

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card p-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6">
          <Card className="@container/card">
            <CardContent>
              <AddBalanceForm walletId={walletId} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}