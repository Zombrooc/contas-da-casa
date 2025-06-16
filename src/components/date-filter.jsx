"use client";
import { useState } from "react"
import { CalendarDays, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useDateFilter } from "@/hooks/use-date-filter";
import { format } from "date-fns"

export function DateFilterComponent({
  onFilterChange
}) {
  const { currentFilter, availableFilters, setFilter, setCustomFilter } = useDateFilter()
  const [customStartDate, setCustomStartDate] = useState("")
  const [customEndDate, setCustomEndDate] = useState("")
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false)

  const handleFilterSelect = (filter) => {
    setFilter(filter)
    onFilterChange(filter)
  }

  const handleCustomFilter = () => {
    if (customStartDate && customEndDate) {
      const startDate = new Date(customStartDate)
      const endDate = new Date(customEndDate)
      setCustomFilter(startDate, endDate)
      onFilterChange({
        type: "custom",
        startDate,
        endDate,
        label: `${format(startDate, "dd/MM/yyyy")} - ${format(endDate, "dd/MM/yyyy")}`,
      })
      setIsCustomDialogOpen(false)
    }
  }

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-xl border-violet-200 hover:bg-violet-50">
            <CalendarDays className="h-4 w-4 mr-2" />
            {currentFilter.label}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rounded-xl border-violet-100">
          <DropdownMenuLabel>Período</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {availableFilters.map((filter) => (
            <DropdownMenuItem
              key={filter.type}
              onClick={() => handleFilterSelect(filter)}
              className="rounded-lg hover:bg-violet-50">
              {filter.label}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <Dialog open={isCustomDialogOpen} onOpenChange={setIsCustomDialogOpen}>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="rounded-lg hover:bg-violet-50">
                Período personalizado
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Período Personalizado</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="start-date">Data inicial</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="rounded-xl border-slate-200" />
                </div>
                <div>
                  <Label htmlFor="end-date">Data final</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="rounded-xl border-slate-200" />
                </div>
                <Button
                  onClick={handleCustomFilter}
                  className="w-full rounded-xl bg-[#9b56f7] hover:bg-[#8a4ae6]"
                  disabled={!customStartDate || !customEndDate}>
                  Aplicar Filtro
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-xl border-violet-200 hover:bg-violet-50">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 rounded-xl border-violet-100">
          <DropdownMenuLabel>Filtros Avançados</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Todas as categorias</DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Apenas receitas</DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Apenas despesas</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Valores acima de R$ 100</DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Valores acima de R$ 500</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
