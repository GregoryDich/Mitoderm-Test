import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../../app/components/Hero';

describe('Hero Component', () => {
  const mockProps = {
    kicker: 'Test Kicker',
    titleParts: [
      { text: 'תחום הקרקפת', accent: 'gold' as const },
      { text: ' ועולם הטריקולוגיה' },
    ],
    subtitleLines: ['קו משנה 1', 'קו משנה 2'],
    cta: 'הרשמה דרך WhatsApp',
    sideNote: 'עוסק בתחום השיער?',
  };

  it('renders Hero component correctly', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('תחום הקרקפת')).toBeInTheDocument();
    expect(screen.getByText('עוסק בתחום השיער?')).toBeInTheDocument();
  });

  it('displays all subtitle lines', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('קו משנה 1')).toBeInTheDocument();
    expect(screen.getByText('קו משנה 2')).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    render(<Hero {...mockProps} />);
    const ctaButton = screen.getByRole('button', { name: /הרשמה דרך WhatsApp/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('opens WhatsApp link when CTA is clicked', async () => {
    const user = userEvent.setup();
    const windowOpenSpy = vi.spyOn(window, 'open');
    
    render(<Hero {...mockProps} />);
    const ctaButton = screen.getByRole('button', { name: /הרשמה דרך WhatsApp/i });
    
    await user.click(ctaButton);
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/972543262182'),
      '_blank'
    );
  });

  it('applies gold accent to title parts correctly', () => {
    render(<Hero {...mockProps} />);
    const goldText = screen.getByText('תחום הקרקפת');
    expect(goldText).toHaveClass('bg-gradient-to-r');
  });

  it('renders hero image', () => {
    render(<Hero {...mockProps} />);
    const image = screen.getByAltText('MitoDerm Workshop');
    expect(image).toBeInTheDocument();
  });

  it('has RTL direction', () => {
    const { container } = render(<Hero {...mockProps} />);
    const rtlElement = container.querySelector('[dir="rtl"]');
    expect(rtlElement).toBeInTheDocument();
  });
});
