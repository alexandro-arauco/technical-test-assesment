import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '@/app/ui/login-form';
import { useAuth } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';

// Mock the hooks
jest.mock('@/app/context/auth-context');
jest.mock('next/navigation');

describe('LoginForm Component', () => {
  const mockLogin = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      user: null,
    });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('handles successful login', async () => {
    mockLogin.mockResolvedValueOnce(true);

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByText('Log in'));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('displays error message on failed login', async () => {
    mockLogin.mockResolvedValueOnce(false);

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'wrongpassword' },
    });
    fireEvent.click(screen.getByText('Log in'));

    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
    });
  });
}); 