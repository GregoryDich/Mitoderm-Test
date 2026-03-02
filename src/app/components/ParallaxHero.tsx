'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0f1829] via-[#1a2744] to-[#0f1829]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="h-4 w-4 text-[#dfba74]/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          <span className="bg-gradient-to-r from-[#dfba74] via-[#fcd384] to-[#dfba74] bg-clip-text text-transparent">
            העתיד של היופי
          </span>
          <br />
          <span className="text-white">מתחיל כאן</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg md:text-xl"
          style={{ color: 'rgba(255, 255, 255, 0.8)' }}
        >
          הצטרפו למהפכה של הקוסמטיקה הרפואית עם הטכנולוגיות המתקדמות ביותר
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(223, 186, 116, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-12 py-4 text-lg font-bold text-white shadow-2xl"
          >
            גלה עוד
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/60">גלול למטה</span>
            <div className="h-12 w-6 rounded-full border-2 border-white/30">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-2 rounded-full bg-[#dfba74]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}