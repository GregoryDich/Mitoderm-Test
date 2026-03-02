import React from 'react';
import { motion } from 'motion/react';

interface DirectionCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function DirectionCard({ title, description, icon, index }: DirectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-purple-100 hover:border-purple-300"
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="absolute top-4 left-4 w-12 h-12 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
    </motion.div>
  );
}
