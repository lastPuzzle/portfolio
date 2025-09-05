'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';
import { cn } from '@/lib/utils/cn';

interface ProjectDetailProps {
  project: Project;
}

const categoryColors = {
  web: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  mobile: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  desktop:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  ai: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  other: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
};

const statusColors = {
  completed:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'in-progress':
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  planned: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
};

const categoryLabels = {
  web: '웹',
  mobile: '모바일',
  desktop: '데스크톱',
  ai: 'AI',
  other: '기타',
};

const statusLabels = {
  completed: '완료',
  'in-progress': '진행중',
  planned: '계획',
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  'rounded-full px-2 py-1 text-xs font-medium',
                  categoryColors[project.category]
                )}
              >
                {categoryLabels[project.category]}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {project.year}.{project.month.toString().padStart(2, '0')}
              </span>
            </div>

            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          {project.images.length > 0 && (
            <div className="mb-8">
              <div className="relative mb-4 h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={
                    project.images[selectedImageIndex] ||
                    '/api/placeholder/800/600'
                  }
                  alt={`${project.title} - 이미지 ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {project.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={cn(
                        'relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all',
                        selectedImageIndex === index
                          ? 'border-blue-500'
                          : 'border-gray-200 dark:border-gray-700'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - 썸네일 ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              프로젝트 소개
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {project.longDescription}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              주요 구현 내용
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              주요 기술적 과제
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              성과 및 결과
            </h2>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {learning}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
                기술 스택
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
                프로젝트 정보
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    카테고리
                  </span>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {categoryLabels[project.category]}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    상태
                  </span>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {statusLabels[project.status]}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    개발 기간
                  </span>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {project.year}년 {project.month}월
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
                링크
              </h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub 저장소
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    라이브 데모
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
