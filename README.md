# 📚 Seenote – 감정을 기록하는 감성 개인서재

> 실제 서비스 아키텍처에 가까운 구조를 직접 설계하고 구현하며, 풀스택 개발 역량을 확장하고자 진행 중인 개인 프로젝트입니다.<br/>
> Turborepo 기반 Monorepo 구성, Nest.js API 서버 개발, JWT 인증, 프론트 상태 관리 설계 등을 단계적으로 구현하고 있습니다.

## 🧭 프로젝트 개요

Seenote는 전자책, 웹툰, OTT 등의 콘텐츠 감상을 감정 중심으로 기록하는 개인 서재형 웹앱입니다. <br/>
이 프로젝트를 통해 다음과 같은 기술적 시도를 했습니다:

- **Turborepo 기반의 Monorepo 구조 구성 및 공통 패키지 구성**
- **Nest.js + Prisma 기반의 REST API 구축**
- **JWT 기반 인증 및 사용자/관리자 역할 분리 처리**
- _(진행 예정)_ 프론트 UI 기획 및 상태 관리 구조 설계

## 🗂️ 프로젝트 관리 방식

- GitHub Issues와 Milestone으로 기능 단위 계획 및 우선순위 관리
- 커밋 컨벤션: `feat`, `fix`, `refactor`, `docs`, `chore` 등으로 관리
- PR 라벨링, 이슈 템플릿 작성 등 협업 관점의 워크플로우 실험

## 🛠️ 기술 스택

| 영역     | 기술                                                                                                                                                                                                                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend | [Next.js](https://nextjs.org/)(App Router), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/)                                                                                                                                                                                                 |
| Backend  | [Nest.js](https://nestjs.com/), [Prisma](https://www.prisma.io/?via=start&gad_source=1&gad_campaignid=21223529504&gbraid=0AAAAA9nNp_fuSOZXaRYEu-WCZw3Qd4OLU&gclid=Cj0KCQjw64jDBhDXARIsABkk8J4smZgzzQ43ENMf7b4FWLCVdK4U0tm4sTywV-gNgaDdw-RkH_JvNQUaAuEMEALw_wcB), [PostgreSQL](https://www.postgresql.org/), [JWT](https://jwt.io/) |
| Infra    | [Turborepo](https://turborepo.com/), GitHub Actions (예정), [Vercel](https://vercel.com/), Railway(예정)                                                                                                                                                                                                                           |
| Tooling  | [ESLint](https://eslint.org/), [Prettier](https://prettier.io), [pnpm](https://pnpm.io/ko/), [Figma](https://www.figma.com/), [diagrams.net](https://www.drawio.com/)                                                                                                                                                              |

## 🗂️ 폴더 구조

```
/apps
  ├─ web        # 사용자 화면 (Next.js)
  ├─ cms        # 관리자 화면 (Next.js)
  └─ api        # API 서버 (Nest.js)

/packages
  └─ eslint-config  # 공통 ESLint 설정

/.github           # CI 설정
/docs              # 프로젝트 문서 및 아키텍처 정의
```

## 🚧 주요 구현 내역

- [x] Turborepo 기반 프로젝트 구조 구성 및 패키지 통합 관리
- [x] PostgreSQL 기반 관계형 모델링 및 Prisma 스키마 설계
- [ ] Nest.js + Prisma 기반 관리자용 콘텐츠 CRUD API 구현 _(진행 중)_
- [ ] 사용자 감상 기록 UI 기획 및 Notion 스타일 인터페이스 설계
- [ ] 감정 기반 메모 기록 / 검색 기능 프론트 개발 예정

## ⚙️ 실행 방법

```bash
# 레포 클론 및 패키지 설치
git clone https://github.com/sukyoungshin/seenote.git
cd seenote
pnpm install

# 데이터베이스 마이그레이션
pnpm prisma migrate dev --filter=api

# 개발 서버 실행
pnpm dev # 모든 앱 동시 실행 (Turborepo 기반)
```

### 환경 변수 설정 (`apps/api/.env`)

아래는 로컬 개발 시 사용되는 `.env` 파일 예시입니다:

```env
DATABASE_URL=postgresql://<USERNAME>:<PASSWORD>@localhost:5432/<DB_NAME>
JWT_SECRET=<YOUR_JWT_SECRET>
```

## 참고 자료

- [ERD 설계도](https://app.diagrams.net/#G1kbiKRBm3EKLRzDi8cevRwkcAcdCKE5n4#%7B%22pageId%22%3A%224fE63W0RabtmQJJCjAPa%22%7D)
- [API 명세](https://docs.google.com/spreadsheets/d/1PIgEtqSUhj3hIzWzcacfBX-NITza7JUjETMliwTUarE/edit?gid=0#gid=0)

## 👩🏻‍💻 개발자

**신수경 (SuKyoung Shin)**

- GitHub: [@sukyoungshin](https://github.com/sukyoungshin)
- Email: [sukyoung.dev@gmail.com](mailto:sukyoung.dev@gmail.com)
