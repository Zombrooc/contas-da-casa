import { Skeleton } from "@/components/ui/skeleton";

export default function SectionCardsLoading() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=skeleton]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Skeleton className="@container/skeleton w-full h-32" />
      <Skeleton className="@container/skeleton w-full h-32" />
      <Skeleton className="@container/skeleton w-full h-32" />
      <Skeleton className="@container/skeleton w-full h-32" />
    </div>
  );
}
