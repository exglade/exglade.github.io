# Repository Guidelines

## Build And Test Commands

- `npm run dev` starts the local Astro development server
- `npm run build` verifies the production static build
- `npm run preview` previews the built `dist` output
- `npm run check` is the standard final validation command
- `npm run format` applies Biome formatting
- `npm run check:write` applies Biome formatting and safe fixes
- No dedicated unit or end-to-end test runner is currently configured

## Component Rules

- Use shadcn/ui as the base for all UI; do NOT introduce alternative component libraries
- Compose with Radix primitives when shadcn/ui does not cover the use case
- Do NOT use inline styles; use Tailwind utility classes

## Code Style Guidelines

- Prefer `.astro` components for static UI
- Use React islands only for browser state, browser APIs, or interactions requiring hydration
- Let Biome handle formatting and safe fixes before making manual formatting changes
- Use `@/` path aliases
- Keep components small and focused

## Testing Instructions

- Run `npm run check` before handoff
- Run `npm run build` for page, route, content, hydration, or generated-output changes
- For interactive UI, verify keyboard behavior, responsive layout, and hydration intent
- If Biome quick fixes change intended behavior, adjust the code
- Use suppressions only when the rule is wrong for that case

## Static Site Safety

- Avoid `set:html` or raw HTML unless the source is trusted or sanitized
- Do not commit secrets or expose private values in client-visible code
- Use `rel="noopener noreferrer"` for new-tab external links
- Treat `public/` assets and generated output as public
- Keep hydration minimal unless interaction requires it

## Commit Convention

- Follow Conventional Commits; **omit scopes**
  - `feat: add inventory movement endpoint`
  - `fix: correct price calculation`
  - `test: add prices route tests`
- Keep commits focused and atomic
