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

> **Gotcha:** `npm run create-week` does NOT auto-register the new week in `public/weekly-content/manifest.json` — add the week string to the array manually (e.g. `"2026-W23"`).

## Architecture

Personal/political website for **José Farhat** (Secretario de Participación Ciudadana, Tucumán, Argentina). Built with **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for animations.

### Routing (App Router)

Most routes follow a two-file pattern: `page.tsx` (server component, exports `metadata`) and a `*-content.tsx` (client component with `"use client"` for animations and interactivity). Exceptions:
- `/temas` and `/temas/[id]` are single-file fully client components with no server page wrapper; `/temas/page.tsx` includes Navbar/Footer directly.
- The digital citizenship sub-pages (`/alfabetizacion-mediatica`, `/huella-digital`, `/violencia-digital`, `/estafas-digitales`) use the two-file pattern but their `page.tsx` omits Navbar/Footer — the content component handles layout.
- `/caja-de-herramientas` (`toolbox-content.tsx`) follows the two-file pattern.
- `/blog` is linked in the Navbar but `app/blog/` does not exist yet — do not assume it's active.

| Route | Purpose |
|-------|---------|
| `/` | Home landing: 9+ section components |
| `/conoceme` | About page — bio, stats, philosophy |
| `/blog` | Blog article listing (3 hardcoded posts) — **route directory not yet created** |
| `/novedades` | News/updates listing (8 hardcoded) |
| `/multimedia` | Videos and podcasts |
| `/temas` | Topic listing — single client component with search/filter (includes Navbar/Footer directly) |
| `/temas/[id]` | Topic detail — single client component with hardcoded example data |
| `/caja-de-herramientas` | Toolbox/resources (6 cards) |
| `/tematicas` | Digital citizenship topic listing — cards linking to sub-pages (two-file pattern, includes Navbar/Footer in `page.tsx`) |
| `/tematicas/cibercrianza` | Cyber-parenting sub-page — two-file pattern (`page.tsx` + `cibercrianza-content.tsx`) |
| `/tematicas/subculturas-digitales`, `/algoritmos-perfilado`, `/diseno-persuasivo-patrones-oscuros`, `/caldos-de-cultivo`, `/recuperar-la-agencia`, `/poliedro-ciudadania-digital` | "Libres bajo influencia" group — all 6 members now render their own standalone page component (`SubculturasDigitalesPage.tsx`, `AlgoritmosPerfiladoPage.tsx`, `DisenoPersuasivoPatronesOscurosPage.tsx`, `CaldosDeCultivoPage.tsx`, `RecuperarLaAgenciaPage.tsx`, `PoliedroCiudadaniaDigitalPage.tsx`) instead of the shared template, for bespoke presentation (slide decks, PDFs, interactive simulators). See note below. |
| `/tematicas/ia-etica-ciudadania` | "IA, Ética y Ciudadanía Digital" sub-page — two-file pattern (`page.tsx` + `IaEticaCiudadaniaContent`) |
| `/etica-ia` | Near-duplicate of `/tematicas/ia-etica-ciudadania` (separate `EticaIAContent` component, near-identical content) — likely leftover, reconcile/remove before adding more content here |
| `/ciudadania-digital` | Digital citizenship hub — links to sub-pages below |
| `/alfabetizacion-mediatica` | Media literacy — fact-checking tools and disinformation training |
| `/huella-digital` | Digital footprint — privacy and identity management |
| `/violencia-digital` | Digital violence — cyberbullying and online harassment guide |
| `/estafas-digitales` | Digital scams — phishing/smishing/vishing protection guide |
| `/hiperconectividad-digital` | Hyperconnectivity — in Navbar, route exists, two-file pattern |
| `/nnya-entorno-digital` | Children & digital environments — in Navbar, route exists, two-file pattern |
| `/violencia-digital-infancias` | Digital violence against children — in Navbar, route exists, two-file pattern |
| `/contacto` | Contact form |
| `/ciudadania-presente` | Redirects to `/ciudadania-presente/modulos` |
| `/ciudadania-presente/modulos` | Platform landing — module grid (1 active, 6 upcoming) |
| `/ciudadania-presente/login` | Login / register form (`?mode=register` switches tab) |
| `/ciudadania-presente/dashboard/inicio` | Authenticated dashboard — renders `Dashboard`, `WizardLayout`, or `Certificate` based on Zustand `screen` state |
| `/ciudadania-presente/dashboard/perfil` | User profile — edit contact/demographic fields, change password, upload profile photo |
| `/ciudadania-presente/dashboard/tematicas` | All 11 `/tematicas` topics unlocked for platform members, with per-topic progress |

