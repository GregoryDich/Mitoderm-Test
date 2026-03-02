'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, Briefcase, TrendingUp, Rocket } from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

export default function ProcessTimeline() {
  const steps: Step[] = [
    {
      icon: BookOpen,
      title: 'שלב 1: הרשמה וייעוץ',
      description: 'פגישת היכרות אישית, בחירת המסלול המתאים וקבלת כל המידע',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Users,
      title: 'שלב 2: לימוד תיאורטי',
      description: 'השתתפות במפגשים פרונטליים עם מרצים מובילים והכרת החומרים',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Briefcase,
      title: 'שלב 3: פרקטיקה מעשית',
      description: 'תרגול מעשי עם ציוד מקצועי, עבודה על מודלים וליווי צמוד',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'שלב 4: התמחות קלינית',
      description: 'עבודה בקליניקות מובילות על לקוחות אמיתיים ובניית ניסיון',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Award,
      title: 'שלב 5: קבלת הסמכה',
      description: 'סיום מוצלח, קבלת תעודה מוכרת ותיק עבודות מקצועי',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Rocket,
      title: 'שלב 6: השקה מקצועית',
      description: 'ליווי עסקי, הקמת קליניקה והצלחה מקצועית מלאה!',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-[#dfba74] md:text-4xl">המסע המקצועי שלך</h2>
          <p className="mt-3 text-base text-white/70">6 שלבים להצלחה מקצועית מלאה</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute right-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-[#dfba74] via-white/20 to-[#dfba74] md:right-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] shadow-lg md:absolute md:right-1/2 md:translate-x-1/2"
                >
                  <div className="h-4 w-4 rounded-full bg-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 rounded-2xl bg-white/5 p-6 backdrop-blur-sm ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left md:pr-0 md:pl-8'
                  }`}
                >
                  <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${step.color} p-3`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{step.description}</p>

                  {/* Step Number */}
                  <div className="mt-4 inline-flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfba74]/20 text-sm font-bold text-[#dfba74]">
                      {i + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for desktop */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-10 py-4 font-bold text-white shadow-2xl transition hover:shadow-3xl"
          >
            התחל את המסע שלך עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
