'use client';

import { ReactNode, useState } from 'react';
import { Sidebar } from './sidebar';
import { Topbar } from './topbar';
import { useLayout } from '@/lib/contexts';
import { LAYOUT_WIDTH_CLASSES } from '@/types/settings';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useLayout();

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <div className="flex flex-1 flex-col">
        <Topbar onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-auto">
          <div className={`mx-auto ${LAYOUT_WIDTH_CLASSES[width]} px-8 py-8`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
