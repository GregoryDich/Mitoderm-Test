import React from 'react';
import { motion } from 'motion/react';

interface AboutUsProps {
  heading: string;
  body: string;
  cta: string;
}

export default function AboutUs({ heading, body, cta }: AboutUsProps) {
  return (
    <section className="bg-gradient-to-b from-[#1a2744] to-[#0f1829] py-16 md:py-20" dir="rtl">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold text-[#dfba74] md:mb-8 md:text-5xl"
        >
          {heading}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative rounded-3xl bg-white/5 p-8 backdrop-blur-sm md:p-12"
        >
          {/* Decorative corners */}
          <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-[#dfba74]/30 rounded-tl-3xl" />
          <div className="absolute right-0 bottom-0 h-20 w-20 border-r-2 border-b-2 border-[#dfba74]/30 rounded-br-3xl" />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="whitespace-pre-wrap text-base leading-relaxed text-white/90 md:text-lg"
          >
            {body}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(223, 186, 116, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-full bg-gradient-to-r from-[#fcd384] to-[#ffefcb] px-8 py-3 font-bold text-[#222] shadow-lg transition md:mt-10 md:px-10 md:py-4"
          >
            {cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}