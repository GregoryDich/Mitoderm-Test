'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const t = useTranslations('modal');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('errors.phoneRequired');
    } else if (!/^05\d{8}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = t('errors.phoneInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    onSubmit(formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1a2744] to-[#2a3654] p-6 text-start">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute end-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                <h2 className="text-2xl font-bold text-white">{t('title')}</h2>
                <p className="mt-2 text-sm text-white/70">{t('subtitle')}</p>

                <div className="absolute -top-10 h-32 w-32 rounded-full bg-[#dfba74]/10 blur-2xl end-[-2.5rem]" />
                <div className="absolute -bottom-10 h-32 w-32 rounded-full bg-[#be800c]/10 blur-2xl start-[-2.5rem]" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <User className="h-4 w-4 text-[#dfba74]" />
                    <span>{t('nameLabel')}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 px-4 py-3 text-start text-gray-800 transition focus:border-[#dfba74] focus:outline-none focus:ring-2 focus:ring-[#dfba74]/20`}
                    placeholder={t('namePlaceholder')}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Mail className="h-4 w-4 text-[#dfba74]" />
                    <span>{t('emailLabel')}</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 px-4 py-3 text-start text-gray-800 transition focus:border-[#dfba74] focus:outline-none focus:ring-2 focus:ring-[#dfba74]/20`}
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Phone className="h-4 w-4 text-[#dfba74]" />
                    <span>{t('phoneLabel')}</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 px-4 py-3 text-start text-gray-800 transition focus:border-[#dfba74] focus:outline-none focus:ring-2 focus:ring-[#dfba74]/20`}
                    placeholder={t('phonePlaceholder')}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MessageSquare className="h-4 w-4 text-[#dfba74]" />
                    <span>{t('messageLabel')}</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-start text-gray-800 transition focus:border-[#dfba74] focus:outline-none focus:ring-2 focus:ring-[#dfba74]/20"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#dfba74] to-[#be800c] px-6 py-4 font-bold text-white shadow-lg transition ${
                    isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>{t('submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{t('submit')}</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-gray-500">{t('consent')}</p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
