"use client";

import { useState, useRef } from "react";
import {
  BookOpen, Map, Palette, Layout, Calendar, Shield, Layers,
  Code, ExternalLink, ArrowUp, Monitor, Smartphone,
  Database, Globe, Zap, FileText, Users, Image, Settings,
  ChevronRight, Lock, BarChart3, FolderOpen, Tag,
} from "lucide-react";

/* ─── section anchors ─── */
const NAV = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "routes", label: "Routes", icon: Map },
  { id: "colors", label: "Colors", icon: Palette },
  { id: "workshop", label: "Workshop", icon: Layout },
  { id: "events", label: "Events", icon: Calendar },
  { id: "admin", label: "Admin", icon: Shield },
  { id: "components", label: "Components", icon: Layers },
] as const;

/* ─── helpers ─── */
function Badge({ children, color = "indigo" }: { children: React.ReactNode; color?: "indigo" | "gold" | "emerald" | "amber" | "red" | "white" }) {
  const map = {
    indigo: "text-[#818cf8] bg-[#818cf8]/10",
    gold: "text-[#dfba74] bg-[#dfba74]/10",
    emerald: "text-emerald-400 bg-emerald-400/10",
    amber: "text-amber-400 bg-amber-400/10",
    red: "text-red-400 bg-red-400/10",
    white: "text-white/70 bg-white/10",
  };
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${map[color]}`}>{children}</span>;
}

function DevNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 p-4 rounded-xl bg-[#818cf8]/5 border border-[#818cf8]/20">
      <div className="flex items-start gap-3">
        <Code className="w-4 h-4 text-[#818cf8] mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="text-[#818cf8] font-medium mb-1">Dev Note</p>
          <div className="text-white/50 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ id, icon: Icon, title, subtitle }: { id: string; icon: any; title: string; subtitle: string }) {
  return (
    <div id={id} className="scroll-mt-20 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-[#818cf8]/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#818cf8]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-white/40 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="h-px bg-white/10 mt-4" />
    </div>
  );
}

function Swatch({ hex, tw, usage }: { hex: string; tw: string; usage: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
      <div className="w-10 h-10 rounded-lg border border-white/10 shrink-0" style={{ backgroundColor: hex }} />
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <code className="text-white/80 text-xs font-mono">{hex}</code>
          <code className="text-[#818cf8] bg-[#818cf8]/10 px-1.5 py-0.5 rounded text-[10px]">{tw}</code>
        </div>
        <p className="text-white/40 text-xs mt-0.5 truncate">{usage}</p>
      </div>
    </div>
  );
}

/* ─── data ─── */
const ROUTES = [
  { path: "/", file: "workshop/page.tsx", desc: "Workshop landing (default)", theme: "Navy + Gold" },
  { path: "/events", file: "events/page.tsx", desc: "Events page — dynamic agenda", theme: "Navy + Gold" },
  { path: "/admin", file: "admin/page.tsx", desc: "Redirect → /admin/programs", theme: "Dark + Indigo" },
  { path: "/admin/programs", file: "admin/programs/page.tsx", desc: "Program CRUD management", theme: "Dark + Indigo" },
  { path: "/admin/media", file: "admin/media/page.tsx", desc: "Media library (drag & drop)", theme: "Dark + Indigo" },
  { path: "/content-list", file: "content-list/page.tsx", desc: "Multilingual content reference", theme: "Dark + Indigo" },
  { path: "/gallery-ref", file: "gallery-ref/page.tsx", desc: "Before/after gallery reference", theme: "Dark + Gold" },
  { path: "/project-ref", file: "project-ref/page.tsx", desc: "This page — full project guide", theme: "Dark + Indigo" },
];

const WORKSHOP_COMPONENTS = [
  "Navbar", "Hero", "BenefitGrid", "CourseSelection", "Sticky variant bar",
  "InviteSection", "AgendaAccordion", "EventDetails", "UniqueSection",
  "Gallery (before/after)", "ExosomesIntro", "StatsSection", "ContactUs",
  "CTA Banner (inline)", "Footer", "ScrollToTop", "RegistrationModal",
];

const EVENTS_COMPONENTS = [
  "Navbar", "Hero", "CourseSection (event selection)", "AgendaAccordion (dynamic)",
  "Speakers", "CTA Banner (inline)", "Past Events Gallery (inline)",
  "ContactUs", "Footer", "ScrollToTop", "RegistrationModal",
];

const ADMIN_SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart3 },
  { name: "Content", icon: FileText },
  { name: "Programs", icon: FolderOpen, active: true },
  { name: "Translations", icon: Globe },
  { name: "Media", icon: Image },
  { name: "Analytics", icon: BarChart3 },
  { name: "Users", icon: Users },
  { name: "Settings", icon: Settings },
];

const ADMIN_PROGRAM_CARDS = [
  { title: "Training Day for Hair Stylists in the Scalp Field", titleHe: "יום הדרכה למעצבי שיער בתחום הקרקפת", type: "Professional Training", status: "Active" as const, locations: [{ city: "Tel Aviv", date: "15.04.26", time: "10:00-14:00", seats: "12/20" }, { city: "Jerusalem", date: "22.04.26", time: "10:00-14:00", seats: "8/20" }] },
  { title: "Training Day for Cosmeticians in the Facial Field", titleHe: "יום הדרכה לקוסמטיקאיות בתחום הפנים", type: "Professional Training", status: "Active" as const, locations: [{ city: "Haifa", date: "29.04.26", time: "10:00-14:00", seats: "15/25" }, { city: "Beer Sheva", date: "06.05.26", time: "10:00-14:00", seats: "20/25" }] },
  { title: "Training Day for Cosmeticians in the Scalp Field", titleHe: "יום הדרכה לקוסמטיקאיות בתחום הקרקפת", type: "Professional Training", status: "Draft" as const, locations: [{ city: "Tel Aviv", date: "TBD", time: "", seats: "0/20" }] },
  { title: "MitoDerm Academy — 480h Professional Program", titleHe: "אקדמיית MitoDerm — תכנית מקצועית 480 שעות", type: "Academy", status: "Active" as const, locations: [{ city: "Ramat Gan", date: "Ongoing", time: "Full-time", seats: "5/15" }] },
];

const COMPONENT_MAP: { name: string; workshop: boolean; events: boolean; admin: boolean }[] = [
  { name: "Navbar", workshop: true, events: true, admin: false },
  { name: "Hero", workshop: true, events: true, admin: false },
  { name: "BenefitGrid", workshop: true, events: false, admin: false },
  { name: "CourseSelection", workshop: true, events: false, admin: false },
  { name: "CourseSection", workshop: false, events: true, admin: false },
  { name: "InviteSection", workshop: true, events: false, admin: false },
  { name: "AgendaAccordion", workshop: true, events: true, admin: false },
  { name: "EventDetails", workshop: true, events: false, admin: false },
  { name: "UniqueSection", workshop: true, events: false, admin: false },
  { name: "Gallery", workshop: true, events: false, admin: false },
  { name: "ExosomesIntro", workshop: true, events: false, admin: false },
  { name: "StatsSection", workshop: true, events: false, admin: false },
  { name: "Speakers", workshop: false, events: true, admin: false },
  { name: "ContactUs", workshop: true, events: true, admin: false },
  { name: "Footer", workshop: true, events: true, admin: false },
  { name: "ScrollToTop", workshop: true, events: true, admin: false },
  { name: "RegistrationModal", workshop: true, events: true, admin: false },
  { name: "AdminLoginPage", workshop: false, events: false, admin: true },
  { name: "AdminSidebar", workshop: false, events: false, admin: true },
  { name: "AdminProgramsPage", workshop: false, events: false, admin: true },
  { name: "AdminMediaPage", workshop: false, events: false, admin: true },
];

const TECH_STACK = [
  { name: "Next.js 15", color: "white" as const },
  { name: "React 18", color: "indigo" as const },
  { name: "TypeScript", color: "indigo" as const },
  { name: "Tailwind CSS 4", color: "indigo" as const },
  { name: "Framer Motion", color: "gold" as const },
  { name: "Lucide Icons", color: "white" as const },
  { name: "Sonner Toasts", color: "amber" as const },
  { name: "shadcn/ui (48)", color: "white" as const },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ProjectRefPage() {
  const [activeNav, setActiveNav] = useState("overview");
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-[#0b1120] text-white">
      {/* ── Header ── */}
      <header className="border-b border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#818cf8]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#818cf8]" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">Project Reference</h1>
                  <p className="text-white/40 text-sm">MitoDerm — Full Project Architecture &amp; Style Guide</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "Routes", value: "8" },
                { label: "Components", value: "40+" },
                { label: "Languages", value: "3" },
                { label: "Gallery slides", value: "14" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-10 bg-white/10" />}
                  <div className="text-right">
                    <p className="text-xs text-white/30">{s.label}</p>
                    <p className="text-xl font-semibold text-[#818cf8]">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dev note: links to other ref pages */}
          <DevNote>
            See also:{" "}
            <a href="/content-list" target="_blank" className="text-[#818cf8] underline underline-offset-2 hover:text-[#a5b4fc]">/content-list</a>{" "}
            (48 multilingual items) and{" "}
            <a href="/gallery-ref" target="_blank" className="text-[#dfba74] underline underline-offset-2 hover:text-[#e8c88a]">/gallery-ref</a>{" "}
            (14 before/after slides, desktop &amp; mobile previews).
          </DevNote>
        </div>
      </header>

      {/* ── Sticky nav ── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  activeNav === id
                    ? "bg-[#818cf8] text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10 space-y-16">

        {/* ═══ 1. Overview ═══ */}
        <section>
          <SectionHeader id="overview" icon={BookOpen} title="Project Overview" subtitle="Tech stack, key metrics, architecture at a glance" />

          {/* tech chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TECH_STACK.map((t) => (
              <Badge key={t.name} color={t.color}>{t.name}</Badge>
            ))}
          </div>

          {/* stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Map, label: "Routes", value: "8", sub: "public + admin" },
              { icon: Layers, label: "Custom Components", value: "40+", sub: "workshop, events, admin" },
              { icon: Globe, label: "Languages", value: "3", sub: "HE · EN · RU" },
              { icon: Zap, label: "Workshop Variants", value: "3", sub: "990 · 180 · 480 hrs" },
              { icon: Calendar, label: "Event Types", value: "3", sub: "dynamic agenda" },
              { icon: Image, label: "Gallery Slides", value: "14", sub: "before / after" },
              { icon: Database, label: "Content Items", value: "48", sub: "keyed by ID" },
              { icon: Monitor, label: "UI Primitives", value: "48", sub: "shadcn/ui" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <s.icon className="w-5 h-5 text-[#818cf8] mb-2" />
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-white/60">{s.label}</p>
                <p className="text-xs text-white/30 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <DevNote>
            Project uses <Badge color="indigo">App Router</Badge> with <Badge color="indigo">&quot;use client&quot;</Badge> pages.
            All content is RTL-first <Badge color="amber">dir=&quot;rtl&quot;</Badge> for Hebrew.
            Data lives in <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/lib/workshopContent.ts</code> and{" "}
            <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/lib/eventsContent.ts</code>.
          </DevNote>
        </section>

        {/* ═══ 2. Routes ═══ */}
        <section>
          <SectionHeader id="routes" icon={Map} title="Route Map" subtitle="All application routes and their files" />

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-left">
                  <th className="pb-3 pr-4 font-medium">Route</th>
                  <th className="pb-3 pr-4 font-medium">File</th>
                  <th className="pb-3 pr-4 font-medium">Description</th>
                  <th className="pb-3 font-medium">Theme</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r) => (
                  <tr key={r.path} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-4">
                      <code className="text-[#818cf8] bg-[#818cf8]/10 px-1.5 py-0.5 rounded text-xs">{r.path}</code>
                    </td>
                    <td className="py-3 pr-4">
                      <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">{r.file}</code>
                    </td>
                    <td className="py-3 pr-4 text-white/60">{r.desc}</td>
                    <td className="py-3">
                      <Badge color={r.theme.includes("Gold") ? "gold" : "indigo"}>{r.theme}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══ 3. Colors ═══ */}
        <section>
          <SectionHeader id="colors" icon={Palette} title="Color System" subtitle="Palette tokens used across the project" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Workshop / Events palette */}
            <div>
              <h3 className="text-sm font-semibold text-[#dfba74] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#dfba74]" /> Workshop &amp; Events
              </h3>
              <div className="space-y-2">
                <Swatch hex="#1a2744" tw="bg-[#1a2744]" usage="Page background" />
                <Swatch hex="#0f1829" tw="bg-[#0f1829]" usage="Darker gradient endpoint" />
                <Swatch hex="#1e2f4a" tw="bg-[#1e2f4a]" usage="Card backgrounds" />
                <Swatch hex="#dfba74" tw="from-[#dfba74]" usage="Gold accent (gradient start)" />
                <Swatch hex="#be800c" tw="to-[#be800c]" usage="Gold accent (gradient end)" />
              </div>
            </div>

            {/* Admin / Dev palette */}
            <div>
              <h3 className="text-sm font-semibold text-[#818cf8] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#818cf8]" /> Admin &amp; Dev Pages
              </h3>
              <div className="space-y-2">
                <Swatch hex="#0b1120" tw="bg-[#0b1120]" usage="Dev/admin background" />
                <Swatch hex="#0f172a" tw="bg-[#0f172a]" usage="Sidebar, headers" />
                <Swatch hex="#131d35" tw="to-[#131d35]" usage="Gradient endpoint" />
                <Swatch hex="#818cf8" tw="text-[#818cf8]" usage="Indigo accent (primary)" />
                <Swatch hex="#6366f1" tw="bg-[#6366f1]" usage="Indigo accent (darker)" />
              </div>
            </div>
          </div>

          {/* Semantic colors */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-white/60 mb-4">Semantic Colors</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="w-4 h-4 rounded bg-emerald-500" />
                <span className="text-xs text-white/60">Emerald — success states</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="w-4 h-4 rounded bg-amber-500" />
                <span className="text-xs text-white/60">Amber — warnings, notes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="w-4 h-4 rounded bg-red-500" />
                <span className="text-xs text-white/60">Red — destructive actions</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. Workshop ═══ */}
        <section>
          <SectionHeader id="workshop" icon={Layout} title="Workshop Page" subtitle="/ — Main landing, variant-driven content" />

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-sm text-white/50 mb-4">Components rendered top → bottom:</p>
            <div className="flex flex-wrap gap-2">
              {WORKSHOP_COMPONENTS.map((name, i) => (
                <div key={name} className="flex items-center gap-1.5">
                  <span className="text-[10px] text-white/30 font-mono w-5 text-right">{i + 1}.</span>
                  <Badge color={name.includes("(") ? "gold" : "indigo"}>{name}</Badge>
                  {i < WORKSHOP_COMPONENTS.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-white/15" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <DevNote>
            <p className="mb-2">
              <strong className="text-white/70">Variant system:</strong>{" "}
              <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-xs">
                useState&lt;WorkshopVariant&gt;(&quot;180&quot;)
              </code>{" "}
              — drives all content: hero, agenda, event details, gallery.
            </p>
            <p className="mb-2">
              Three variants: <Badge color="gold">990 (סדנה)</Badge>{" "}
              <Badge color="gold">180 שעות</Badge>{" "}
              <Badge color="gold">480 שעות</Badge>
            </p>
            <p>
              Data source:{" "}
              <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/lib/workshopContent.ts</code>{" "}
              → <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-xs">contentByVariant[variant]</code>
            </p>
          </DevNote>
        </section>

        {/* ═══ 5. Events ═══ */}
        <section>
          <SectionHeader id="events" icon={Calendar} title="Events Page" subtitle="/events — Dynamic event selection with changing agenda" />

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-sm text-white/50 mb-4">Components rendered top → bottom:</p>
            <div className="flex flex-wrap gap-2">
              {EVENTS_COMPONENTS.map((name, i) => (
                <div key={name} className="flex items-center gap-1.5">
                  <span className="text-[10px] text-white/30 font-mono w-5 text-right">{i + 1}.</span>
                  <Badge color={name.includes("(") ? "gold" : "indigo"}>{name}</Badge>
                  {i < EVENTS_COMPONENTS.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-white/15" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Event type selection visual */}
          <div className="mt-6 p-5 rounded-xl bg-[#dfba74]/5 border border-[#dfba74]/20">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#dfba74] mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="text-[#dfba74] font-medium mb-2">Dynamic Event Selection</p>
                <p className="text-white/50 leading-relaxed mb-3">
                  The <Badge color="gold">CourseSection</Badge> shows 3 event type cards (left / center / right).
                  Selecting an event type changes the <Badge color="gold">AgendaAccordion</Badge> below — the agenda list
                  is dynamic and depends on which event card is chosen.
                </p>
                <div className="flex gap-3">
                  {["Event Type A", "Event Type B", "Event Type C"].map((label, i) => (
                    <div
                      key={label}
                      className={`flex-1 text-center py-3 rounded-xl border text-xs font-medium transition-colors ${
                        i === 1
                          ? "bg-gradient-to-b from-[#dfba74]/20 to-[#be800c]/20 border-[#dfba74]/40 text-[#dfba74]"
                          : "bg-white/[0.03] border-white/10 text-white/40"
                      }`}
                    >
                      {label}
                      {i === 1 && <span className="block text-[10px] mt-1 text-[#dfba74]/60">selected</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DevNote>
            <p className="mb-2">
              Data source:{" "}
              <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/lib/eventsContent.ts</code>{" "}
              → <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-xs">eventsContent</code>
            </p>
            <p>
              Reuses workshop components (<Badge>Navbar</Badge>, <Badge>Hero</Badge>, <Badge>AgendaAccordion</Badge>, <Badge>ContactUs</Badge>, <Badge>Footer</Badge>)
              with events-specific data. <Badge color="gold">CourseSection</Badge> is events-only.{" "}
              <Badge color="gold">Speakers</Badge> section is events-only.
            </p>
          </DevNote>
        </section>

        {/* ═══ 6. Admin ═══ */}
        <section>
          <SectionHeader id="admin" icon={Shield} title="Admin Panel" subtitle="/admin — Login gate, sidebar, Programs management" />

          {/* Visual admin mockup */}
          <div className="rounded-xl border border-white/10 overflow-hidden mb-6">
            <div className="flex min-h-[420px]">
              {/* Sidebar mockup */}
              <div className="w-48 bg-[#1e1b4b] border-r border-white/10 p-4 shrink-0">
                <div className="mb-6">
                  <p className="text-[#818cf8] font-bold text-sm">MITODERM</p>
                  <p className="text-white/30 text-[10px]">Admin Panel</p>
                </div>
                <div className="space-y-1">
                  {ADMIN_SIDEBAR_ITEMS.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                        item.active
                          ? "bg-[#818cf8] text-white"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content — Programs */}
              <div className="flex-1 bg-[#f8f9fc] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Programs</h3>
                    <p className="text-xs text-gray-500">Manage training programs and schedules</p>
                  </div>
                  <div className="px-3 py-1.5 bg-[#818cf8] text-white text-xs rounded-lg font-medium">+ Add Program</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {ADMIN_PROGRAM_CARDS.map((card) => (
                    <div key={card.title} className="bg-white rounded-xl border border-gray-200 p-3 text-xs">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700">{card.type}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${card.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                          {card.status}
                        </span>
                      </div>
                      <p className="font-semibold text-gray-900 text-[11px] leading-tight">{card.title}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5" dir="rtl">{card.titleHe}</p>
                      <div className="mt-2 space-y-1">
                        {card.locations.map((loc) => (
                          <div key={loc.city + loc.date} className="flex items-center gap-2 text-[10px] text-gray-500">
                            <span>📍 {loc.city}</span>
                            <span>📅 {loc.date}</span>
                            {loc.time && <span>🕐 {loc.time}</span>}
                            <span className="ml-auto">👥 {loc.seats}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex mt-2 border-t border-gray-100 pt-2">
                        <button className="flex-1 text-center text-gray-400 text-[10px]">Preview</button>
                        <button className="flex-1 text-center text-[#818cf8] text-[10px]">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DevNote>
            <p className="mb-2">
              Admin uses <Badge>client-side state only</Badge> — no backend.
              Login gate in <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">admin/layout.tsx</code> (simulated, any creds work).
            </p>
            <p className="mb-2">
              Sidebar: Dashboard, Content, <strong className="text-white/70">Programs</strong>, Translations, Media, Analytics, Users, Settings
            </p>
            <p>
              Programs page: card grid with type/status badges, multilingual titles, location rows (city, date, time, seats), Preview &amp; Edit actions.
            </p>
          </DevNote>
        </section>

        {/* ═══ Gallery & Content Links ═══ */}
        <section>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/gallery-ref"
              target="_blank"
              className="group p-5 rounded-xl bg-[#dfba74]/5 border border-[#dfba74]/20 hover:border-[#dfba74]/40 transition-colors block"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-[#dfba74]" />
                  <span className="font-medium text-[#dfba74]">Gallery Reference</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#dfba74]/50 group-hover:text-[#dfba74] transition-colors" />
              </div>
              <p className="text-sm text-white/40">14 before/after slides, desktop &amp; mobile previews, navigation dots</p>
            </a>

            <a
              href="/content-list"
              target="_blank"
              className="group p-5 rounded-xl bg-[#818cf8]/5 border border-[#818cf8]/20 hover:border-[#818cf8]/40 transition-colors block"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#818cf8]" />
                  <span className="font-medium text-[#818cf8]">Content List</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#818cf8]/50 group-hover:text-[#818cf8] transition-colors" />
              </div>
              <p className="text-sm text-white/40">48 content items, 3 languages, search &amp; filter, grouped by section</p>
            </a>
          </div>
        </section>

        {/* ═══ 7. Component Map ═══ */}
        <section>
          <SectionHeader id="components" icon={Layers} title="Component Map" subtitle="Which components are used on which pages" />

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-left">
                  <th className="pb-3 pr-4 font-medium">Component</th>
                  <th className="pb-3 pr-4 font-medium text-center">Workshop</th>
                  <th className="pb-3 pr-4 font-medium text-center">Events</th>
                  <th className="pb-3 font-medium text-center">Admin</th>
                </tr>
              </thead>
              <tbody>
                {COMPONENT_MAP.map((c) => (
                  <tr key={c.name} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 pr-4">
                      <code className="text-white/70 text-xs">{c.name}</code>
                    </td>
                    {[c.workshop, c.events, c.admin].map((used, i) => (
                      <td key={i} className="py-2.5 pr-4 text-center">
                        {used ? (
                          <span className="inline-block w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs leading-5">✓</span>
                        ) : (
                          <span className="text-white/10">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DevNote>
            <p>
              Total: <Badge color="emerald">40+ custom components</Badge> in <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/app/components/</code>{" "}
              + <Badge color="white">48 shadcn/ui primitives</Badge> in <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">src/app/components/ui/</code>
            </p>
          </DevNote>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between text-xs text-white/30">
            <p>MitoDerm Project Reference — generated for developer use</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-[#818cf8] hover:text-[#a5b4fc] transition-colors"
            >
              <ArrowUp className="w-3 h-3" /> Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
