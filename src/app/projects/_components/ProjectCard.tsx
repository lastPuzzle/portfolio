'use client';

import Link from 'next/link';
import { Project } from '@/lib/data/projects';
import { cn } from '@/lib/utils/cn';
import { categoryLabels, getCategoryVariant } from '@/lib/utils';
import Badge from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant={getCategoryVariant(project.category)} size="md">
              {categoryLabels[project.category]}
            </Badge>
            <Badge
              variant={project.status === 'operating' ? 'success' : 'default'}
              size="sm"
            >
              {project.status === 'operating' ? '운영중' : '운영종료'}
            </Badge>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.year}.{project.month.toString().padStart(2, '0')}
          </span>
        </div>

        <h3
          className={cn(
            'mb-2 text-lg font-semibold transition-colors',
            project.status === 'operating'
              ? 'text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400'
              : 'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
          )}
        >
          {project.title}
        </h3>

        <p
          className={cn(
            'mb-4 flex-1 text-sm leading-relaxed',
            project.status === 'operating'
              ? 'text-gray-600 dark:text-gray-300'
              : 'text-gray-500 dark:text-gray-500'
          )}
        >
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              size="sm"
              className="rounded-md"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" size="sm" className="rounded-md">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {project.links.slice(0, 2).map((link, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link.url, '_blank', 'noopener,noreferrer');
                  }}
                  className="rounded-lg bg-gray-50 p-2 text-gray-500 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label={`${link.label} 열기`}
                >
                  {link.type === 'github' ? (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ) : link.type === 'homepage' ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
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
                  )}
                </button>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              자세히 보기 →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
