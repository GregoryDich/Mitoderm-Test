'use client';

import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photo {
  src: string;
  alt: string;
}

export function EventPhotos() {
  const photos: Photo[] = [
    { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', alt: 'Event photo 1' },
    { src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', alt: 'Event photo 2' },
    { src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80', alt: 'Event photo 3' },
    { src: 'https://images.unsplash.com/photo-1583339793403-3d9b001b6008?w=600&q=80', alt: 'Event photo 4' },
    { src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80', alt: 'Event photo 5' },
    { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', alt: 'Event photo 6' }
  ];

  return (
    <section className="py-14 border-b border-[#e7e7e7]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-2xl border border-[#e7e7e7] overflow-hidden bg-[#f7f7f7]"
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
