'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import type { WorkshopVariant } from '@/types';

interface AgendaAccordionProps {
  variant: WorkshopVariant;
}

export default function AgendaAccordion({ variant }: AgendaAccordionProps) {
  const t = useTranslations();
  const items = t(`v${variant}.topics.items`).split('|');

  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        >
          {t(`v${variant}.topics.heading`)}
        </motion.h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-[32px] bg-white p-6 shadow-lg transition md:p-8"
            >
              <p className="text-start text-base leading-relaxed text-[#1a2744] md:text-lg">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-12 py-4 text-lg font-bold text-white shadow-2xl transition hover:shadow-3xl"
          >
            {t(`v${variant}.topics.cta`)}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
