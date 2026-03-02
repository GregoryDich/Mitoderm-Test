import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BeforeAfterGallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dividerPosition, setDividerPosition] = useState(50);

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
      label: 'טיפול פנים מתקדם'
    },
    {
      before: 'https://images.unsplash.com/photo-1559599238-7a8a750d6f6e?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      label: 'טיפול קרקפת'
    },
    {
      before: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
      label: 'טריכולוגיה מקצועית'
    }
  ];

  const nextImage = () => {
    setSlideIndex((slideIndex + 1) % beforeAfterImages.length);
    setDividerPosition(50);
  };

  const previousImage = () => {
    setSlideIndex((slideIndex - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    setDividerPosition(50);
  };

  const updateDivider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDividerPosition(Number(event.target.value));
  };

  const selectSlide = (index: number) => {
    setSlideIndex(index);
    setDividerPosition(50);
  };

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            תוצאות מרשימות
          </h2>
          <p className="text-xl text-gray-300">
            לפני ואחרי - ראו את ההשפעה המקצועית
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative max-w-4xl mx-auto">
          {/* Comparison Container */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-black mb-8">
            {/* After Image Base Layer */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={beforeAfterImages[slideIndex].after}
                alt="After treatment result"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                אחרי
              </span>
            </div>

            {/* Before Image Clipped Layer */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
            >
              <ImageWithFallback
                src={beforeAfterImages[slideIndex].before}
                alt="Before treatment"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                לפני
              </span>
            </div>

            {/* Vertical Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-10"
              style={{ left: `${dividerPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-purple-600" />
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </div>
            </div>

            {/* Image Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium z-10">
              {beforeAfterImages[slideIndex].label}
            </div>
          </div>

          {/* Slider Control */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-white text-sm font-medium w-12 text-center">לפני</span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={dividerPosition}
              onChange={updateDivider}
              aria-label="Compare before and after"
              className="w-full max-w-md h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-purple-500
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:hover:bg-purple-600
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-purple-500
                [&::-moz-range-thumb]:cursor-pointer
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:shadow-lg"
            />
            <span className="text-white text-sm font-medium w-12 text-center">אחרי</span>
          </div>

          {/* Previous Button */}
          <button
            onClick={previousImage}
            type="button"
            aria-label="Previous image"
            className="absolute top-1/3 -left-4 md:-left-16 bg-white rounded-full p-3 md:p-4 shadow-xl hover:bg-purple-50 hover:scale-105 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            type="button"
            aria-label="Next image"
            className="absolute top-1/3 -right-4 md:-right-16 bg-white rounded-full p-3 md:p-4 shadow-xl hover:bg-purple-50 hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => selectSlide(index)}
                type="button"
                aria-label={`View image ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === slideIndex
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-600 w-3 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
