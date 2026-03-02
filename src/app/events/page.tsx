'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';
import { Calendar, Clock, MapPin, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgendaAccordion from '../components/AgendaAccordion';
import Speakers from '../components/Speakers';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import RegistrationModal from '../components/RegistrationModal';
import { eventsContent } from '../../lib/eventsContent';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(0);
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

      {/* Upcoming Events Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-20" dir="rtl" id="אירועים">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#dfba74]/5 blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#be800c]/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex justify-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#dfba74] to-[#be800c] shadow-xl"
              >
                <Sparkles className="h-7 w-7 text-white" />
              </motion.div>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{c.upcomingEvents.heading}</h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{c.upcomingEvents.subtitle}</p>
          </motion.div>

          {/* Event Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {c.upcomingEvents.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedEvent(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border-2 transition-all ${
                  selectedEvent === index
                    ? 'border-[#dfba74] shadow-2xl shadow-[#dfba74]/20'
                    : 'border-white/10 hover:border-[#dfba74]/50'
                }`}
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} ${selectedEvent === index ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                <div className="absolute inset-0 bg-[#1a2744] opacity-95" />

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute left-4 top-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white"
                    >
                      האירוע הקרוב
                    </motion.div>
                  </div>
                )}

                {/* Selected Indicator */}
                {selectedEvent === index && (
                  <motion.div
                    layoutId="event-selected"
                    className="absolute right-4 top-4 z-10"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <Check className="h-5 w-5 text-[#dfba74]" />
                    </div>
                  </motion.div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Location */}
                  <div className="mb-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${selectedEvent === index ? 'bg-white/20' : 'bg-[#dfba74]/20'} transition-colors`}>
                        <MapPin className={`h-8 w-8 ${selectedEvent === index ? 'text-white' : 'text-[#dfba74]'} transition-colors`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{event.location}</h3>
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-center text-lg font-bold text-[#dfba74]">{event.title}</h4>
                  <p className="mb-6 text-center text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {event.description}
                  </p>

                  {/* Date */}
                  <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Calendar className="h-5 w-5 text-[#dfba74]" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>תאריך</div>
                      <div className="font-bold text-white">{event.date}</div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Clock className="h-5 w-5 text-[#dfba74]" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>שעות</div>
                      <div className="font-bold text-white">{event.time}</div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className={`w-full rounded-full bg-gradient-to-r ${event.color} px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-xl`}
                  >
                    הרשמה לאירוע
                  </motion.button>
                </div>

                {/* Bottom glow for selected */}
                {selectedEvent === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
