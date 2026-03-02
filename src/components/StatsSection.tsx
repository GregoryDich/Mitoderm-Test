'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  labelKey: string;
}

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats: StatItem[] = [
    { icon: Users, value: 500, suffix: '+', labelKey: 'experts' },
    { icon: Award, value: 15, suffix: '+', labelKey: 'years' },
    { icon: Briefcase, value: 50, suffix: '+', labelKey: 'workshops' },
    { icon: TrendingUp, value: 98, suffix: '%', labelKey: 'satisfaction' },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#dfba74] md:text-4xl">{t('heading')}</h2>
          <p className="mt-3 text-base text-white/70">{t('subtitle')}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.1} label={t(stat.labelKey)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay, label }: { stat: StatItem; delay: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(stat.value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#dfba74]/0 to-[#dfba74]/0 opacity-0 transition-opacity group-hover:from-[#dfba74]/10 group-hover:to-[#be800c]/10 group-hover:opacity-100" />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: 'spring', stiffness: 200 }}
        className="relative z-10"
      >
        <stat.icon className="mx-auto mb-4 h-12 w-12 text-[#dfba74]" />
      </motion.div>

      <div className="relative z-10 mb-2 text-4xl font-bold text-white md:text-5xl">
        {count}
        <span className="text-[#dfba74]">{stat.suffix}</span>
      </div>

      <div className="relative z-10 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}
