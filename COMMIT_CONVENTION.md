# 커밋 메시지 규칙 (Conventional Commits)

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

## 기본 형식

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Type 종류

| Type         | 설명                                   | 예시                                    |
| ------------ | -------------------------------------- | --------------------------------------- |
| **feat**     | 새로운 기능 추가                       | `feat: 사용자 로그인 기능 추가`         |
| **fix**      | 버그 수정                              | `fix: 로그인 버튼 클릭 시 오류 수정`    |
| **docs**     | 문서 변경                              | `docs: README 파일 업데이트`            |
| **style**    | 코드 스타일 변경 (포맷팅, 세미콜론 등) | `style: 코드 포맷팅 적용`               |
| **refactor** | 코드 리팩토링                          | `refactor: 사용자 인증 로직 개선`       |
| **perf**     | 성능 개선                              | `perf: 이미지 로딩 속도 최적화`         |
| **test**     | 테스트 추가/수정                       | `test: 로그인 컴포넌트 테스트 추가`     |
| **chore**    | 빌드 프로세스, 도구 설정 등            | `chore: ESLint 설정 추가`               |
| **ci**       | CI 설정 변경                           | `ci: GitHub Actions 워크플로우 추가`    |
| **build**    | 빌드 시스템 변경                       | `build: webpack 설정 수정`              |
| **revert**   | 이전 커밋 되돌리기                     | `revert: feat: 사용자 로그인 기능 추가` |

## 규칙

### 필수 규칙

- **type**은 소문자로 작성
- **subject**는 필수이며 마침표(.)로 끝나지 않음
- 헤더는 72자를 초과하지 않음
- type과 subject는 비워둘 수 없음

### 권장 사항

- **scope**는 선택사항 (컴포넌트, 파일명 등)
- **body**와 **footer**는 선택사항
- body와 footer 앞에는 빈 줄 추가

## 좋은 커밋 메시지 예시

### 간단한 커밋

```
feat: 다크모드 토글 버튼 추가
fix: 모바일에서 네비게이션 메뉴 오류 수정
docs: 설치 가이드 업데이트
style: Prettier 포맷팅 적용
```

### 상세한 커밋

```
feat(auth): 소셜 로그인 기능 추가

Google, GitHub OAuth를 통한 소셜 로그인 지원
- Google OAuth 2.0 연동
- GitHub OAuth 연동
- 사용자 정보 자동 저장

Closes #123
```

## 나쁜 커밋 메시지 예시

❌ `update`  
❌ `fix bug`  
❌ `add feature.`  
❌ `FEAT: 새로운 기능`  
❌ `feat:`

## 자동 검증

커밋 시 자동으로 메시지 규칙을 검증합니다:

- 규칙에 맞지 않는 커밋 메시지는 자동으로 거부됩니다
- 커밋 전에 ESLint와 Prettier가 자동으로 실행됩니다

## 도구 사용법

```bash
# 커밋 메시지 수동 검증
npx commitlint --from HEAD~1 --to HEAD --verbose

# 린트 및 포맷팅 수동 실행
npm run lint:fix
npm run format
```
