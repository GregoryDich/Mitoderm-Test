'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactUs() {
  const t = useTranslations('contact');

  const contactItems = [
    { icon: Phone, label: t('phoneLabel'), value: t('phoneValue') },
    { icon: MapPin, label: t('addressLabel'), value: t('addressValue') },
    { icon: Mail, label: t('emailLabel'), value: t('emailValue') },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/mitoderm.israel', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/mitoderm_israel/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/mitoderm', label: 'LinkedIn' },
  ];

  return (
    <section className="bg-[#1a2744] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white"
        >
          {t('heading')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <item.icon className="mx-auto mb-4 h-8 w-8 text-[#dfba74]" />
              <p className="mb-2 text-sm text-white/60">{item.label}</p>
              <p className="font-medium text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm text-white/60">{t('follow')}</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
