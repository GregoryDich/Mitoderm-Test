'use client';

import React from 'react';
import { motion } from 'motion/react';
const speaker1 = "/images/speaker1.png";
const speaker2 = "/images/speaker2.png";
const speaker3 = "/images/speaker3.png";

interface Speaker {
  name: string;
  title: string;
  bio?: string;
  image: string;
}

interface SpeakersProps {
  heading: string;
  speakers: Speaker[];
}

export default function Speakers({ heading, speakers }: SpeakersProps) {
  const speakerImages = [speaker1, speaker2, speaker3];

  return (
    <section className="bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-16" dir="rtl">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-[#dfba74] md:text-4xl"
        >
          {heading}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition hover:shadow-2xl"
            >
              {/* Speaker Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={speakerImages[idx]}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Speaker Info */}
              <div className="p-4 text-center md:p-6">
                <h3 className="text-lg font-bold text-[#1a2744] md:text-xl">{speaker.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#dfba74]">{speaker.title}</p>
                {speaker.bio && (
                  <p className="mt-3 text-xs leading-relaxed text-gray-600 md:text-sm">
                    {speaker.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}