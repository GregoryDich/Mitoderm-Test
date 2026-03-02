'use client';

import React from 'react';

const MAIN_SITE_URL = 'https://mitoderm.vercel.app/he';

export default function Footer() {
  return (
    <footer className="w-full bg-black" dir="rtl">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-[88px] md:flex-row-reverse md:gap-8 md:px-8">
        {/* Copyright */}
        <span
          className="text-center text-sm md:text-right"
          style={{ color: '#787677' }}
        >
          © {new Date().getFullYear()} MitoDerm. כל הזכויות שמורות.
        </span>

        {/* Links */}
        <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-8">
          <button
            className="cursor-pointer text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            נגישות
          </button>

          <button
            className="cursor-pointer text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            מדיניות פרטיות
          </button>

          <a
            href={MAIN_SITE_URL}
            className="text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            MitoDerm Group
          </a>
        </div>
      </div>
    </footer>
  );
}
