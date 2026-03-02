import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../../app/components/Navbar';

describe('Navbar Component', () => {
  const mockProps = {
    items: ['Products', 'More Info', 'Agenda', 'Contact us'],
    lang: 'EN',
  };

  it('renders all navigation items', () => {
    render(<Navbar {...mockProps} />);
    mockProps.items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('displays language indicator', () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('renders MITODERM logo', () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByText('MITODERM')).toBeInTheDocument();
  });

  it('has sticky positioning', () => {
    const { container } = render(<Navbar {...mockProps} />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('sticky');
  });

  it('handles smooth scroll on navigation click', async () => {
    const user = userEvent.setup();
    const scrollIntoViewMock = vi.fn();
    
    // Mock getElementById
    const mockElement = { scrollIntoView: scrollIntoViewMock };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
    
    render(<Navbar {...mockProps} />);
    const firstLink = screen.getByText('Products');
    
    await user.click(firstLink);
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('creates correct href for navigation items', () => {
    render(<Navbar {...mockProps} />);
    const productsLink = screen.getByText('Products');
    expect(productsLink).toHaveAttribute('href', '#products');
  });
});
