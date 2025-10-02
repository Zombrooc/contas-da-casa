// export const dynamic = "force-dynamic";

import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Contas da Casa",
  description: "Seu assistente pessoal de finanças.",
  author: 'Elian "@Zombrooc" Valdez',
};

import { Bitter, IBM_Plex_Mono, Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["100", "200", "300"],
});

export default async function RootLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Session in layout:", session?.user);

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${ibmPlex.variable} ${bitter.variable} light antialiased `}
      >
        <SidebarProvider
          style={{
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          }}
        >
          <AppSidebar variant="inset" session={session || null} />
          <SidebarInset>
            <SiteHeader />
            <div className="flex flex-1 flex-col ">
              <div className="@container/main flex flex-1 flex-col gap-2">
                {children}
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
