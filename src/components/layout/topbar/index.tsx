'use client';

import { Menu, Moon, Sun, ArrowLeftRight, ArrowRightLeft } from 'lucide-react';
import { useTheme, useLayout } from '@/lib/contexts';
import { LAYOUT_WIDTH_LABELS, type LayoutWidth } from '@/types/settings';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../../ui/dropdown-menu';

interface TopbarProps {
  onMenuClick?: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { width, setWidth } = useLayout();

  const handleWidthChange = (newWidth: LayoutWidth) => {
    setWidth(newWidth);
  };

  return (
    <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="cursor-pointer rounded-lg p-2 hover:bg-gray-200 lg:hidden dark:hover:bg-gray-700"
          aria-label="메뉴 열기"
        >
          <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
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
            레이아웃 너비
          </div>
          {Object.entries(LAYOUT_WIDTH_LABELS).map(([widthKey, label]) => (
            <DropdownMenuItem
              key={widthKey}
              onClick={() => handleWidthChange(widthKey as LayoutWidth)}
              className={
                width === widthKey ? 'bg-gray-100 dark:bg-gray-700' : ''
              }
            >
              <div className="flex items-center space-x-3">
                {widthKey === 'narrow' ? (
                  <ArrowRightLeft className="h-3 w-3" />
                ) : (
                  <ArrowLeftRight className="h-3 w-3" />
                )}
                <span>{label}</span>
                {width === widthKey && (
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
