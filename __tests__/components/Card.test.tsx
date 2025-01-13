import { render, screen } from '@testing-library/react';
import { Card } from '@/app/ui/kit/Card';

describe('Card Component', () => {
  it('renders card with title', () => {
    render(<Card title="Test Card">Content</Card>);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with subtitle', () => {
    render(
      <Card title="Test Card" subtitle="Test Subtitle">
        Content
      </Card>
    );
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Card title="Test Card" footer={<div>Footer</div>}>
        Content
      </Card>
    );
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
}); 