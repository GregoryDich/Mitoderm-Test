import React from 'react';
import { motion } from 'motion/react';
import logo from 'figma:asset/706c33f15a9e0d6ed9eaaf8286119c3d1bb192c7.png';

interface NavbarProps {
  items: string[];
  lang: string;
}

export default function Navbar({ items, lang }: NavbarProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const id = item.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#1a2744]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img src={logo} alt="MITODERM Logo" className="h-14 w-auto md:h-16" />
        </motion.div>
        
        <div className="hidden items-center gap-8 md:flex">
          {items.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm transition"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{lang}</div>
      </div>
    </motion.nav>
  );
}