import React from 'react';
import { motion } from 'motion/react';

interface ExosomesIntroProps {
  heading: string;
  subheading: string;
  cards: { title: string; body: string }[];
  footerLine: string;
}

export default function ExosomesIntro({ heading, subheading, cards, footerLine }: ExosomesIntroProps) {
  return (
    <section className="bg-[#0f1829] py-16" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold text-[#dfba74]">{heading}</h2>
          <p className="text-lg text-white/80">{subheading}</p>
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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-right backdrop-blur-sm transition hover:bg-white/10"
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
          {footerLine}
        </motion.p>
      </div>
    </section>
  );
}