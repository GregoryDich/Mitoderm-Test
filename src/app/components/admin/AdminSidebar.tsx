"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Image, LogOut, ExternalLink } from "lucide-react";

const navItems = [
  { to: "/admin/programs", icon: Calendar, label: "Programs", desc: "Training & workshops" },
  { to: "/admin/media", icon: Image, label: "Media", desc: "Images & assets" },
];

export function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-gradient-to-b from-[#0f172a] to-[#0b1120] text-white flex flex-col shrink-0 h-screen sticky top-0 shadow-2xl shadow-black/30">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#818cf8]/20 flex items-center justify-center">
            <span className="text-[#818cf8] font-bold text-sm">M</span>
          </div>
          <div>
            <h1 className="tracking-wider text-[#818cf8] text-lg font-semibold">MITODERM</h1>
            <p className="text-[0.65rem] text-white/30 mt-0.5 tracking-wide uppercase">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-1.5">
        <p className="text-[0.6rem] text-white/20 uppercase tracking-widest px-3 mb-3">Management</p>
        {navItems.map((item) => {
          const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
          return (
            <Link
              key={item.to}
              href={item.to}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-[#818cf8]/15 text-[#818cf8] shadow-lg shadow-[#818cf8]/5"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isActive ? "bg-[#818cf8]/20" : "bg-white/[0.04]"
              }`}>
                <item.icon className="w-[18px] h-[18px]" />
              </div>
              <div>
                <span className="text-[0.85rem] font-medium block">{item.label}</span>
                <span className={`text-[0.65rem] ${isActive ? "text-[#818cf8]/50" : "text-white/20"}`}>{item.desc}</span>
              </div>
            </Link>
          );
        })}

        {/* Content List external link */}
        <div className="pt-4 mt-4 border-t border-white/[0.06]">
          <p className="text-[0.6rem] text-white/20 uppercase tracking-widest px-3 mb-3">Reference</p>
          <Link
            href="/content-list"
            target="_blank"
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center">
              <ExternalLink className="w-[16px] h-[16px]" />
            </div>
            <div>
              <span className="text-[0.85rem] font-medium block">Content List</span>
              <span className="text-[0.65rem] text-white/20">Opens in new tab</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* User / Logout */}
      <div className="px-4 py-5 border-t border-white/[0.06] space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#6366f1] flex items-center justify-center text-[0.75rem] font-bold shadow-lg shadow-[#818cf8]/20">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[0.85rem] font-medium">Admin</p>
            <p className="text-[0.65rem] text-white/30 truncate">admin@mitoderm.com</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all text-[0.8rem]"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
}
