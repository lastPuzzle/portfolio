export interface ProjectLink {
  type: 'github' | 'live' | 'homepage' | 'other';
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  year: number;
  month: number;
  technologies: string[];
  category:
    | 'web'
    | 'mobile'
    | 'desktop'
    | 'ai'
    | 'other'
    | 'app-commerce'
    | 'platform'
    | 'app-marketing'
    | 'platform-marketing'
    | 'event'
    | 'platform-commerce'
    | 'app-travel'
    | 'web-marketing'
    | 'web-commerce';
  status: 'operating' | 'closed';
  images: string[];
  links: ProjectLink[];
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: 'wallet-2025',
    title: '선물하기(상용전)',
    description: '선물하기 커머스 서비스',
    longDescription:
      '앱 사용자를 대상으로 하는 선물하기 커머스 서비스의 사용자 화면과 어드민(관리자) 화면의 프론트엔드 전체를 설계하고 개발했습니다.',
    year: 2025,
    month: 6,
    technologies: [
      'React',
      'Next.js 13',
      'TypeScript',
      'Tanstack Query',
      'Chakra UI',
      'Zustand',
      'React-Hook-Form',
      'Zod',
      'MSW',
    ],
    category: 'app-commerce',
    status: 'operating',
    images: [],
    links: [],
    features: [
      '유저 및 어드민 프론트엔드 설계 및 개발',
      'Toss Payments 결제 연동',
      '선물하기 앱 스키마 연동',
      'EC2, Nginx, PM2를 이용한 배포',
    ],
    challenges: [
      '타입 안정성을 유지하며 복잡한 폼의 유효성 검증 관리',
      '디자인 리소스 없이 일관된 UI/UX 컴포넌트 체계 구축',
    ],
    learnings: [
      'Zod와 React-Hook-Form 연동을 통한 생산성 및 안정성 높은 폼 관리',
      'Chakra UI를 활용한 신속한 디자인 시스템 프로토타이핑',
    ],
  },
  {
    id: 'mallpie-2023',
    title: '몰파이',
    description: '누구나 쇼핑몰을 만들고 운영할 수 있게 도와주는 플랫폼',
    longDescription:
      'B2C, B2B, 복지몰 등 다양한 형태의 쇼핑몰을 사용자가 직접 생성하고 운영할 수 있는 형태의 커머스 플랫폼입니다. 프론트엔드 아키텍처 설계를 주도했습니다.',
    year: 2023,
    month: 7,
    technologies: [
      'React',
      'Next.js 12',
      'TypeScript',
      'Turborepo',
      'Emotion',
      'React-Hook-Form',
      'MSW',
      'Storybook',
      'Tanstack Query',
    ],
    category: 'platform-commerce',
    status: 'operating',
    images: [],
    links: [
      {
        type: 'homepage',
        label: '홈페이지',
        url: 'https://mallpie.kr',
      },
      {
        type: 'live',
        label: '바프 공식몰 (플랫폼 제작)',
        url: 'https://hbaf.mallpie.kr/',
      },
      {
        type: 'live',
        label: '네이트 핫딜 (플랫폼 제작)',
        url: 'https://nate.mallpie.kr/',
      },
    ],
    features: [
      '모노레포 아키텍처 도입',
      '공통 UI 라이브러리 구축 및 Storybook 연동',
      'Toss Payments 결제 연동',
      'MSW를 활용한 API 모킹',
    ],
    challenges: [
      '다수의 파생 서비스(유저, 기업, 복지몰) 간의 UI 코드 중복 및 비효율',
      'API 개발 지연에 따른 프론트엔드 개발 블로킹',
      '재사용 컴포넌트 관리 및 디자이너/기획자와의 소통 비효율',
    ],
    learnings: [
      'Turborepo 기반 모노레포 설계를 통한 코드 재사용성 및 유지보수성 극대화',
      'MSW 도입을 통한 백엔드 의존성 제거 및 병렬 개발 환경 구축',
      'Storybook을 활용한 디자인 시스템 도입 및 협업 문화 개선',
    ],
  },
  {
    id: 'hpoint-arcade-2022',
    title: 'h.point 오락실',
    description: 'h.point 앱 내 게임 리워드 마케팅 서비스',
    longDescription:
      '현대백화점 그룹의 h.point 앱 내에서 사용자가 게임에 참여하고 포인트 리워드를 받아가는 서비스 H.GMAE의 프론트엔드 개발을 담당했습니다.',
    year: 2022,
    month: 7,
    technologies: [
      'React',
      'TypeScript',
      'Emotion',
      'MSW',
      'Axios',
      'Tanstack Query',
    ],
    category: 'app-marketing',
    status: 'closed',
    images: [],
    links: [],
    features: [
      '게임 리워드 서비스 UI/UX 개발',
      'h.point 앱 스키마 연동',
      'S3와 CloudFront를 이용한 정적 배포',
    ],
    challenges: [
      '네이티브 앱과 웹뷰 간의 원활한 데이터 통신 및 사용자 경험 연동',
      '안정적인 API 연동 및 데이터 관리',
    ],
    learnings: [
      '앱 스키마를 활용한 웹뷰-네이티브 인터페이스 구현',
      'Tanstack Query를 활용한 서버 상태 관리 및 캐싱 전략',
    ],
  },
  {
    id: 'geniefun-2021',
    title: '지니펀',
    description: '앱 리워드를 제공하는 게임 기반 마케팅 플랫폼',
    longDescription:
      '광고 시청 및 게임 참여 시 앱 리워드를 제공하는 마케팅 플랫폼입니다. 다양한 고객사의 요구사항에 맞춰 유연하게 UI/UX를 커스터마이징하는 역할을 수행했습니다.',
    year: 2021,
    month: 7,
    technologies: [
      'React',
      'TypeScript',
      'Axios',
      'Redux',
      'Redux-Saga',
      'Redux-Toolkit',
      'Styled-components',
    ],
    category: 'platform-marketing',
    status: 'operating',
    images: [],
    links: [],
    features: [
      '고객사별(후엠아이글로벌, 하나카드, 신한카드 등) UI/UX 커스터마이징',
      '다양한 광고 플랫폼(메조미디어, 다윈 등) 연동',
      '앱 스키마 연동 및 기술 문서 작성',
      'S3와 CloudFront를 이용한 배포',
    ],
    challenges: [
      '복잡한 비동기 로직 및 전역 상태 관리',
      '고객사별로 파편화된 UI/UX 요구사항 대응',
    ],
    learnings: [
      'Redux-Saga를 활용한 복잡한 비동기 처리 및 상태 관리 패턴',
      '재사용 가능한 컴포넌트 설계를 통한 효율적인 커스터마이징 전략',
    ],
  },
  {
    id: 'tmap-event-2020',
    title: 'T map 18주년 생일 이벤트',
    description: 'T-map 18주년 기념 경품 획득 이벤트',
    longDescription:
      'T-map 사용자들이 매일 게임에 참여하여 경품을 획득하는 대규모 이벤트의 프론트엔드 개발을 담당했습니다.',
    year: 2020,
    month: 5,
    technologies: [
      'React',
      'TypeScript',
      'Axios',
      'Redux',
      'Redux-Saga',
      'Styled-components',
    ],
    category: 'event',
    status: 'closed',
    images: [],
    links: [],
    features: [
      '랜덤성 게임(룰렛, 복권 등) 로직 개발 및 연동',
      '중복 API 호출 방지를 위한 UI 제어',
      '이벤트 API 연동 및 배포',
    ],
    challenges: [
      '짧은 이벤트 기간 내 안정적인 서비스 개발 및 배포',
      '동시 접속자가 많을 때의 중복 응모 및 서버 부하 문제',
    ],
    learnings: [
      '디바운싱(Debouncing)을 적용한 API 호출 최적화',
      '클라이언트 사이드에서의 사용자 인터랙션 제어를 통한 서버 안정성 기여',
    ],
  },
  {
    id: 'sellerd-plus-2019',
    title: 'sellerd+',
    description: '업체별 커머스 운영 및 개발 플랫폼',
    longDescription:
      '다양한 업체의 커머스 운영 및 개발을 지원하는 플랫폼입니다. 레거시 시스템의 UI/UX를 개선하고, React 기반의 통계 어드민을 신규 개발했습니다.',
    year: 2019,
    month: 11,
    technologies: [
      'React',
      'TypeScript',
      'Tanstack Query',
      'Emotion',
      'Ant-Design',
      'Zustand',
      'Chart.js',
      'JSP',
      'JavaScript',
    ],
    category: 'platform-commerce',
    status: 'operating',
    images: [],
    links: [
      {
        type: 'homepage',
        label: '홈페이지',
        url: 'https://sellerd.co.kr/',
      },
      {
        type: 'live',
        label: 'KOK (플랫폼 제작)',
        url: 'https://kok.uplus.co.kr/',
      },
    ],
    features: [
      'React 기반 통계 어드민 프론트엔드 설계',
      'Chart.js를 활용한 데이터 시각화',
      'JSP 기반 레거시 커머스 UI/UX 개선 (kok, K-deal 등)',
      '전역 상태 관리 및 서버 상태 관리',
    ],
    challenges: [
      '효율적인 전역 상태 관리 및 리렌더링 최적화',
      '서버 데이터의 캐싱, 로딩, 에러 상태의 일관된 관리',
      '복잡한 데이터와 상호작용이 많은 어드민 UI 개발 생산성',
    ],
    learnings: [
      'Zustand의 선택적 구독(selective subscription)을 통한 리렌더링 최적화',
      'Tanstack Query를 활용한 API 재호출 감소 및 유지보수성 향상',
      'Ant-Design을 활용한 어드민 UI 개발 생산성 증대',
    ],
  },
  {
    id: 'funtown-2020',
    title: '펀타운',
    description: 'CJ ONE 앱 게임 리워드 마케팅 서비스',
    longDescription:
      'CJ ONE 앱 사용자가 광고 시청 후 게임에 참여하면 랭킹에 따라 포인트를 리워드로 받는 서비스의 프론트엔드 개발을 담당했습니다.',
    year: 2020,
    month: 2,
    technologies: ['React', 'Axios', 'SCSS', 'MUI', 'Redux', 'Redux-Saga'],
    category: 'app-marketing',
    status: 'closed',
    images: [],
    links: [],
    features: [
      '유저 및 어드민 프론트엔드 설계',
      'CJ ONE 앱 스키마 연동',
      '동영상 및 배너 광고 플랫폼 연동',
    ],
    challenges: [
      '신속한 어드민 페이지 UI 개발',
      '네이티브 앱과의 안정적인 연동',
    ],
    learnings: [
      'MUI와 같은 UI 라이브러리를 활용한 개발 생산성 향상',
      '외부 광고 플랫폼 SDK 연동 및 관리',
    ],
  },
  {
    id: 'admus-2018',
    title: '애드머스',
    description: '게임 참여 마케팅 플랫폼',
    longDescription:
      '업체나 개인이 직접 캠페인을 생성하여 게임 마케팅을 운영할 수 있는 플랫폼의 프론트엔드 개발을 담당했습니다.',
    year: 2018,
    month: 9,
    technologies: [
      'React',
      'Axios',
      'SCSS',
      'React-Bootstrap',
      'Redux',
      'Redux-Saga',
    ],
    category: 'platform-marketing',
    status: 'closed',
    images: [],
    links: [
      {
        type: 'homepage',
        label: '홈페이지',
        url: 'https://www.admerce.co.kr/',
      },
    ],
    features: [
      '프론트엔드 프레임워크(React) 도입',
      'Phaser.js로 개발된 웹 게임 연동',
      '유저 및 어드민 화면 프론트 설계',
    ],
    challenges: [
      '레거시 코드베이스의 재사용성 및 유지보수성 문제',
      '다양한 프레임워크 옵션 중 프로젝트에 가장 적합한 기술 선정',
    ],
    learnings: [
      '프로젝트에 React를 도입하여 컴포넌트 기반 개발의 이점(재사용성, 유지보수성)을 활용',
      '기술 선정 시 Angular, Vue, React의 장단점을 비교 분석하고 합리적인 의사결정 과정 경험',
    ],
  },
  {
    id: 'samsung-point-2018',
    title: '무료 충전소 (삼성 포인트)',
    description: '삼성포인트 리워드 마케팅 서비스',
    longDescription:
      '게임 참여 랭킹에 따라 삼성 포인트를 리워드로 제공하는 마케팅 서비스의 프론트엔드 개발을 담당했습니다.',
    year: 2018,
    month: 6,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'web-marketing',
    status: 'closed',
    images: [],
    links: [],
    features: [
      'Phaser.js로 개발된 웹 게임 연동',
      'EC2와 Nginx를 이용한 배포',
      '유저 및 어드민 화면 개발',
    ],
    challenges: [
      '프레임워크 없이 순수 JavaScript로 상태 및 UI 관리',
      '웹 서버 직접 구성 및 배포',
    ],
    learnings: [
      'Vanilla JavaScript를 이용한 DOM 조작 및 이벤트 처리',
      'Nginx를 통한 웹 서버 설정 및 기본 배포 프로세스 이해',
    ],
  },
  {
    id: 'picnique-2018',
    title: 'Picnique (삼성페이 쇼핑 제휴몰)',
    description: '삼성페이 쇼핑 제휴몰 운영 및 개선',
    longDescription:
      '삼성페이 쇼핑 제휴몰의 커머스 운영 이벤트 개발 및 UI/UX 개선 작업을 수행했습니다.',
    year: 2018,
    month: 1,
    technologies: ['JSP', 'HTML', 'CSS', 'JavaScript', 'AWS S3', 'CloudFront'],
    category: 'web-commerce',
    status: 'closed',
    images: [],
    links: [],
    features: [
      '커머스 이벤트 퍼블리싱 및 스크립트 구현',
      '반복적인 이벤트 작업을 위한 어드민 기능 개발',
      '폰트 경량화 및 CDN 적용을 통한 성능 개선',
    ],
    challenges: [
      '운영팀의 반복적인 퍼블리싱 작업으로 인한 생산성 저하',
      '커머스 서비스의 초기 로딩 속도 저하 문제',
    ],
    learnings: [
      '운영 업무를 자동화하는 어드민 기능 개발을 통한 업무 효율화 기여',
      'AWS S3, CloudFront를 활용한 CDN 구축 및 적용을 통한 웹 성능 최적화',
    ],
  },
];

export const getProjectsByYear = () => {
  const projectsByYear = projects.reduce(
    (acc, project) => {
      const year = project.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    },
    {} as Record<number, Project[]>
  );

  return Object.keys(projectsByYear)
    .sort((a, b) => Number(b) - Number(a))
    .reduce(
      (acc, year) => {
        acc[Number(year)] = projectsByYear[Number(year)].sort(
          (a, b) => b.month - a.month
        );
        return acc;
      },
      {} as Record<number, Project[]>
    );
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
