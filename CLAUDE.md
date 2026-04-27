# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

> TypeScript build errors are ignored in `next.config.mjs` (`ignoreBuildErrors: true`), so `npm run build` will succeed even with type errors. Use `npx tsc --noEmit` to check types explicitly.

## Architecture

Personal/political website for **José Farhat** (Secretario de Participación Ciudadana, Tucumán, Argentina). Built with **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for animations.

### Routing (App Router)

Pages live under `app/`:
- `/` — Home, composed of many section components
- `/conoceme` — About page
- `/blog` — Blog listing
- `/novedades` — News/novedades
- `/multimedia` — Audio/video content
- `/temas/[id]` — Dynamic topic detail pages
- `/caja-de-herramientas` — Toolbox/resources
- `/contacto` — Contact form

Each route typically has a `page.tsx` (server component, exports metadata) and a `*-content.tsx` (client component with `"use client"`, handles interactivity and animations).

### Component structure

- `components/` — Shared components
  - `navbar.tsx`, `hero.tsx`, `footer.tsx`, `floating-elements.tsx` — Top-level layout
  - `sections/` — Homepage section components (each maps to one `<section>` on the homepage)
  - `ui/` — shadcn/ui primitives (generated, avoid editing directly)
- `lib/utils.ts` — Only contains `cn()` (clsx + tailwind-merge)
- `hooks/` — `use-mobile.ts`, `use-toast.ts`

### Styling and brand tokens

Tailwind CSS v4 is configured via `app/globals.css` (no `tailwind.config.js`). Brand color utilities are defined as CSS variables and exposed as Tailwind tokens:

| Token | Value |
|---|---|
| `brand-blue` | `#4272BB` |
| `brand-pink` | `#D5247A` |
| `brand-navy` | `#003257` |
| `brand-dark` | `#001228` |
| `brand-light-blue` | `#EEF4FB` |

Fonts: `font-sans` → DM Sans, `font-display` → Plus Jakarta Sans (both loaded via `next/font/google`).

### Key dependencies

- **framer-motion** — All animations (entrance, scroll, hover)
- **shadcn/ui** (Radix UI) — UI primitives in `components/ui/`
- **@emailjs/browser** — Contact form email sending
- **firebase** — Present in dependencies but not yet wired in visible code
- **@vercel/analytics** — Included in root layout

### Data patterns

Content (topics, news, testimonials, etc.) is currently hardcoded as arrays in the component files. Comments throughout indicate these are intended to be replaced with a CMS or API. When adding new content sections, follow the same pattern: define a typed array at the top of the section component.

### Important notes

- The `app/page..tsx` and `app/temas/[id]/]\page.tsx` files appear to have typos in their filenames — verify before editing.
- `next.config.mjs` only allows images from `josefarhat.com`; add domains to `remotePatterns` for external image sources.
- All interactive/animated components must include `"use client"` at the top.
