"use client";

import { useState, useMemo } from "react";
import { contentData, sections, type ContentItem } from "../components/admin/content-data";
import {
  Search, Filter, ChevronDown, Copy, Check, Hash, Globe,
  FileText, Code, Layers, ClipboardList,
} from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded hover:bg-white/10 transition-colors"
      title="Copy ID"
    >
      {copied ? (
        <Check className="w-3 h-3 text-emerald-400" />
      ) : (
        <Copy className="w-3 h-3 text-white/30 hover:text-white/60" />
      )}
    </button>
  );
}

export default function ContentListPage() {
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [viewMode, setViewMode] = useState<"table" | "grouped">("grouped");

  const filtered = useMemo(() => {
    return contentData.filter((item) => {
      const matchSearch =
        !search ||
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.english.toLowerCase().includes(search.toLowerCase()) ||
        item.hebrew.includes(search) ||
        item.russian.toLowerCase().includes(search.toLowerCase());
      const matchSection = sectionFilter === "All" || item.section === sectionFilter;
      return matchSearch && matchSection;
    });
  }, [search, sectionFilter]);

  const grouped = useMemo(() => {
    const groups: Record<string, ContentItem[]> = {};
    filtered.forEach((item) => {
      if (!groups[item.section]) groups[item.section] = [];
      groups[item.section].push(item);
    });
    return groups;
  }, [filtered]);

  const stats = useMemo(() => ({
    total: contentData.length,
    sections: sections.length,
    filtered: filtered.length,
  }), [filtered]);

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#818cf8]/20 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#818cf8]" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">Content List</h1>
                  <p className="text-white/40 text-sm">MitoDerm — Multilingual Content Reference</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <div className="text-right">
                <p className="text-xs text-white/30">Total items</p>
                <p className="text-xl font-semibold text-[#818cf8]">{stats.total}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-right">
                <p className="text-xs text-white/30">Sections</p>
                <p className="text-xl font-semibold text-[#818cf8]">{stats.sections}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-right">
                <p className="text-xs text-white/30">Languages</p>
                <p className="text-xl font-semibold text-[#818cf8]">3</p>
              </div>
            </div>
          </div>

          {/* Dev note */}
          <div className="mt-6 p-4 rounded-xl bg-[#818cf8]/5 border border-[#818cf8]/20">
            <div className="flex items-start gap-3">
              <Code className="w-4 h-4 text-[#818cf8] mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="text-[#818cf8] font-medium mb-1">For Developers</p>
                <p className="text-white/50 leading-relaxed">
                  Each content item has a unique <code className="text-[#818cf8] bg-[#818cf8]/10 px-1.5 py-0.5 rounded text-xs">ID</code> (e.g. <code className="text-[#818cf8] bg-[#818cf8]/10 px-1.5 py-0.5 rounded text-xs">NAV_02</code>, <code className="text-[#818cf8] bg-[#818cf8]/10 px-1.5 py-0.5 rounded text-xs">HERO_03</code>).
                  Use these IDs as translation keys in your code: <code className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-xs">t(&quot;HERO_03&quot;)</code>.
                  Three languages: <span className="text-white/70">Hebrew (HE)</span>, <span className="text-white/70">English (EN)</span>, <span className="text-white/70">Russian (RU)</span>.
                  Import from <code className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-xs">content-data.ts</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by ID, text in any language..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40 focus:border-[#818cf8]/40"
              />
            </div>

            {/* Section filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors"
              >
                <Filter className="w-4 h-4 text-white/40" />
                <span className="text-white/70">{sectionFilter}</span>
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>
              {showFilter && (
                <div className="absolute right-0 top-full mt-1 w-60 bg-[#1e293b] border border-white/10 rounded-xl shadow-2xl z-50 py-1 max-h-80 overflow-y-auto">
                  <button
                    onClick={() => { setSectionFilter("All"); setShowFilter(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${sectionFilter === "All" ? "text-[#818cf8]" : "text-white/60"}`}
                  >
                    All Sections ({contentData.length})
                  </button>
                  <div className="h-px bg-white/10 my-1" />
                  {sections.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setSectionFilter(s); setShowFilter(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors flex items-center justify-between ${sectionFilter === s ? "text-[#818cf8]" : "text-white/60"}`}
                    >
                      <span>{s}</span>
                      <span className="text-xs text-white/20">{contentData.filter(i => i.section === s).length}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View toggle */}
            <div className="flex border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grouped")}
                className={`px-3 py-2.5 text-sm transition-colors ${viewMode === "grouped" ? "bg-[#818cf8] text-white" : "text-white/40 hover:text-white/60 hover:bg-white/5"}`}
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-2.5 text-sm transition-colors ${viewMode === "table" ? "bg-[#818cf8] text-white" : "text-white/40 hover:text-white/60 hover:bg-white/5"}`}
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>

            {/* Count badge */}
            <span className="text-xs text-white/30 tabular-nums">{stats.filtered} items</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {viewMode === "grouped" ? (
          /* ===== GROUPED VIEW ===== */
          <div className="space-y-8">
            {Object.entries(grouped).map(([section, items]) => (
              <div key={section}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#818cf8]/10 border border-[#818cf8]/20">
                    <Hash className="w-3.5 h-3.5 text-[#818cf8]" />
                    <span className="text-sm font-medium text-[#818cf8]">{section}</span>
                  </div>
                  <span className="text-xs text-white/20">{items.length} items</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#818cf8]/20 transition-all"
                    >
                      {/* Card header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
                            {item.id}
                          </code>
                          <CopyButton text={item.id} />
                        </div>
                        <span className="text-[0.65rem] text-white/20 bg-white/5 px-2 py-0.5 rounded-full">
                          {item.type}
                        </span>
                      </div>

                      {/* Translations */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[0.6rem] font-mono text-white/20 w-5 shrink-0 mt-0.5">HE</span>
                          <p className="text-sm text-white/80 leading-relaxed" dir="rtl">{item.hebrew}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[0.6rem] font-mono text-white/20 w-5 shrink-0 mt-0.5">EN</span>
                          <p className="text-sm text-white/60 leading-relaxed">{item.english}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[0.6rem] font-mono text-white/20 w-5 shrink-0 mt-0.5">RU</span>
                          <p className="text-sm text-white/60 leading-relaxed">{item.russian}</p>
                        </div>
                      </div>

                      {/* Notes */}
                      {item.notes && (
                        <div className="mt-3 pt-2 border-t border-white/5">
                          <p className="text-[0.65rem] text-amber-400/60">
                            Note: {item.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ===== TABLE VIEW ===== */
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider w-24">ID</th>
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider w-36">Section</th>
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider w-28">Type</th>
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Hebrew</span>
                    </th>
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> English</span>
                    </th>
                    <th className="text-left px-4 py-3 text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Russian</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, idx) => (
                    <tr
                      key={item.id}
                      className={`border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors ${idx % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <code className="text-xs font-mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">{item.id}</code>
                          <CopyButton text={item.id} />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-white/40">{item.section}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[0.7rem] text-white/30 bg-white/5 px-2 py-1 rounded-full">{item.type}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-white/70 max-w-[200px] truncate" dir="rtl">{item.hebrew}</td>
                      <td className="px-4 py-3 text-sm text-white/50 max-w-[200px] truncate">{item.english}</td>
                      <td className="px-4 py-3 text-sm text-white/50 max-w-[200px] truncate">{item.russian}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/30">No items match your search</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <p className="text-xs text-white/20">&copy; 2026 MitoDerm. Content Reference Sheet.</p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <span>{contentData.length} items</span>
            <span>&middot;</span>
            <span>{sections.length} sections</span>
            <span>&middot;</span>
            <span>3 languages</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
