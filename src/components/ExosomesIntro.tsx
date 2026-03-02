'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import type { WorkshopVariant } from '@/types';

interface ExosomesIntroProps {
  variant: WorkshopVariant;
}

export default function ExosomesIntro({ variant }: ExosomesIntroProps) {
  const t = useTranslations();

  const cards = [
    { title: t(`v${variant}.exosomes.card1Title`), body: t(`v${variant}.exosomes.card1Body`) },
    { title: t(`v${variant}.exosomes.card2Title`), body: t(`v${variant}.exosomes.card2Body`) },
    { title: t(`v${variant}.exosomes.card3Title`), body: t(`v${variant}.exosomes.card3Body`) },
  ];

  return (
    <section className="bg-[#0f1829] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold text-[#dfba74]">
            {t(`v${variant}.exosomes.heading`)}
          </h2>
          <p className="text-lg text-white/80">{t(`v${variant}.exosomes.subheading`)}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-start backdrop-blur-sm transition hover:bg-white/10"
            >
              <h3 className="mb-4 text-xl font-bold text-[#dfba74]">{card.title}</h3>
              <p className="leading-relaxed text-white/90">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-center text-sm text-white/60"
        >
          {t(`v${variant}.exosomes.footer`)}
        </motion.p>
      </div>
    </section>
  );
}
