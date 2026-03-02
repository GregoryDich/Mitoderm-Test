'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { WorkshopVariant } from '@/types';

interface EventDetailsProps {
  variant: WorkshopVariant;
}

interface EventItem {
  id: number;
  date: string;
  time: string;
  location: string;
  featured?: boolean;
  color: string;
}

export default function EventDetails({ variant }: EventDetailsProps) {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const tp = useTranslations('eventPhotos');

  const events: EventItem[] = [
    {
      id: 1,
      date: t(`v${variant}.eventDetails.dateValue`),
      time: t(`v${variant}.eventDetails.timeValue`),
      location: t(`v${variant}.eventDetails.locationValue`),
      featured: true,
      color: 'from-[#dfba74] to-[#be800c]',
    },
    {
      id: 2,
      date: t(`v${variant}.eventDetails.extraDate`),
      time: t(`v${variant}.eventDetails.extraTime`),
      location: t(`v${variant}.eventDetails.extraLocation`),
      color: 'from-[#be800c] to-[#9a6600]',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      const currentScroll = scrollContainerRef.current.scrollLeft;

      if (direction === 'right') {
        scrollContainerRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const pastEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdHJhaW5pbmclMjB3b3Jrc2hvcCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzIyMDg0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Feb 2024',
      location: 'Tel Aviv',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1758691736591-5bf31a5d0dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlbWluYXIlMjBtZWV0aW5nJTIwcm9vbSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzcyMjA4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jan 2024',
      location: 'Haifa',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1766867257943-0665537fb2dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHRyYWluaW5nJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjA4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Dec 2023',
      location: 'Jerusalem',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc2hvcCUyMHBlb3BsZSUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MjIwODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Nov 2023',
      location: 'Beer Sheva',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1670382417551-d2f1ee29aea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzIyMDg0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Oct 2023',
      location: 'Netanya',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGdyb3VwJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjA4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Sep 2023',
      location: 'Ashdod',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1829] to-[#1a2744] py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 h-64 w-64 rounded-full bg-[#dfba74]/5 blur-3xl end-[-5rem]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 h-64 w-64 rounded-full bg-[#be800c]/5 blur-3xl start-[-5rem]"
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
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t(`v${variant}.eventDetails.heading`)}
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            {t(`v${variant}.eventDetails.selectLabel`)}
          </p>
        </motion.div>

        {/* Event Selection Cards */}
        <div className="relative mb-12">
          <div
            ref={scrollContainerRef}
            className="flex justify-center gap-6 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedEvent(index)}
                className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border-2 transition-all ${
                  selectedEvent === index
                    ? 'border-[#dfba74] shadow-2xl shadow-[#dfba74]/20'
                    : 'border-white/10 hover:border-[#dfba74]/50'
                }`}
                style={{
                  width: '360px',
                  scrollSnapAlign: 'center',
                  scrollSnapStop: 'always',
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.color} ${selectedEvent === index ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                />
                <div className="absolute inset-0 bg-[#1a2744] opacity-95" />

                {event.featured && (
                  <div className="absolute start-4 top-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white"
                    >
                      {tp('recommended')}
                    </motion.div>
                  </div>
                )}

                {selectedEvent === index && (
                  <motion.div layoutId="selected-indicator" className="absolute end-4 top-4 z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <Check className="h-5 w-5 text-[#dfba74]" />
                    </div>
                  </motion.div>
                )}

                <div className="relative z-10 p-8">
                  <div className="mb-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${selectedEvent === index ? 'bg-white/20' : 'bg-[#dfba74]/20'} transition-colors`}
                      >
                        <MapPin
                          className={`h-8 w-8 ${selectedEvent === index ? 'text-white' : 'text-[#dfba74]'} transition-colors`}
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{event.location}</h3>
                  </div>

                  <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Calendar className="h-5 w-5 text-[#dfba74]" />
                    </div>
                    <div className="flex-1 text-start">
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {t(`v${variant}.eventDetails.dateLabel`)}
                      </div>
                      <div className="font-bold text-white">{event.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Clock className="h-5 w-5 text-[#dfba74]" />
                    </div>
                    <div className="flex-1 text-start">
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {t(`v${variant}.eventDetails.timeLabel`)}
                      </div>
                      <div className="font-bold text-white">{event.time}</div>
                    </div>
                  </div>
                </div>

                {selectedEvent === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white md:block"
          >
            <ChevronLeft className="h-6 w-6 text-[#1a2744]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white md:block"
          >
            <ChevronRight className="h-6 w-6 text-[#1a2744]" />
          </motion.button>
        </div>

        {/* Past Events Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl">{tp('heading')}</h3>
            <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-transparent via-[#dfba74] to-transparent" />
            <p className="mt-4 text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {tp('subtitle')}
            </p>
          </div>

          <div className="relative">
            <div
              className="flex gap-6 overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
              }}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: '320px', height: '240px' }}
                >
                  <img
                    src={event.image}
                    alt={event.location}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute right-4 top-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                      className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-3 py-1 text-xs font-bold text-white shadow-xl"
                    >
                      {event.date}
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4 text-[#dfba74]" />
                      <span className="font-bold">{event.location}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-[#dfba74]/50" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
