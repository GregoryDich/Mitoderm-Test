"use client";

import { useState, useRef } from "react";
import {
  Upload, Image as ImageIcon, Trash2, Search, Grid3X3, List,
  MoreVertical, Download, Copy, Eye, X, FolderPlus, Folder,
  ChevronRight, Check, Tag,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MediaItem {
  id: number;
  name: string;
  url: string;
  folder: string;
  size: string;
  dimensions: string;
  uploaded: string;
  tags: string[];
}

const initialMedia: MediaItem[] = [
  {
    id: 1,
    name: "workshop-beer-sheva-nov23.jpg",
    url: "https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRvbG9neSUyMHdvcmtzaG9wJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc0MzEzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    folder: "Past Workshops",
    size: "2.4 MB",
    dimensions: "1920x1280",
    uploaded: "2024-01-15",
    tags: ["workshop", "beer-sheva", "november"],
  },
  {
    id: 2,
    name: "facial-treatment-demo.jpg",
    url: "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjB0cmVhdG1lbnQlMjBmYWNpYWwlMjBza2luY2FyZXxlbnwxfHx8fDE3NzQzMTM1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    folder: "Programs",
    size: "1.8 MB",
    dimensions: "1920x1080",
    uploaded: "2024-02-20",
    tags: ["treatment", "face", "demo"],
  },
  {
    id: 3,
    name: "seminar-jerusalem-dec23.jpg",
    url: "https://images.unsplash.com/photo-1659353888338-ce940a0f252f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzQzMTM1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    folder: "Past Workshops",
    size: "3.1 MB",
    dimensions: "2048x1365",
    uploaded: "2024-03-10",
    tags: ["seminar", "jerusalem", "december"],
  },
];

const folders = ["All", "Past Workshops", "Programs", "Products", "Team", "Results"];

export function AdminMediaPage() {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia);
  const [search, setSearch] = useState("");
  const [folder, setFolder] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<number[]>([]);
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = media.filter((m) => {
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.tags.some((t) => t.includes(search.toLowerCase()));
    const matchFolder = folder === "All" || m.folder === folder;
    return matchSearch && matchFolder;
  });

  const toggleSelect = (id: number) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
  };

  const addFiles = (files: File[]) => {
    const newItems: MediaItem[] = files.map((file, i) => ({
      id: Date.now() + i,
      name: file.name,
      url: URL.createObjectURL(file),
      folder: folder === "All" ? "Past Workshops" : folder,
      size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
      dimensions: "—",
      uploaded: new Date().toISOString().split("T")[0],
      tags: [],
    }));
    setMedia([...newItems, ...media]);
  };

  const deleteSelected = () => {
    setMedia(media.filter((m) => !selected.includes(m.id)));
    setSelected([]);
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Media Library</h1>
          <p className="text-white/40 mt-1 text-sm">Manage images, photos and assets</p>
        </div>
        <div className="flex gap-2">
          {selected.length > 0 && (
            <button onClick={deleteSelected} className="flex items-center gap-2 px-4 py-2.5 border border-red-500/30 text-red-400 rounded-xl text-[0.85rem] hover:bg-red-400/10">
              <Trash2 className="w-4 h-4" /> Delete ({selected.length})
            </button>
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#818cf8] text-white rounded-xl text-[0.85rem] hover:bg-[#6366f1] transition-colors shadow-lg shadow-[#818cf8]/20"
          >
            <Upload className="w-4 h-4" /> Upload
          </button>
          <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={handleFileInput} />
        </div>
      </div>

      {/* Dev note */}
      <div className="p-4 rounded-xl bg-[#818cf8]/5 border border-[#818cf8]/15">
        <p className="text-xs text-[#818cf8]/70">
          <span className="font-medium text-[#818cf8]">Dev:</span> Media items have <code className="bg-[#818cf8]/10 px-1.5 py-0.5 rounded">id</code>, <code className="bg-[#818cf8]/10 px-1.5 py-0.5 rounded">folder</code>, <code className="bg-[#818cf8]/10 px-1.5 py-0.5 rounded">tags[]</code>, and <code className="bg-[#818cf8]/10 px-1.5 py-0.5 rounded">url</code>.
          Drag-drop uploads via <code className="bg-emerald-400/10 text-emerald-400 px-1.5 py-0.5 rounded">File API</code>. Folders: Past Workshops, Programs, Products, Team, Results.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleFileDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragOver ? "border-[#818cf8] bg-[#818cf8]/5" : "border-border bg-card"
        }`}
      >
        <Upload className={`w-8 h-8 mx-auto mb-3 ${dragOver ? "text-[#818cf8]" : "text-muted-foreground"}`} />
        <p className="text-[0.9rem]">Drag & drop images here</p>
        <p className="text-[0.8rem] text-muted-foreground mt-1">or click Upload to browse files</p>
        <p className="text-[0.7rem] text-muted-foreground mt-2">Supports JPG, PNG, WebP up to 10MB</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search files or tags..."
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-[#818cf8]/40"
          />
        </div>
        <div className="flex gap-1 bg-card border border-border rounded-lg p-0.5">
          {folders.map((f) => (
            <button
              key={f}
              onClick={() => setFolder(f)}
              className={`px-3 py-1.5 rounded-md text-[0.8rem] transition-colors ${folder === f ? "bg-[#818cf8] text-white" : "hover:bg-muted/50"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex border border-border rounded-lg overflow-hidden">
          <button onClick={() => setViewMode("grid")} className={`p-2 ${viewMode === "grid" ? "bg-muted" : "hover:bg-muted/50"}`}>
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button onClick={() => setViewMode("list")} className={`p-2 ${viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"}`}>
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid view */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`group bg-card border rounded-xl overflow-hidden cursor-pointer transition-all ${
                selected.includes(item.id) ? "border-[#818cf8] ring-2 ring-[#818cf8]/30" : "border-border hover:border-[#818cf8]/40"
              }`}
            >
              <div className="relative aspect-square bg-muted/30">
                <ImageWithFallback src={item.url} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button onClick={() => setPreviewItem(item)} className="p-2 bg-white/90 rounded-lg hover:bg-white">
                    <Eye className="w-4 h-4 text-gray-800" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-lg hover:bg-white">
                    <Download className="w-4 h-4 text-gray-800" />
                  </button>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSelect(item.id); }}
                  className={`absolute top-2 left-2 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    selected.includes(item.id) ? "bg-[#818cf8] border-[#818cf8]" : "border-white/60 bg-black/20 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {selected.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                </button>
              </div>
              <div className="p-3">
                <p className="text-[0.8rem] truncate">{item.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[0.7rem] text-muted-foreground">{item.size}</span>
                  <span className="text-[0.65rem] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{item.folder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List view */
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="w-10 px-4 py-3"></th>
                <th className="w-12 px-2 py-3"></th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Name</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Folder</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Size</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Dimensions</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Uploaded</th>
                <th className="text-left px-4 py-3 text-[0.75rem] text-muted-foreground">Tags</th>
                <th className="w-16 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-2">
                    <button
                      onClick={() => toggleSelect(item.id)}
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        selected.includes(item.id) ? "bg-[#818cf8] border-[#818cf8]" : "border-border"
                      }`}
                    >
                      {selected.includes(item.id) && <Check className="w-3 h-3 text-white" />}
                    </button>
                  </td>
                  <td className="px-2 py-2">
                    <div className="w-10 h-10 rounded overflow-hidden bg-muted/30">
                      <ImageWithFallback src={item.url} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-[0.8rem]">{item.name}</td>
                  <td className="px-4 py-2">
                    <span className="text-[0.7rem] bg-muted px-2 py-1 rounded-full">{item.folder}</span>
                  </td>
                  <td className="px-4 py-2 text-[0.8rem] text-muted-foreground">{item.size}</td>
                  <td className="px-4 py-2 text-[0.8rem] text-muted-foreground">{item.dimensions}</td>
                  <td className="px-4 py-2 text-[0.8rem] text-muted-foreground">{item.uploaded}</td>
                  <td className="px-4 py-2">
                    <div className="flex gap-1 flex-wrap">
                      {item.tags.map((t) => (
                        <span key={t} className="text-[0.65rem] bg-[#818cf8]/10 text-[#818cf8] px-1.5 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-1">
                      <button onClick={() => setPreviewItem(item)} className="p-1.5 hover:bg-muted rounded">
                        <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                      <button className="p-1.5 hover:bg-muted rounded">
                        <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Preview modal */}
      {previewItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6" onClick={() => setPreviewItem(null)}>
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-[0.9rem] truncate">{previewItem.name}</h3>
              <button onClick={() => setPreviewItem(null)} className="p-1.5 hover:bg-muted rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-muted/20 flex items-center justify-center p-4">
              <ImageWithFallback src={previewItem.url} alt={previewItem.name} className="max-h-[50vh] object-contain rounded-lg" />
            </div>
            <div className="p-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-[0.7rem] text-muted-foreground">Folder</p>
                <p className="text-[0.85rem] mt-0.5">{previewItem.folder}</p>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted-foreground">Size</p>
                <p className="text-[0.85rem] mt-0.5">{previewItem.size}</p>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted-foreground">Dimensions</p>
                <p className="text-[0.85rem] mt-0.5">{previewItem.dimensions}</p>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted-foreground">Uploaded</p>
                <p className="text-[0.85rem] mt-0.5">{previewItem.uploaded}</p>
              </div>
            </div>
            <div className="px-5 pb-5 flex gap-2 flex-wrap">
              {previewItem.tags.map((t) => (
                <span key={t} className="text-[0.75rem] bg-[#818cf8]/10 text-[#818cf8] px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="p-4 border-t border-border flex justify-end gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-[0.85rem] hover:bg-muted/50">
                <Copy className="w-4 h-4" /> Copy URL
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#818cf8] text-white rounded-lg text-[0.85rem] hover:bg-[#6366f1]">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
