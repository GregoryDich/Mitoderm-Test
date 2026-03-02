import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../../app/components/Hero';
import Navbar from '../../app/components/Navbar';
import BenefitGrid from '../../app/components/BenefitGrid';
import EventDetails from '../../app/components/EventDetails';

describe('Accessibility Tests', () => {
  describe('Hero Accessibility', () => {
    const heroProps = {
      kicker: '',
      titleParts: [{ text: 'Test Title' }],
      subtitleLines: ['Subtitle'],
      cta: 'Click Here',
      sideNote: 'Note',
    };

    it('has proper heading hierarchy', () => {
      const { container } = render(<Hero {...heroProps} />);
      const h1 = container.querySelector('h1');
      expect(h1).toBeInTheDocument();
    });

    it('button has accessible name', () => {
      const { getByRole } = render(<Hero {...heroProps} />);
      const button = getByRole('button');
      expect(button).toHaveAccessibleName();
    });

    it('image has alt text', () => {
      const { getByAltText } = render(<Hero {...heroProps} />);
      const image = getByAltText('MitoDerm Workshop');
      expect(image).toBeInTheDocument();
    });
  });

  describe('Navbar Accessibility', () => {
    const navProps = {
      items: ['Home', 'About'],
      lang: 'EN',
    };

    it('uses semantic nav element', () => {
      const { container } = render(<Navbar {...navProps} />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });

    it('links have proper href attributes', () => {
      const { getAllByRole } = render(<Navbar {...navProps} />);
      const links = getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('BenefitGrid Accessibility', () => {
    const items = ['Benefit 1', 'Benefit 2'];

    it('has proper heading', () => {
      const { container } = render(<BenefitGrid items={items} />);
      const heading = container.querySelector('h2');
      expect(heading).toBeInTheDocument();
    });

    it('uses semantic HTML', () => {
      const { container } = render(<BenefitGrid items={items} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('EventDetails Accessibility', () => {
    const eventProps = {
      heading: 'Event',
      dateLabel: 'Date',
      dateValue: '01.01.26',
      timeLabel: 'Time',
      timeValue: '10:00',
      locationLabel: 'Location',
      locationValue: 'Tel Aviv',
      extraLocationValue: 'Haifa',
      extraDateValue: '02.01.26',
      extraTimeValue: '11:00',
    };

    it('has semantic section element', () => {
      const { container } = render(<EventDetails {...eventProps} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('has proper heading hierarchy', () => {
      const { container } = render(<EventDetails {...eventProps} />);
      const h2 = container.querySelector('h2');
      const h3 = container.querySelector('h3');
      expect(h2).toBeInTheDocument();
      expect(h3).toBeInTheDocument();
    });

    it('buttons are keyboard accessible', () => {
      const { getAllByRole } = render(<EventDetails {...eventProps} />);
      const buttons = getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAttribute('type');
      });
    });
  });

  describe('RTL Support', () => {
    it('Hero has RTL direction', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'עברית' }],
        subtitleLines: [],
        cta: 'לחץ',
        sideNote: '',
      }} />);
      const rtl = container.querySelector('[dir="rtl"]');
      expect(rtl).toBeInTheDocument();
    });

    it('EventDetails has RTL direction', () => {
      const { container } = render(<EventDetails {...{
        heading: 'כותרת',
        dateLabel: 'תאריך',
        dateValue: '01.01.26',
        timeLabel: 'שעה',
        timeValue: '10:00',
        locationLabel: 'מיקום',
        locationValue: 'תל אביב',
        extraLocationValue: 'חיפה',
        extraDateValue: '02.01.26',
        extraTimeValue: '11:00',
      }} />);
      const rtl = container.querySelector('[dir="rtl"]');
      expect(rtl).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('buttons are focusable', () => {
      const { getByRole } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: [],
        cta: 'Submit',
        sideNote: '',
      }} />);
      const button = getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Color Contrast', () => {
    it('uses high contrast text colors', () => {
      const { container } = render(<Hero {...{
        kicker: '',
        titleParts: [{ text: 'Test' }],
        subtitleLines: ['Sub'],
        cta: 'Click',
        sideNote: '',
      }} />);
      
      // Check for white text on dark background
      const whiteText = container.querySelector('.text-white');
      expect(whiteText).toBeInTheDocument();
    });
  });
});
