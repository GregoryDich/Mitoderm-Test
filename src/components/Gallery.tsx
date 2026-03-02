'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslations } from 'next-intl';
import type { WorkshopVariant } from '@/types';

interface GalleryProps {
  variant: WorkshopVariant;
}

export default function Gallery({ variant }: GalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations();

  const slides = [
    {
      before: 'https://images.unsplash.com/photo-1579801874037-f28c38c7edbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      before: 'https://images.unsplash.com/photo-1622399591207-269e63936861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      before: 'https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1630499584934-799ffc384651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const goToSlide = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {t(`v${variant}.gallery.heading`)}
          </h2>
        </motion.div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide('next')}
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white md:-left-16"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-[#1a2744]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide('prev')}
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white md:-right-16"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-[#1a2744]" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[60px] bg-gradient-to-br from-white/95 to-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-[32px] shadow-lg"
                  >
                    <img
                      src={slides[currentSlide].before}
                      alt="Before treatment"
                      className="h-[280px] w-full object-cover md:h-[320px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-[32px] shadow-lg"
                  >
                    <img
                      src={slides[currentSlide].after}
                      alt="After treatment"
                      className="h-[280px] w-full object-cover md:h-[320px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8">
                  <span className="text-xl font-bold text-[#1a2744] md:text-2xl">
                    {t(`v${variant}.gallery.before`)}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba74] to-[#be800c] shadow-lg">
                    <span className="text-xl font-bold text-white">&amp;</span>
                  </div>
                  <span className="text-xl font-bold text-[#1a2744] md:text-2xl">
                    {t(`v${variant}.gallery.after`)}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <span className="text-lg font-semibold text-[#dfba74]">
            {currentSlide + 1} / {slides.length}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-12 py-4 text-lg font-bold text-white shadow-2xl transition"
          >
            {t(`v${variant}.gallery.cta`)}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
