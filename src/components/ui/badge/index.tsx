import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'success'
    | 'warning'
    | 'info'
    | 'orange'
    | 'pink'
    | 'indigo'
    | 'cyan'
    | 'teal'
    | 'emerald'
    | 'violet'
    | 'rose'
    | 'amber';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  secondary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  destructive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  outline:
    'border border-gray-300 bg-transparent text-gray-700 dark:border-gray-600 dark:text-gray-300',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  info: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  orange:
    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  indigo:
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  emerald:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  violet:
    'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
  rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-2 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
