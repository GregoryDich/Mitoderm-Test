"use client";

import { useState } from "react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AdminLoginPage } from "../components/admin/AdminLoginPage";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <AdminLoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar onLogout={() => setLoggedIn(false)} />
      <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
