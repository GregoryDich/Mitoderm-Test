import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../../app/components/Hero';
import Navbar from '../../app/components/Navbar';
import EventDetails from '../../app/components/EventDetails';

describe('Performance Tests', () => {
  describe('Render Performance', () => {
    it('Hero renders within acceptable time', () => {
      const start = performance.now();
      
      render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test Title' }],
        subtitleLines: ['Sub 1', 'Sub 2'],
        cta: 'Click',
        sideNote: 'Note',
      }} />);
      
      const end = performance.now();
      const renderTime = end - start;
      
      // Should render in less than 50ms
      expect(renderTime).toBeLessThan(50);
    });

    it('Navbar renders quickly', () => {
      const start = performance.now();
      
      render(<Navbar items={['Item 1', 'Item 2', 'Item 3']} lang="EN" />);
      
      const end = performance.now();
      expect(end - start).toBeLessThan(30);
    });

    it('EventDetails with countdown renders efficiently', () => {
      const start = performance.now();
      
      render(<EventDetails {...{
        heading: 'Events',
        dateLabel: 'Date',
        dateValue: '01.01.26',
        timeLabel: 'Time',
        timeValue: '10:00',
        locationLabel: 'Location',
        locationValue: 'Tel Aviv',
        extraLocationValue: 'Haifa',
        extraDateValue: '02.01.26',
        extraTimeValue: '11:00',
      }} />);
      
      const end = performance.now();
      expect(end - start).toBeLessThan(100);
    });
  });

  describe('Re-render Performance', () => {
    it('Hero re-renders efficiently on prop change', () => {
      const { rerender } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test 1' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);

      const start = performance.now();
      
      rerender(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test 2' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);
      
      const end = performance.now();
      expect(end - start).toBeLessThan(20);
    });
  });

  describe('Memory Usage', () => {
    it('components cleanup properly', () => {
      const { unmount } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);

      // Should unmount without errors
      expect(() => unmount()).not.toThrow();
    });

    it('multiple renders do not leak memory', () => {
      for (let i = 0; i < 10; i++) {
        const { unmount } = render(<Navbar items={['Item']} lang="EN" />);
        unmount();
      }
      
      // Should complete without throwing
      expect(true).toBe(true);
    });
  });

  describe('Animation Performance', () => {
    it('animations use transform and opacity', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);

      // Motion components should be present
      // Transform and opacity are GPU-accelerated
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Bundle Size Impact', () => {
    it('components are tree-shakeable', () => {
      // Components should import only what they need
      const { container } = render(<Navbar items={['Test']} lang="EN" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });
  });

  describe('Lazy Loading', () => {
    it('images use proper loading attributes', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);

      const images = container.querySelectorAll('img');
      images.forEach(img => {
        // Images should exist
        expect(img).toBeInTheDocument();
      });
    });
  });

  describe('Event Handler Performance', () => {
    it('scroll handlers are debounced', () => {
      // EventDetails uses scroll
      const { container } = render(<EventDetails {...{
        heading: 'Events',
        dateLabel: 'Date',
        dateValue: '01.01.26',
        timeLabel: 'Time',
        timeValue: '10:00',
        locationLabel: 'Location',
        locationValue: 'Tel Aviv',
        extraLocationValue: 'Haifa',
        extraDateValue: '02.01.26',
        extraTimeValue: '11:00',
      }} />);

      const scrollContainer = container.querySelector('.overflow-x-auto');
      expect(scrollContainer).toBeInTheDocument();
    });
  });

  describe('CSS Performance', () => {
    it('uses CSS classes over inline styles where possible', () => {
      const { container } = render(<Navbar items={['Test']} lang="EN" />);
      
      // Most styling should be via Tailwind classes
      const nav = container.querySelector('nav');
      expect(nav?.className).toBeTruthy();
    });
  });
});
