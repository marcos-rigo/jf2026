# AGENTS.md

See `CLAUDE.md` for the full reference. This file covers what changes or is easy to miss.

## Commands

```bash
npm run dev              # localhost:3000
npm run build            # ignores TS errors — see next.config.mjs
npm run start            # production server
npm run lint             # ESLint (Next.js defaults, no custom config)
npx tsc --noEmit         # type-check separately (build does NOT check types)
```

## Quirks

- **Types**: `next.config.mjs` sets `ignoreBuildErrors: true`. Always `npx tsc --noEmit` before committing.
- **Tailwind v4**: No `tailwind.config.js`. Theme is CSS-only in `app/globals.css` via `@theme inline`. Brand tokens are CSS custom properties (`--brand-blue`, etc.) exposed as Tailwind utilities. Dark mode via `@custom-variant dark (&:is(.dark *))`. Also imports `tw-animate-css`.
- **Routing**: Two-file pattern — `page.tsx` (server, exports `metadata`) + `*-content.tsx` (client, `"use client"`). Exceptions: `/temas/*` are single-file client components.
- **shadcn/ui** (`components/ui/`): Generated — never edit directly. Add via `npx shadcn add <component>`.
- **Remote images**: Domains in `remotePatterns`: `josefarhat.com`, `img.youtube.com`, `www.comunicaciontucuman.gob.ar`, `*.fbcdn.net`. Add new domains to `next.config.mjs`.
- **Lazy imports**: Firebase + EmailJS are `dynamic(() => import(...))` in `QuickContactSection`.
- **No CI/CD**: No GitHub Actions or CI config.
- **`/blog` inactive**: Linked in Navbar but `app/blog/` doesn't exist yet — don't treat as active.
- **`ThemeProvider` not wired**: `components/theme-provider.tsx` exists but root layout doesn't use it.
- **Extra routes**: `/hiperconectividad-digital`, `/nnya-entorno-digital`, `/violencia-digital-infancias` — present in Navbar but not in manual route tables.

## Weekly modal workflow

```bash
npm run create-week          # interactive scaffold (folder + metadata.json)
npm run validate-week WNN    # validate a single week
npm run validate-all         # validate all weeks in manifest
npm run preview-week WNN     # visual preview at :3001
npm run archive-old          # move past weeks to archive/
npm run archive-old -- --dry-run  # preview without moving
```

**Gotcha**: `create-week` does not auto-register the new week in `public/weekly-content/manifest.json` — add the key manually.
All metadata conventions (fields, asset sizes, naming) documented in `content-management/README.md`.

## Environment keys

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FIREBASE_*` | Firestore (contact form) |
| `NEXT_PUBLIC_EMAILJS_*` | EmailJS (template `template_72zh3ni`) |
| `DB_HOST` / `DB_PORT` / `DB_USER` / `DB_PASSWORD` / `DB_NAME` | MySQL for Ciudadanía Presente platform (server-only) |
| `NEWS_API_KEY` / `NEWS_API_PROVIDER` | News API (used by local news section) |
| `ANTHROPIC_API_KEY` | Reserved for planned Claude integration |


## Data pattern

All content is **hardcoded typed arrays** at the top of each component. No CMS. Adding content: define typed array → map over it in JSX.
