import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const variants = {
      primary: 'badge-primary',
      success: 'inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium',
      warning: 'inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium',
      error: 'inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium',
    };

    return (
      <span ref={ref} className={clsx(variants[variant], className)} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
