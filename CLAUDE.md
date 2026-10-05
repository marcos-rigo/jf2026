# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start development server (Next.js, localhost:3000)
npm run build            # Production build (TypeScript errors ignored)
npm run lint             # Runs `eslint .`, but eslint is NOT installed and there is no eslint.config.* — currently fails
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
- `/tematicas/emocional` (the fourth Poliedro dimension) was built directly after `/tematicas/cognitivo-intelectual-e-informacional`, before `/tematicas/socio-comunicacional-e-identidad` (the third dimension) existed — it is the fifth member of the "Ciudadanía Digital" group in `lib/tematicas-data.ts` even though it covers a later dimension than the fourth member. `socio-comunicacional-e-identidad` was filled in afterward in its correct dimension order (third member).
- **Content gating (`RequireAuth`):** `components/tematicas/require-auth.tsx` wraps almost every `/tematicas` page — the listing itself (`tematicas-content.tsx`) and essentially every individual topic, including all 10 Poliedro dimensions, the "Libres bajo influencia" group, `cibercrianza`, and `ia-etica-ciudadania` — plus several non-`/tematicas` content routes (`/ciudadania-digital`, `/huella-digital`, `/hiperconectividad-digital`, `/alfabetizacion-digital`, `/alfabetizacion-mediatica`, `/estafas-digitales`, `/violencia-digital`, `/violencia-digital-infancias`, `/nnya-entorno-digital`). It reads `useAppStore` (the Ciudadanía Presente platform's auth store) and `router.replace()`s any visitor with no logged-in user to `/ciudadania-presente/login` before rendering children — so despite looking like a public marketing site, nearly the entire topic catalog is only visible after logging into the platform. This is a **different, blanket gate** from the per-topic `locked`/`sinContenido` flags in `lib/tematicas-data.ts` (those only affect the sequential-unlock UI inside `/ciudadania-presente/dashboard/tematicas`): a topic with `locked: false` is still fully inaccessible to a logged-out visitor because of `RequireAuth`. Routes that stay public: `/`, `/conoceme`, `/novedades`, `/multimedia`, `/caja-de-herramientas`, `/contacto`, `/temas`, `/temas/[id]`, and the `/ciudadania-presente/*` auth flow itself.

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
| `/tematicas` | Digital citizenship topic listing — cards linking to sub-pages (two-file pattern, includes Navbar/Footer in `page.tsx`); has the audience filter, see "Audience content variants" below |
| `/tematicas/cibercrianza` | Cyber-parenting sub-page — two-file pattern (`page.tsx` + `cibercrianza-content.tsx`) |
| `/tematicas/subculturas-digitales`, `/algoritmos-perfilado`, `/diseno-persuasivo-patrones-oscuros`, `/caldos-de-cultivo`, `/recuperar-la-agencia`, `/poliedro-ciudadania-digital` | "Libres bajo influencia" group — all 6 members now render their own standalone page component (`SubculturasDigitalesPage.tsx`, `AlgoritmosPerfiladoPage.tsx`, `DisenoPersuasivoPatronesOscurosPage.tsx`, `CaldosDeCultivoPage.tsx`, `RecuperarLaAgenciaPage.tsx`, `PoliedroCiudadaniaDigitalPage.tsx`) instead of the shared template, for bespoke presentation (slide decks, PDFs, interactive simulators). See note below. |
| `/tematicas/ia-etica-ciudadania` | "IA, Ética y Ciudadanía Digital" sub-page — two-file pattern (`page.tsx` + `IaEticaCiudadaniaContent`) |
| `/alfabetizacion-digital` | "Alfabetización Digital: Del Acceso Técnico a la Autonomía Cognitiva" — two-file pattern, not yet linked from Navbar |
| `/ciudadania-digital` | "Ciudadanía Digital: de usuario a ciudadano" — the platform's base module (teacher-facing); 10-section scroll landing with interactive fields persisted in its own Zustand store, see "Ciudadanía Digital base module" below |
| `/tematicas/instrumental-y-acceso` | "Instrumental y Acceso" — the first `/tematicas` topic built per Poliedro dimension; lives in the "Ciudadanía Digital" group alongside the base module; docentes-only audience; two-file pattern (`page.tsx` + client content); scroll-continuous landing with a 10-section sidebar (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Capacidad y acceso, Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre) plus 3 collapsible classroom fichas; state in `localStorage` via Zustand, key `instrumental-acceso-state`; no cited sources or downloadables yet |
| `/tematicas/cognitivo-intelectual-e-informacional` | "Cognitivo-Intelectual e Informacional" — the second `/tematicas` topic built per Poliedro dimension (Capítulo 16 del manual); third member of the "Ciudadanía Digital" group; docentes-only audience; two-file pattern (`page.tsx` + client content); scroll-continuous landing with a 10-section sidebar (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Criterio y verificación, Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre) plus 3 collapsible classroom fichas; has a 3-level verification selector (Verificación rápida / Lectura lateral / Contraste profundo) and a double "Encontrá el error" block; state in `localStorage` via Zustand, key `cognitivo-informacional-state`; no cited sources or downloadables yet. Its "Recursos y cierre" now carries two "Siguiente dimensión" links side by side — Emocional (added first) and Socio-Comunicacional e Identidad (added when that topic was built) — see the note on `lib/cognitivo-informacional-content.ts` below |
| `/tematicas/socio-comunicacional-e-identidad` | "Socio-Comunicacional e Identidad" — the third `/tematicas` topic built per Poliedro dimension (Capítulo 17 del manual); fourth member of the "Ciudadanía Digital" group in `lib/tematicas-data.ts` (inserted between Cognitivo-Intelectual e Informacional and Emocional); docentes-only audience; two-file pattern (`page.tsx` + client content); scroll-continuous landing with a 10-section sidebar (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Identidad y convivencia, Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre) plus 10 collapsible classroom fichas (more than the other dimension topics — 2 in De dónde partimos, 4 in Identidad y convivencia, 4 in Llevalo a tu aula); has a situation selector (Audiencia / Persistencia / Circulación) and a double "Encontrá el error" block; state in `localStorage` via Zustand, key `socio-comunicacional-state`; no cited sources or downloadables yet. Source content: `content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx` |
| `/tematicas/emocional` | "Emocional" — the fourth `/tematicas` topic built per Poliedro dimension (Capítulo 18 del manual); fifth member of the "Ciudadanía Digital" group in `lib/tematicas-data.ts`; docentes-only audience; two-file pattern (`page.tsx` + client content); scroll-continuous landing with a 10-section sidebar (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Emoción y decisión, Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre) plus 3 collapsible classroom fichas; has a 3-option situation selector (Pausar / Segunda mirada / Pedir ayuda) and a double "Encontrá el error" block; quiz supports one feedback text shared by two incorrect options at once; state in `localStorage` via Zustand, key `emocional-state`; no cited sources or downloadables yet |
| `/tematicas/salud-y-bienestar-digital` | "Salud y Bienestar Digital" — fifth Poliedro dimension (Capítulo 19 del manual); 8th member of the "Ciudadanía Digital" group (after `huella-digital`/`hiperconectividad-digital`, which sit between `emocional` and this one in `lib/tematicas-data.ts`); docentes-only; two-file pattern; 10-section sidebar with "Equilibrio y límites" as section 5; only **2** classroom fichas; 3-option situation selector (Persona / Entorno / Ambos) and a double "Encontrá el error" block; state key `salud-bienestar-state`; its "Siguiente dimensión" link is part of the content object (`siguienteDimensionHref`/`siguienteDimensionTexto`) rather than a bolted-on JSX block like the other dimensions below |
| `/tematicas/etico-normativa-y-derechos` | "Ético-Normativa y Derechos" — sixth Poliedro dimension (Capítulo 20 del manual); docentes-only; two-file pattern; 10-section sidebar with "Criterios de legitimidad" as section 5; 4 classroom fichas; 3-option situation selector (Valores / Reglas / Derechos) and a double "Encontrá el error" block; state key `etico-normativa-state` |
| `/tematicas/seguridad-privacidad-y-proteccion-digital` | "Seguridad, Privacidad y Protección Digital" — seventh Poliedro dimension (Capítulo 21 del manual, with the procedure from Capítulo 34); docentes-only; two-file pattern; 10-section sidebar with "Confianza y protección" as section 5; 4 classroom fichas; 3-option situation selector (Pausar / Verificar / Decidir) and a double "Encontrá el error" block; state key `seguridad-proteccion-state` |
| `/tematicas/pedagogica-y-creativa` | "Pedagógica y Creativa" — eighth Poliedro dimension (Capítulo 22 del manual); docentes-only; two-file pattern; 10-section sidebar with "Aprender, crear, cuestionar" as section 5; 3 classroom fichas; 3-option situation selector (Aumenta / Sustituye / Depende) and a double "Encontrá el error" block; state key `pedagogica-creativa-state` |
| `/tematicas/participacion-y-democracia` | "Participación y Democracia" — ninth Poliedro dimension (Capítulo 23 del manual); docentes-only; two-file pattern; 10-section sidebar with "Interacción e incidencia" as section 5; 5 classroom fichas (most of any dimension topic besides `socio-comunicacional-e-identidad`'s 10); 3-option situation selector (Información / Deliberación / Rendición de cuentas) and a double "Encontrá el error" block; state key `participacion-democracia-state` |
| `/tematicas/economica-productiva-y-de-consumo` | "Económica, Productiva y de Consumo" — **tenth and final** Poliedro dimension (Capítulo 24 del manual); last member of the "Ciudadanía Digital" group; docentes-only; two-file pattern; 10-section sidebar with "Condiciones y autonomía" as section 5; 3 classroom fichas; 3-option situation selector (Leer las condiciones / Medir el costo de salir / Reclamar u organizarse) and a double "Encontrá el error" block; state key `economica-consumo-state`; no "Siguiente dimensión" link (it's the last one) — the Poliedro's 10 dimensions are now all built, see "Ciudadanía Digital base module" below |
| `/alfabetizacion-mediatica` | Media literacy — fact-checking tools and disinformation training |
| `/huella-digital` | Digital footprint — scroll-continuous 9-section landing with cited sources, see pattern below |
| `/violencia-digital` | Digital violence — cyberbullying and online harassment guide |
| `/estafas-digitales` | Digital scams — phishing/smishing/vishing protection guide |
| `/hiperconectividad-digital` | Hyperconnectivity — bespoke bento/dark-section landing (unlike the two above, not rebuilt into the 9-section pattern); has a concept block + cited sources layered into its existing sections, see pattern below |
| `/nnya-entorno-digital` | Children & digital environments — in Navbar, route exists, two-file pattern |
| `/violencia-digital-infancias` | Digital violence against children — in Navbar, route exists, two-file pattern |
| `/contacto` | Contact form |
| `/ciudadania-presente` | Redirects to `/ciudadania-presente/modulos` |
| `/ciudadania-presente/modulos` | Platform landing — module grid (1 active, 6 upcoming) |
| `/ciudadania-presente/login` | Login / register form (`?mode=register` switches tab) |
| `/ciudadania-presente/dashboard/inicio` | Authenticated dashboard — renders `Dashboard`, `WizardLayout`, or `Certificate` based on Zustand `screen` state |
| `/ciudadania-presente/dashboard/perfil` | User profile — edit contact/demographic fields, change password, upload profile photo |
| `/ciudadania-presente/dashboard/tematicas` | All `/tematicas` topics (27 across 6 groups) unlocked for platform members, with per-topic progress |

### Ciudadanía Presente platform (`/ciudadania-presente`)

A self-contained learning platform embedded in the site. `app/ciudadania-presente/layout.tsx` wraps all platform routes with the site `<Navbar />` and `pt-20` padding — the platform does **not** include a Footer, but it does share the site's Navbar via this layout.

**State management:** Zustand store (`lib/ciudadania/app-store.ts`) persisted in `localStorage` (key `ciudadania-digital-state`). In `NODE_ENV=development` the store skips persistence and auto-loads a test user so registration is bypassed. The `screen` field drives which component the dashboard renders: `registration → dashboard → wizard → certificate`.

**Wizard flow:** `WizardLayout` steps through `intro → video → podcast → recommendations → quiz → result`. Quiz pass threshold is **score ≥ 8**. Passing a subtopic unlocks the next one.

**Backend:** MySQL via `lib/ciudadania/db.ts` (connection pool). Auth + profile + progress sync are Next.js API routes under `app/api/ciudadania/`. Passwords hashed with `bcryptjs`. Progress is also synced server-side on quiz submit and dashboard navigation.

**Profile management (`/ciudadania-presente/dashboard/perfil`):** Editable fields (`ciudad`, `pais`, `provincia`, `telefono`, `birthDate`, `nivelEducativo`, `genero`) go through `app/api/ciudadania/profile/update`; full name, DNI, and email are fixed at registration and rejected client-side even if resubmitted. Password changes go through `profile/change-password` (requires current password, new password ≥ 6 chars). `components/platform/PasswordField.tsx` is a shared show/hide password input used across login, registration, and the profile password form. The `usuarios` table needs the columns added by `lib/ciudadania/migrations/001_add_profile_fields.sql` (`provincia`, `pais`, `telefono`, `fecha_nacimiento`, `nivel_educativo`, `genero`, `foto_perfil`) — run it once against any existing database; `lib/ciudadania/schema.sql` has the full current table definition for fresh setups.

**Profile photo storage (Vercel Blob):** `lib/utils/compress-image.ts` resizes/compresses the image client-side (max 512×512, WebP q0.8, falls back to JPEG, manually corrects EXIF orientation via a hand-rolled APP1 parser — no external libs) before it's ever sent to the server. The compressed `Blob` is posted as `FormData` to `app/api/ciudadania/profile/photo`, which uploads it server-side with `put()` from `@vercel/blob` (`access: 'public'`, pathname `perfil/{userId}-{timestamp}.{ext}`), deletes the previous blob with `del()` (best-effort — failures are logged, not fatal), and stores only the resulting URL in `usuarios.foto_perfil` (`VARCHAR(500)`, migrated from the old `LONGTEXT` base64 column by `lib/ciudadania/migrations/002_foto_perfil_url.sql`). The upload token is never exposed to the browser — only the already-compressed file crosses the network to the API route. `RegistrationForm` offers the same optional photo picker; since there's no `userId` until registration succeeds, the photo uploads in a second request right after `auth/register` returns and never blocks account creation on failure (`sonner` toast reports upload failure — `<Toaster />` is mounted in `app/ciudadania-presente/layout.tsx`, added because the project's sonner primitive existed but wasn't rendered anywhere before).

**Temáticas progress tracking (`/tematicas/*` topics, separate from the wizard subtopics above):** The 27 `/tematicas` topics in 6 groups (hardcoded in `lib/tematicas-data.ts`, the `groups`/`TematicaItem` arrays) each get one row in `inscripciones_tematicas` per user (`usuario_id` + `tematica_id`, `tematica_id` is the topic's string slug, not a FK — added by `lib/ciudadania/migrations/005_progreso_tematicas.sql`; helpers in `lib/ciudadania/progreso-tematicas.ts`). "Enrolling" is just that row's first insert with everything at zero — there's no separate enrollment table. `detalle` is a free-form JSON column: each topic's quiz/checklist owns its own top-level key, since the topics don't share a content structure; `completada`/`porcentaje` are kept denormalized so listing pages don't need to parse the JSON. `app/api/ciudadania/progreso-tematicas/route.ts` exposes `GET ?userId=` and `POST` (upsert, merges `detalle` keys rather than replacing the object). The client-side hook `lib/hooks/use-tematica-progress.ts` (`useTematicaProgress`) loads existing progress on mount, debounces writes (900ms) through `queueUpdate`/`flush`, and flushes on `beforeunload`/unmount via `sendBeacon` (falling back to a `keepalive` fetch). It exposes `checklistProgress(checklistId, total)` as a ready-made `computeProgress` for topics with a single markable checklist, plus `toggleChecklistItem`/`isChecked`/`saveQuizResult`/`markCompleted` for other pages to compose. `components/tematica-completar-button.tsx` (`TematicaCompletarButton`) is the manual "mark as done" control for topics with no measurable quiz/checklist.
- `lib/tematicas-data.ts` — the hardcoded `/tematicas` topics, 27 in 6 groups (id, href, category, icon, color, lock state) shared between the public listing and the platform's `/ciudadania-presente/dashboard/tematicas`
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
- `components/ciudadania-digital/`, `components/huella-digital/`, `components/hiperconectividad-digital/` — Per-route section components for the cited-sources pattern described above; `ciudadania-digital` no longer follows that pattern (see "Ciudadanía Digital base module"); its `ui.tsx` holds shared section primitives + `useContenido()`
- `components/instrumental-acceso/` — 10 section components + `toc-nav.tsx` sidebar + shared UI primitives (`ui.tsx`) + `ficha-aula.tsx` (collapsible classroom ficha), for `/tematicas/instrumental-y-acceso`. Deliberately copied from `components/ciudadania-digital/` rather than imported — same reasoning as `SourceCite`'s per-route duplication — so the two pages stay decoupled and editing one can't break the other
- `components/cognitivo-informacional/` — same 10-section + `toc-nav.tsx` + `ui.tsx` + `ficha-aula.tsx` structure, for `/tematicas/cognitivo-intelectual-e-informacional`. Deliberately copied from `components/instrumental-acceso/` rather than imported — same reasoning as `SourceCite`'s per-route duplication — plus its own additional primitives: a 3-column table, a highlighted callout box, a numbered list, and a double "error" block (`situacion-card.tsx`, `error-doble.tsx`)
- `components/socio-comunicacional/` — same 10-section + `toc-nav.tsx` + `ui.tsx` + `ficha-aula.tsx` structure, for `/tematicas/socio-comunicacional-e-identidad`. Deliberately copied from `components/cognitivo-informacional/` rather than imported — same reasoning as `SourceCite`'s per-route duplication — plus its own `situacion-card.tsx` (3-way Audiencia/Persistencia/Circulación selector) and `error-doble.tsx`. Its `FichaAula` takes a `desarrollo`/activity `bloques` shape (`{ tipo: 'parrafo', texto } | { tipo: 'lista', items }`) instead of a flat paragraph array, so an activity's own content can include a nested list; `ui.tsx` also exports the `RichText` helper (`**bold**`/`*italic*` → `<strong>`/`<em>`, no `dangerouslySetInnerHTML`) used by every component that renders page content
- `lib/instrumental-acceso-content.ts`, `lib/instrumental-acceso-store.ts` — content (`resolveContenido`, docentes-only, fallback `'docentes'`) and Zustand+`persist` state (localStorage key `instrumental-acceso-state`) for `/tematicas/instrumental-y-acceso`; isolated from `lib/ciudadania-digital-content.ts`/`lib/ciudadania-digital-madre-store.ts`. Source content: `content-management/Dimension Instrumental y Acceso.docx`. Its "Recursos y cierre" section's "Siguiente dimensión" link to `/tematicas/cognitivo-intelectual-e-informacional` is a later cross-link addition, not present in that docx — not a coverage gap
- `lib/cognitivo-informacional-content.ts`, `lib/cognitivo-informacional-store.ts` — content (`resolveContenido`, docentes-only, fallback `'docentes'`) and Zustand+`persist` state (localStorage key `cognitivo-informacional-state`) for `/tematicas/cognitivo-intelectual-e-informacional`; isolated from the other dimension topics and from `ciudadania-madre-state`. Source content: `content-management/2 Dimension Cognitivo-Intelectual e Informacional.docx`. Its "Recursos y cierre" section carries two "Siguiente dimensión" links, neither present in that docx — not a coverage gap: one to `/tematicas/emocional` (added first, since Emocional was built before Socio-Comunicacional e Identidad) and one to `/tematicas/socio-comunicacional-e-identidad` (added afterward, once that topic existed)
- `lib/socio-comunicacional-content.ts`, `lib/socio-comunicacional-store.ts` — content (`resolveContenido`, docentes-only, fallback `'docentes'`) and Zustand+`persist` state (localStorage key `socio-comunicacional-state`) for `/tematicas/socio-comunicacional-e-identidad`; isolated from the other dimension topics and from `ciudadania-madre-state`. Source content: `content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx`
- `components/emocional/` — same 10-section + `toc-nav.tsx` + `ui.tsx` + `ficha-aula.tsx` structure, for `/tematicas/emocional`. Deliberately copied from `components/cognitivo-informacional/` rather than imported — same reasoning as `SourceCite`'s per-route duplication — plus its own `Enfasis` helper in `ui.tsx` that renders Markdown-style `**negrita**`/`*cursiva*` emphasis (needed for this topic's content, unlike the two earlier dimensions); its `situacion-card.tsx` selector uses 3 options (Pausar / Segunda mirada / Pedir ayuda) instead of the verification-level options used by `cognitivo-informacional`
- `lib/emocional-content.ts`, `lib/emocional-store.ts` — content (`resolveContenido`, docentes-only, fallback `'docentes'`) and Zustand+`persist` state (localStorage key `emocional-state`) for `/tematicas/emocional`; isolated from the other dimension topics and from `ciudadania-madre-state`. Source content: `content-management/Dimensiones 4 emocional.docx`
- `components/salud-bienestar/`, `components/etico-normativa/`, `components/seguridad-proteccion/`, `components/pedagogica-creativa/`, `components/participacion-democracia/`, `components/economica-consumo/` — the remaining six Poliedro dimensions (5th–10th), each following the exact same 10-section + `toc-nav.tsx` + `ui.tsx` + `ficha-aula.tsx` + `situacion-card.tsx` + `error-doble.tsx` structure, copied from the previous dimension's folder each time rather than imported. Their paired content/store files (`lib/salud-bienestar-content.ts`/`-store.ts`, `lib/etico-normativa-content.ts`/`-store.ts`, `lib/seguridad-proteccion-content.ts`/`-store.ts`, `lib/pedagogica-creativa-content.ts`/`-store.ts`, `lib/participacion-democracia-content.ts`/`-store.ts`, `lib/economica-consumo-content.ts`/`-store.ts`) are all `resolveContenido`-based, docentes-only with fallback `'docentes'`, and each has its own isolated `persist` localStorage key (`salud-bienestar-state`, `etico-normativa-state`, `seguridad-proteccion-state`, `pedagogica-creativa-state`, `participacion-democracia-state`, `economica-consumo-state`). Source docx files in `content-management/`: `Dimensiones 5 salud.docx`, `Dimensiones 6 etico.docx`, `Dimensiones 7.docx`, `Dimensiones 8.docx`, `Dimensiones 9.docx`, `Dimensiones 10.docx`. See the routing table above for each one's section-5 name, fichas count, and situation-selector options.
- `components/ui/` — shadcn/ui primitives (Radix UI, generated — avoid editing directly)
- `lib/utils.ts` — Only `cn()` (clsx + tailwind-merge)
- `lib/weekly-content.ts` — ISO week helpers, `fetch`-based content loader, and localStorage seen-state helpers for the weekly modal
- `hooks/use-mobile.ts` — Responsive breakpoint detection
- `hooks/use-toast.ts` — Toast hook (Sonner)
- `lib/hooks/use-tematica-progress.ts` — `useTematicaProgress`, the debounced progress-tracking hook for `/tematicas` topics (separate from `hooks/` above)
- `lib/hooks/use-libres-subtopic.ts` — `useLibresSubtopic`, shared quiz + infografía-lightbox (zoom/pan/pinch) state machine for the "Libres bajo influencia" group; consumed by all 6 forked standalone pages. Purely stateful — no JSX.
- `lib/audiencias.ts`, `lib/audiencia-store.ts`, `lib/audiencia-texto.ts`, `components/nota-audiencia.tsx` — the audience content-variant system; see "Audience content variants" below
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

**Cited-sources pattern (`/huella-digital`, `/hiperconectividad-digital`; `/ciudadania-digital` used to follow it but was rewritten with no `SourceCite` yet):** these routes attribute every statistic/factual claim to a source instead of stating it bare. Each has its own `lib/<route>-content.ts` exporting a `Source { author, note?, url?, unverified? }` / `Quote { text, source }` pair plus the route's data, and its own `components/<route>/source-cite.tsx` rendering the `📎 Author — note` citation (as an external link when `source.url` is set). `SourceCite` is **deliberately duplicated per route**, not shared, because each route's visual theme differs (`huella-digital` is light slate/blue, `hiperconectividad-digital` alternates light/dark sections and needs a `dark` prop variant). `unverified: true` renders a "sin verificar" badge instead of omitting the claim — used for secondhand citations, unconfirmed figures, or non-citable references. `huella-digital` went further and was fully rebuilt as continuous-scroll landings with 9 numbered sections (Hero → Historia → Características → Tipos/Variantes → Ejemplos → Ventajas → Riesgos → Aula → Recursos) plus a `toc-nav.tsx` sidebar — desktop is `sticky top-0 h-screen` with IntersectionObserver scroll-spy, mobile is a dropdown selector (see "Mobile `toc-nav` pattern" below). **Gotcha:** `overflow-x-hidden` must live on the `<main>` content column, not on the flex wrapper that also contains the sticky sidebar — CSS computes `overflow-y: auto` implicitly on an element with `overflow-x: hidden` set (and no explicit `overflow-y`), which silently makes that wrapper the sticky positioning context instead of the viewport and breaks the sidebar's stickiness. `hiperconectividad-digital` kept its original bespoke bento/dark-section design and only had the concept block + inline citations layered into its existing sections, not a full 9-section rebuild.

**Shared-data exception (`/tematicas/*` "Libres bajo influencia" group):** content for all 6 members lives in one `lib/*-data.ts` file (`lib/libres-bajo-influencia-data.ts`, keyed by slug via `getLibresSubtopicBySlug()`), but each route now renders its own standalone page component under `components/tematicas/` (`SubculturasDigitalesPage.tsx`, `AlgoritmosPerfiladoPage.tsx`, `DisenoPersuasivoPatronesOscurosPage.tsx`, `CaldosDeCultivoPage.tsx`, `RecuperarLaAgenciaPage.tsx`, `PoliedroCiudadaniaDigitalPage.tsx`) for bespoke presentation (slide decks, PDFs, interactive simulators) instead of a shared template — only the data and the quiz/lightbox state machine (`lib/hooks/use-libres-subtopic.ts`, `useLibresSubtopic`) are shared, not the JSX/layout. `components/tematicas/LibresBajoInfluenciaTemplate.tsx` still exists on disk but is no longer imported by any route — treat it as dead code, not a live pattern.

**Ciudadanía Digital base module (`/ciudadania-digital`):** 10 numbered sections (Introducción → Recursos y cierre), each `components/ciudadania-digital/<name>-section.tsx` wrapping `<Section id>` from `ui.tsx`; section ids come from `TOC_SECTIONS` in `lib/ciudadania-digital-content.ts` and drive `toc-nav.tsx` (same sticky/scroll-spy layout and `overflow-x-hidden`-on-`<main>` gotcha as `huella-digital`, see "Mobile `toc-nav` pattern" below for the mobile behavior). "El Poliedro" is one section with three internal levels (Recordar/Comprender/Aplicar). All copy lives in `lib/ciudadania-digital-content.ts`, read through `useContenido()`; the 10 Poliedro dimensions (`DIMENSIONES`) are shared by sections 5, 7, 9 and 10, and their ids are the keys of the store's `poliedroEstado`. User input (self-diagnosis, "gancho" answer, 4-question quiz, Poliedro table, classroom challenge, closing reflections) is kept in `lib/ciudadania-digital-madre-store.ts` — Zustand + `persist`, localStorage key `ciudadania-madre-state`, no backend, deliberately separate from `lib/ciudadania/app-store.ts` and `lib/audiencia-store.ts`. Its custom `merge` rebuilds from defaults so stale persisted state (old dimension keys, missing fields) can't crash the page. Platform progress here is only the manual `TematicaCompletarButton`; there is no measurable checklist. **The Poliedro is complete:** all 10 dimensions now exist and all 20 `href` links across both `TablaDimensiones` instances (`DimensionInfo.href` in `lib/ciudadania-digital-content.ts`, consumed via `next/link`) point at real pages — there are no more `href="#"` placeholders. Each dimension topic links forward to the next one at its own close, in build order: Instrumental y Acceso → Cognitivo-Intelectual e Informacional → Socio-Comunicacional e Identidad → Salud y Bienestar Digital → Ético-Normativa y Derechos → Seguridad, Privacidad y Protección Digital → Pedagógica y Creativa → Participación y Democracia → Económica, Productiva y de Consumo (the last one, with no further link) — except Cognitivo-Intelectual e Informacional, which links to both Emocional and Socio-Comunicacional e Identidad (see the note on `lib/cognitivo-informacional-content.ts` above for why there are two), and Emocional, which sits off that main chain (see the routing-table ordering gotcha above). Most of these "Siguiente dimensión" links are a hardcoded JSX block at the bottom of `recursos-y-cierre-section.tsx` with a comment noting it's an addition not present in the source docx; `salud-y-bienestar-digital` is the one exception, where the link is part of the content object (`siguienteDimensionHref`/`siguienteDimensionTexto`). Regulatory framework and "para seguir leyendo" are plain text with no verified sources; no `SourceCite`. The "banco de casos" referenced in sections 6–7 doesn't exist yet. Each of the 10 per-dimension topics gets its own Zustand store with its own localStorage key, following the pattern `<slug>-state` (e.g. `instrumental-acceso-state`, `economica-consumo-state`), separate from each other and from `ciudadania-madre-state`, and none of them yet use `useTematicaProgress`/MySQL — they show 0% in the dashboard until that's wired up.

**Audience content variants (`/tematicas`, `/ciudadania-digital`, `/estafas-digitales`, `/ciudadania-presente/dashboard/tematicas`):** A public filter lets a visitor pick a target audience (`Audiencia` in `lib/audiencias.ts`: `docentes`, `familias`, `adultos-mayores`, `ninas-ninos-adolescentes`, `mujeres`) and see content reworded for that audience. Selection is single-select UI state but a topic's own classification (`TematicaItem.audiencias: Audiencia[]` in `lib/tematicas-data.ts`) can list several audiences; classification rationale (including deliberately unclassified/ambiguous topics) is in `content-management/PROPUESTA-AUDIENCIAS.md`. Selection lives in `lib/audiencia-store.ts` (Zustand + `persist` to localStorage, key `audiencia-filtro-state` — deliberately separate from `lib/ciudadania/app-store.ts`, which is platform auth/progress, not a UI filter) so it survives navigation from `/tematicas` into an individual topic; `useSyncAudienciaFromQuery()` lets a `?audiencia=` query param on a shared link override what's persisted. Two data shapes, per `lib/audiencia-texto.ts`:
- **Grupo A** (full per-audience rewrite of long structured text): `AudienciaTexto` (`Partial<Record<Audiencia, string>>`) + `resolveTexto(texto, audienciaActual, fallback)`, which must always render something — falls back to an explicit per-topic `fallback` audience (e.g. `'docentes'` for `ciudadania-digital`), then to the first defined value. Used by `lib/huella-digital-content.ts` and others. `/ciudadania-digital` uses a variant of it: whole-page content objects keyed by audience (`CONTENIDO: Partial<Record<Audiencia, Contenido>>` + `resolveContenido()`), only `docentes` written so far, every other audience falls back to it. `/tematicas/instrumental-y-acceso`, `/tematicas/cognitivo-intelectual-e-informacional` and `/tematicas/socio-comunicacional-e-identidad` follow the same whole-page variant (`lib/instrumental-acceso-content.ts`, `lib/cognitivo-informacional-content.ts`, `lib/socio-comunicacional-content.ts`), also docentes-only with fallback `'docentes'`.
- **Grupo B** (a single optional note bolted onto otherwise-neutral content, no rewrite): `AudienciaNotas` (`notaDocente?`, `notaFamilias?`, `notaAdultosMayores?`, `notaNinasNinosAdolescentes?`, `notaMujeres?`) rendered by `<NotaAudiencia notas={...} audienciaActual={...} />` (`components/nota-audiencia.tsx`) — deliberately has **no fallback**: renders nothing if the active audience has no note written, and nothing at all if no audience is selected. Used by `lib/estafas-digitales-content.ts` (`AULA_ROL`, the topic's first content this way — it had no dedicated `lib/*.ts` file before this).

**Caveat — more than two audience shapes exist in practice.** `docs/inventario-tematicas-2026-09.md` found four: Grupo A, Grupo B, a *bespoke binary* (`audienciaActual === 'familias' ? … : …` against ad-hoc fields like `introFamilias`/`notaFamilias` in the topic's own `lib/*.ts`, bypassing `resolveTexto`/`NotaAudiencia`), and `pickFamilias` in `lib/alfabetizacion-mediatica-content.ts` (same binary, local helper). `cibercrianza` uses Grupo A but with a local `ta()` wrapper whose fallback is `'familias'`, not `'docentes'`, and even quiz `Opcion.texto` can be an `AudienciaTexto`. Check which shape a topic uses before editing its audience text.

**The Poliedro's 10 dimension topics are all built** (`instrumental-y-acceso` → `economica-productiva-y-de-consumo`, see the routing table above for each one's details). If a similar scroll-continuous, sidebar-navigated topic ever needs to be added to this site outside the Poliedro, the established pattern (used consistently for all 10, each copied from the previous one's folder) was 5 prompts: (1) structure — scaffold `app/tematicas/<slug>/` (two-file pattern) and `components/<slug>/` copied from the most similar existing dimension's folder, plus its own `lib/<slug>-content.ts`/`lib/<slug>-store.ts`; (2) content 1–5 — write sections 1–5 (Introducción through the topic's own practice/verification section) from a source docx; (3) content 6–10 — write sections 6–10 (case, practice, quiz, classroom, cierre) plus the remaining classroom fichas; (4) verification — typecheck, build, and a Playwright pass over the topic in isolation (state persistence, audience filter, quiz/checklist behavior); (5) cross-links — add the new topic's `href` to `DIMENSIONES` in `lib/ciudadania-digital-content.ts` if relevant, add a "Siguiente dimensión" link at the previous topic's close, and update this file. **Fichas rule:** classroom fichas never repeat across topics — check a new ficha isn't already one of another topic's by title or by its "Frase para llevar" before writing it; counts vary per topic with no fixed number (`instrumental-y-acceso`/`cognitivo-intelectual-e-informacional`/`emocional`/`economica-productiva-y-de-consumo` have 3 each, `salud-y-bienestar-digital` has 2, `etico-normativa-y-derechos`/`seguridad-privacidad-y-proteccion-digital` have 4 each, `pedagogica-y-creativa` has 3, `participacion-y-democracia` has 5, `socio-comunicacional-e-identidad` has 10).

**Mobile `toc-nav` pattern (all 10 dimension topics + `ciudadania-digital` + `huella-digital`, 12 files total):** on mobile, the sidebar becomes a sticky dropdown selector instead of the old horizontal scrollable pill bar. The trigger button shows `N/10` plus the active section's full label, and a glowing/pulsing circular badge around its chevron (`animate-ping` + an inline `boxShadow` glow in the route's accent color) signals it's tappable. Tapping it expands a vertical list of all sections **in normal flow** (not `absolute`) — since the parent `<nav>` is `sticky`, the growing list pushes the page content down instead of overlaying it. Picking a section closes the dropdown immediately (`onClick` calls `setMobileOpen(false)` directly, not just via the scroll-spy effect) and scrolls to it. A secondary `useEffect` also closes the dropdown whenever the IntersectionObserver-driven `activeId` changes, as a fallback for scroll-without-click. Desktop is unaffected (still the fixed vertical sidebar). `components/tematicas/back-to-dashboard-button.tsx` (`BackToDashboardButton`, fixed top-right "Volver a mis temáticas" link) is positioned at `top-36` on mobile specifically to clear this dropdown's trigger bar (navbar `h-20` + the bar's own ~53px) — `md:top-24` on desktop, where no mobile dropdown exists.

**Content audits (`docs/`):** `docs/inventario-tematicas-2026-09.md` is a structural map of all topics/groups; `docs/auditorias/<tema>-audit.md` (read-only content audits) and `<tema>-contraste-framework.md` (comparison against a 10-step instructional-design framework) exist per topic. Consult them before redesigning a topic page.

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
- **recharts** — Data visualizations in `/alfabetizacion-mediatica`
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
