"use client";
import {
  BarChart3,
  CreditCard,
  Home,
  TrendingDown,
  TrendingUp,
  User,
  LogOut,
  LineChart,
} from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Overview",
    url: "/",
    icon: Home,
  },
  {
    title: "Despesas",
    url: "/despesas",
    icon: TrendingDown,
  },
  {
    title: "Receitas",
    url: "/receitas",
    icon: TrendingUp,
  },
  {
    title: "Investimentos",
    url: "/investimentos",
    icon: LineChart,
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: BarChart3,
  },
  {
    title: "Perfil",
    url: "/perfil",
    icon: User,
  },
];

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      {...props}
      className="border-violet-100 bg-gradient-to-b from-violet-50 to-white"
    >
      <SidebarHeader className="border-violet-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b56f7] text-white shadow-lg">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-violet-900">
              Contas da Casa
            </h2>
            <p className="text-sm text-violet-600">Controle Financeiro</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-violet-700 font-semibold mb-3">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-12 rounded-xl hover:bg-violet-100 hover:text-violet-800 data-[active=true]:bg-[#9b56f7] data-[active=true]:text-white data-[active=true]:shadow-lg transition-all duration-200"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 px-4"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-violet-100">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 rounded-xl hover:bg-violet-100 hover:text-red-600 text-slate-600"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Sair</span>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
