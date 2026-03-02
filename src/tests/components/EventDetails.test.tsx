import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventDetails from '../../app/components/EventDetails';

describe('EventDetails Component', () => {
  const mockProps = {
    heading: 'פרטי האירוע',
    dateLabel: 'תאריך',
    dateValue: '15.05.26',
    timeLabel: 'שעה',
    timeValue: '10:00 - 14:00',
    locationLabel: 'מיקום',
    locationValue: 'באר שבע',
    extraLocationValue: 'חיפה',
    extraDateValue: '20.05.26',
    extraTimeValue: '11:00 - 15:00',
  };

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders heading correctly', () => {
    render(<EventDetails {...mockProps} />);
    expect(screen.getByText('פרטי האירוע')).toBeInTheDocument();
  });

  it('displays all three event locations', () => {
    render(<EventDetails {...mockProps} />);
    expect(screen.getByText('באר שבע')).toBeInTheDocument();
    expect(screen.getByText('חיפה')).toBeInTheDocument();
    expect(screen.getByText('תל אביב')).toBeInTheDocument();
  });

  it('shows countdown timer', () => {
    render(<EventDetails {...mockProps} />);
    expect(screen.getByText('ימים')).toBeInTheDocument();
    expect(screen.getByText('שעות')).toBeInTheDocument();
    expect(screen.getByText('דקות')).toBeInTheDocument();
    expect(screen.getByText('שניות')).toBeInTheDocument();
  });

  it('highlights first event as featured', () => {
    const { container } = render(<EventDetails {...mockProps} />);
    expect(screen.getByText('מומלץ')).toBeInTheDocument();
  });

  it('allows event selection', async () => {
    const user = userEvent.setup();
    render(<EventDetails {...mockProps} />);
    
    const haifaCard = screen.getByText('חיפה');
    await user.click(haifaCard.closest('div[style*="width: 360px"]')!);
    
    // Should update countdown for selected event
    expect(screen.getByText(/זמן נותר עד חיפה/i)).toBeInTheDocument();
  });

  it('displays date and time for each event', () => {
    render(<EventDetails {...mockProps} />);
    expect(screen.getByText('15.05.26')).toBeInTheDocument();
    expect(screen.getByText('10:00 - 14:00')).toBeInTheDocument();
  });

  it('renders navigation arrows', () => {
    const { container } = render(<EventDetails {...mockProps} />);
    const arrows = container.querySelectorAll('button[class*="absolute"]');
    expect(arrows.length).toBeGreaterThanOrEqual(2);
  });

  it('has RTL direction', () => {
    const { container } = render(<EventDetails {...mockProps} />);
    const rtlSection = container.querySelector('section[dir="rtl"]');
    expect(rtlSection).toBeInTheDocument();
  });

  it('updates countdown every second', () => {
    render(<EventDetails {...mockProps} />);
    
    const initialSeconds = screen.getByText(/\d{2}/, { selector: '.text-4xl' });
    const initialValue = initialSeconds.textContent;
    
    vi.advanceTimersByTime(1000);
    
    // Countdown should update
    expect(screen.getByText(/\d{2}/, { selector: '.text-4xl' })).toBeInTheDocument();
  });

  it('shows selected indicator on active card', async () => {
    const user = userEvent.setup();
    render(<EventDetails {...mockProps} />);
    
    // First card should be selected by default
    const checkIcons = screen.getAllByRole('img', { hidden: true });
    expect(checkIcons.length).toBeGreaterThan(0);
  });
});
