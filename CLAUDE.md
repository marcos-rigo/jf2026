# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start development server (Next.js, localhost:3000)
npm run build            # Production build (TypeScript errors ignored)
npm run lint             # Run ESLint (Next.js defaults, no custom config file)
npm run start            # Start production server
npx tsc --noEmit         # Explicit type checking (build ignores errors)
```

> `next.config.mjs` sets `ignoreBuildErrors: true` — always use `npx tsc --noEmit` to verify types.

### Weekly content management

```bash
npm run create-week          # Interactive scaffold: creates folder + metadata.json
npm run validate-week WNN    # Validate a specific week (e.g. 2026-W23)
npm run validate-all         # Validate all weeks listed in manifest.json
npm run preview-week WNN     # Visual preview server at localhost:3001
npm run archive-old          # Move past weeks to public/weekly-content/archive/
npm run archive-old -- --dry-run  # Preview what would be archived
```

> **Gotcha:** `npm run create-week` does NOT auto-register the new week in `public/weekly-content/manifest.json` — add the key manually (e.g. `"2026-W23"`).

## Architecture

Personal/political website for **José Farhat** (Secretario de Participación Ciudadana, Tucumán, Argentina). Built with **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for animations.

### Routing (App Router)

Most routes follow a two-file pattern: `page.tsx` (server component, exports `metadata`) and a `*-content.tsx` (client component with `"use client"` for animations and interactivity). Exceptions:
- `/temas` and `/temas/[id]` are single-file fully client components with no server page wrapper; `/temas/page.tsx` includes Navbar/Footer directly.
- The digital citizenship sub-pages (`/alfabetizacion-mediatica`, `/huella-digital`, `/violencia-digital`, `/estafas-digitales`) use the two-file pattern but their `page.tsx` omits Navbar/Footer — the content component handles layout.
- `/blog` (`blog-content.tsx`) and `/caja-de-herramientas` (`toolbox-content.tsx`) do follow the two-file pattern despite not being listed that way historically.

| Route | Purpose |
|-------|---------|
| `/` | Home landing: 9+ section components |
| `/conoceme` | About page — bio, stats, philosophy |
| `/blog` | Blog article listing (3 hardcoded posts) |
| `/novedades` | News/updates listing (8 hardcoded) |
| `/multimedia` | Videos and podcasts |
| `/temas` | Topic listing — single client component with search/filter (includes Navbar/Footer directly) |
| `/temas/[id]` | Topic detail — single client component with hardcoded example data |
| `/caja-de-herramientas` | Toolbox/resources (6 cards) |
| `/tematicas` | Digital citizenship topic listing — cards linking to sub-pages (two-file pattern, includes Navbar/Footer in `page.tsx`) |
| `/ciudadania-digital` | Digital citizenship hub — links to sub-pages below |
| `/alfabetizacion-mediatica` | Media literacy — fact-checking tools and disinformation training |
| `/huella-digital` | Digital footprint — privacy and identity management |
| `/violencia-digital` | Digital violence — cyberbullying and online harassment guide |
| `/estafas-digitales` | Digital scams — phishing/smishing/vishing protection guide |
| `/contacto` | Contact form |
| `/ciudadania-presente` | Redirects to `/ciudadania-presente/modulos` |
| `/ciudadania-presente/modulos` | Platform landing — module grid (1 active, 6 upcoming) |
| `/ciudadania-presente/login` | Login / register form (`?mode=register` switches tab) |
| `/ciudadania-presente/dashboard/inicio` | Authenticated dashboard — renders `Dashboard`, `WizardLayout`, or `Certificate` based on Zustand `screen` state |

### Ciudadanía Presente platform (`/ciudadania-presente`)

A self-contained learning platform embedded in the site. It does **not** use the site's Navbar/Footer or brand layout — it has its own UI and minimal footer.

**State management:** Zustand store (`lib/ciudadania/app-store.ts`) persisted in `localStorage` (key `ciudadania-digital-state`). In `NODE_ENV=development` the store skips persistence and auto-loads a test user so registration is bypassed. The `screen` field drives which component the dashboard renders: `registration → dashboard → wizard → certificate`.

**Wizard flow:** `WizardLayout` steps through `intro → video → podcast → recommendations → quiz → result`. Quiz pass threshold is **score ≥ 8**. Passing a subtopic unlocks the next one.

**Backend:** MySQL via `lib/ciudadania/db.ts` (connection pool). Auth + progress sync are Next.js API routes under `app/api/ciudadania/`. Passwords hashed with `bcryptjs`. Progress is also synced server-side on quiz submit and dashboard navigation.

**Key files:**
- `lib/ciudadania/types.ts` — all shared types (`SubtopicData`, `AppState`, `WizardStep`, etc.)
- `lib/ciudadania/app-store.ts` — Zustand store with all actions
- `lib/ciudadania/mysql-auth.ts` — register, login, password-reset helpers
- `lib/ciudadania/mock-data.ts` — hardcoded subtopic content (text, video URLs, quiz questions)
- `components/platform/` — `RegistrationForm`, `Dashboard`, `WizardLayout`, `Certificate`, and step components

**Required env vars (not in NEXT_PUBLIC):**

| Variable | Purpose |
|----------|---------|
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port (default 3306) |
| `DB_USER` | MySQL user |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | MySQL database name |

### Home page composition (`app/page.tsx`)

```tsx
<WeeklyModalLoader />        // Weekly promo modal (once per ISO week, lazy via dynamic import)
<Navbar />
<Hero />                     // Full-screen video background
<PillarsSection />           // 6 thematic pillars
<ToolboxSection />
<PodcastSection />
<NewsSection />              // Hardcoded featured news
<LocalNewsSection />
<MultimediaSection />
<TestimonialsSection />      // 1 hardcoded testimonial (Alejandro Nató)
<QuickContactSection />      // Form → Firebase Firestore + EmailJS
<Footer />
<FloatingElements />
```

### Component structure

- `components/navbar.tsx` — Fixed header, desktop dropdowns, mobile hamburger with Framer Motion
- `components/hero.tsx` — Video hero (`/vid/vid.mp4`) with gradient overlays
- `components/footer.tsx` — Links, social icons, newsletter (Google Forms webhook)
- `components/weekly-modal.tsx` + `weekly-modal-loader.tsx` — Weekly promo modal shown once per ISO week; content loaded from `public/weekly-content/YYYY-WNN/metadata.json` + a GIF; seen state tracked in `localStorage`
- `components/sections/` — One component per homepage section
- `components/ciudadania-digital/` — Components for the `/ciudadania-digital` route and its sub-pages; includes `errors-chart.tsx` and `security-chart.tsx` (Recharts)
- `components/ui/` — shadcn/ui primitives (Radix UI, generated — avoid editing directly)
- `lib/utils.ts` — Only `cn()` (clsx + tailwind-merge)
- `lib/weekly-content.ts` — ISO week helpers, `fetch`-based content loader, and localStorage seen-state helpers for the weekly modal
- `hooks/use-mobile.ts` — Responsive breakpoint detection
- `hooks/use-toast.ts` — Toast hook (Sonner)
- `lib/ciudadania/` — Types, Zustand store, MySQL auth helpers, and mock content for the Ciudadanía Presente platform
- `components/platform/` — All components for the Ciudadanía Presente platform (auth, dashboard, wizard steps, certificate)

### Styling and brand tokens

Tailwind CSS v4 configured **CSS-only** via `app/globals.css` using `@theme inline` — there is no `tailwind.config.js`. Brand tokens are CSS custom properties (`--brand-blue`, etc.) exposed as Tailwind utilities. Brand tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `brand-blue` | `#4272BB` | Primary actions, hover states |
| `brand-pink` | `#D5247A` | Accents, secondary CTAs |
| `brand-navy` | `#003257` | Headers, body text |
| `brand-dark` | `#001228` | Dark mode backgrounds |
| `brand-light-blue` | `#EEF4FB` | Light backgrounds, cards |

