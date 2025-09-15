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
  Briefcase,
  Shuffle,
  Star,
  Cpu,
  Server,
  Puzzle,
  Smartphone,
  Database,
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
  {
    id: 'KCD',
    name: '이승혁',
    logo: {
      src: 'https://static.wanted.co.kr/images/wdes/0_5.f598fd2c.jpg',
      alt: '회사 로고',
      width: 32,
      height: 32,
    },
    qualifications: [
      {
        title: '웹 프론트엔드 기술 전반(HTML, CSS, JavaScript)에 대한 이해',
        description: '지식: 웹 표준 기술에 대한 깊은 이해',
        icon: <FileText className="h-6 w-6 text-blue-500" />,
        category: 'skills',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '8년간 진행한 모든 웹 프로젝트의 근간이 되는 기술들입니다. 레거시 환경(jQuery, JSP)부터 최신 프레임워크(React)까지 다루며 웹 표준과 동작 원리에 대한 깊은 이해를 갖추고 있습니다.',
        },
      },
      {
        title: 'React와 TypeScript의 원리와 최신 패턴에 대한 이해',
        description: '지식: React, TypeScript 숙련도',
        icon: <Star className="h-6 w-6 text-yellow-500" />,
        category: 'skills',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            'React와 TypeScript는 저의 핵심 기술 스택입니다. 최신 개발 패턴을 적극적으로 학습하고 적용하며, 다수의 프로덕션을 성공적으로 개발하고 운영해왔습니다.',
        },
      },
      {
        title: '프론트엔드 아키텍처 패턴과 상태 관리 방법론에 대한 지식',
        description: '지식: 아키텍처 설계 및 상태 관리',
        icon: <Settings className="h-6 w-6 text-purple-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '여러 파생 서비스의 효율적인 관리를 위해 모노레포(TurboRepo) 아키텍처를 직접 도입했습니다. 또한, 프로젝트 특성에 맞춰 TanStack Query, ,Redux-Saga, Redux-Toolkit, Zustand 등 다양한 상태 관리 라이브러리를 적용하며 최적의 솔루션을 찾아왔습니다.',
        },
      },
      {
        title: '웹 성능 최적화 원리 및 기법에 대한 이해',
        description: '지식: 웹 성능 최적화 경험',
        icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            'T-map 이벤트에서 디바운싱을 적용하여 중복 API 호출을 방지했고, React Query 캐싱 전략으로 불필요한 데이터 요청을 최소화했습니다. 또한 폰트 경량화 및 CDN 적용으로 서비스 초기 로딩 속도를 개선하는 등 다양한 성능 최적화 경험을 보유하고 있습니다.',
        },
      },
      {
        title:
          '프로덕션 환경에서 React + TypeScript 로 웹 프론트엔드 프로덕트를 개발/운영한 경험',
        description: '기술: React+TypeScript 프로덕션 경험',
        icon: <Server className="h-6 w-6 text-green-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '선물하기, 몰파이, h.point 등 다수의 서비스를 React와 TypeScript를 사용하여 성공적으로 개발하고 현재까지 운영하고 있습니다. 8년간의 경험을 통해 안정적인 프로덕션 환경 구축 및 유지보수에 익숙합니다.',
        },
      },
      {
        title:
          '복잡한 비즈니스 로직을 정확하고 빠르게 이해하며 기술 적자를 쌓지 않는 문제 해결 능력',
        description: '기술: 복잡한 도메인 이해 및 문제 해결',
        icon: <Puzzle className="h-6 w-6 text-red-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '8년간 커머스 및 마케팅 플랫폼이라는 복잡한 도메인에서 개발을 수행했습니다. Toss Payments 연동, 업체별 UI/UX 커스텀, 통계 어드민 설계 등 복잡한 비즈니스 요구사항을 정확히 이해하고 확장 가능성을 고려한 코드를 작성하여 기술 부채를 최소화했습니다.',
        },
      },
      {
        title:
          '구성원들의 의견을 존중하고, 겸손한 커뮤니케이션 능력을 가지고 팀원들의 신뢰자산을 쌓을 수 있는 분',
        description: '태도: 협업과 커뮤니케이션',
        icon: <Users className="h-6 w-6 text-teal-500" />,
        category: 'experience',
        level: '자격',
        experience: {
          title: '💡 나의 경험',
          details:
            '팀장으로서 Git-Flow 도입, AWS CodeCommit 기반의 PR 문화와 2인 승인 체계를 정착시켜 코드 리뷰를 활성화했습니다. 이를 통해 팀원들과 함께 논의하며 더 나은 코드를 만들어가는 협업 문화를 구축했습니다.',
        },
      },
      {
        title:
          '기획/디자인/마케팅 등 다양한 직군과 원활히 소통하며 함께 나아갈 수 있는 협업 능력을 갖춘 분',
        description: '우대사항: 다양한 직군과의 협업 능력',
        icon: <MessageSquare className="h-6 w-6 text-indigo-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '백엔드 개발자와의 원활한 협업을 위해 MSW를 도입했으며, 디자이너/기획자와의 소통 비용 절감을 위해 Storybook을 활용하여 컴포넌트를 시각적으로 관리하고 논의를 진행했습니다.',
        },
      },
      {
        title:
          '모바일 앱의 웹뷰로 제공되는 어플리케이션을 운영해본 경험이 있는 분',
        description: '우대사항: 모바일 웹뷰 개발 및 운영 경험',
        icon: <Smartphone className="h-6 w-6 text-gray-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '선물하기, h.point 오락실, 지니펀 등 다수의 프로젝트를 모바일 앱 내 웹뷰 환경에서 개발하고 운영했습니다. 앱 스키마 연동 경험이 풍부하여 네이티브 앱과 웹뷰 간의 상호작용을 원활하게 구현할 수 있습니다.',
        },
      },
      {
        title: '디자인 시스템 컴포넌트를 설계, 구현 및 운영해본 경험이 있는 분',
        description: '우대사항: 디자인 시스템 구축 경험',
        icon: <Palette className="h-6 w-6 text-pink-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '모노레포(TurboRepo) 환경에서 공통 UI 라이브러리를 구축하여 여러 파생 서비스에서 일관된 UI/UX를 제공했으며, Storybook을 통해 컴포넌트를 체계적으로 문서화하고 관리하며 디자인 시스템을 구축하고 운영한 경험이 있습니다.',
        },
      },
      {
        title:
          'CDN, HTTP 캐시, 어플리케이션 캐시 등 여러 레이어에서의 캐싱을 깊이 고민해본 경험이 있는 분',
        description: '우대사항: 다중 레이어 캐싱 전략 경험',
        icon: <Database className="h-6 w-6 text-cyan-500" />,
        category: 'experience',
        level: '우대',
        experience: {
          title: '💡 나의 경험',
          details:
            '어플리케이션 레벨에서는 React Query의 캐싱 전략을 적극적으로 활용하여 API 호출을 최소화했으며, 인프라 레벨에서는 CloudFront CDN을 적용하여 정적 에셋의 로딩 속도를 개선하는 등 여러 레이어에서의 캐싱을 통해 성능을 최적화한 경험이 있습니다.',
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
