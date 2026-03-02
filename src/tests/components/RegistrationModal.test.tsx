import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationModal from '../../app/components/RegistrationModal';

describe('RegistrationModal Component', () => {
  const mockOnClose = vi.fn();
  const mockOnSubmit = vi.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onSubmit: mockOnSubmit,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders when isOpen is true', () => {
    render(<RegistrationModal {...defaultProps} />);
    expect(screen.getByText('הרשמה לסדנה')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<RegistrationModal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('הרשמה לסדנה')).not.toBeInTheDocument();
  });

  it('displays all form fields', () => {
    render(<RegistrationModal {...defaultProps} />);
    expect(screen.getByLabelText(/שם מלא/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/טלפון/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/אימייל/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<RegistrationModal {...defaultProps} />);
    
    const closeButton = screen.getByRole('button', { name: '' });
    await user.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<RegistrationModal {...defaultProps} />);
    
    const backdrop = container.querySelector('.fixed.inset-0');
    if (backdrop) {
      await user.click(backdrop);
      expect(mockOnClose).toHaveBeenCalled();
    }
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<RegistrationModal {...defaultProps} />);
    
    const submitButton = screen.getByRole('button', { name: /שלח/i });
    await user.click(submitButton);
    
    // Should not call onSubmit if validation fails
    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<RegistrationModal {...defaultProps} />);
    
    await user.type(screen.getByLabelText(/שם מלא/i), 'ישראל ישראלי');
    await user.type(screen.getByLabelText(/טלפון/i), '0501234567');
    await user.type(screen.getByLabelText(/אימייל/i), 'test@example.com');
    
    const submitButton = screen.getByRole('button', { name: /שלח/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: 'ישראל ישראלי',
          phone: '0501234567',
          email: 'test@example.com',
        })
      );
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<RegistrationModal {...defaultProps} />);
    
    const emailInput = screen.getByLabelText(/אימייל/i);
    await user.type(emailInput, 'invalid-email');
    await user.tab(); // Trigger blur
    
    await waitFor(() => {
      expect(screen.getByText(/אימייל לא תקין/i)).toBeInTheDocument();
    });
  });

  it('validates phone format', async () => {
    const user = userEvent.setup();
    render(<RegistrationModal {...defaultProps} />);
    
    const phoneInput = screen.getByLabelText(/טלפון/i);
    await user.type(phoneInput, '123');
    await user.tab();
    
    await waitFor(() => {
      expect(screen.getByText(/מספר טלפון לא תקין/i)).toBeInTheDocument();
    });
  });
});
