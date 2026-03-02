import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BenefitGrid from '../../app/components/BenefitGrid';

describe('BenefitGrid Component', () => {
  const mockItems = [
    'Innovative Products',
    'Networking',
    'Certificate',
    'Personal Growth',
    'Official Distributor',
    'Limited Offer',
  ];

  it('renders all benefit items', () => {
    render(<BenefitGrid items={mockItems} />);
    mockItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('displays section heading', () => {
    render(<BenefitGrid items={mockItems} />);
    expect(screen.getByText('למה לבחור בנו?')).toBeInTheDocument();
  });

  it('displays section subtitle', () => {
    render(<BenefitGrid items={mockItems} />);
    expect(screen.getByText('היתרונות שיעזרו לך להצליח')).toBeInTheDocument();
  });

  it('renders icons for each benefit', () => {
    const { container } = render(<BenefitGrid items={mockItems} />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(mockItems.length);
  });

  it('applies grid layout', () => {
    const { container } = render(<BenefitGrid items={mockItems} />);
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
  });

  it('has correct number of benefit cards', () => {
    const { container } = render(<BenefitGrid items={mockItems} />);
    const cards = container.querySelectorAll('.group');
    expect(cards.length).toBe(mockItems.length);
  });

  it('has RTL text alignment', () => {
    const { container } = render(<BenefitGrid items={mockItems} />);
    const textElements = container.querySelectorAll('.text-right');
    expect(textElements.length).toBeGreaterThan(0);
  });
});
