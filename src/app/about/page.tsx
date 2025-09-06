import Layout from '@/components/layout/layout';
import { aboutSections } from '@/lib/data/about';
import AboutSection from './_components/AboutSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개',
  icons: [
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(3,3)'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/g%3E%3C/svg%3E",
      media: '(prefers-color-scheme: light)',
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(3,3)'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/g%3E%3C/svg%3E",
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            소개
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            프론트엔드 개발자 이승혁의 이야기
          </p>
        </header>

        <div className="space-y-6">
          {aboutSections.map((section) => (
            <AboutSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
