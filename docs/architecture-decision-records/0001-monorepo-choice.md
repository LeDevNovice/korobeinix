# ADR-0001 — Why a PNPM Monorepo?

_Date : 2025-07-28_  
_Deciders : LeDevNovice_  
_Context reviewed : Vision v1, Mechanics spec, Infra backlog_

---

## 1 · Context

Korobeinix is a **full-stack TypeScript** project. Front and back share **domain types**, validation schemas and potentially state-machines. Below, a potential tech stack of the project :

| Layer        | Technology                                     | Rationale               |
| ------------ | ---------------------------------------------- | ----------------------- |
| Front-end    | React · Vite · Tailwind · TanStack Router      | 60 fps canvas & PWA     |
| Back-end     | Fastify · tRPC · Drizzle (+ Postgres)          | Type-safe API           |
| Shared logic | Zod schemas · XState machines · EffectTS utils | Compile-time guarantees |
| Tooling      | Vitest · Playwright · ESLint · Husky           | Quality gate            |

Development is solo for now.

---

## 2 · Decision

> **Adopt a single PNPM workspace monorepo**.

## 3 · Alternatives considered

| Option                                           | Pros                                                              | Cons                                                                                                                                    |
| ------------------------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Polyrepo (frontend + backend separate)**       | • Simpler mental model for newcomers<br>• Independent git history | ✗ Duplicate `types/` package publishing<br>✗ A backend change can break front                                                           |
| **Multi-repo with published shared NPM package** | • Strict semantic-versioning contract                             | ✗ Publishing overhead for every schema edit<br>✗ Delay between back merge & front update<br>✗ Requires registry (NPM / GitHub Packages) |
| **Nx or Turbo repository instead of PNPM**       | • Incremental builds & task graph<br>• Built-in cache remote      | ✗ Additional layer of configuration<br>✗ PNPM 8 already supports workspaces + cache<br>✗ Overkill for solo / small team at v1           |

---

## 4 · Rationale

| Requirement                     | Monorepo fit                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Type-safety across boundary** | `packages/shared` exported interfaces are imported by both `/apps/api` and `/apps/web`. Single source of truth.     |
| **Atomic PRs**                  | One pull-request can update Drizzle migration, tRPC procedure, React hook **together** → CI red/green in one place. |
| **CI performance**              | PNPM store + workspace caching => install < 35 s. Selective test runs (`pnpm -r --filter`) keep pipeline ~3 min.    |
| **Future contributors**         | Clone, `pnpm install`, `pnpm dev` → both servers run. Low onboarding friction.                                      |
| **Free budget**                 | No paid remote cache; PNPM provides hoistless installs and good hashing out-of-the-box.                             |

---

## 5 · Consequences

### Positive

- Shared code with zero publish latency.
- One **branch-protection rule** (`master`) – easier governance.

### Negative / Mitigations

| Risk                                | Mitigation                                              |
| ----------------------------------- | ------------------------------------------------------- |
| Large repo size over time           | review assets before commit.                            |
| Long CI if matrix explodes          | build jobs only if related files changed.               |
| Tool clashes (e.g. Tailwind vs API) | Isolate configs under `/config`, reference per package. |

---

## 7 · Review & Future

This decision will be revisited if:

- The project splits into multiple deployable micro-services.
- A non-TypeScript client appears (native app) needing a versioned public API.

Until then, the monorepo maximises velocity and keeps maintenance overhead minimal.
