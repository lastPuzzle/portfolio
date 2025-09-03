import React from 'react';
import {
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Clock,
  Target,
} from 'lucide-react';

interface QualificationItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'experience' | 'skills' | 'achievements';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const qualifications: QualificationItem[] = [
  {
    title: '8년 프론트엔드 개발 경험',
    description: '대규모 트래픽 서비스의 성능 최적화 및 사용자 경험 개선',
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    category: 'experience',
    level: 'expert',
  },
  {
    title: 'React & Next.js 전문가',
    description: '컴포넌트 기반 아키텍처 설계 및 최신 웹 기술 활용',
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    category: 'skills',
    level: 'expert',
  },
  {
    title: '팀 리더십 경험',
    description: '5인 개발팀을 이끌며 개발 문화와 프로세스 개선',
    icon: <Users className="h-6 w-6 text-purple-500" />,
    category: 'experience',
    level: 'advanced',
  },
  {
    title: '성능 최적화 전문성',
    description: 'Core Web Vitals 개선 및 사용자 경험 최적화',
    icon: <Target className="h-6 w-6 text-orange-500" />,
    category: 'skills',
    level: 'expert',
  },
  {
    title: '레거시 시스템 현대화',
    description: '기존 시스템을 최신 기술 스택으로 성공적으로 마이그레이션',
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    category: 'achievements',
    level: 'advanced',
  },
  {
    title: 'TypeScript & 테스트',
    description: '타입 안전성과 테스트 커버리지를 통한 품질 향상',
    icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
    category: 'skills',
    level: 'advanced',
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'advanced':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'beginner':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

const getLevelText = (level: string) => {
  switch (level) {
    case 'expert':
      return '전문가';
    case 'advanced':
      return '고급';
    case 'intermediate':
      return '중급';
    case 'beginner':
      return '초급';
    default:
      return '미정';
  }
};

export default function Qualifications() {
  return (
    <section className="relative flex flex-col space-y-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {qualifications.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-lg bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
                {item.icon}
              </div>
              {item.level && (
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${getLevelColor(item.level)}`}
                >
                  {getLevelText(item.level)}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {item.description}
            </p>

            <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  item.category === 'experience'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : item.category === 'skills'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                }`}
              >
                {item.category === 'experience'
                  ? '경험'
                  : item.category === 'skills'
                    ? '기술'
                    : '성과'}
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-purple-900/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
