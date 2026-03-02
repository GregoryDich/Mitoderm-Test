'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { WorkshopVariant } from '@/lib/workshopContent';

interface CourseSelectionProps {
  heading: string;
  onRegisterClick: () => void;
  onVisibilityChange?: (isVisible: boolean) => void;
  selectedVariant: WorkshopVariant;
  onVariantChange: (variant: WorkshopVariant) => void;
}

export default function CourseSelection({ heading, onRegisterClick, onVisibilityChange, selectedVariant, onVariantChange }: CourseSelectionProps) {
  const variantToIndex: Record<WorkshopVariant, number> = { '990': 0, '180': 1, '480': 2 };
  const indexToVariant: WorkshopVariant[] = ['990', '180', '480'];
  const selectedCourse = variantToIndex[selectedVariant];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (onVisibilityChange) onVisibilityChange(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [onVisibilityChange]);

  const courses = [
    { id: 0, badge: 'מיועד לקוסמטיקאיות', title: 'השתלמות מקצועית בתחום השיער', subtitle: 'בהנחיית צוות מיטודרם', description: ['יסודות מיקרונידלינג לקרקפת', 'שימוש באקסוזומים לשיקום הקרקפת והאצת צמיחת שיער', 'אבחון בעיות קרקפת והתאמת פרוטוקולים קליניים יעילים', 'שילוב הטיפולים בעסק ליצירת תוצאות ומכירות'], color: 'from-[#c4a764] to-[#a68a4d]', featured: false, image: '/images/speaker1.png' },
    { id: 1, badge: 'מיועד למעצבי שיער', title: 'הדרכה ייעודית למעצבי שיער', subtitle: 'היכרות עם עולם הקרקפת מזווית טריכולוגית מתקדמת', description: ['הבנת תהליכי נשירה וצמיחת שיער', 'עבודה נכונה עם הקרקפת כחלק מטיפול השיער', 'שילוב פתרונות חדשניים לשיקום הקרקפת ולהאצת צמיחה', 'הפיכת ידע מקצועי לכלי בידול, תוצאות וערך מוסף ללקוחות'], color: 'from-[#dfba74] to-[#be800c]', featured: true, image: '/images/speaker2.png' },
    { id: 2, badge: 'מיועד לעולם האסתטיקה', title: 'MITODERM הצעה ראשונה לעתיד עולם האסתטיקה', subtitle: 'מזמינו אתכם להכיר', description: ['תהליכי נשירת שיער וצמיחה', 'היכרות עם עולם האקסוזומים והשילוב שלהם', 'עבודה נכונה ומדויקת עם הקרקפת', 'שילוב פתרונות חדשניים לשיקום הקרקפת, חיזוק זקיקי השיער והאצת צמיחה', 'הפיכת ידע טריכולוגי לכלי בידול מקצועי, תוצאות נראות לעין וערך מוסף אמיתי ללקוחות'], color: 'from-[#be800c] to-[#9a6600]', featured: false, image: '/images/speaker3.png' },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-20" dir="rtl">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#dfba74]/5 blur-3xl" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#be800c]/5 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-[#fcd384] via-[#dfba74] to-[#be800c] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">{heading}</h2>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          {courses.map((course, index) => {
            const isSelected = selectedCourse === course.id;
            const isFeatured = course.featured;
            return (
              <motion.div key={course.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} onClick={() => onVariantChange(indexToVariant[course.id])} style={{ scale: isSelected ? 1.08 : 1, zIndex: isSelected ? 30 : 20 }} className={`group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ${isSelected ? 'border-[#dfba74] shadow-2xl shadow-[#dfba74]/30' : 'border-white/10 hover:border-[#dfba74]/50'} bg-gradient-to-br from-[#1a2744]/95 to-[#0f1829]/95 backdrop-blur-sm`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 transition-opacity ${isSelected ? 'opacity-10' : 'group-hover:opacity-10'}`} />
                {isFeatured && (<div className="absolute left-4 top-4 z-10"><motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }} className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white shadow-lg">מומלץ</motion.div></div>)}
                <div className="relative z-10 p-4 pb-0"><div className={`inline-flex rounded-full bg-gradient-to-r ${course.color} px-4 py-2 text-xs font-bold text-white shadow-lg`}>{course.badge}</div></div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={course.image} alt={course.title} fill className="object-cover object-top" style={{ objectPosition: 'center 20%' }} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-20`} />
                </div>
                <div className="relative z-10 p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{course.title}</h3>
                  <p className="mb-4 text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{course.subtitle}</p>
                  <div className="mb-6 space-y-3">
                    {course.description.map((item, i) => (<div key={i} className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#dfba74]" /><p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{item}</p></div>))}
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={(e) => { e.stopPropagation(); onRegisterClick(); }} className={`w-full rounded-full bg-gradient-to-r ${course.color} px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-xl`}>הרשמה</motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
