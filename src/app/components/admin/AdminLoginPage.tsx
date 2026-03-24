"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export function AdminLoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) { setError("Enter your email"); return; }
    if (!password.trim()) { setError("Enter your password"); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — branding */}
      <div className="hidden lg:flex w-[45%] bg-[#0f172a] text-white flex-col justify-between p-12">
        <div>
          <h1 className="tracking-wider text-[#818cf8] text-[1.6rem]">MITODERM</h1>
          <p className="text-white/40 text-[0.8rem] mt-1">Admin Panel</p>
        </div>
        <div>
          <p className="text-[1.8rem] leading-snug max-w-md">
            Manage your programs,<br />content & media<br />
            <span className="text-[#818cf8]">in one place.</span>
          </p>
          <div className="flex gap-6 mt-10">
            {[
              { n: "48", l: "Content items" },
              { n: "4", l: "Programs" },
              { n: "3", l: "Languages" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-[1.5rem] text-[#818cf8]">{s.n}</p>
                <p className="text-[0.75rem] text-white/40">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[0.7rem] text-white/20">&copy; 2026 MitoDerm. All rights reserved.</p>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-10">
            <h1 className="tracking-wider text-[#818cf8] text-[1.4rem]">MITODERM</h1>
            <p className="text-muted-foreground text-[0.8rem]">Admin Panel</p>
          </div>

          <h2 className="text-[1.4rem]">Welcome back</h2>
          <p className="text-muted-foreground text-[0.85rem] mt-1">Sign in to your admin account</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-[0.8rem] text-muted-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mitoderm.com"
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.8rem] text-muted-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-card border border-border rounded-lg text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-muted-foreground" /> : <Eye className="w-4 h-4 text-muted-foreground" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border accent-[#818cf8]" />
                <span className="text-[0.8rem] text-muted-foreground">Remember me</span>
              </label>
              <button type="button" className="text-[0.8rem] text-[#818cf8] hover:underline">
                Forgot password?
              </button>
            </div>

            {error && (
              <p className="text-[0.8rem] text-destructive bg-destructive/10 px-3 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#818cf8] text-white rounded-lg text-[0.9rem] hover:bg-[#6366f1] transition-colors disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
