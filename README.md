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

## 🎨 주요 기능

### 홈페이지

- **소개 섹션**: 개발자 소개 및 경력 요약
- **자격사항 매칭**: 회사별 자격요건과 우대사항을 구분하여 표시
  - 자격요건: 필수 요구사항 (빨간색 배지)
  - 우대사항: 추가 고려사항 (초록색 배지)
  - 개인 경험과 매칭되는 항목들에 대한 상세 설명
- **프로젝트 미리보기**: 주요 프로젝트 카드 형태로 표시

### 프로젝트 페이지

- **연도별 정렬**: 프로젝트를 연도별로 그룹화하여 표시
- **카테고리 필터링**: 웹, 모바일, AI 등 카테고리별 필터링
- **상세 정보**: 각 프로젝트의 기술 스택, 도전과제, 학습 내용 등 상세 정보

### 소개 페이지

- **개발 철학**: 균형잡힌 개발 접근법
- **아키텍처 경험**: 모노레포, 성능 최적화 경험
- **리더십**: 팀 리딩 및 개발 문화 구축 경험

### 기술적 특징

- **반응형 디자인**: 모바일부터 데스크톱까지 최적화
- **다크/라이트 모드**: 사용자 설정에 따른 테마 전환
- **애니메이션**: React Hangul Motion을 활용한 부드러운 애니메이션
- **접근성**: 웹 접근성 가이드라인 준수
- **SEO 최적화**: Next.js의 메타데이터 API 활용
- **자격사항 매칭 시스템**: 회사별 요구사항과 개인 경험을 시각적으로 매칭
- **그룹화된 UI**: 자격요건과 우대사항을 명확하게 구분하여 표시

## 📊 데이터 구조

### 프로젝트 데이터 (`src/lib/data/projects.ts`)

프로젝트 정보는 다음과 같은 정보를 포함합니다:

- **기본 정보**: 제목, 설명, 연도, 월
- **기술 스택**: 사용된 기술들
- **카테고리**: 웹, 모바일, AI, 커머스, 마케팅 등
- **상태**: 운영 중, 종료
- **링크**: GitHub, 라이브 데모, 홈페이지
- **상세 정보**: 주요 기능, 도전과제, 학습 내용

### 자격사항 데이터 (`src/lib/data/companyQualifications.tsx`)

회사별 자격요건과 우대사항을 관리합니다:

- **회사 정보**: 이름, 로고, ID
- **자격요건**: 필수 요구사항 (`level: '자격'`)
- **우대사항**: 추가 고려사항 (`level: '우대'`)
- **개인 경험**: 각 항목에 대한 개인 경험 및 매칭 설명
- **카테고리**: 경험, 기술, 성과로 분류

## 🔧 개발 환경

### 코드 품질

- **ESLint**: 코드 품질 및 일관성 유지
- **Prettier**: 코드 포맷팅 자동화
- **Husky**: Git hooks를 통한 커밋 전 검증
- **Commitlint**: Conventional Commits 규칙 적용

### 테스팅

- **Vitest**: 단위 테스트
- **Playwright**: E2E 테스트
- **Storybook**: 컴포넌트 테스트 및 문서화

### 배포

- **Vercel**: 정적 사이트 호스팅
- **MSW**: 개발 환경에서의 API 모킹

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.
