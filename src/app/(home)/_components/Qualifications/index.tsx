'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Globe, Zap, Code } from 'lucide-react';
import { useAnimationStore } from '../../_lib/useAnimationStore';
import { getCookie } from '@/lib/utils';

interface QualificationItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'experience' | 'skills' | 'achievements';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  experience?: {
    title: string;
    details: string;
  };
}

interface CompanyQualifications {
  id: string;
  name: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  qualifications: QualificationItem[];
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'experience':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'skills':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'achievements':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

const getCategoryText = (category: string) => {
  switch (category) {
    case 'experience':
      return '경험';
    case 'skills':
      return '기술';
    case 'achievements':
      return '성과';
    default:
      return '기타';
  }
};

const companyQualifications: CompanyQualifications[] = [
  {
    id: 'yanolja',
    name: '야놀자',
    logo: {
      src: 'https://static.wanted.co.kr/images/wdes/0_4.81a444fc.png',
      alt: '야놀자 로고',
      width: 28,
      height: 28,
    },
    qualifications: [
      {
        title: 'React & TypeScript 전문성',
        description: '대규모 사용자 기반 서비스의 컴포넌트 설계 및 개발',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'skills',
        level: 'expert',
        experience: {
          title: '💡 나의 경험',
          details:
            'React Query의 캐싱 및 stale-while-revalidate 전략을 도입하여 불필요한 API 호출을 줄였습니다. TypeScript를 활용한 타입 안전성 확보로 런타임 에러를 30% 감소시켰습니다.',
        },
      },
      {
        title: '성능 최적화 경험',
        description: 'Core Web Vitals 개선 및 사용자 경험 최적화',
        icon: <Zap className="h-6 w-6 text-green-500" />,
        category: 'experience',
        level: 'advanced',
        experience: {
          title: '💡 나의 경험',
          details:
            '페이지 이동이 잦은 마케팅 플랫폼에서 React Query의 캐싱 및 stale-while-revalidate 전략을 도입하여 불필요한 API 호출을 줄였습니다. 또한, 커머스 서비스의 초기 로딩 속도 개선을 위해 폰트 경량화 및 AWS S3/CloudFront 기반의 CDN을 직접 구축하여 사용자 경험을 개선했습니다.',
        },
      },
      {
        title: '모바일 퍼스트 개발',
        description: '모바일 사용자 중심의 반응형 웹 애플리케이션 개발',
        icon: <Globe className="h-6 w-6 text-purple-500" />,
        category: 'experience',
        level: 'advanced',
        experience: {
          title: '💡 나의 경험',
          details:
            '모바일 사용자 비율이 80%인 야놀자 서비스에서 Progressive Web App(PWA) 기술을 적용하여 네이티브 앱과 유사한 사용자 경험을 제공했습니다. 터치 인터페이스 최적화로 모바일 전환율을 25% 향상시켰습니다.',
        },
      },
    ],
  },
];

export default function Qualifications() {
  const [selectedCompany, setSelectedCompany] =
    useState<CompanyQualifications | null>(null);
  const introCompleted = useAnimationStore((state) => state.introCompleted);

  useEffect(() => {
    const companyCookie = getCookie('company');
    if (companyCookie) {
      const company = companyQualifications.find((c) => c.id === companyCookie);
      if (company) {
        setSelectedCompany(company);
      }
    } else {
      setSelectedCompany(null);
    }
  }, []);

  if (selectedCompany && introCompleted) {
    return (
      <section className="animate-fade-in relative flex flex-col space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={selectedCompany.logo.src}
                alt={selectedCompany.logo.alt}
                width={selectedCompany.logo.width}
                height={selectedCompany.logo.height}
                className="rounded-lg"
              />
              <h2 className="text-md font-bold text-gray-900 dark:text-white">
                {selectedCompany.name} 자격 요건
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedCompany.qualifications.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
                      {item.icon}
                    </div>
                  </div>
                  {item.level && (
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {item.level === 'expert'
                        ? '필수'
                        : item.level === 'advanced'
                          ? '우대'
                          : '권장'}
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>

                {item.experience && (
                  <div className="mt-4 border-t border-gray-100 py-4 dark:border-gray-700">
                    <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {item.experience.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.experience.details}
                    </p>
                  </div>
                )}

                <div className="mt-auto border-t border-gray-100 pt-4 dark:border-gray-700">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {getCategoryText(item.category)}
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-purple-900/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col space-y-8">
      <div className="space-y-6"></div>
    </section>
  );
}
