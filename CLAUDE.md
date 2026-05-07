# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start development server (Next.js, localhost:3000)
npm run build            # Production build (TypeScript errors ignored)
npm run lint             # Run ESLint
npm run start            # Start production server
npx tsc --noEmit         # Explicit type checking (build ignores errors)
```

> `next.config.mjs` sets `ignoreBuildErrors: true` — always use `npx tsc --noEmit` to verify types.

## Architecture

Personal/political website for **José Farhat** (Secretario de Participación Ciudadana, Tucumán, Argentina). Built with **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for animations.

### Routing (App Router)

Most routes follow a two-file pattern: `page.tsx` (server component, exports `metadata`) and a `*-content.tsx` (client component with `"use client"` for animations and interactivity). Exceptions:
- `/temas` and `/temas/[id]` are single-file fully client components with no server page wrapper; `/temas/page.tsx` includes Navbar/Footer directly.
- The digital citizenship sub-pages (`/alfabetizacion-mediatica`, `/huella-digital`, `/violencia-digital`, `/estafas-digitales`) use the two-file pattern but their `page.tsx` omits Navbar/Footer — the content component handles layout.
- `/blog` (`blog-content.tsx`) and `/caja-de-herramientas` (`toolbox-content.tsx`) do follow the two-file pattern despite not being listed that way historically.

| Route | Purpose |
|-------|---------|
| `/` | Home landing: 10+ section components |
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

### Home page composition (`app/page.tsx`)

```tsx
<WeeklyModalLoader />        // Weekly promo modal (once per ISO week, lazy via dynamic import)
<Navbar />
<Hero />                     // Full-screen video background
<CurrentTopicsServer />      // Live news via GNews/NewsAPI (ISR 3 days)
<PillarsSection />           // 6 thematic pillars
<ToolboxSection />
<PodcastSection />
<NewsSection />              // Hardcoded featured news
<LocalNewsSection />
<MultimediaSection />
<TestimonialsSection />      // 2 hardcoded testimonials
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
- `components/ui/` — shadcn/ui primitives (Radix UI, generated — avoid editing directly)
- `lib/utils.ts` — Only `cn()` (clsx + tailwind-merge)
- `lib/weekly-content.ts` — ISO week helpers, `fetch`-based content loader, and localStorage seen-state helpers for the weekly modal
- `hooks/use-mobile.ts` — Responsive breakpoint detection
- `hooks/use-toast.ts` — Toast hook (Sonner)

### Styling and brand tokens

Tailwind CSS v4 configured via `app/globals.css` (no `tailwind.config.js`). Brand tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `brand-blue` | `#4272BB` | Primary actions, hover states |
| `brand-pink` | `#D5247A` | Accents, secondary CTAs |
| `brand-navy` | `#003257` | Headers, body text |
| `brand-dark` | `#001228` | Dark mode backgrounds |
| `brand-light-blue` | `#EEF4FB` | Light backgrounds, cards |

Fonts: `font-sans` → DM Sans (body), `font-display` → Plus Jakarta Sans (headings). Loaded via `next/font/google`.

### Data patterns

All content is **hardcoded as typed arrays** at the top of section components — this is the established pattern. Comments throughout indicate future CMS migration. When adding new content:
1. Define a typed array at the top of the component
2. Map over it in JSX

Exception: `CurrentTopicsServer` fetches live news from GNews/NewsAPI with `FALLBACK_TOPICS` as backup.

**Weekly modal content** lives in `public/weekly-content/YYYY-WNN/` (e.g. `2026-W19/`). Each folder needs a `metadata.json` (matching the `WeeklyContent` interface in `lib/weekly-content.ts`) and a GIF referenced by `gifFileName`. The modal renders once per ISO week per browser via `localStorage`. **Important:** after creating a new week folder, add the week key (e.g. `"2026-W23"`) to `public/weekly-content/manifest.json` so the loader can discover it.

### Integrations

- **Firebase Firestore** — `QuickContactSection` saves form submissions to `contactos` collection. Lazy-imported to avoid bundle bloat. Uses `NEXT_PUBLIC_FIREBASE_*` env vars.
- **EmailJS** — Same form sends email via `template_72zh3ni`. Lazy-imported. Uses `NEXT_PUBLIC_EMAILJS_*` env vars.
- **GNews / NewsAPI** — `CurrentTopicsServer` fetches news with geographic waterfall (Tucumán → Argentina → LatAm → Global). ISR revalidation: 3 days. `NEWS_API_KEY` + `NEWS_API_PROVIDER` env vars.
- **Anthropic Claude API** — Planned integration for auto-updating topics via `web_search`. `ANTHROPIC_API_KEY` env var reserved for this use.
- **Vercel Analytics** — `<Analytics />` in root layout.
- **Google Forms** — Newsletter subscription in footer.

### Key dependencies

- **framer-motion** — All animations (`whileInView`, hover, entrance, `AnimatePresence`)
- **shadcn/ui** (Radix UI) — UI primitives in `components/ui/`
- **firebase** — Firestore for form submissions
- **@emailjs/browser** — Contact form email sending
- **@vercel/analytics** — Page view tracking
- **react-hook-form + zod** — Form handling and schema validation
- **lucide-react** — Icons (900+)
- **sonner** — Toast notifications

### Important notes

- **`"use client"` rule** — Any component with state, events, or Framer Motion animations must have `"use client"` at the top. Server components are: `app/page.tsx`, `app/layout.tsx`, most `*/page.tsx` route files, and `CurrentTopicsServer`. Exception: `/temas/page.tsx` and `/temas/[id]/page.tsx` are client components.
- **TypeScript errors ignored at build** — Use `npx tsc --noEmit` explicitly.
- **Remote images** — `next.config.mjs` only allows `josefarhat.com`. Add new domains to `remotePatterns` for external image sources. Always use `next/image` (`<Image>`).
- **Known filename typos** — `app/page..tsx` (double dot) and `app/temas/[id]/]/page.tsx` (extra bracket) exist alongside correct files. Verify which is active before editing.
- **Lazy imports** — Firebase and EmailJS are dynamically imported in `QuickContactSection` to keep the initial bundle small.
- **shadcn/ui** — Add new components with `npx shadcn add <component>`. Do not edit files in `components/ui/` directly.
