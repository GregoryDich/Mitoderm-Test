'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const MAIN_SITE_URL = 'https://mitoderm.vercel.app';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const siteUrl = `${MAIN_SITE_URL}/${locale}`;

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-[88px] md:flex-row-reverse md:gap-8 md:px-8">
        {/* Copyright */}
        <span
          className="text-center text-sm md:text-start"
          style={{ color: '#787677' }}
        >
          {t('copyright', { year: new Date().getFullYear() })}
        </span>

        {/* Links */}
        <div className="flex flex-col items-center gap-2.5 md:flex-row md:gap-8">
          <button
            className="cursor-pointer text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            {t('accessibility')}
          </button>

          <button
            className="cursor-pointer text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            {t('privacy')}
          </button>

          <a
            href={siteUrl}
            className="text-sm transition-colors duration-300"
            style={{ color: '#787677' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#787677'; }}
          >
            {t('group')}
          </a>
        </div>
      </div>
    </footer>
  );
}
