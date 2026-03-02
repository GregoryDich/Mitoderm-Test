'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MAIN_SITE_URL = 'https://mitoderm.vercel.app/he';

const navItems = [
  { text: 'מוצרים', scrollId: 'products' },
  { text: 'מידע נוסף', scrollId: 'more-info' },
  { text: 'סדר יום', scrollId: 'agenda' },
  { text: 'תוצאות', scrollId: 'results' },
  { text: 'צור קשר', scrollId: 'contact-us' },
];

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        className="fixed left-0 right-0 top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-8">
          {/* Logo → Main site */}
          <a href={MAIN_SITE_URL} className="flex-shrink-0 select-none" draggable={false}>
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
          <nav className="hidden items-center gap-1 lg:flex" dir="rtl">
            {navItems.map((item) => (
              <button
                key={item.scrollId}
                onClick={() => handleScrollTo(item.scrollId)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; }}
              >
                {item.text}
              </button>
            ))}

            {/* Registration CTA */}
            <button
              onClick={onRegisterClick}
              className="mr-2 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-5 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              הרשמה
            </button>
          </nav>

          {/* Back to site link (desktop) */}
          <a
            href={MAIN_SITE_URL}
            className="hidden text-xs transition-colors duration-300 lg:block"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'; }}
          >
            חזרה לאתר ←
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
        className="fixed right-0 top-0 z-45 h-full w-[280px] overflow-y-auto transition-transform duration-300 lg:hidden"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 45,
          paddingTop: '80px',
        }}
        dir="rtl"
      >
        <nav className="flex flex-col gap-1 px-5">
          {navItems.map((item) => (
            <button
              key={item.scrollId}
              onClick={() => handleScrollTo(item.scrollId)}
              className="rounded-lg px-4 py-3 text-right text-base font-medium transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
            >
              {item.text}
            </button>
          ))}

          <button
            onClick={() => {
              setIsMenuOpen(false);
              onRegisterClick();
            }}
            className="mt-4 rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-6 py-3 text-base font-bold text-white shadow-lg"
          >
            הרשמה
          </button>

          <a
            href={MAIN_SITE_URL}
            className="mt-6 block border-t border-white/10 pt-4 text-center text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            חזרה לאתר הראשי ←
          </a>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
