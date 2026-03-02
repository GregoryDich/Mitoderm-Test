'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import type { ScrollItems } from '@/types';

const MAIN_SITE_URL = 'https://mitoderm.vercel.app';

const navScrollIds: ScrollItems[] = ['products', 'more-info', 'agenda', 'results', 'contact-us'];
const navKeys = ['products', 'info', 'agenda', 'results', 'contact'] as const;

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const siteUrl = `${MAIN_SITE_URL}/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleScrollTo = (scrollId: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(scrollId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className="fixed inset-inline-0 top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-8">
          {/* Logo -> Main site */}
          <a href={siteUrl} className="flex-shrink-0 select-none" draggable={false}>
            <Image
              src="/images/logo.png"
              alt="MITODERM"
              width={120}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
              draggable={false}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navScrollIds.map((scrollId, i) => (
              <button
                key={scrollId}
                onClick={() => handleScrollTo(scrollId)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; }}
              >
                {t(navKeys[i])}
              </button>
            ))}

            {/* Registration CTA */}
            <button
              onClick={onRegisterClick}
              className="ms-2 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-5 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              {t('register')}
            </button>
          </nav>

          {/* Back to site link (desktop) */}
          <a
            href={siteUrl}
            className="hidden text-xs transition-colors duration-300 lg:block"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'; }}
          >
            {t('backToSite')}
          </a>

          {/* Burger Menu Button (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className="block h-0.5 w-full rounded-full bg-white transition-transform duration-300"
                style={{
                  transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
                }}
              />
              <span
                className="block h-0.5 w-full rounded-full bg-white transition-opacity duration-300"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 w-full rounded-full bg-white transition-transform duration-300"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className="fixed top-0 z-45 h-full w-[280px] overflow-y-auto transition-transform duration-300 lg:hidden end-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 45,
          paddingTop: '80px',
        }}
      >
        <nav className="flex flex-col gap-1 px-5">
          {navScrollIds.map((scrollId, i) => (
            <button
              key={scrollId}
              onClick={() => handleScrollTo(scrollId)}
              className="rounded-lg px-4 py-3 text-start text-base font-medium transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
            >
              {t(navKeys[i])}
            </button>
          ))}

          <button
            onClick={() => {
              setIsMenuOpen(false);
              onRegisterClick();
            }}
            className="mt-4 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-6 py-3 text-base font-bold text-white shadow-lg"
          >
            {t('register')}
          </button>

          <a
            href={siteUrl}
            className="mt-6 block border-t border-white/10 pt-4 text-center text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            {t('backToSite')}
          </a>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