### Ciudadanía Presente platform (`/ciudadania-presente`)

A self-contained learning platform embedded in the site. `app/ciudadania-presente/layout.tsx` wraps all platform routes with the site `<Navbar />` and `pt-20` padding — the platform does **not** include a Footer, but it does share the site's Navbar via this layout.

**State management:** Zustand store (`lib/ciudadania/app-store.ts`) persisted in `localStorage` (key `ciudadania-digital-state`). In `NODE_ENV=development` the store skips persistence and auto-loads a test user so registration is bypassed. The `screen` field drives which component the dashboard renders: `registration → dashboard → wizard → certificate`.

**Wizard flow:** `WizardLayout` steps through `intro → video → podcast → recommendations → quiz → result`. Quiz pass threshold is **score ≥ 8**. Passing a subtopic unlocks the next one.

**Backend:** MySQL via `lib/ciudadania/db.ts` (connection pool). Auth + profile + progress sync are Next.js API routes under `app/api/ciudadania/`. Passwords hashed with `bcryptjs`. Progress is also synced server-side on quiz submit and dashboard navigation.

**Profile management (`/ciudadania-presente/dashboard/perfil`):** Editable fields (`ciudad`, `pais`, `provincia`, `telefono`, `birthDate`, `nivelEducativo`, `genero`) go through `app/api/ciudadania/profile/update`; full name, DNI, and email are fixed at registration and rejected client-side even if resubmitted. Password changes go through `profile/change-password` (requires current password, new password ≥ 6 chars). `components/platform/PasswordField.tsx` is a shared show/hide password input used across login, registration, and the profile password form. The `usuarios` table needs the columns added by `lib/ciudadania/migrations/001_add_profile_fields.sql` (`provincia`, `pais`, `telefono`, `fecha_nacimiento`, `nivel_educativo`, `genero`, `foto_perfil`) — run it once against any existing database; `lib/ciudadania/schema.sql` has the full current table definition for fresh setups.

**Profile photo storage (Vercel Blob):** `lib/utils/compress-image.ts` resizes/compresses the image client-side (max 512×512, WebP q0.8, falls back to JPEG, manually corrects EXIF orientation via a hand-rolled APP1 parser — no external libs) before it's ever sent to the server. The compressed `Blob` is posted as `FormData` to `app/api/ciudadania/profile/photo`, which uploads it server-side with `put()` from `@vercel/blob` (`access: 'public'`, pathname `perfil/{userId}-{timestamp}.{ext}`), deletes the previous blob with `del()` (best-effort — failures are logged, not fatal), and stores only the resulting URL in `usuarios.foto_perfil` (`VARCHAR(500)`, migrated from the old `LONGTEXT` base64 column by `lib/ciudadania/migrations/002_foto_perfil_url.sql`). The upload token is never exposed to the browser — only the already-compressed file crosses the network to the API route. `RegistrationForm` offers the same optional photo picker; since there's no `userId` until registration succeeds, the photo uploads in a second request right after `auth/register` returns and never blocks account creation on failure (`sonner` toast reports upload failure — `<Toaster />` is mounted in `app/ciudadania-presente/layout.tsx`, added because the project's sonner primitive existed but wasn't rendered anywhere before).

