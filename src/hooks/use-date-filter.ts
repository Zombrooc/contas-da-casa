"use client"

import { useState, useMemo } from "react"
import { startOfMonth, endOfMonth, startOfYear, endOfYear, subMonths, subYears } from "date-fns"

export type DateFilterType = "this-month" | "last-month" | "this-year" | "last-year" | "custom"

export interface DateFilter {
  type: DateFilterType
  startDate: Date
  endDate: Date
  label: string
}

export function useDateFilter() {
  const [currentFilter, setCurrentFilter] = useState<DateFilter>({
    type: "this-month",
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
    label: "Este mês",
  })

  const availableFilters: DateFilter[] = useMemo(() => {
    const now = new Date()

    return [
      {
        type: "this-month",
        startDate: startOfMonth(now),
        endDate: endOfMonth(now),
        label: "Este mês",
      },
      {
        type: "last-month",
        startDate: startOfMonth(subMonths(now, 1)),
        endDate: endOfMonth(subMonths(now, 1)),
        label: "Mês passado",
      },
      {
        type: "this-year",
        startDate: startOfYear(now),
        endDate: endOfYear(now),
        label: "Este ano",
      },
      {
        type: "last-year",
        startDate: startOfYear(subYears(now, 1)),
        endDate: endOfYear(subYears(now, 1)),
        label: "Ano passado",
      },
    ]
  }, [])

  const setFilter = (filter: DateFilter) => {
    setCurrentFilter(filter)
  }

  const setCustomFilter = (startDate: Date, endDate: Date) => {
    setCurrentFilter({
      type: "custom",
      startDate,
      endDate,
      label: "Período personalizado",
    })
  }

  return {
    currentFilter,
    availableFilters,
    setFilter,
    setCustomFilter,
  }
}
