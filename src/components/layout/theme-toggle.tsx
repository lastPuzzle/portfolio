'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/contexts';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle cursor-pointer rounded-lg bg-gray-100 p-2 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
    >
      <span className="block transition-transform duration-300">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </span>
    </button>
  );
}
