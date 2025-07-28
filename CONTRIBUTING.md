# Contributing to **Korobeinix**

> **Maintainer-merge model**  
> All pull-requests are reviewed and merged **only** by the sole maintainer, **@LeDevNovice**.  
> Feel free to open issues or PRs— they will be considered once every checklist below is green.

## Table of Contents
- [Contributing to **Korobeinix**](#contributing-to-korobeinix)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Branch \& Commit Guidelines](#branch--commit-guidelines)
  - [Pull-Request Checklist](#pull-request-checklist)
  - [Issue Tracker Etiquette](#issue-tracker-etiquette)

## Code of Conduct
By taking part in this project you agree to follow our  
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Branch & Commit Guidelines
| Purpose    | Pattern                | Example                 |
| ---------- | ---------------------- | ----------------------- |
| Feature    | `feat/<issue-id>-slug` | `feat/12-canvas-fps`    |
| Fix        | `fix/<issue-id>-slug`  | `fix/21-score-rollover` |
| Docs       | `docs/<slug>`          | `docs/vision`           |
| Chore / CI | `ci/<slug>`            | `ci/quality-gate`       |
| Spike      | `spike/<topic>`        | `spike/trpc-poc`        |


*Commits* use **Conventional Commits** (feat:, fix:, docs: …) so release notes can be generated automatically.

## Pull-Request Checklist
*Open the PR as Draft early; convert to Ready for review once all items are ticked.*

- [ ] Issue linked (Closes #<id>)
- [ ] CI green (lint · type-check · unit tests)
- [ ] Coverage stable or improved
- [ ] Bundle ≤ 80 kB gzip (pnpm size)
- [ ] Docs / ADR updated if behaviour changed
- [ ] Self-review done (no TODOs left)

Once these are green, **@LeDevNovice** will provide final review & merge.

## Issue Tracker Etiquette
| Issue type  | Template          | Must include                         |
| ----------- | ----------------- | ------------------------------------ |
| Bug         | *Bug report*      | Repro steps, expected vs actual, env |
| Feature     | *Feature request* | Motivation + acceptance criteria     |
| Chore/Infra | *Chore / Infra*   | Clear task list                      |


Search for duplicates before opening a ticket.
Use labels (type:feat, priority:P0, …) to help triage.

---

Thank you for helping make **Korobeinix** better 🚀
