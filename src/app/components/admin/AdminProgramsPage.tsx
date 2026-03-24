"use client";

import { useState } from "react";
import {
  Calendar, MapPin, Clock, Users, Plus, Edit3, X, Check,
  ChevronDown, ChevronUp, Trash2, Copy, GripVertical, Tag,
} from "lucide-react";

interface Location {
  city: string;
  date: string;
  time: string;
  spots: number;
  total: number;
}

interface BulletPoint {
  hebrew: string;
  english: string;
  russian: string;
}

interface Program {
  id: number;
  title: string;
  titleHe: string;
  titleRu: string;
  subtitle: string;
  subtitleHe: string;
  subtitleRu: string;
  category: string;
  status: "active" | "draft" | "archived";
  tag: string;
  locations: Location[];
  bullets: BulletPoint[];
  ctaType: string;
  ctaHe: string;
  ctaEn: string;
  ctaRu: string;
}

const initialPrograms: Program[] = [
  {
    id: 1,
    title: "Training Day for Hair Stylists in the Scalp Field",
    titleHe: "יום הדרכה למעצבי שיער בתחום הקרקפת",
    titleRu: "День обучения для парикмахеров в области кожи головы",
    subtitle: "Introduction to the world of scalp care from an advanced trichological perspective",
    subtitleHe: "היכרות עם עולם הקרקפת מזווית טריכולוגית מתקדמת",
    subtitleRu: "Знакомство с миром кожи головы с позиции передовой трихологии",
    category: "Hair Stylists",
    status: "active",
    tag: "Professional Training",
    ctaType: "CTA Type 2",
    ctaHe: "לפרטים נוספים",
    ctaEn: "More Details",
    ctaRu: "Подробнее",
    locations: [
      { city: "Tel Aviv", date: "15.04.26", time: "10:00-14:00", spots: 12, total: 20 },
      { city: "Jerusalem", date: "22.04.26", time: "10:00-14:00", spots: 8, total: 20 },
    ],
    bullets: [
      { hebrew: "הבנת הליכי נשירה וצמיחת שיער", english: "Understanding hair loss and hair growth processes", russian: "Понимание процессов выпадения и роста волос" },
      { hebrew: "יסודות מיקרונידלינג עבודה נכונה עם הקרקפת", english: "Fundamentals of microneedling and proper scalp work", russian: "Основы микронидлинга и правильная работа с кожей головы" },
      { hebrew: "אקסוזומים: שילוב פתרונות חדשניים לשיקום הקרקפת", english: "Exosomes: integrating innovative solutions for scalp restoration", russian: "Экзосомы: интеграция инновационных решений для восстановления кожи головы" },
    ],
  },
  {
    id: 2,
    title: "Training Day for Cosmeticians in the Facial Field",
    titleHe: "יום הדרכה לקוסמטיקאיות בתחום הפנים",
    titleRu: "День обучения для косметологов в области лица",
    subtitle: "We invite you to discover the new generation of professional aesthetics",
    subtitleHe: "מזמינים אותך להכיר את הדור החדש של האסתטיקה המקצועית",
    subtitleRu: "Приглашаем вас познакомиться с новым поколением профессиональной эстетики",
    category: "Face",
    status: "active",
    tag: "Professional Training",
    ctaType: "CTA Type 2",
    ctaHe: "לפרטים נוספים",
    ctaEn: "More Details",
    ctaRu: "Подробнее",
    locations: [
      { city: "Haifa", date: "29.04.26", time: "10:00-14:00", spots: 15, total: 25 },
      { city: "Beer Sheva", date: "06.05.26", time: "10:00-14:00", spots: 20, total: 25 },
    ],
    bullets: [
      { hebrew: "הכרות עם עולם האקסוזומים וביולוגיה של העור", english: "Introduction to the world of exosomes and skin biology", russian: "Знакомство с миром экзосом и биологией кожи" },
      { hebrew: "כיצד האקסוזומים מתקשרים ומחדשים את התאים", english: "How exosomes communicate with and renew cells", russian: "Как экзосомы взаимодействуют с клетками и обновляют их" },
      { hebrew: "פרוטוקולים מותאמים לאפקטיביות מרבית", english: "Protocols tailored for maximum effectiveness", russian: "Протоколы, адаптированные для максимальной эффективности" },
    ],
  },
  {
    id: 3,
    title: "Training Day for Cosmeticians in the Scalp Field",
    titleHe: "יום הדרכה לקוסמטיקאיות בתחום הקרקפת",
    titleRu: "День обучения для косметологов в области кожи головы",
    subtitle: "Professional development and knowledge expansion",
    subtitleHe: "השתלמות מקצועית והרחבת ידע",
    subtitleRu: "Профессиональное развитие и расширение знаний",
    category: "Scalp",
    status: "draft",
    tag: "Professional Training",
    ctaType: "CTA Type 2",
    ctaHe: "לפרטים נוספים",
    ctaEn: "More Details",
    ctaRu: "Подробнее",
    locations: [
      { city: "Tel Aviv", date: "TBD", time: "TBD", spots: 0, total: 20 },
    ],
    bullets: [
      { hebrew: "הבנת תהליכים ביולוגיים ומה משפיע על הנשירה", english: "Understanding biological processes and what affects hair loss", russian: "Понимание биологических процессов и факторов выпадения волос" },
      { hebrew: "שימוש באקסוזומים לשיקום הקרקפת", english: "Using exosomes for scalp restoration", russian: "Использование экзосом для восстановления кожи головы" },
    ],
  },
  {
    id: 4,
    title: "MitoDerm Academy — 480h Professional Program",
    titleHe: "אקדמיית MitoDerm — תכנית מקצועית 480 שעות",
    titleRu: "MitoDerm Academy — 480-часовая профессиональная программа",
    subtitle: "The complete track for professional success",
    subtitleHe: "המסלול המלא להצלחה מקצועית",
    subtitleRu: "Полный путь к профессиональному успеху",
    category: "Scalp Academy",
    status: "active",
    tag: "Academy",
    ctaType: "CTA Type 3",
    ctaHe: "צרו קשר",
    ctaEn: "Contact Us",
    ctaRu: "Свяжитесь с нами",
    locations: [
      { city: "Ramat Gan", date: "Ongoing", time: "Full-time", spots: 5, total: 15 },
    ],
    bullets: [
      { hebrew: "הבנת נשירת שיער מזוויות מקצועיות", english: "Understanding hair loss from professional perspectives", russian: "Понимание выпадения волос с профессиональной точки зрения" },
      { hebrew: "קרקפת כבסיס לשער בריא – אבחון מצבי קרקפת בעזרת מצלמה", english: "The scalp as the foundation for healthy hair – diagnosing scalp conditions using a camera", russian: "Кожа головы как основа здоровых волос – диагностика с помощью камеры" },
    ],
  },
];

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-600",
  draft: "bg-amber-500/10 text-amber-600",
  archived: "bg-gray-500/10 text-gray-500",
};

