'use client';

import { Moon, Sun, Type } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme';
import { useFont, FONT_LABELS, type FontFamily } from '@/lib/contexts/font';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { font, setFont } = useFont();

  const handleFontChange = (newFont: FontFamily) => {
    setFont(newFont);
  };

  return (
    <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="ml-auto flex items-center space-x-4">
        <DropdownMenu>
          <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
            테마
          </div>
          <DropdownMenuItem onClick={toggleTheme}>
            <div className="flex items-center space-x-3">
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span>{theme === 'light' ? '다크 모드' : '라이트 모드'}</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
            폰트
          </div>
          {Object.entries(FONT_LABELS).map(([fontKey, label]) => (
            <DropdownMenuItem
              key={fontKey}
              onClick={() => handleFontChange(fontKey as FontFamily)}
              className={font === fontKey ? 'bg-gray-100 dark:bg-gray-700' : ''}
            >
              <div className="flex items-center space-x-3">
                <Type className="h-3 w-3" />
                <span>{label}</span>
                {font === fontKey && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-blue-600" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      </div>
    </div>
  );
}
