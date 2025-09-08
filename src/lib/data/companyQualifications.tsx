import { Code, Globe, Zap } from 'lucide-react';

export interface QualificationItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'experience' | 'skills' | 'achievements';
  level?: '자격' | '우대';
  experience?: {
    title: string;
    details: string;
  };
}

export interface CompanyQualifications {
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

export const companyQualifications: CompanyQualifications[] = [
  {
    id: 'encar',
    name: '이승혁',
    logo: {
      src: 'https://static.wanted.co.kr/images/wdes/0_5.99230970.jpg',
      alt: '엔카 로고',
      width: 32,
      height: 32,
    },
    qualifications: [
      {
        title: 'Front-end 개발 경력 2년 이상, ReactJS 개발 경력 1년 이상',
        description: '자격요건: 숙련된 프론트엔드 및 React 개발 경험',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '총 8년간 프론트엔드 개발자로 근무했으며, 2018년부터 다수의 프로젝트에 React를 도입하고 발전시켜온 경험이 있습니다.',
        },
      },
      {
        title: 'HTML, CSS, 웹 접근성에 대한 지식',
        description: '자격요건: 웹 표준 및 접근성에 대한 이해',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'skills',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '모든 웹 프로젝트에서 시맨틱 마크업과 웹 표준을 준수하여 HTML, CSS를 작성했습니다. 이를 통해 기본적인 웹 접근성을 고려하며 개발을 진행했습니다.',
        },
      },
      {
        title: 'ES6+, ReactJS, Redux, RESTful API, Git 활용 능력',
        description: '자격요건: 주요 기술 스택에 대한 깊은 이해',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'skills',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '다수 프로젝트에서 React와 Redux(redux-saga, redux-toolkit)를 사용했으며, 모든 프로젝트에서 Git-Flow 기반으로 RESTful API를 연동하여 협업했습니다.',
        },
      },
      {
        title: 'SPA 및 SSR에 대한 이해',
        description:
          '자격요건: Single Page Application 및 Server-Side Rendering 경험',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            "Next.js(v12, v13)를 사용한 '선물하기', '몰파이' 프로젝트를 통해 SSR 환경을 직접 구축하고 운영한 경험이 있습니다.",
        },
      },
      {
        title: 'UI/UX에 대한 높은 가치 부여',
        description: '자격요건: 사용자 중심의 UI/UX 개선 의지',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            "다양한 커머스 플랫폼에서 'UI/UX 개선 작업 수행'을 담당했으며, 사용자의 편의성을 높이기 위한 고민을 지속적으로 해왔습니다.",
        },
      },
      {
        title: '성능 최적화에 대한 이해',
        description: '우대사항: 웹 서비스 성능 개선 경험',
        icon: <Zap className="h-6 w-6 text-green-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            'React Query 캐싱 전략 도입, 디바운싱을 통한 중복 API 호출 방지, 폰트 경량화 및 CDN 구축 등 다양한 성능 최적화 경험을 보유하고 있습니다.',
        },
      },
      {
        title: '모노레포 구조 설계 및 개발환경 개선',
        description: '우대사항: 프로젝트 아키텍처 및 개발 효율 개선 경험',
        icon: <Globe className="h-6 w-6 text-purple-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '다수의 파생 서비스를 효율적으로 관리하기 위해 Turborepo 기반의 모노레포 아키텍처를 도입했으며, MSW를 선제적으로 도입해 개발 생산성을 향상시켰습니다.',
        },
      },
      {
        title: '웹 접근성/SEO 프로젝트 경험',
        description: '우대사항: 검색 엔진 최적화 및 접근성 향상 경험',
        icon: <Zap className="h-6 w-6 text-green-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            'Next.js의 SSR 기능을 활용하여 SEO 친화적인 구조를 설계한 경험이 있습니다. 웹 접근성을 주 목표로 한 프로젝트는 없었으나, 개발 시 항상 시맨틱 태그 준수를 통해 기본을 지키려 노력했습니다.',
        },
      },
      {
        title: '적극적인 코드리뷰와 공유문화',
        description: '우대사항: 함께 성장하는 개발 문화에 대한 기여',
        icon: <Globe className="h-6 w-6 text-purple-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '팀장으로서 AWS CodeCommit 기반의 PR 문화와 2인 승인 체계를 정착시켜 코드 리뷰를 체계화했으며, 팀원들과 함께 코드 컨벤션을 만들어가는 문화를 형성했습니다.',
        },
      },
    ],
  },
];

export const getCompanyById = (
  id: string
): CompanyQualifications | undefined => {
  return companyQualifications.find((company) => company.id === id);
};
