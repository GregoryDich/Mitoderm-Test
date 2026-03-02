'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: 'רחל כהן',
      role: 'קוסמטיקאית מוסמכת',
      text: 'הסדנה של MitoDerm שינתה את הקריירה שלי לחלוטין! הידע המקצועי והכלים שקיבלתי אפשרו לי להרחיב את מגוון הטיפולים בקליניקה ולהכפיל את ההכנסות.',
      rating: 5,
    },
    {
      name: 'דוד לוי',
      role: 'בעל קליניקת אסתטיקה',
      text: 'ההכשרה הכי מקצועית שעברתי! המרצים מומחים אמיתיים, הציוד מתקדם, והליווי האישי לא נגמר גם אחרי הקורס.',
      rating: 5,
    },
    {
      name: 'שרה אברהם',
      role: 'מספרה ומעצבת שיער',
      text: 'התחלתי ללמוד טריכולוגיה כתוספת לתחום המספרה שלי. היום אני מציעה פתרונות מקצועיים לנשירת שיער והלקוחות מתלהבים!',
      rating: 5,
    },
    {
      name: 'מיכל ברק',
      role: 'קוסמטיקאית רפואית',
      text: 'טכנולוגיית האקסוזומים שלמדתי בקורס היא פשוט מהפכה! התוצאות מדהימות והלקוחות שלי מרוצים מאוד.',
      rating: 5,
    },
    {
      name: 'יוסי כהן',
      role: 'בעל מכון יופי',
      text: 'ההשקעה בקורס החזירה את עצמה פי 10! הידע המעשי והליווי העסקי עזרו לי להקים קליניקה מצליחה.',
      rating: 5,
    },
    {
      name: 'נועה לוין',
      role: 'קוסמטיקאית פנים',
      text: 'הקורס הכי מקיף שעשיתי בחיים. שילוב מושלם של תיאוריה ופרקטיקה, עם מרצים שבאמת אכפת להם.',
      rating: 5,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      
      if (direction === 'right') {
        // Scroll to the right (negative in RTL)
        scrollContainerRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        // Scroll to the left (positive in RTL)
        scrollContainerRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#1a2744] to-[#0f1829] py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#dfba74] md:text-4xl">מה אומרים הבוגרים שלנו</h2>
          <p className="mt-3 text-base text-white/70">אלפי מקצוענים סומכים עלינו</p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0f1829] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0f1829] to-transparent" />

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex-shrink-0"
              >
                <div className="relative h-full w-[360px] overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition hover:shadow-2xl">
                  {/* Quote Icon Background */}
                  <div className="absolute left-4 top-4 opacity-5">
                    <Quote className="h-20 w-20 text-[#dfba74]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="mb-4 flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-[#dfba74] text-[#dfba74]" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-6 text-center text-sm leading-relaxed text-gray-700">
                      "{testimonial.text}"
                    </p>

                    {/* Divider */}
                    <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />

                    {/* Author */}
                    <div className="text-center">
                      <h4 className="font-bold text-[#1a2744]">{testimonial.name}</h4>
                      <p className="mt-1 text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#dfba74]/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:bg-gray-50 md:block"
          >
            <ChevronLeft className="h-6 w-6 text-[#1a2744]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:bg-gray-50 md:block"
          >
            <ChevronRight className="h-6 w-6 text-[#1a2744]" />
          </motion.button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}