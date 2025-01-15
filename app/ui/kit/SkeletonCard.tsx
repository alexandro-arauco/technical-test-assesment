import { Card } from './Card';
import { Skeleton } from './Skeleton';

interface SkeletonCardProps {
  type?: 'stats' | 'chart' | 'table';
}

export function SkeletonCard({ type = 'stats' }: SkeletonCardProps) {
  if (type === 'stats') {
    return (
      <Card>
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" /> {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" /> {/* Value */}
            <Skeleton className="h-4 w-40" /> {/* Subtitle */}
          </div>
        </div>
      </Card>
    );
  }

  if (type === 'chart') {
    return (
      <Card>
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" /> {/* Title */}
          <Skeleton className="h-[300px] w-full" /> {/* Chart area */}
        </div>
      </Card>
    );
  }

  if (type === 'table') {
    return (
      <Card>
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" /> {/* Title */}
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex space-x-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return null;
} 