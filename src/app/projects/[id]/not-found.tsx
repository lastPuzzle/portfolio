import Link from 'next/link';
import Layout from '@/components/layout/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-md">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            요청하신 프로젝트가 존재하지 않거나 삭제되었을 수 있습니다.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </Layout>
  );
}
