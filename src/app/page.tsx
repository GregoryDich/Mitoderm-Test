'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';
import RegistrationModal from '@/components/RegistrationModal';
import { contentByVariant, WorkshopVariant } from '@/lib/workshopContent';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BenefitGrid from '@/components/BenefitGrid';
import AgendaAccordion from '@/components/AgendaAccordion';
import CourseSelection from '@/components/CourseSelection';
import Gallery from '@/components/Gallery';
import ExosomesIntro from '@/components/ExosomesIntro';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import UniqueSection from '@/components/UniqueSection';
import InviteSection from '@/components/InviteSection';
import StatsSection from '@/components/StatsSection';
import EventDetails from '@/components/EventDetails';

export default function WorkshopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [variant, setVariant] = useState<WorkshopVariant>("180");
  const [showStickyBar, setShowStickyBar] = useState(false);

  const c = contentByVariant[variant] ?? contentByVariant["990"];

  const handleRegistration = (data: any) => {
    console.log('Registration data:', data);
    toast.success('הפרטים נשלחו בהצלחה!', {
      description: 'נחזור אליך בהקדם האפשרי',
      duration: 5000,
    });
  };

  const handleCourseVisibility = (isVisible: boolean) => {
    setShowStickyBar(!isVisible);
  };

  return (
    <main className="min-h-screen bg-[#1a2744] text-white">
      <Toaster
        position="top-center"
        richColors
        closeButton
        dir="rtl"
      />

      <Navbar onRegisterClick={() => setIsModalOpen(true)} />
      <Hero
        {...c.hero}
        onCtaClick={() => setIsModalOpen(true)}
        titleParts={[
          { text: 'בחרו את ' },
          { text: 'ההשתלמות', accent: 'gold' },
          { text: ' שמתאימה לכם' }
        ]}
        subtitleLines={[
          'ההשתלמות במקצועיות ומיומנויות הכשרתיות - לקוסמ׳, מעצבי שיער, וטרינרים ופרא-רפואיים'
        ]}
      />

      <div id="products">
        <BenefitGrid items={c.benefits} />
      </div>

      <CourseSelection
        heading="המרצים שלנו"
        onRegisterClick={() => setIsModalOpen(true)}
        onVisibilityChange={handleCourseVisibility}
        selectedVariant={variant}
        onVariantChange={(newVariant) => {
          setVariant(newVariant);
        }}
      />

      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sticky top-20 z-40 mx-auto max-w-md px-4 py-4"
          >
            <div className="flex gap-2 rounded-full bg-white/10 p-2 backdrop-blur-md">
              {(['990', '180', '480'] as WorkshopVariant[]).map((v) => (
                <motion.button
                  key={v}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setVariant(v);
                  }}
                  className={`flex-1 rounded-full px-4 py-2 text-sm font-bold transition ${
                    variant === v
                      ? 'bg-gradient-to-r from-[#dfba74] to-[#be800c] text-white shadow-lg'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {v === '990' ? 'סדנה' : v === '180' ? '180 שעות' : '480 שעות'}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="more-info">
        <InviteSection {...c.invite} />
      </div>

      <div id="agenda">
        <AgendaAccordion heading={c.topics.heading} items={c.topics.items} cta={c.topics.cta} />
      </div>

      <EventDetails {...c.eventDetails} />

      <UniqueSection titleParts={c.unique.titleParts} bodyParts={c.unique.bodyParts} />

      <div id="results">
        <Gallery {...c.gallery} />
      </div>

      <ExosomesIntro {...c.exosomesIntro} />

      <StatsSection />

      <div id="contact-us">
        <ContactUs {...c.contact} />
      </div>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#dfba74] via-[#be800c] to-[#dfba74] py-12"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">מוכנים להתחיל את המסע המקצועי שלכם?</h3>
          <p className="mt-3 text-base text-white/90">הצטרפו לאלפי בוגרים מצליחים</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="mt-6 rounded-full bg-white px-10 py-4 font-bold text-[#1a2744] shadow-xl transition hover:bg-gray-50"
          >
            הרשמה עכשיו
          </motion.button>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRegistration}
      />
    </main>
  );
}
