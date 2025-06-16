"use client";
import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader({
  userName = "João Silva",
  userEmail = "joao@email.com"
}) {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-violet-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="h-8 w-8 rounded-lg hover:bg-violet-100" />

          <div className="relative hidden md:block">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar transações..."
              className="w-64 pl-10 rounded-xl border-violet-200 focus:border-violet-400 focus:ring-violet-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-xl hover:bg-violet-100">
            <Bell className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-xl hover:bg-violet-100">
            <Settings className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-xl">
                <Avatar className="h-8 w-8 border-2 border-violet-200">
                  <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                  <AvatarFallback className="bg-[#9b56f7] text-white text-sm font-semibold">
                    {userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-xl border-violet-100" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{userName}</p>
                  <p className="text-xs text-slate-500">{userEmail}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-violet-100" />
              <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Perfil</DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg hover:bg-violet-50">Configurações</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-violet-100" />
              <DropdownMenuItem className="rounded-lg hover:bg-red-50 text-red-600">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