export function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setEditingProgram(null);
    } else {
      setExpandedId(id);
      const prog = programs.find((p) => p.id === id)!;
      setEditingProgram({ ...prog, locations: prog.locations.map((l) => ({ ...l })), bullets: prog.bullets.map((b) => ({ ...b })) });
    }
  };

  const saveProgram = () => {
    if (!editingProgram) return;
    setPrograms(programs.map((p) => (p.id === editingProgram.id ? editingProgram : p)));
    setExpandedId(null);
    setEditingProgram(null);
  };

  const updateField = (field: keyof Program, value: string) => {
    if (!editingProgram) return;
    setEditingProgram({ ...editingProgram, [field]: value });
  };

  const updateLocation = (idx: number, field: keyof Location, value: string | number) => {
    if (!editingProgram) return;
    const locs = [...editingProgram.locations];
    locs[idx] = { ...locs[idx], [field]: value };
    setEditingProgram({ ...editingProgram, locations: locs });
  };

  const addLocation = () => {
    if (!editingProgram) return;
    setEditingProgram({
      ...editingProgram,
      locations: [...editingProgram.locations, { city: "", date: "", time: "", spots: 0, total: 20 }],
    });
  };

  const removeLocation = (idx: number) => {
    if (!editingProgram) return;
    setEditingProgram({ ...editingProgram, locations: editingProgram.locations.filter((_, i) => i !== idx) });
  };

  const updateBullet = (idx: number, lang: keyof BulletPoint, value: string) => {
    if (!editingProgram) return;
    const bullets = [...editingProgram.bullets];
    bullets[idx] = { ...bullets[idx], [lang]: value };
    setEditingProgram({ ...editingProgram, bullets });
  };

  const addBullet = () => {
    if (!editingProgram) return;
    setEditingProgram({
      ...editingProgram,
      bullets: [...editingProgram.bullets, { hebrew: "", english: "", russian: "" }],
    });
  };

  const removeBullet = (idx: number) => {
    if (!editingProgram) return;
    setEditingProgram({ ...editingProgram, bullets: editingProgram.bullets.filter((_, i) => i !== idx) });
  };

  const duplicateProgram = (prog: Program) => {
    const newProg: Program = {
      ...prog,
      id: Math.max(...programs.map((p) => p.id)) + 1,
      title: prog.title + " (Copy)",
      status: "draft",
      locations: prog.locations.map((l) => ({ ...l, spots: 0 })),
      bullets: prog.bullets.map((b) => ({ ...b })),
    };
    setPrograms([...programs, newProg]);
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Programs</h1>
          <p className="text-white/40 mt-1 text-sm">Manage training programs, schedules and content</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#818cf8] text-white rounded-xl text-[0.85rem] hover:bg-[#6366f1] transition-colors shadow-lg shadow-[#818cf8]/20">
          <Plus className="w-4 h-4" />
          Add Program
        </button>
      </div>

      {/* Dev note */}
      <div className="p-4 rounded-xl bg-[#818cf8]/5 border border-[#818cf8]/15">
        <p className="text-xs text-[#818cf8]/70">
          <span className="font-medium text-[#818cf8]">Dev:</span> Each program has multilingual titles (EN/HE/RU), locations with capacity, and bullet points.
          Use <code className="bg-[#818cf8]/10 px-1.5 py-0.5 rounded">Program.id</code> as the key. Status: <code className="bg-emerald-400/10 text-emerald-400 px-1.5 py-0.5 rounded">active</code> <code className="bg-amber-400/10 text-amber-400 px-1.5 py-0.5 rounded">draft</code> <code className="bg-white/10 text-white/40 px-1.5 py-0.5 rounded">archived</code>
        </p>
      </div>

      <div className="space-y-4">
        {programs.map((prog) => {
          const isExpanded = expandedId === prog.id;
          const ep = isExpanded ? editingProgram : null;

          return (
            <div key={prog.id} className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Header row */}
              <div
                className="p-5 flex items-center gap-4 cursor-pointer hover:bg-muted/20 transition-colors"
                onClick={() => toggleExpand(prog.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[0.7rem] bg-[#818cf8]/10 text-[#818cf8] px-2 py-0.5 rounded-full">{prog.tag}</span>
                    <span className={`text-[0.7rem] px-2 py-0.5 rounded-full capitalize ${statusColors[prog.status]}`}>{prog.status}</span>
                    <span className="text-[0.7rem] text-muted-foreground">#{prog.id}</span>
                  </div>
                  <h3 className="text-[0.95rem] truncate">{prog.title}</h3>
                  <div className="flex items-center gap-4 mt-1.5">
                    {prog.locations.slice(0, 3).map((loc, i) => (
                      <span key={i} className="flex items-center gap-1 text-[0.75rem] text-muted-foreground">
                        <MapPin className="w-3 h-3" /> {loc.city}
                      </span>
                    ))}
                    <span className="text-[0.75rem] text-muted-foreground">
                      {prog.bullets.length} bullet points
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); duplicateProgram(prog); }}
                    className="p-2 hover:bg-muted rounded-lg"
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </div>
              </div>

              {/* Expanded edit panel */}
              {isExpanded && ep && (
                <div className="border-t border-border">
                  {/* General info */}
                  <div className="p-5 border-b border-border/50 bg-muted/10">
                    <h4 className="text-[0.85rem] text-muted-foreground mb-4 flex items-center gap-2">
                      <Edit3 className="w-4 h-4" /> General Information
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Status</label>
                        <select
                          value={ep.status}
                          onChange={(e) => updateField("status", e.target.value)}
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]"
                        >
                          <option value="active">Active</option>
                          <option value="draft">Draft</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Category</label>
                        <input
                          value={ep.category}
                          onChange={(e) => updateField("category", e.target.value)}
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]"
                        />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Tag</label>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-muted-foreground" />
                          <input
                            value={ep.tag}
                            onChange={(e) => updateField("tag", e.target.value)}
                            className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">CTA Type</label>
                        <select
                          value={ep.ctaType}
                          onChange={(e) => updateField("ctaType", e.target.value)}
                          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]"
                        >
                          <option value="CTA Type 1">CTA Type 1 — Register Now</option>
                          <option value="CTA Type 2">CTA Type 2 — More Details</option>
                          <option value="CTA Type 3">CTA Type 3 — Contact Us</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Titles — multilingual */}
                  <div className="p-5 border-b border-border/50 bg-muted/10">
                    <h4 className="text-[0.85rem] text-muted-foreground mb-4">Titles (Multilingual)</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Title — English</label>
                        <input value={ep.title} onChange={(e) => updateField("title", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Title — Hebrew</label>
                        <input value={ep.titleHe} onChange={(e) => updateField("titleHe", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" dir="rtl" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Title — Russian</label>
                        <input value={ep.titleRu} onChange={(e) => updateField("titleRu", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" />
                      </div>
                    </div>
                    <div className="space-y-3 mt-5">
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Subtitle — English</label>
                        <textarea value={ep.subtitle} onChange={(e) => updateField("subtitle", e.target.value)} rows={2} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem] resize-none" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Subtitle — Hebrew</label>
                        <textarea value={ep.subtitleHe} onChange={(e) => updateField("subtitleHe", e.target.value)} rows={2} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem] resize-none" dir="rtl" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">Subtitle — Russian</label>
                        <textarea value={ep.subtitleRu} onChange={(e) => updateField("subtitleRu", e.target.value)} rows={2} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem] resize-none" />
                      </div>
                    </div>
                    {/* CTA text */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">CTA — English</label>
                        <input value={ep.ctaEn} onChange={(e) => updateField("ctaEn", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">CTA — Hebrew</label>
                        <input value={ep.ctaHe} onChange={(e) => updateField("ctaHe", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" dir="rtl" />
                      </div>
                      <div>
                        <label className="text-[0.75rem] text-muted-foreground mb-1 block">CTA — Russian</label>
                        <input value={ep.ctaRu} onChange={(e) => updateField("ctaRu", e.target.value)} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-[0.85rem]" />
                      </div>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="p-5 border-b border-border/50 bg-muted/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[0.85rem] text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Locations & Schedule
                      </h4>
                      <button onClick={addLocation} className="flex items-center gap-1.5 text-[0.8rem] text-[#818cf8] hover:underline">
                        <Plus className="w-3.5 h-3.5" /> Add Location
                      </button>
                    </div>
                    <div className="space-y-3">
                      {ep.locations.map((loc, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
                          <GripVertical className="w-4 h-4 text-muted-foreground mt-2.5 shrink-0 cursor-grab" />
                          <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-3">
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">City</label>
                              <input value={loc.city} onChange={(e) => updateLocation(idx, "city", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Date</label>
                              <input value={loc.date} onChange={(e) => updateLocation(idx, "date", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Time</label>
                              <input value={loc.time} onChange={(e) => updateLocation(idx, "time", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Spots</label>
                              <input type="number" value={loc.spots} onChange={(e) => updateLocation(idx, "spots", +e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Total</label>
                              <input type="number" value={loc.total} onChange={(e) => updateLocation(idx, "total", +e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                          </div>
                          <button onClick={() => removeLocation(idx)} className="p-1.5 hover:bg-destructive/10 rounded mt-2 shrink-0">
                            <Trash2 className="w-3.5 h-3.5 text-destructive" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="p-5 border-b border-border/50 bg-muted/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[0.85rem] text-muted-foreground">Bullet Points (Card Description)</h4>
                      <button onClick={addBullet} className="flex items-center gap-1.5 text-[0.8rem] text-[#818cf8] hover:underline">
                        <Plus className="w-3.5 h-3.5" /> Add Bullet
                      </button>
                    </div>
                    <div className="space-y-4">
                      {ep.bullets.map((bullet, idx) => (
                        <div key={idx} className="p-4 bg-background border border-border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[0.75rem] text-muted-foreground">Bullet #{idx + 1}</span>
                            <button onClick={() => removeBullet(idx)} className="p-1 hover:bg-destructive/10 rounded">
                              <Trash2 className="w-3 h-3 text-destructive" />
                            </button>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">English</label>
                              <input value={bullet.english} onChange={(e) => updateBullet(idx, "english", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Hebrew</label>
                              <input value={bullet.hebrew} onChange={(e) => updateBullet(idx, "hebrew", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" dir="rtl" />
                            </div>
                            <div>
                              <label className="text-[0.7rem] text-muted-foreground mb-1 block">Russian</label>
                              <input value={bullet.russian} onChange={(e) => updateBullet(idx, "russian", e.target.value)} className="w-full px-2.5 py-1.5 border border-border rounded text-[0.8rem]" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 flex items-center justify-between bg-muted/20">
                    <button
                      onClick={() => { setExpandedId(null); setEditingProgram(null); }}
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-[0.85rem] hover:bg-muted/50"
                    >
                      <X className="w-4 h-4" /> Cancel
                    </button>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 border border-destructive/30 text-destructive rounded-lg text-[0.85rem] hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                      <button
                        onClick={saveProgram}
                        className="flex items-center gap-2 px-5 py-2 bg-[#818cf8] text-white rounded-lg text-[0.85rem] hover:bg-[#6366f1] transition-colors"
                      >
                        <Check className="w-4 h-4" /> Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
