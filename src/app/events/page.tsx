'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { toast, Toaster } from 'sonner';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgendaAccordion from '../components/AgendaAccordion';
import Speakers from '../components/Speakers';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import RegistrationModal from '../components/RegistrationModal';
import CourseSection from '../components/CourseSection';
import { eventsContent } from '../../lib/eventsContent';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const c = eventsContent;

  const handleRegistration = (data: any) => {
    console.log('Registration data:', data);
    toast.success('הפרטים נשלחו בהצלחה!', {
      description: 'נחזור אליך בהקדם האפשרי',
      duration: 5000,
    });
  };

  return (
    <main className="min-h-screen bg-[#1a2744] text-white">
      <Toaster
        position="top-center"
        richColors
        closeButton
        dir="rtl"
      />

      <Navbar items={c.nav.items} lang={c.nav.lang} />

      <Hero
        {...c.hero}
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Course Selection Section */}
      <div id="אירועים">
        <CourseSection
          courses={c.upcomingEvents.events.map((event) => ({
            id: event.id,
            city: event.location,
            date: event.date,
            time: event.time,
            recommended: event.featured,
          }))}
          heading={c.upcomingEvents.heading}
          subtitle={c.upcomingEvents.subtitle}
        />
      </div>

      {/* Agenda */}
      <div id="תכנית">
        <AgendaAccordion heading={c.agenda.heading} items={c.agenda.items} cta={c.agenda.cta} />
      </div>

      {/* Speakers */}
      <div id="מרצים">
        <Speakers heading={c.speakers.heading} speakers={c.speakers.speakers} />
      </div>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#dfba74] via-[#be800c] to-[#dfba74] py-12"
      >
        <div className="mx-auto max-w-4xl px-4 text-center" dir="rtl">
          <h3 className="text-2xl font-bold text-white md:text-3xl">מקומות מוגבלים - הירשמו עכשיו!</h3>
          <p className="mt-3 text-base text-white/90">הבטיחו את מקומכם באירוע המקצועי הבא של MitoDerm</p>
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

      {/* Past Events Gallery */}
      <section className="bg-gradient-to-b from-[#1a2744] to-[#0f1829] py-20" dir="rtl" id="גלריה">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">{c.pastEvents.heading}</h2>
            <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />
            <p className="mt-4 text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {c.pastEvents.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.pastEvents.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ height: '260px' }}
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={`תמונה מ${photo.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Date Badge */}
                <div className="absolute right-4 top-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white shadow-xl"
                  >
                    {photo.date}
                  </motion.div>
                </div>

                {/* Location */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4 text-[#dfba74]" />
                    <span className="font-bold">{photo.location}</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-[#dfba74]/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <div id="צור-קשר">
        <ContactUs {...c.contact} />
      </div>

      <Footer {...c.footer} />
      <ScrollToTop />

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRegistration}
      />
    </main>
  );
}
