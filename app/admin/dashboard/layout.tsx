"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  PlusCircle,
  KeyRound,
  LogOut,
  Sparkles,
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "All Blogs", href: "/admin/dashboard/blogs", icon: Newspaper },
  { name: "New Blog", href: "/admin/dashboard/blogs/new", icon: PlusCircle },
  { name: "Change Password", href: "/admin/dashboard/settings", icon: KeyRound },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        <aside className="lg:w-64 lg:shrink-0">
          <div className="sticky top-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-900">
                  SQL Centrix
                </p>
                <p className="text-[10px] text-slate-500">Admin Dashboard</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      active
                        ? "bg-yellow-400 text-slate-950"
                        : "text-slate-600 hover:bg-yellow-50 hover:text-slate-950"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}

              <button
                onClick={handleLogout}
                className="mt-2 flex items-center gap-3 rounded-xl border-t border-slate-100 px-4 py-3 pt-4 text-sm font-semibold text-red-500 transition-all hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
