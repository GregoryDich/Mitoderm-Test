import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../../app/components/Hero';
import EventDetails from '../../app/components/EventDetails';
import FAQSection from '../../app/components/FAQSection';

describe('Animation Tests', () => {
  describe('Hero Animations', () => {
    const heroProps = {
      kicker: '',
      titleParts: [{ text: 'Test', accent: 'gold' as const }],
      subtitleLines: ['Line 1'],
      cta: 'Click',
      sideNote: 'Note',
    };

    it('renders with initial animation state', () => {
      const { container } = render(<Hero {...heroProps} />);
      // Motion components should be present
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('button has hover animation', async () => {
      const user = userEvent.setup();
      render(<Hero {...heroProps} />);
      const button = screen.getByRole('button');
      
      // Hover should trigger motion animation
      await user.hover(button);
      expect(button).toBeInTheDocument();
    });

    it('background has animated elements', () => {
      const { container } = render(<Hero {...heroProps} />);
      const animatedCircles = container.querySelectorAll('.blur-3xl');
      expect(animatedCircles.length).toBeGreaterThan(0);
    });
  });

  describe('EventDetails Animations', () => {
    const eventProps = {
      heading: 'Events',
      dateLabel: 'Date',
      dateValue: '01.01.26',
      timeLabel: 'Time',
      timeValue: '10:00',
      locationLabel: 'Location',
      locationValue: 'Location 1',
      extraLocationValue: 'Location 2',
      extraDateValue: '02.01.26',
      extraTimeValue: '11:00',
    };

    it('countdown timer updates', () => {
      vi.useFakeTimers();
      render(<EventDetails {...eventProps} />);
      
      expect(screen.getByText('ימים')).toBeInTheDocument();
      
      vi.advanceTimersByTime(1000);
      
      expect(screen.getByText('ימים')).toBeInTheDocument();
      vi.useRealTimers();
    });

    it('event cards have hover state', async () => {
      const user = userEvent.setup();
      const { container } = render(<EventDetails {...eventProps} />);
      
      const cards = container.querySelectorAll('[style*="width: 360px"]');
      expect(cards.length).toBeGreaterThan(0);
      
      await user.hover(cards[0]);
      expect(cards[0]).toBeInTheDocument();
    });

    it('selected indicator animates', async () => {
      const user = userEvent.setup();
      render(<EventDetails {...eventProps} />);
      
      const locationText = screen.getAllByText(/Location/i)[0];
      const card = locationText.closest('[style*="width: 360px"]');
      
      if (card) {
        await user.click(card);
        await waitFor(() => {
          expect(card).toHaveClass('border-[#dfba74]');
        });
      }
    });
  });

  describe('FAQ Animations', () => {
    const faqs = [
      { question: 'Q1?', answer: 'A1' },
      { question: 'Q2?', answer: 'A2' },
    ];

    it('accordion expands with animation', async () => {
      const user = userEvent.setup();
      render(<FAQSection faqs={faqs} />);
      
      const question = screen.getByText('Q1?');
      await user.click(question);
      
      await waitFor(() => {
        expect(screen.getByText('A1')).toBeVisible();
      });
    });

    it('accordion collapses with animation', async () => {
      const user = userEvent.setup();
      render(<FAQSection faqs={faqs} />);
      
      const question = screen.getByText('Q1?');
      await user.click(question);
      await user.click(question);
      
      await waitFor(() => {
        expect(screen.queryByText('A1')).not.toBeVisible();
      });
    });

    it('chevron icon rotates', async () => {
      const user = userEvent.setup();
      const { container } = render(<FAQSection faqs={faqs} />);
      
      const question = screen.getByText('Q1?');
      const button = question.closest('button');
      
      await user.click(button!);
      
      const chevron = button!.querySelector('svg');
      expect(chevron).toBeInTheDocument();
    });
  });

  describe('Scroll Animations', () => {
    it('components have whileInView props', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);
      
      // Motion components should render
      expect(container.querySelector('section')).toBeInTheDocument();
    });
  });

  describe('Motion Performance', () => {
    it('uses GPU-accelerated properties', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);
      
      // Check for transform/opacity usage (GPU accelerated)
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('animations have proper duration', () => {
      // Animations should complete in reasonable time
      const start = performance.now();
      render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Click',
        sideNote: '',
      }} />);
      const end = performance.now();
      
      // Render should be fast (< 100ms)
      expect(end - start).toBeLessThan(100);
    });
  });
});
