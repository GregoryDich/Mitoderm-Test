'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Check, Star } from 'lucide-react';

interface Course {
  id: number;
  city: string;
  date: string;
  time: string;
  recommended?: boolean;
}

const defaultCourses: Course[] = [
  { id: 1, city: 'תל אביב', date: '15.04.26', time: '10:00 - 14:00', recommended: true },
  { id: 2, city: 'ירושלים', date: '22.04.26', time: '10:00 - 14:00' },
  { id: 3, city: 'חיפה', date: '29.04.26', time: '10:00 - 14:00' },
  { id: 4, city: 'באר שבע', date: '06.05.26', time: '10:00 - 14:00' },
];

interface CourseSectionProps {
  courses?: Course[];
  heading?: string;
  subtitle?: string;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 520);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

function Checkbox({ isSelected, size = 22 }: { isSelected: boolean; size?: number }) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full transition-all ${
        isSelected
          ? 'bg-gradient-to-br from-[#d4af37] to-[#c5960c]'
          : 'border-[1.5px] border-white/15 bg-transparent'
      }`}
      style={{ width: size, height: size }}
    >
      {isSelected && <Check className="h-3 w-3 text-[#0a1628]" strokeWidth={3} />}
    </div>
  );
}

function DesktopRow({
  c,
  isSelected,
  onSelect,
  index,
}: {
  c: Course;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      dir="rtl"
      className={`relative flex w-full items-center justify-between overflow-hidden rounded-xl border-[1.5px] px-5 py-3.5 transition-all ${
        isSelected
          ? 'border-[#d4af37]/60 bg-gradient-to-br from-[#d4af37]/15 to-[#d4af37]/5'
          : 'border-white/8 bg-white/4 hover:border-white/15 hover:bg-white/6'
      }`}
    >
      {/* Recommended Badge */}
      {c.recommended && (
        <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-gradient-to-br from-[#d4af37] to-[#c5960c] px-3 py-0.5 text-[11px] font-bold text-[#0a1628]">
          מומלץ
        </span>
      )}

      {/* City */}
      <div className="flex min-w-[100px] items-center gap-2.5">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
            isSelected ? 'bg-[#d4af37]/20' : 'bg-white/6'
          }`}
        >
          <MapPin
            className={`h-4 w-4 transition-colors ${isSelected ? 'text-[#d4af37]' : 'text-[#8892a4]'}`}
          />
        </div>
        <span className="whitespace-nowrap text-[15px] font-semibold text-white">{c.city}</span>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-white/8" />

      {/* Date */}
      <div className="flex items-center gap-2">
        <Calendar className="h-[13px] w-[13px] text-[#8892a4]" />
        <span className="whitespace-nowrap text-sm text-[#c0c8d8]">{c.date}</span>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-white/8" />

      {/* Time */}
      <div className="flex items-center gap-2">
        <Clock className="h-[13px] w-[13px] text-[#8892a4]" />
        <span className="whitespace-nowrap text-sm text-[#c0c8d8]">{c.time}</span>
      </div>

      {/* Checkbox */}
      <Checkbox isSelected={isSelected} />
    </motion.button>
  );
}

function MobileRow({
  c,
  isSelected,
  onSelect,
  index,
}: {
  c: Course;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      dir="rtl"
      className={`relative w-full overflow-hidden rounded-xl border-[1.5px] px-3.5 py-3 text-right transition-all ${
        isSelected
          ? 'border-[#d4af37]/60 bg-gradient-to-br from-[#d4af37]/15 to-[#d4af37]/5'
          : 'border-white/8 bg-white/4 hover:border-white/15'
      }`}
    >
      {/* Recommended Badge */}
      {c.recommended && (
        <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-gradient-to-br from-[#d4af37] to-[#c5960c] px-2.5 py-0.5 text-[10px] font-bold text-[#0a1628]">
          מומלץ
        </span>
      )}

      {/* Line 1: city + checkbox */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-[7px] transition-colors ${
              isSelected ? 'bg-[#d4af37]/20' : 'bg-white/6'
            }`}
          >
            <MapPin
              className={`h-3.5 w-3.5 transition-colors ${isSelected ? 'text-[#d4af37]' : 'text-[#8892a4]'}`}
            />
          </div>
          <span className="text-[15px] font-semibold text-white">{c.city}</span>
        </div>
        <Checkbox isSelected={isSelected} size={20} />
      </div>

      {/* Line 2: date + time in a subtle bar */}
      <div className="flex items-center gap-3 rounded-lg bg-black/20 px-2.5 py-[7px]">
        <div className="flex items-center gap-[5px]">
          <Calendar className="h-3 w-3 text-[#8892a4]" />
          <span className="whitespace-nowrap text-[13px] text-[#9aa3b5]">{c.date}</span>
        </div>
        <div className="h-3.5 w-px bg-white/8" />
        <div className="flex items-center gap-[5px]">
          <Clock className="h-3 w-3 text-[#8892a4]" />
          <span className="whitespace-nowrap text-[13px] text-[#9aa3b5]">{c.time}</span>
        </div>
      </div>
    </motion.button>
  );
}

export default function CourseSection({
  courses = defaultCourses,
  heading = 'פרטי הקורס',
  subtitle = 'בחר מיקום ותאריך מועדף',
}: CourseSectionProps) {
  const [selected, setSelected] = useState(courses[0]?.id ?? 1);
  const isMobile = useIsMobile();

  return (
    <section
      className="bg-gradient-to-b from-[#0b1a2e] via-[#091422] to-[#060e1a] px-4 py-10 md:px-6 md:py-10"
      dir="rtl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-5 text-center md:mb-7"
      >
        <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#d4af37] to-[#c5960c]">
          <Star className="h-[22px] w-[22px] text-[#0a1628]" strokeWidth={2.2} />
        </div>
        <h2 className="mb-1.5 text-xl font-bold text-white md:text-[22px]">{heading}</h2>
        <p className="text-sm text-[#6b7485]">{subtitle}</p>
      </motion.div>

      {/* Rows */}
      <div className="mx-auto flex max-w-[620px] flex-col gap-2.5">
        {courses.map((c, index) =>
          isMobile ? (
            <MobileRow
              key={c.id}
              c={c}
              isSelected={selected === c.id}
              onSelect={() => setSelected(c.id)}
              index={index}
            />
          ) : (
            <DesktopRow
              key={c.id}
              c={c}
              isSelected={selected === c.id}
              onSelect={() => setSelected(c.id)}
              index={index}
            />
          )
        )}
      </div>
    </section>
  );
}
