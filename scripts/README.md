# scripts/update-topics.ts

Automated script that refreshes the **"Temas Actuales"** section of the José
Farhat website every 3 days using Claude claude-sonnet-4-6 with live web search.

## What it does

1. Calls the Anthropic API (`claude-sonnet-4-6`) with the `web_search_20250305`
   built-in tool enabled.
2. Claude searches the web for 3 recent news items about ciudadanía digital,
   participación ciudadana, democracia digital, gobierno abierto and civic tech,
   prioritising Argentina → LatAm → Global.
3. Validates each item against a strict TypeScript schema (categories, gradients,
   URL format, character limits).
4. Patches the `currentTopics` array inside
   `components/sections/current-topics-section.tsx` in-place using comment
   markers (no JSX is changed).
5. Writes a JSON snapshot to `public/data/current-topics.json`.

## Running locally

```bash
cp .env.example .env.local
# add your key to .env.local

npm install          # installs tsx + @anthropic-ai/sdk
npm run update-topics
```

## GitHub Actions automation

The workflow `.github/workflows/update-topics.yml` runs on a schedule
(`0 9 */3 * *` = every 3 days at 09:00 UTC) and can also be triggered manually
from the Actions tab.

### Required secret

| Secret | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic API key |

**Adding the secret:**
1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY` · Value: your key from console.anthropic.com

## Component markers

The script finds and replaces the block delimited by these two comments inside
`current-topics-section.tsx`:

```
// ── TOPICS:START ──
const currentTopics: Topic[] = [ ... ]
// ── TOPICS:END ──
```

Do not remove or rename these markers or the script will fail with a clear error.

## Topic schema

| Field | Type | Constraint |
|---|---|---|
| `id` | string | kebab-case, unique |
| `title` | string | ≤ 80 chars, Spanish |
| `description` | string | ≤ 200 chars, Spanish |
| `date` | string | "DD de Mes, YYYY" |
| `location` | string | city / country |
| `category` | enum | see below |
| `sourceUrl` | string | must start with `http` |
| `gradient` | enum | see below |

**Valid categories:** Innovación Democrática · Capacitación Ciudadana ·
Tecnología Cívica · Gobierno Abierto · Participación Digital

**Valid gradients:** from-brand-navy to-brand-blue · from-brand-pink to-purple-600 ·
from-brand-blue to-cyan-500 · from-brand-navy to-brand-pink · from-emerald-500 to-brand-blue
