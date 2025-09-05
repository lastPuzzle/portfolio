import Layout from '@/components/layout/layout';
import ProjectList from './_components/ProjectList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트',
  description: '제작한 프로젝트들을 연도별로 확인해보세요.',
  icons: [
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E",
      media: '(prefers-color-scheme: light)',
    },
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E",
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function Project() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">프로젝트</h1>
          <p className="text-sm">
            다양한 기술과 도구를 활용하여 제작한 프로젝트들을 연도별로
            확인해보세요.
            <br /> 각 프로젝트를 클릭하면 상세 정보를 볼 수 있습니다.
          </p>
        </div>

        <ProjectList />
      </div>
    </Layout>
  );
}
