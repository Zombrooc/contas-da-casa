import CreateNewBillInstanceForm from "@/components/bills/createNewBillnstanceForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUrl } from "@/lib/getUrl";

export default async function CreateBillInstancePage() {
  const billsResponse = await fetch(getUrl('/api/bills'));

  const { data } = await billsResponse.json()

  const { bills } = data

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Criar conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bills.length > 0 ? <CreateNewBillInstanceForm bills={bills} /> : "Nenhuma conta criada"}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
