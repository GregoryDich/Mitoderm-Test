'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { WorkshopVariant } from '@/types';

interface InviteSectionProps {
  variant: WorkshopVariant;
}

export default function InviteSection({ variant }: InviteSectionProps) {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-[#1a2744] via-[#2a3654] to-[#1a2744] py-12 text-center shadow-2xl"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 h-64 w-64 rounded-full bg-[#dfba74]/10 blur-3xl end-[-5rem]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-20 h-64 w-64 rounded-full bg-[#be800c]/10 blur-3xl start-[-5rem]"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-3xl font-normal leading-tight text-[#be800c] md:text-4xl"
        >
          <span>{t(`v${variant}.invite.title`)}</span>
          <span className="font-bold text-[#dfba74]">{t(`v${variant}.invite.titleAccent`)}</span>
          <span>{t(`v${variant}.invite.titleEnd`)}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10 mx-auto mt-6 max-w-4xl whitespace-pre-wrap text-base leading-relaxed tracking-wide text-[#f8ecd6] md:text-lg"
        >
          <span>{t(`v${variant}.invite.body`)}</span>
          <span className="font-semibold text-[#dfba74]">{t(`v${variant}.invite.bodyAccent`)}</span>
          <span>{t(`v${variant}.invite.bodyEnd`)}</span>
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(252, 211, 132, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="relative z-10 mt-10 inline-flex items-center gap-3 rounded-[72px] bg-gradient-to-r from-[#fcd384] to-[#ffefcb] px-12 py-6 text-sm font-bold tracking-wide text-[#222] shadow-xl transition"
        >
          <span>{t(`v${variant}.invite.cta`)}</span>
          <ArrowLeft className="h-4 w-4" />
        </motion.a>

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute inset-inline-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent"
        />
      </motion.div>
    </section>
  );
}