**Temáticas progress tracking (`/tematicas/*` topics, separate from the wizard subtopics above):** The 11 `/tematicas` topics (hardcoded in `lib/tematicas-data.ts`, the `groups`/`TematicaItem` arrays) each get one row in `inscripciones_tematicas` per user (`usuario_id` + `tematica_id`, `tematica_id` is the topic's string slug, not a FK — added by `lib/ciudadania/migrations/005_progreso_tematicas.sql`; helpers in `lib/ciudadania/progreso-tematicas.ts`). "Enrolling" is just that row's first insert with everything at zero — there's no separate enrollment table. `detalle` is a free-form JSON column: each topic's quiz/checklist owns its own top-level key, since the 11 topics don't share a content structure; `completada`/`porcentaje` are kept denormalized so listing pages don't need to parse the JSON. `app/api/ciudadania/progreso-tematicas/route.ts` exposes `GET ?userId=` and `POST` (upsert, merges `detalle` keys rather than replacing the object). The client-side hook `lib/hooks/use-tematica-progress.ts` (`useTematicaProgress`) loads existing progress on mount, debounces writes (900ms) through `queueUpdate`/`flush`, and flushes on `beforeunload`/unmount via `sendBeacon` (falling back to a `keepalive` fetch). It exposes `checklistProgress(checklistId, total)` as a ready-made `computeProgress` for topics with a single markable checklist, plus `toggleChecklistItem`/`isChecked`/`saveQuizResult`/`markCompleted` for other pages to compose. `components/tematica-completar-button.tsx` (`TematicaCompletarButton`) is the manual "mark as done" control for topics with no measurable quiz/checklist.
- `lib/tematicas-data.ts` — the 11 hardcoded `/tematicas` topics (id, href, category, icon, color, lock state) shared between the public listing and the platform's `/ciudadania-presente/dashboard/tematicas`
- `lib/audiencias.ts` — `Audiencia` taxonomy (`docentes`, `familias`, `adultos-mayores`, `ninas-ninos-adolescentes`, `mujeres`) used to tag/filter `/tematicas` topics by target audience; classification rationale documented in `content-management/PROPUESTA-AUDIENCIAS.md`

**Key files:**
- `lib/ciudadania/types.ts` — all shared types (`SubtopicData`, `AppState`, `WizardStep`, etc.)
- `lib/ciudadania/app-store.ts` — Zustand store with all actions
- `lib/ciudadania/mysql-auth.ts` — register, login, password-reset, profile update/photo/change-password helpers
- `lib/ciudadania/mock-data.ts` — hardcoded subtopic content (text, video URLs, quiz questions)
- `lib/ciudadania/schema.sql` / `lib/ciudadania/migrations/` — MySQL schema and incremental migrations for the platform's tables
- `components/platform/` — `RegistrationForm`, `Dashboard`, `WizardLayout`, `Certificate`, `PasswordField`, and step components

**Required env vars (not in NEXT_PUBLIC):**

| Variable | Purpose |
|----------|---------|
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port (default 3306) |
| `DB_USER` | MySQL user |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | MySQL database name |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob write access for profile photo uploads (`app/api/ciudadania/profile/photo`) — set automatically when a Blob store is connected to the project; run `vercel env pull` for local dev |

### Home page composition (`app/page.tsx`)

```tsx
<Navbar />
<Hero />                     // Full-screen video background
<NarrativeSection />         // components/sections/narrative-section.tsx
<PillarsSection />           // 6 thematic pillars
<ToolboxSection />
<PodcastSection />
<NewsSection />              // Hardcoded featured news
<LocalNewsSection />
<MultimediaSection />
<TestimonialsSection />      // 1 hardcoded testimonial (Alejandro Nató)
<Footer />
<FloatingElements />
```

> `WeeklyModalLoader` and `QuickContactSection` are currently **not rendered** in `app/page.tsx` — both components still exist (`components/weekly-modal-loader.tsx`, `components/sections/quick-contact-section.tsx`) but are unused on the homepage as of the latest changes.

### Component structure

- `components/navbar.tsx` — Fixed header, desktop dropdowns, mobile hamburger with Framer Motion
- `components/hero.tsx` — Video hero (`/vid/vid.mp4`) with gradient overlays
- `components/footer.tsx` — Links, social icons, newsletter subscription (POSTs to `/api/subscribe` → MySQL `suscriptores` table)
- `components/weekly-modal.tsx` + `weekly-modal-loader.tsx` — Weekly promo modal shown once per ISO week; content loaded from `public/weekly-content/YYYY-WNN/metadata.json` + a GIF; seen state tracked in `localStorage`. **Not currently mounted in `app/page.tsx`.**
- `components/sections/narrative-section.tsx` — Multi-block scroll narrative rendered between `Hero` and `PillarsSection` on the homepage; tells José's thesis (three territories, gaps matrix, methodology, impact stats, 6-step method, CTA) as a series of full-bleed sections joined by SVG curve dividers
- `components/sections/` — One component per homepage section
- `components/ciudadania-digital/` — Components for the `/ciudadania-digital` route and its sub-pages; includes `errors-chart.tsx` and `security-chart.tsx` (Recharts)
- `components/ui/` — shadcn/ui primitives (Radix UI, generated — avoid editing directly)
- `lib/utils.ts` — Only `cn()` (clsx + tailwind-merge)
- `lib/weekly-content.ts` — ISO week helpers, `fetch`-based content loader, and localStorage seen-state helpers for the weekly modal
- `hooks/use-mobile.ts` — Responsive breakpoint detection
- `hooks/use-toast.ts` — Toast hook (Sonner)
- `lib/hooks/use-tematica-progress.ts` — `useTematicaProgress`, the debounced progress-tracking hook for `/tematicas` topics (separate from `hooks/` above)
- `lib/hooks/use-libres-subtopic.ts` — `useLibresSubtopic`, shared quiz + infografía-lightbox (zoom/pan/pinch) state machine for the "Libres bajo influencia" group; consumed by all 6 forked standalone pages. Purely stateful — no JSX.
- `components/tematicas/PdfViewer.tsx` — Paginated PDF viewer (`react-pdf`) with zoom, used by forked "Libres bajo influencia" pages for slide-deck content; worker script served from `public/pdf.worker.min.mjs`
- `components/tematicas/WebpSlideCarousel.tsx` — Slide-by-slide `.webp` image carousel (fullscreen, zoom, optional PDF download) — the non-PDF alternative to `PdfViewer` for the same forked pages
- `lib/ciudadania/` — Types, Zustand store, MySQL auth helpers, and mock content for the Ciudadanía Presente platform
- `components/platform/` — All components for the Ciudadanía Presente platform (auth, dashboard, wizard steps, certificate)

### Styling and brand tokens

Tailwind CSS v4 configured **CSS-only** via `app/globals.css` using `@theme inline` — there is no `tailwind.config.js`. Brand tokens are CSS custom properties (`--brand-blue`, etc.) exposed as Tailwind utilities. Dark mode variant is declared as `@custom-variant dark (&:is(.dark *))` — the `.dark` class on a parent enables it. Also imports `tw-animate-css`. Brand tokens:

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

**Shared-data exception (`/tematicas/*` "Libres bajo influencia" group):** content for all 6 members lives in one `lib/*-data.ts` file (`lib/libres-bajo-influencia-data.ts`, keyed by slug via `getLibresSubtopicBySlug()`), but each route now renders its own standalone page component under `components/tematicas/` (`SubculturasDigitalesPage.tsx`, `AlgoritmosPerfiladoPage.tsx`, `DisenoPersuasivoPatronesOscurosPage.tsx`, `CaldosDeCultivoPage.tsx`, `RecuperarLaAgenciaPage.tsx`, `PoliedroCiudadaniaDigitalPage.tsx`) for bespoke presentation (slide decks, PDFs, interactive simulators) instead of a shared template — only the data and the quiz/lightbox state machine (`lib/hooks/use-libres-subtopic.ts`, `useLibresSubtopic`) are shared, not the JSX/layout. `components/tematicas/LibresBajoInfluenciaTemplate.tsx` still exists on disk but is no longer imported by any route — treat it as dead code, not a live pattern.

**Weekly modal content** lives in `public/weekly-content/YYYY-WNN/` (e.g. `2026-W19/`). Each folder needs a `metadata.json` (matching the `WeeklyContent` interface in `lib/weekly-content.ts`) and a visual asset (`.gif`, `.webp`, or `.mp4`) referenced by `gifFileName`. Folders also typically include supplementary assets — PDF presentations, PNG infographics, and SVG files (none rendered by the modal; distributed alongside for social/print use). Naming convention observed: `*Gif.gif` for the modal visual, `*png.png` for share card, `inf*.png` for infographic, `*.pdf` for presentation. The modal renders once per ISO week per browser via `localStorage` (key prefix: `weeklyModal_`). **Important:** after creating a new week folder, add the week string (e.g. `"2026-W23"`) to the array in `public/weekly-content/manifest.json` manually — `npm run create-week` does not do this automatically. Asset size target is < 3 MB; the container is 16:9. All fetches use `cache: "no-store"` to prevent stale content.

> **`metadata.json` field note:** Use `ctaLink`/`ctaText` for call-to-action links. The `linkTo` field is deprecated (kept for backward compatibility only). Optional fields: `theme` (`blue`/`pink`/`navy`, controls CTA button color; defaults to `blue`), `author`, `expiresAt` (ISO date), `priority` (`high`/`normal`/`low`), `targetAudience` (array of tags).

Detailed workflow and `metadata.json` field reference: `content-management/README.md`. Thematic modules schedule: `content-management/TEMATICAS.md`.

### Integrations

- **Firebase Firestore** — `QuickContactSection` saves form submissions to `contactos` collection. Lazy-imported to avoid bundle bloat. Uses `NEXT_PUBLIC_FIREBASE_*` env vars.
- **EmailJS** — Same form sends email via `template_72zh3ni`. Lazy-imported. Uses `NEXT_PUBLIC_EMAILJS_*` env vars.
- **MySQL** — Used exclusively by the Ciudadanía Presente platform for user auth and progress sync (`lib/ciudadania/db.ts`). Uses `DB_*` env vars (server-only, not `NEXT_PUBLIC`).
- **Anthropic Claude API** — Planned integration for auto-updating topics via `web_search`. `ANTHROPIC_API_KEY` env var reserved for this use.
- **Vercel Analytics** — `<Analytics />` in root layout.
- **Google Forms** — Newsletter subscription in footer.

**All environment variables:**

| Variable | Side | Purpose |
|----------|------|---------|
| `NEXT_PUBLIC_FIREBASE_*` | Client | Firestore (contact form) |
| `NEXT_PUBLIC_EMAILJS_*` | Client | EmailJS (template `template_72zh3ni`) |
| `DB_HOST` | Server | MySQL host |
| `DB_PORT` | Server | MySQL port (default 3306) |
| `DB_USER` | Server | MySQL user |
| `DB_PASSWORD` | Server | MySQL password |
| `DB_NAME` | Server | MySQL database name |
| `BLOB_READ_WRITE_TOKEN` | Server | Vercel Blob write access for profile photo uploads |
| `NEWS_API_KEY` | Server | News API key for `LocalNewsSection` |
| `NEWS_API_PROVIDER` | Server | News API provider for `LocalNewsSection` |
| `ANTHROPIC_API_KEY` | Server | Reserved for planned Claude integration |

### Key dependencies

- **zustand** — State management for the Ciudadanía Presente platform (`lib/ciudadania/app-store.ts`)
- **mysql2** — MySQL client for the platform backend
- **@vercel/blob** — Stores profile photo uploads server-side (`app/api/ciudadania/profile/photo`); `usuarios.foto_perfil` holds only the resulting URL
- **bcryptjs** — Password hashing in `lib/ciudadania/mysql-auth.ts`
- **framer-motion** — All animations in the public site (`whileInView`, hover, entrance, `AnimatePresence`)
- **shadcn/ui** (Radix UI) — UI primitives in `components/ui/`
- **firebase** — Firestore for form submissions
- **@emailjs/browser** — Contact form email sending
- **@vercel/analytics** — Page view tracking
- **react-hook-form + zod** — Form handling and schema validation
- **recharts** — Data visualizations in `/alfabetizacion-mediatica` and `components/ciudadania-digital/`
- **chart.js** + **react-chartjs-2** — Also installed; usage overlaps with recharts in some components
- **react-pdf** — Renders slide-deck PDFs in `components/tematicas/PdfViewer.tsx` (forked "Libres bajo influencia" pages); requires the worker file at `public/pdf.worker.min.mjs`
- **date-fns** — Date formatting utilities
- **lucide-react** — Icons (900+)
- **sonner** — Toast notifications
- **next-themes** — Dark mode toggle; wraps the app via `components/theme-provider.tsx` and applies the `.dark` CSS class

### Important notes

- **`"use client"` rule** — Any component with state, events, or Framer Motion animations must have `"use client"` at the top. Server components are: `app/page.tsx`, `app/layout.tsx`, and most `*/page.tsx` route files. Exception: `/temas/page.tsx` and `/temas/[id]/page.tsx` are client components.
- **TypeScript errors ignored at build** — Use `npx tsc --noEmit` explicitly.
- **Remote images** — `next.config.mjs` allows `josefarhat.com`, `img.youtube.com`, `www.comunicaciontucuman.gob.ar`, and `*.fbcdn.net`. Add new domains to `remotePatterns` for other external image sources. Always use `next/image` (`<Image>`).
- **Lazy imports** — Firebase and EmailJS are dynamically imported in `QuickContactSection` to keep the initial bundle small.
- **shadcn/ui** — Add new components with `npx shadcn add <component>`. Do not edit files in `components/ui/` directly.
- **No CI/CD** — No GitHub Actions or CI configuration exists in this repo.
- **`AGENTS.md`** — Condensed quick-reference for the same material in this file, plus a weekly modal workflow summary.
- **`ThemeProvider` not in root layout** — `app/layout.tsx` does not wrap with `ThemeProvider` from `next-themes`; the `.dark` class may need to be toggled manually or this integration is incomplete.

### API routes (`app/api/ciudadania/`)

Server-side routes using the MySQL pool from `lib/ciudadania/db.ts`; all are POST-only except `progreso-tematicas`, which also has a `GET`:

| Route | Purpose |
|-------|---------|
| `auth/login` | Validate credentials, return user data |
| `auth/register` | Create account, hash password with bcryptjs |
| `auth/reset-password` | Reset password by email |
| `progress/sync` | Read or write wizard subtopic progress for a user |
| `progreso-tematicas` | `GET ?userId=` reads all `/tematicas` topic progress for a user; `POST` upserts one topic's `detalle`/`porcentaje`/`completada` (merges `detalle` keys) |
| `profile/update` | Update editable profile fields (city, country, province, phone, birth date, education level, gender) — name/DNI/email are immutable after registration |
| `profile/change-password` | Change password given the current password |
| `profile/photo` | Accepts `FormData` (not JSON): uploads the client-compressed file to Vercel Blob, deletes the old blob, stores the URL — or clears the photo if no file is sent |

`app/api/subscribe/route.ts` — POST-only, saves newsletter emails to the MySQL `suscriptores` table (uses the same pool from `lib/ciudadania/db.ts`). Deduplicates via `INSERT IGNORE`.
