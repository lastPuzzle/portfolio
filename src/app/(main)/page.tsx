import Layout from '@/components/layout/layout';
import Intro from './_components/Intro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈',
  icons: [
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(3,3)'%3E%3Cpath d='M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpolyline points='9 22 9 12 15 12 15 22'/%3E%3C/g%3E%3C/svg%3E",
      media: '(prefers-color-scheme: light)',
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='translate(3,3)'%3E%3Cpath d='M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpolyline points='9 22 9 12 15 12 15 22'/%3E%3C/g%3E%3C/svg%3E",
      media: '(prefers-color-scheme: dark)',
    },
  ],
};
export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <Intro />
        </div>
      </div>
    </Layout>
  );
}