Dark mode is implemented via the `.dark` CSS class, which overrides brand token CSS custom properties. Fonts: `font-sans` → DM Sans (body), `font-display` → Plus Jakarta Sans (headings). Loaded via `next/font/google`.

### Data patterns

All content is **hardcoded as typed arrays** at the top of section components — this is the established pattern. Comments throughout indicate future CMS migration. When adding new content:
1. Define a typed array at the top of the component
2. Map over it in JSX



**Weekly modal content** lives in `public/weekly-content/YYYY-WNN/` (e.g. `2026-W19/`). Each folder needs a `metadata.json` (matching the `WeeklyContent` interface in `lib/weekly-content.ts`) and a visual asset (`.gif`, `.webp`, or `.mp4`) referenced by `gifFileName`. Folders also typically include supplementary assets: PDF presentations and PNG infographics (not rendered by the modal, but distributed alongside). The modal renders once per ISO week per browser via `localStorage` (key prefix: `weeklyModal_`). **Important:** after creating a new week folder, add the week key (e.g. `"2026-W23"`) to `public/weekly-content/manifest.json` manually — `npm run create-week` does not do this automatically. Asset size target is < 3 MB; the container is 16:9. All fetches use `cache: "no-store"` to prevent stale content.

> **`metadata.json` field note:** Use `ctaLink`/`ctaText` for call-to-action links. The `linkTo` field is deprecated (kept for backward compatibility only).

