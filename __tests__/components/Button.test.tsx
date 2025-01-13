import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/app/ui/kit/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('bg-blue-600');

    rerender(<Button variant="secondary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('bg-gray-600');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
}); 