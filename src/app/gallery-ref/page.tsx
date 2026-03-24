"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Code, ImageIcon, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ─── slide data (14 slides, same as Gallery.tsx) ─── */
const slides = [
  {
    before: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1630499584934-799ffc384651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1630499584934-799ffc384651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1630499584934-799ffc384651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1630499584934-799ffc384651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    before: "https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    after:  "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

/* ─── Navigation controls shared by both views ─── */
function Dots({ current, total, onSelect }: { current: number; total: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex justify-center gap-1.5 flex-wrap">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === current
              ? "bg-gradient-to-r from-[#dfba74] to-[#be800c] w-6"
              : "bg-white/20 w-2 hover:bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DESKTOP GALLERY — horizontal before/after side by side
   ═══════════════════════════════════════════════════════ */
function DesktopGallery() {
  const [idx, setIdx] = useState(0);
  const go = (d: 1 | -1) => setIdx((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">תוצאות התלמידים שלנו</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />
        </motion.div>

        {/* Card + arrows */}
        <div className="relative">
          {/* Left arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(1)}
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#dfba74] to-[#be800c] p-3 shadow-xl md:-left-14"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </motion.button>
          {/* Right arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(-1)}
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#dfba74] to-[#be800c] p-3 shadow-xl md:-right-14"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </motion.button>

          {/* Main card */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1e2f4a] p-6 shadow-2xl md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                {/* Side by side images */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={slides[idx].after}
                      alt="After treatment"
                      className="h-[280px] w-full object-cover md:h-[340px]"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      אחרי
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={slides[idx].before}
                      alt="Before treatment"
                      className="h-[280px] w-full object-cover md:h-[340px]"
                    />
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-white shadow-lg border border-white/20">
                      לפני
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Counter + dots */}
        <div className="mt-6 text-center space-y-3">
          <span className="text-base font-semibold text-white/60">
            {idx + 1} / {slides.length}
          </span>
          <Dots current={idx} total={slides.length} onSelect={setIdx} />
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-10 py-3.5 text-base font-bold text-white shadow-2xl transition hover:shadow-[0_8px_30px_rgba(223,186,116,0.3)]">
            הצטרף אלינו
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MOBILE GALLERY — vertical stacked before/after
   ═══════════════════════════════════════════════════════ */
function MobileGallery() {
  const [idx, setIdx] = useState(0);
  const go = (d: 1 | -1) => setIdx((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-10 px-4" dir="rtl">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-white text-center mb-6 leading-snug">
        תוצאות התלמידים<br />שלנו
      </h2>

      {/* Vertical card */}
      <div className="relative mx-auto max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="space-y-3"
          >
            {/* After (top) */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={slides[idx].after}
                alt="After treatment"
                className="w-full h-[260px] object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white">
                אחרי
              </span>
            </div>
            {/* Before (bottom) */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={slides[idx].before}
                alt="Before treatment"
                className="w-full h-[260px] object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white border border-white/20">
                לפני
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe hint arrows */}
        <button
          onClick={() => go(1)}
          className="absolute top-1/2 -left-2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#dfba74] to-[#be800c] p-2 shadow-lg z-10"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={() => go(-1)}
          className="absolute top-1/2 -right-2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#dfba74] to-[#be800c] p-2 shadow-lg z-10"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Counter + dots */}
      <div className="mt-5 text-center space-y-2">
        <span className="text-sm font-semibold text-white/50">
          {idx + 1} / {slides.length}
        </span>
        <Dots current={idx} total={slides.length} onSelect={setIdx} />
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <button className="w-full max-w-sm mx-auto block rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-8 py-3.5 text-base font-bold text-white shadow-xl">
          הצטרף אלינו
        </button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE — switchable desktop/mobile preview
   ═══════════════════════════════════════════════════════ */
export default function GalleryRefPage() {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dfba74]/20 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#dfba74]" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">Gallery Reference</h1>
                <p className="text-white/40 text-sm">MitoDerm — Before/After Gallery Component</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <div className="text-right">
                <p className="text-xs text-white/30">Slides</p>
                <p className="text-xl font-semibold text-[#dfba74]">{slides.length}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-right">
                <p className="text-xs text-white/30">Unique pairs</p>
                <p className="text-xl font-semibold text-[#dfba74]">3</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-right">
                <p className="text-xs text-white/30">Views</p>
                <p className="text-xl font-semibold text-[#dfba74]">2</p>
              </div>
            </div>
          </div>

          {/* Dev note */}
          <div className="mt-6 p-4 rounded-xl bg-[#dfba74]/5 border border-[#dfba74]/20">
            <div className="flex items-start gap-3">
              <Code className="w-4 h-4 text-[#dfba74] mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="text-[#dfba74] font-medium mb-1">For Developers</p>
                <p className="text-white/50 leading-relaxed">
                  Component: <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">Gallery.tsx</code> —
                  receives props <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">heading</code>, <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">before</code>, <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">after</code>, <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">counter</code>, <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">cta</code>.
                  <br/>
                  <span className="text-white/70">Desktop:</span> horizontal side-by-side with <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-xs">grid-cols-2</code>.
                  <span className="text-white/70 ml-2">Mobile:</span> vertical stack with separate images. Labels: <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">אחרי</code> (After) + <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">לפני</code> (Before).
                  <br/>
                  Slide data: {slides.length} slides ({slides.length} pairs). Images via Unsplash. Gold accent: <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">#dfba74</code> → <code className="text-[#dfba74] bg-[#dfba74]/10 px-1.5 py-0.5 rounded text-xs">#be800c</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-white/30" />
            <span className="text-sm text-white/50">Preview Mode</span>
          </div>
          <div className="flex border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setView("desktop")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                view === "desktop"
                  ? "bg-[#dfba74] text-white"
                  : "text-white/40 hover:text-white/60 hover:bg-white/5"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </button>
            <button
              onClick={() => setView("mobile")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                view === "mobile"
                  ? "bg-[#dfba74] text-white"
                  : "text-white/40 hover:text-white/60 hover:bg-white/5"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </button>
          </div>
        </div>
      </div>

      {/* Preview area */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {view === "desktop" ? (
          /* ── DESKTOP PREVIEW ── */
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-1 text-xs text-white/30 text-center">
                mitoderm.com/#results
              </div>
            </div>
            <DesktopGallery />
          </div>
        ) : (
          /* ── MOBILE PREVIEW ── */
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[375px] rounded-[40px] border-[4px] border-white/10 overflow-hidden shadow-2xl bg-[#0f1829]">
                {/* Status bar */}
                <div className="bg-[#0f1829] px-6 py-2 flex items-center justify-between">
                  <span className="text-[0.6rem] text-white/40">9:41</span>
                  <div className="w-20 h-5 rounded-full bg-white/10" />
                  <div className="flex gap-1">
                    <div className="w-4 h-2 rounded-sm bg-white/30" />
                    <div className="w-2 h-2 rounded-sm bg-white/20" />
                  </div>
                </div>
                <MobileGallery />
              </div>
            </div>
          </div>
        )}

        {/* Slide data reference */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Code className="w-4 h-4 text-[#dfba74]" /> Slide Data Reference
          </h3>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider w-16">#</th>
                  <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">Before Image</th>
                  <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">After Image</th>
                  <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider w-24">Preview</th>
                </tr>
              </thead>
              <tbody>
                {slides.map((slide, i) => (
                  <tr key={i} className={`border-b border-white/[0.04] hover:bg-white/[0.03] ${i % 2 ? "bg-white/[0.01]" : ""}`}>
                    <td className="px-4 py-3">
                      <span className="text-xs font-mono text-[#dfba74] bg-[#dfba74]/10 px-2 py-0.5 rounded">{i + 1}</span>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-[0.65rem] text-white/40 break-all">{slide.before.split("?")[0].split("/").pop()}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-[0.65rem] text-white/40 break-all">{slide.after.split("?")[0].split("/").pop()}</code>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-1">
                        <img src={slide.before} alt="" className="w-8 h-8 rounded object-cover" />
                        <img src={slide.after} alt="" className="w-8 h-8 rounded object-cover" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <p className="text-xs text-white/20">&copy; 2026 MitoDerm. Gallery Reference Sheet.</p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <span>{slides.length} slides</span>
            <span>&middot;</span>
            <span>3 unique pairs</span>
            <span>&middot;</span>
            <span>Desktop + Mobile</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
