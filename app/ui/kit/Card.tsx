import { ReactNode } from 'react';

interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  headerAction?: ReactNode;
  variant?: 'default' | 'bordered' | 'flat';
}

export function Card({
  size = 'md',
  children,
  className = '',
  title,
  subtitle,
  footer,
  headerAction,
  variant = 'default',
}: CardProps) {
  const sizes = {
    sm: 'p-4 max-w-sm',
    md: 'p-6 max-w-md',
    lg: 'p-8 max-w-lg',
  };

  const variants = {
    default: 'bg-white shadow-lg',
    bordered: 'bg-white border border-gray-200',
    flat: 'bg-gray-50',
  };

  return (
    <div
      className={`
        rounded-xl
        w-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {(title || headerAction) && (
        <div className="flex justify-between items-start mb-4">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
          {headerAction && (
            <div className="ml-4">
              {headerAction}
            </div>
          )}
        </div>
      )}
      
      <div className="space-y-3">
        {children}
      </div>

      {footer && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
} 