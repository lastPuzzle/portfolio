export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  year: number;
  month: number;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other';

  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: 'web-game-2024',
    title: '샘플',
    description: '이것은 샘플입니다.',
    longDescription: '샘플과 샘플을 통한 ui를 제공합니다',
    year: 2024,
    month: 9,
    technologies: ['HTML5', 'Canvas API', 'JavaScript', 'CSS3'],
    category: 'web',

    images: ['/api/placeholder/800/600'],
    githubUrl: 'https://github.com/username/puzzle-game',
    liveUrl: 'https://puzzle.example.com',
    features: [
      '다양한 퍼즐 타입',
      '난이도 조절',
      '점수 시스템',
      '리더보드',
      '모바일 지원',
    ],
    challenges: ['게임 로직 구현', '성능 최적화', '터치 컨트롤 구현'],
    learnings: ['Canvas API 활용', '게임 개발 기초', '애니메이션 구현'],
  },
  {
    id: 'desktop-app-2023',
    title: '파일 관리자',
    description: 'Electron과 React로 개발한 데스크톱 파일 관리 애플리케이션',
    longDescription:
      '시스템 파일을 효율적으로 관리할 수 있는 데스크톱 애플리케이션입니다. 파일 검색, 정렬, 미리보기 기능을 제공합니다.',
    year: 2023,
    month: 11,
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js'],
    category: 'desktop',
    images: ['/api/placeholder/1200/800'],
    githubUrl: 'https://github.com/username/file-manager',
    features: [
      '파일 탐색',
      '검색 기능',
      '미리보기',
      '정렬 및 필터링',
      '키보드 단축키',
    ],
    challenges: [
      '대용량 파일 처리',
      '시스템 리소스 최적화',
      '크로스 플랫폼 호환성',
    ],
    learnings: ['Electron 개발', '시스템 API 활용', '데스크톱 앱 UX/UI'],
  },
  {
    id: 'web-game-2023',
    title: '퍼즐 게임',
    description: 'Canvas API를 사용한 웹 기반 퍼즐 게임',
    longDescription:
      'HTML5 Canvas와 JavaScript를 활용하여 제작한 퍼즐 게임입니다. 다양한 난이도와 레벨을 제공하며, 점수 시스템과 리더보드를 포함합니다.',
    year: 2023,
    month: 9,
    technologies: ['HTML5', 'Canvas API', 'JavaScript', 'CSS3'],
    category: 'web',
    images: ['/api/placeholder/800/600'],
    githubUrl: 'https://github.com/username/puzzle-game',
    liveUrl: 'https://puzzle.example.com',
    features: [
      '다양한 퍼즐 타입',
      '난이도 조절',
      '점수 시스템',
      '리더보드',
      '모바일 지원',
    ],
    challenges: ['게임 로직 구현', '성능 최적화', '터치 컨트롤 구현'],
    learnings: ['Canvas API 활용', '게임 개발 기초', '애니메이션 구현'],
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
