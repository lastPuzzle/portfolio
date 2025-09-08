# Portfolio - Seunghyuk Lee

이승혁의 개인 포트폴리오 웹사이트입니다. 8년간의 프론트엔드 개발 경험과 다양한 프로젝트들을 소개합니다.

## 🚀 기술 스택

### Frontend

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Lucide React
- **Animation**: React Hangul Motion
- **State Management**: Zustand
- **Rich Text**: TipTap

### Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint, Prettier
- **Testing**: Vitest, Playwright
- **Storybook**: Component documentation
- **MSW**: API mocking
- **Husky**: Git hooks
- **Commitlint**: Conventional commits

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # 홈페이지 라우트 그룹
│   │   ├── _components/   # 홈페이지 컴포넌트
│   │   │   ├── Intro/     # 소개 섹션
│   │   │   └── Qualifications/ # 자격사항 매칭 섹션
│   │   └── _lib/         # 홈페이지 유틸리티
│   ├── about/            # 소개 페이지
│   ├── projects/         # 프로젝트 페이지
│   │   ├── [id]/        # 개별 프로젝트 상세 페이지
│   │   └── _components/  # 프로젝트 관련 컴포넌트
│   └── globals.css       # 전역 스타일
├── components/           # 재사용 가능한 컴포넌트
│   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── sidebar/     # 사이드바
│   │   ├── topbar/      # 상단바
│   │   └── theme-toggle/ # 테마 토글
│   └── ui/              # UI 컴포넌트
│       ├── button/      # 버튼 컴포넌트
│       ├── back-button/ # 뒤로가기 버튼
│       └── dropdown-menu/ # 드롭다운 메뉴
├── lib/                 # 유틸리티 및 설정
│   ├── contexts/        # React Context
│   ├── data/           # 정적 데이터
│   │   ├── projects.ts  # 프로젝트 데이터
│   │   ├── about.ts     # 소개 데이터
│   │   └── companyQualifications.tsx # 자격사항 데이터
│   ├── utils/          # 유틸리티 함수
│   └── constants/      # 상수 정의
├── types/              # TypeScript 타입 정의
├── stores/             # 상태 관리 (Zustand)
└── stories/            # Storybook 스토리
```

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 20.0.0 이상
- pnpm 8.0.0 이상

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

### 개발 도구

```bash
# 린팅
pnpm lint
pnpm lint:fix

# 코드 포맷팅
pnpm format
pnpm format:check

# Storybook 실행
pnpm storybook

# 테스트 실행
pnpm test
```

## 🔧 개발 환경

### 코드 품질

- **ESLint**: 코드 품질 및 일관성 유지
- **Prettier**: 코드 포맷팅 자동화
- **Husky**: Git hooks를 통한 커밋 전 검증
- **Commitlint**: Conventional Commits 규칙 적용

### 배포

- **Vercel**: 정적 사이트 호스팅
- **MSW**: 개발 환경에서의 API 모킹

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.
