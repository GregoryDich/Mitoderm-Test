import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function DreamSolution() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-16 h-16 text-yellow-300" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            אתם חולמים
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              אנחנו הפתרון שלכם
            </span>
          </h2>

          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            הפכו את החלום שלכם למציאות עם ההכשרה המקצועית המובילה בישראל
          </p>
        </motion.div>
      </div>
    </section>
  );
}
