import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, BookOpen, Trophy, Target, Zap } from 'lucide-react';

interface BenefitGridProps {
  items: string[];
}

const icons = [Award, Users, BookOpen, Trophy, Target, Zap];

export default function BenefitGrid({ items }: BenefitGridProps) {
  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">למה לבחור בנו?</h2>
          <p className="mt-2 text-sm text-white/60">היתרונות שיעזרו לך להצליח</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#dfba74]/40 hover:bg-white/10 hover:shadow-xl"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dfba74]/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba74]/20 to-[#be800c]/20"
                  >
                    <Icon className="h-6 w-6 text-[#dfba74]" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-xs font-medium leading-tight text-white md:text-sm">{item}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}