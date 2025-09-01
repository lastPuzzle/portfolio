'use client';

import Link from 'next/link';
import { MENU_ITEMS } from '@/lib/constants/routes';

export function Sidebar() {
  return (
    <div
      className={`w-60 border-r border-gray-200 bg-gray-50 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className="flex h-14 items-center border-b border-gray-200 px-4 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600">
              <span className="text-xs font-bold text-white">이</span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                이승혁
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="p-2">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <item.icon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
