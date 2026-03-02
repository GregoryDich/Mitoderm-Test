import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import productImage from "figma:asset/c1eb92465613ac721cd7383eb6fc03967ed5f33c.png";

interface VTechTeaserProps {
  badge: string;
  title1: string;
  title2: string;
  body: string;
  bullets: string[];
  footnote: string;
}

export default function VTechTeaser({ badge, title1, title2, body, bullets, footnote }: VTechTeaserProps) {
  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16 md:py-20" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 flex items-center justify-center md:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={productImage}
                alt="MitoDerm Products"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#dfba74]/10 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 space-y-4 text-right md:order-2 md:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block rounded-full bg-[#dfba74]/20 px-4 py-2 text-sm font-medium text-[#dfba74]"
            >
              {badge}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white md:text-3xl">{title1}</h3>
              <p className="text-base text-[#dfba74] md:text-lg">{title2}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="whitespace-pre-wrap text-sm leading-relaxed text-white/90 md:text-base"
            >
              {body}
            </motion.p>

            <ul className="space-y-2 md:space-y-3">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: -5 }}
                  className="flex items-start gap-2 text-sm text-white/90 md:gap-3 md:text-base"
                >
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#dfba74] md:h-5 md:w-5" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xs text-white/60 md:text-sm"
            >
              {footnote}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}