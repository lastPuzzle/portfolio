import Layout from '@/components/layout/layout';

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
      <div className="space-y-8"></div>
    </Layout>
  );
}
