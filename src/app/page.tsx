'use client';

import { NotionLayout } from '@/components/layout/layout';

export default function Home() {
  return (
    <NotionLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400"></p>
        </div>
      </div>
    </NotionLayout>
  );
}
