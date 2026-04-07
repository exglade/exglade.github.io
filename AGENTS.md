# Repository Guidelines

## Component Rules

- Use shadcn/ui as the base for all UI; do NOT introduce alternative component libraries
- Compose with Radix primitives when shadcn/ui does not cover the use case
- Do NOT use inline styles; use Tailwind utility classes

## Commit Convention

- Follow Conventional Commits; **omit scopes**
  - `feat: add inventory movement endpoint`
  - `fix: correct price calculation`
  - `test: add prices route tests`
- Keep commits focused and atomic