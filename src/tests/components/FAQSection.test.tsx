import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQSection from '../../app/components/FAQSection';

describe('FAQSection Component', () => {
  const mockFAQs = [
    { question: 'שאלה 1?', answer: 'תשובה 1' },
    { question: 'שאלה 2?', answer: 'תשובה 2' },
    { question: 'שאלה 3?', answer: 'תשובה 3' },
  ];

  it('renders section heading', () => {
    render(<FAQSection faqs={mockFAQs} />);
    expect(screen.getByText('שאלות נפוצות')).toBeInTheDocument();
  });

  it('displays all FAQ questions', () => {
    render(<FAQSection faqs={mockFAQs} />);
    mockFAQs.forEach(faq => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  it('hides answers by default', () => {
    render(<FAQSection faqs={mockFAQs} />);
    mockFAQs.forEach(faq => {
      expect(screen.queryByText(faq.answer)).not.toBeVisible();
    });
  });

  it('expands answer when question is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQSection faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('שאלה 1?');
    await user.click(firstQuestion);
    
    expect(screen.getByText('תשובה 1')).toBeVisible();
  });

  it('collapses answer when clicked again', async () => {
    const user = userEvent.setup();
    render(<FAQSection faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('שאלה 1?');
    await user.click(firstQuestion);
    expect(screen.getByText('תשובה 1')).toBeVisible();
    
    await user.click(firstQuestion);
    expect(screen.queryByText('תשובה 1')).not.toBeVisible();
  });

  it('allows only one FAQ to be open at a time', async () => {
    const user = userEvent.setup();
    render(<FAQSection faqs={mockFAQs} />);
    
    await user.click(screen.getByText('שאלה 1?'));
    expect(screen.getByText('תשובה 1')).toBeVisible();
    
    await user.click(screen.getByText('שאלה 2?'));
    expect(screen.getByText('תשובה 2')).toBeVisible();
    expect(screen.queryByText('תשובה 1')).not.toBeVisible();
  });

  it('renders chevron icons', () => {
    const { container } = render(<FAQSection faqs={mockFAQs} />);
    const chevrons = container.querySelectorAll('svg');
    expect(chevrons.length).toBeGreaterThan(0);
  });

  it('displays contact CTA at bottom', () => {
    render(<FAQSection faqs={mockFAQs} />);
    expect(screen.getByText('לא מצאת את התשובה שחיפשת?')).toBeInTheDocument();
  });
});
