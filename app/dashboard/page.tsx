import { Card } from '@/app/ui/kit/Card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card title="Welcome to Dashboard" variant="default">
        <p className="text-gray-600">
          You have successfully logged in. This is a protected route.
        </p>
      </Card>
    </div>
  );
} 