Detailed workflow and `metadata.json` field reference: `content-management/README.md`. Thematic modules schedule: `content-management/TEMATICAS.md`.

### Integrations

- **Firebase Firestore** — `QuickContactSection` saves form submissions to `contactos` collection. Lazy-imported to avoid bundle bloat. Uses `NEXT_PUBLIC_FIREBASE_*` env vars.
- **EmailJS** — Same form sends email via `template_72zh3ni`. Lazy-imported. Uses `NEXT_PUBLIC_EMAILJS_*` env vars.
- **MySQL** — Used exclusively by the Ciudadanía Presente platform for user auth and progress sync (`lib/ciudadania/db.ts`). Uses `DB_*` env vars (server-only, not `NEXT_PUBLIC`).
- **Anthropic Claude API** — Planned integration for auto-updating topics via `web_search`. `ANTHROPIC_API_KEY` env var reserved for this use.
- **Vercel Analytics** — `<Analytics />` in root layout.
- **Google Forms** — Newsletter subscription in footer.

### Key dependencies

- **zustand** — State management for the Ciudadanía Presente platform (`lib/ciudadania/app-store.ts`)
- **mysql2** — MySQL client for the platform backend
- **bcryptjs** — Password hashing in `lib/ciudadania/mysql-auth.ts`
- **framer-motion** — All animations in the public site (`whileInView`, hover, entrance, `AnimatePresence`)
- **shadcn/ui** (Radix UI) — UI primitives in `components/ui/`
- **firebase** — Firestore for form submissions
- **@emailjs/browser** — Contact form email sending
- **@vercel/analytics** — Page view tracking
- **react-hook-form + zod** — Form handling and schema validation
- **recharts** — Data visualizations in `/alfabetizacion-mediatica` and `components/ciudadania-digital/`
- **lucide-react** — Icons (900+)
- **sonner** — Toast notifications
- **next-themes** — Dark mode toggle; wraps the app via `components/theme-provider.tsx` and applies the `.dark` CSS class

### Important notes

- **`"use client"` rule** — Any component with state, events, or Framer Motion animations must have `"use client"` at the top. Server components are: `app/page.tsx`, `app/layout.tsx`, and most `*/page.tsx` route files. Exception: `/temas/page.tsx` and `/temas/[id]/page.tsx` are client components.
- **TypeScript errors ignored at build** — Use `npx tsc --noEmit` explicitly.
- **Remote images** — `next.config.mjs` only allows `josefarhat.com`. Add new domains to `remotePatterns` for external image sources. Always use `next/image` (`<Image>`).
- **Known filename typo** — `app/temas/[id]/]/page.tsx` (extra bracket in path) exists alongside the correct `app/temas/[id]/page.tsx`. Verify which is active before editing.
- **Lazy imports** — Firebase and EmailJS are dynamically imported in `QuickContactSection` to keep the initial bundle small.
- **shadcn/ui** — Add new components with `npx shadcn add <component>`. Do not edit files in `components/ui/` directly.
- **No CI/CD** — No GitHub Actions or CI configuration exists in this repo.
- **`AGENTS.md`** — Condensed quick-reference for the same material in this file, plus a weekly modal workflow summary.
