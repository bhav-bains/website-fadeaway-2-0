import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-fadeaway-orange text-fadeaway-graphite hover:bg-opacity-90 hover:shadow-lg hover:shadow-fadeaway-orange/20 focus:ring-fadeaway-orange/50',
      secondary: 'bg-transparent border border-fadeaway-orange text-fadeaway-orange hover:bg-fadeaway-orange/10 focus:ring-fadeaway-orange/50',
      tertiary: 'bg-transparent text-neutral-50 hover:bg-white/5 focus:ring-white/20',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
