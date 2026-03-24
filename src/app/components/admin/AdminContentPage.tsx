"use client";

import { useState } from "react";
import { contentData, sections, type ContentItem } from "./content-data";
import { Search, Filter, Edit3, X, Check, ChevronDown } from "lucide-react";

export function AdminContentPage() {
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<ContentItem>>({});
  const [showFilter, setShowFilter] = useState(false);

  const filtered = contentData.filter((item) => {
    const matchSearch =
      !search ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.english.toLowerCase().includes(search.toLowerCase()) ||
      item.hebrew.includes(search) ||
      item.russian.toLowerCase().includes(search.toLowerCase());
    const matchSection = sectionFilter === "All" || item.section === sectionFilter;
    return matchSearch && matchSection;
  });

  const startEdit = (item: ContentItem) => {
    setEditingId(item.id);
    setEditValues({ hebrew: item.hebrew, english: item.english, russian: item.russian });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValues({});
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1>Content Management</h1>
          <p className="text-muted-foreground mt-1">Edit multilingual website content</p>
        </div>
        <span className="text-[0.8rem] text-muted-foreground">{filtered.length} items</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by ID, text..."
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-[0.85rem] hover:bg-muted/50"
          >
            <Filter className="w-4 h-4" />
            {sectionFilter}
            <ChevronDown className="w-3 h-3" />
          </button>
          {showFilter && (
            <div className="absolute right-0 top-full mt-1 w-56 bg-card border border-border rounded-lg shadow-lg z-50 py-1 max-h-80 overflow-y-auto">
              <button
                onClick={() => { setSectionFilter("All"); setShowFilter(false); }}
                className={`w-full text-left px-4 py-2 text-[0.8rem] hover:bg-muted/50 ${sectionFilter === "All" ? "text-[#818cf8]" : ""}`}
              >
                All Sections
              </button>
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSectionFilter(s); setShowFilter(false); }}
                  className={`w-full text-left px-4 py-2 text-[0.8rem] hover:bg-muted/50 ${sectionFilter === s ? "text-[#818cf8]" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground w-28">ID</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground w-36">Section</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground w-28">Type</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Hebrew</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">English</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Russian</th>
                <th className="px-4 py-3 text-[0.75rem] text-muted-foreground w-20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3">
                    <span className="text-[0.75rem] font-mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[0.8rem] text-muted-foreground">{item.section}</td>
                  <td className="px-4 py-3">
                    <span className="text-[0.7rem] bg-muted px-2 py-1 rounded-full">{item.type}</span>
                  </td>
                  {editingId === item.id ? (
                    <>
                      <td className="px-4 py-2">
                        <input
                          value={editValues.hebrew || ""}
                          onChange={(e) => setEditValues({ ...editValues, hebrew: e.target.value })}
                          className="w-full px-2 py-1.5 text-[0.8rem] border border-[#818cf8]/40 rounded bg-background focus:outline-none"
                          dir="rtl"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          value={editValues.english || ""}
                          onChange={(e) => setEditValues({ ...editValues, english: e.target.value })}
                          className="w-full px-2 py-1.5 text-[0.8rem] border border-[#818cf8]/40 rounded bg-background focus:outline-none"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          value={editValues.russian || ""}
                          onChange={(e) => setEditValues({ ...editValues, russian: e.target.value })}
                          className="w-full px-2 py-1.5 text-[0.8rem] border border-[#818cf8]/40 rounded bg-background focus:outline-none"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex gap-1 justify-center">
                          <button onClick={cancelEdit} className="p-1.5 hover:bg-muted rounded">
                            <X className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                          <button onClick={cancelEdit} className="p-1.5 hover:bg-emerald-500/10 rounded">
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-3 text-[0.8rem] max-w-[200px] truncate" dir="rtl">{item.hebrew}</td>
                      <td className="px-4 py-3 text-[0.8rem] max-w-[200px] truncate">{item.english}</td>
                      <td className="px-4 py-3 text-[0.8rem] max-w-[200px] truncate">{item.russian}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => startEdit(item)} className="mx-auto flex p-1.5 hover:bg-muted rounded">
                          <Edit3 className="w-3.5 h-3.5 text-muted-foreground" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
