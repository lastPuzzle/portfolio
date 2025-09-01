'use client';

import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Topbar } from './topbar';

interface NotionLayoutProps {
  children: ReactNode;
}

export function NotionLayout({ children }: NotionLayoutProps) {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-4xl px-8 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
