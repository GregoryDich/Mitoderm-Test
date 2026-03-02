'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
const logo = '/images/logo.png';

interface FooterProps {
  line1: string;
  line2: string;
}

export default function Footer({ line1, line2 }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0f1829] py-8">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="MITODERM Logo" className="h-16 w-auto opacity-80" />
          </div>
          
          <p className="whitespace-pre-wrap text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{line1}</p>
          <p className="mt-2 text-xs" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>{line2}</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs"
            style={{ color: 'rgba(255, 255, 255, 0.3)' }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-3 w-3 fill-[#dfba74] text-[#dfba74]" />
            </motion.div>
            <span>by MitoDerm Team</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}