import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from "figma:asset/57fb638753c0478b1c3c1931763552dc7613e3c3.png";

interface HeroProps {
  kicker: string;
  titleParts: { text: string; accent?: "gold" }[];
  subtitleLines: string[];
  cta: string;
  sideNote: string;
  onCtaClick?: () => void;
}

export default function Hero({ kicker, titleParts, subtitleLines, cta, sideNote, onCtaClick }: HeroProps) {
  const handleWhatsAppClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const phoneNumber = '972543262182';
      const message = encodeURIComponent('שלום! אני מעוניין/ת לקבל פרטים נוספים על הקורסים של MitoDerm');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2744] via-[#0f1829] to-[#1a2744]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#dfba74]/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#be800c]/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-right"
            dir="rtl"
          >
            {sideNote && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#dfba74]/30 bg-[#dfba74]/10 px-5 py-2 text-sm font-medium text-[#dfba74] backdrop-blur-sm"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#dfba74]" />
                {sideNote}
              </motion.div>
            )}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              {titleParts.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.accent === "gold"
                      ? "bg-gradient-to-r from-[#fcd384] via-[#dfba74] to-[#be800c] bg-clip-text text-transparent"
                      : "text-white"
                  }
                >
                  {part.text}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-3"
            >
              {subtitleLines.map((line, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 font-bold text-white shadow-2xl transition"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{cta}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Left: Hero Image - Vertical Format */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl"
            style={{ aspectRatio: '4/5' }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={heroImage}
              alt="MitoDerm Workshop"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}