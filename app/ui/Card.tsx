import { ReactNode } from 'react';

interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Card({
  size = 'md',
  children,
  className = '',
  title,
}: CardProps) {
  const sizes = {
    sm: 'p-4 max-w-sm',
    md: 'p-6 max-w-md',
    lg: 'p-8 max-w-lg',
  };

  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-lg
        w-full
        ${sizes[size]}
        ${className}
      `}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
