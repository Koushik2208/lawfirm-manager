"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  GavelIcon,
  LayoutDashboardIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  FileTextIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboardIcon },
    { name: "Lawyers", href: "/admin/lawyers", icon: UsersIcon },
    { name: "Cases", href: "/admin/cases", icon: BookOpenIcon },
    { name: "Courts", href: "/admin/courts", icon: GavelIcon },
    { name: "Calendar", href: "/admin/calendar", icon: CalendarIcon },
    { name: "Reports", href: "/admin/reports", icon: FileTextIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          className="fixed top-4 left-4 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-card transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2 px-6 border-b">
          <GavelIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Admin Panel</span>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive">
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className={cn(
        "transition-all duration-200 ease-in-out",
        "lg:ml-64"
      )}>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}