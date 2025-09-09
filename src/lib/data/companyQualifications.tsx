import {
  Code,
  Globe,
  Zap,
  Users,
  Lightbulb,
  Target,
  Palette,
  MessageSquare,
  BarChart3,
  FileText,
  Layers,
  Settings,
} from 'lucide-react';

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
        icon: <FileText className="h-6 w-6 text-blue-500" />,
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
        icon: <Layers className="h-6 w-6 text-blue-500" />,
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
        icon: <Globe className="h-6 w-6 text-blue-500" />,
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
        icon: <Palette className="h-6 w-6 text-blue-500" />,
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
        icon: <Settings className="h-6 w-6 text-purple-500" />,
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
  {
    id: 'paytalab',
    name: '이승혁',
    logo: {
      src: 'https://static.wanted.co.kr/images/wdes/0_5.2b945c4f.png',
      alt: '페이타랩 로고',
      width: 32,
      height: 32,
    },
    qualifications: [
      {
        title:
          'HTML, CSS, JavaScript, 그리고 TypeScript에 대해 이해하고 계신 분',
        description: '자격요건: 웹 표준 기술에 대한 깊은 이해',
        icon: <Code className="h-6 w-6 text-blue-500" />,
        category: 'skills',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '지난 8년간의 모든 웹 프로젝트에서 HTML, CSS, JavaScript, TypeScript를 기반으로 개발을 진행했습니다. 특히 React와 Next.js 환경에서 TypeScript를 적극적으로 활용하며 안정적인 웹 애플리케이션을 구축해왔습니다.',
        },
      },
      {
        title: '패스오더와 나의 성장을 위해 열심히 노력하실 준비가 되신 분',
        description: '자격요건: 성장에 대한 의지와 학습 능력',
        icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '새로운 기술이나 방법론을 꾸준히 학습하고 팀에 도입하는 것을 저의 성장 원동력으로 삼아왔습니다. 현재 광운대 게임콘텐츠학과에 재학하며 배움을 이어가는 것 또한 지속적인 성장을 위한 노력의 일환입니다.',
        },
      },
      {
        title:
          '동료와 다양한 학습 내용을 공유하고 서로 도움을 주고 받으며 함께 기술적으로 성장하고자 하는 마인드를 가진 분',
        description: '자격요건: 협업과 지식 공유를 통한 동반 성장 마인드',
        icon: <Users className="h-6 w-6 text-green-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '팀장으로서 AWS CodeCommit 기반의 PR 문화와 2인 승인 체계를 정착시켜 코드 리뷰를 활성화했습니다. 또한, 사소한 이슈라도 함께 논의하며 팀의 코드 컨벤션을 만들어가는 등 동료와 함께 성장하는 개발 문화를 만드는 데 기여했습니다.',
        },
      },
      {
        title:
          '단순히 주어진 개발을 해내는 것보다, 주도적으로 문제를 발견하고 분석해 솔루션을 제안할 수 있는 분',
        description: '자격요건: 주도적인 문제 해결 능력',
        icon: <Target className="h-6 w-6 text-red-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '여러 파생 서비스의 UI 공유 문제를 해결하기 위해 모노레포(Turborepo) 구조를 도입했습니다. 또한 페이지 이동이 잦은 서비스의 성능 저하 문제를 해결하기 위해 React Query 기반의 캐싱 전략을 적용하는 등, 주도적으로 문제를 발견하고 기술적 해결책을 제시해왔습니다.',
        },
      },
      {
        title:
          '반응형 디자인, 웹 접근성, 웹 표준을 고려한 UI/UX 개발 경험 있으신 분',
        description: '우대사항: 사용자 중심의 UI/UX 개발 경험',
        icon: <Palette className="h-6 w-6 text-pink-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '다양한 커머스 플랫폼에서 여러 업체의 요구사항에 맞춰 UI/UX를 커스텀하고 개선하는 작업을 다수 수행했습니다. 모든 프로젝트에서 웹 표준을 준수하며 개발을 진행해왔습니다.',
        },
      },
      {
        title: '테스트 코드 작성에 익숙하고 코드 리뷰 문화를 지향하는 분',
        description: '우대사항: 코드 품질 및 리뷰 문화에 대한 경험',
        icon: <MessageSquare className="h-6 w-6 text-indigo-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            'Git-Flow를 도입하고 Husky를 적용해 커밋 메시지 규칙을 통일했으며, AWS CodeCommit 기반의 PR 문화와 2인 승인 체계를 정착시켜 코드 리뷰 문화를 체계화한 경험이 있습니다. 이를 통해 코드 품질을 높이고 팀의 기술적 성장을 이끌었습니다.',
        },
      },
      {
        title:
          '요구사항 분석 및 다른 개발자와 협업을 위한 원활한 커뮤니케이션 능력을 가지신 분',
        description: '우대사항: 원활한 협업 및 커뮤니케이션 능력',
        icon: <MessageSquare className="h-6 w-6 text-teal-500" />,
        category: 'skills',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '신규 프로젝트 진행 시 백엔드 개발자와 API 명세를 사전에 논의하고 MSW를 도입해 안정적인 협업 환경을 구축했습니다. 또한 Storybook을 활용하여 디자이너, 기획자와의 원활한 소통을 이끌어냈습니다.',
        },
      },
      {
        title: '성능 이슈, 메모리 누수, 네트워크 프로파일링 경험이 있으신 분',
        description: '우대사항: 서비스 성능 최적화 경험',
        icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            'T-map 이벤트 페이지에서 디바운싱을 적용하여 중복 API 호출을 방지했고, 커머스 서비스의 진입 속도 개선을 위해 폰트 경량화 및 CDN을 구축했습니다. 또한 React Query의 캐싱 전략을 활용하여 불필요한 API 재호출을 줄이는 등 다양한 성능 최적화 경험을 보유하고 있습니다.',
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
