import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'dark' | 'plain';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'glass', className, children, ...props }, ref) => {
    const variants = {
      glass: 'glass-effect hover:bg-white/10 transition-all duration-300',
      dark: 'glass-dark hover:border-white/10 transition-all duration-300',
      plain: 'bg-fadeaway-graphite border border-white/5',
    };

    return (
      <div ref={ref} className={clsx('rounded-lg p-4 md:p-6', variants[variant], className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
