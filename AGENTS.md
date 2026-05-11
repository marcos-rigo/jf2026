# AGENTS.md

See `CLAUDE.md` for the full reference. This file covers what changes or is easy to miss.

## Commands

```bash
npm run dev              # localhost:3000
npm run build            # ignores TS errors — see next.config.mjs
npm run lint             # ESLint (Next.js defaults, no custom config)
npx tsc --noEmit         # type-check separately (build does NOT check types)
```

## Quirks

- **Types**: `next.config.mjs` sets `ignoreBuildErrors: true`. Always `npx tsc --noEmit` before committing.
- **Tailwind v4**: No `tailwind.config.js`. Theme is CSS-only in `app/globals.css` via `@theme inline`. Brand tokens are CSS custom properties (`--brand-blue`, etc.) exposed as Tailwind utilities.
- **Routing**: Two-file pattern — `page.tsx` (server, exports `metadata`) + `*-content.tsx` (client, `"use client"`). Exceptions: `/temas/*` are single-file client components.
- **shadcn/ui** (`components/ui/`): Generated — never edit directly. Add via `npx shadcn add <component>`.
- **Remote images**: Only `josefarhat.com` in `remotePatterns`. Add new domains to `next.config.mjs`.
- **Lazy imports**: Firebase + EmailJS are `dynamic(() => import(...))` in `QuickContactSection`.
- **No CI/CD**: No GitHub Actions or CI config.

## Weekly modal workflow

```bash
npm run create-week          # interactive scaffold (folder + metadata.json)
npm run validate-week WNN    # validate a single week
npm run validate-all         # validate all weeks in manifest
npm run preview-week WNN     # visual preview at :3001
npm run archive-old          # move past weeks to archive/
```

**Gotcha**: `create-week` does not auto-register the new week in `public/weekly-content/manifest.json` — add the key manually.

## Environment keys

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FIREBASE_*` | Firestore (contact form) |
| `NEXT_PUBLIC_EMAILJS_*` | EmailJS (template `template_72zh3ni`) |
| `ANTHROPIC_API_KEY` | Reserved for planned Claude integration |



## Data pattern

All content is **hardcoded typed arrays** at the top of each component. No CMS. Adding content: define typed array → map over it in JSX.
