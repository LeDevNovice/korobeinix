# Vision – Tetris Clone **“Project Korobeinix”**

## Pitch  
Build an open-source re-creation of the original 1984 Tetris that targets:

1. **Recruiters** — showcase end-to-end mastery of a modern TypeScript stack.  
2. **Developers** — serve as a reference codebase: clean, fully-typed, fully-tested.  
3. **Casual gamers** — deliver an instant, ad-free, ultra-fluid play session in the browser.

---

## Key differentiators
* **Proven performance:** steady 60 fps on desktop *and* low-end mobile; client bundle ≤ 80 kB gzip\*.  
* **Full-stack type-safety:** Fastify + tRPC + Drizzle + React, test coverage ≥ 80 %.  
* **“Playful kids” design:** bright colour palette, accessible UI (shadcn/ui + Tailwind).

---

## v1 Scope
* Single-player gameplay strictly matching 1984 mechanics.  
* Global leaderboard (top 10). No login required; client-generated UUID stored locally.  
* Offline-first PWA (Service Worker, installable).

> **Out of v1 scope:** multiplayer, player profiles, anti-cheat score signatures,...

---

## Success criteria (KPI)

| Area | Metric | Target |
|------|--------|--------|
| UX | Median FPS on Moto G Power \*\* | ≥ 55 |
| Perf | Mobile Time-to-Interactive \*\*\* | ≤ 1.5 s |
| Bundle | JS (gzip) | ≤ 80 kB |
| Backend | `score.submit` latency P95 \*\*\*\* | ≤ 100 ms |
| Quality | Test coverage | ≥ 80 % |
| Accessibility | Lighthouse A11y score | ≥ 90 |

---

## Constraints
* **Budget €0:** use only free-tier infrastructure.
* **TypeScript everywhere:** front & back.  
* **MIT licence;** no use of the “Tetris” trademark or original assets.

---

## Major risks & unknowns

| Topic | Severity | Likelihood | Mitigation |
|-------|----------|------------|------------|
| Canvas perf on low-end devices | High | Medium | Profiling spike |
| Tetris IP conflict | High | Low if name/assets custom | Custom branding, no trademarks |
| Free-tier quota exhaustion | Medium | Low | DB export script + fallback SQLite |
| Design churn | Medium | Medium | Architectural Decision Records |
| Scope creep | Medium | Medium | Backlog lock discipline |

---

<br>
<br>

\* On 4 G (≈ 6 Mbit/s), every 100 kB of gzipped JS adds ~135 ms download **plus** 50–90 ms parse/compile on mobile CPUs. Lighthouse heavily penalises large JS payloads.

\*\* Measured with Chrome DevTools › Rendering › Frame Rendering Stats overlay. UX studies show perceived smoothness from ~55 fps.

\*\*\* Time until the page is fully interactive. 1.5 s is ~50 % stricter than Lighthouse’s “fast” threshold.

\*\*\*\* 95 % of `POST /score` requests complete in < 100 ms. Below 100 ms the action feels instant (RAIL response budget).
