"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Calendar, Image, LogOut } from "lucide-react";

const navItems = [
  { to: "/admin/content", icon: FileText, label: "Content" },
  { to: "/admin/programs", icon: Calendar, label: "Programs" },
  { to: "/admin/media", icon: Image, label: "Media" },
];

export function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0f172a] text-white flex flex-col shrink-0 h-screen sticky top-0">
      <div className="px-6 py-5 border-b border-white/10">
        <h1 className="tracking-wider text-[#818cf8]">MITODERM</h1>
        <p className="text-[0.7rem] text-white/50 mt-0.5">Admin Panel</p>
      </div>
      <nav className="flex-1 py-4 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
          return (
            <Link
              key={item.to}
              href={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#818cf8]/15 text-[#818cf8]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-[18px] h-[18px]" />
              <span className="text-[0.85rem]">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-4 border-t border-white/10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#818cf8] flex items-center justify-center text-[0.75rem]">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[0.8rem]">Admin</p>
            <p className="text-[0.65rem] text-white/40 truncate">admin@mitoderm.com</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors text-[0.8rem]"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
}
