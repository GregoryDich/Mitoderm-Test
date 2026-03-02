import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WorkshopPage from '../../app/workshop/page';

describe('WorkshopPage Integration', () => {
  it('renders all major sections', () => {
    const { container } = render(<WorkshopPage />);
    
    // Check for main sections
    expect(screen.getByText('MITODERM')).toBeInTheDocument(); // Navbar
    expect(container.querySelector('section')).toBeInTheDocument(); // Hero
  });

  it('displays variant selector', () => {
    render(<WorkshopPage />);
    expect(screen.getByText('990')).toBeInTheDocument();
    expect(screen.getByText('180')).toBeInTheDocument();
    expect(screen.getByText('480')).toBeInTheDocument();
  });

  it('has scroll to top button', () => {
    const { container } = render(<WorkshopPage />);
    // Button might be hidden initially
    const scrollButton = container.querySelector('[class*="fixed"]');
    expect(scrollButton).toBeInTheDocument();
  });

  it('renders footer', async () => {
    render(<WorkshopPage />);
    await waitFor(() => {
      expect(screen.getByText(/Made with/i)).toBeInTheDocument();
    });
  });

  it('switches between variants', async () => {
    const user = userEvent.setup();
    render(<WorkshopPage />);
    
    const variant180 = screen.getByText('180');
    await user.click(variant180);
    
    // Should show toast notification
    await waitFor(() => {
      expect(screen.getByText(/עברת למסלול/i)).toBeInTheDocument();
    });
  });

  it('renders registration modal when closed initially', () => {
    render(<WorkshopPage />);
    expect(screen.queryByText('הרשמה לסדנה')).not.toBeInTheDocument();
  });

  it('has proper RTL layout', () => {
    const { container } = render(<WorkshopPage />);
    const rtlElements = container.querySelectorAll('[dir="rtl"]');
    expect(rtlElements.length).toBeGreaterThan(0);
  });

  it('renders all benefit items', () => {
    render(<WorkshopPage />);
    expect(screen.getByText('Innovative Products')).toBeInTheDocument();
  });

  it('displays toaster for notifications', () => {
    const { container } = render(<WorkshopPage />);
    // Toaster should be present in DOM
    expect(container.querySelector('[data-sonner-toaster]')).toBeInTheDocument();
  });
});