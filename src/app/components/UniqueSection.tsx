import React from 'react';
import { motion } from 'motion/react';
import uniqueImage from "figma:asset/2f92854d54037db0c021a9b43639fe218d311665.png";

interface UniqueProps {
  titleParts: { text: string; accent?: "gold" }[];
  bodyParts: { text: string; accent?: "gold" }[];
}

export default function UniqueSection({ titleParts, bodyParts }: UniqueProps) {
  return (
    <section className="bg-gradient-to-b from-[#1a2744] to-[#0f1829] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-[#dfba74]/20 to-[#be800c]/10 p-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={uniqueImage}
                alt="Golden Beauty"
                className="h-full w-full rounded-3xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#dfba74]/30 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center rounded-[40px] bg-white p-8 text-[#222] shadow-2xl md:p-12"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl leading-tight md:text-4xl"
            >
              {titleParts.map((p, i) => (
                <span key={i} className={p.accent === "gold" ? "text-[#be800c] font-bold" : ""}>
                  {p.text}
                </span>
              ))}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 whitespace-pre-wrap text-base leading-relaxed tracking-wide text-[#451715]"
            >
              {bodyParts.map((p, i) => (
                <span key={i} className={p.accent === "gold" ? "text-[#be800c] font-semibold" : ""}>
                  {p.text}
                </span>
              ))}
            </motion.p>

            {/* Decorative element */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 h-1 rounded-full bg-gradient-to-r from-[#dfba74] to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}