import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '@/app/ui/kit/Input';

describe('Input Component', () => {
  it('renders input with label', () => {
    render(<Input id="email" label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<Input id="email" label="Email" onChange={handleChange} />);
    
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(<Input id="email" label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Input id="email" label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });
}); 