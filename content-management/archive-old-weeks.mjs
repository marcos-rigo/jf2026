#!/usr/bin/env node
/**
 * archive-old-weeks.mjs
 * Mueve semanas pasadas a /public/weekly-content/archive/
 * Uso: npm run archive-old
 *      npm run archive-old -- --dry-run   (solo muestra qué movería)
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const WEEKLY_DIR = join(ROOT, 'public', 'weekly-content')
const ARCHIVE_DIR = join(WEEKLY_DIR, 'archive')
const MANIFEST = join(WEEKLY_DIR, 'manifest.json')

const R = '\x1b[0m'
const B = '\x1b[1m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const BLUE = '\x1b[34m'
const DIM = '\x1b[2m'

function getCurrentWeek() {
  const now = new Date()
  const thu = new Date(now)
  thu.setDate(now.getDate() + (4 - (now.getDay() || 7)))
  const yearStart = new Date(thu.getFullYear(), 0, 1)
  const n = Math.ceil(((thu - yearStart) / 86400000 + 1) / 7)
  return `${thu.getFullYear()}-W${String(n).padStart(2, '0')}`
}

function readManifest() {
  if (!existsSync(MANIFEST)) return []
  try { return JSON.parse(readFileSync(MANIFEST, 'utf-8')) } catch { return [] }
}

function writeManifest(weeks) {
  const sorted = [...new Set(weeks)].sort()
  writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n', 'utf-8')
}

const dryRun = process.argv.includes('--dry-run')
const current = getCurrentWeek()
const manifest = readManifest()
const toArchive = manifest.filter(w => w < current)

console.log(`\n${B}${BLUE}📦 Archivar semanas pasadas${R}`)
console.log(`${DIM}Semana actual: ${current}`)
console.log(`Semanas en manifest: ${manifest.length} | A archivar: ${toArchive.length}${R}`)
if (dryRun) console.log(`\n${YELLOW}⚠️  Modo dry-run — no se moverá nada${R}`)

if (toArchive.length === 0) {
  console.log(`\n${GREEN}✅ No hay semanas pasadas para archivar${R}\n`)
  process.exit(0)
}

if (!dryRun) {
  mkdirSync(ARCHIVE_DIR, { recursive: true })
}

const remaining = [...manifest]

for (const week of toArchive) {
  const src = join(WEEKLY_DIR, week)
  const dest = join(ARCHIVE_DIR, week)

  if (!existsSync(src)) {
    console.log(`  ${YELLOW}⚠️  ${week} — carpeta no encontrada, removiendo del manifest${R}`)
    remaining.splice(remaining.indexOf(week), 1)
    continue
  }

  if (dryRun) {
    console.log(`  ${DIM}[dry-run] ${week} → archive/${week}${R}`)
  } else {
    if (existsSync(dest)) {
      console.log(`  ${YELLOW}⚠️  ${week} — ya existe en archive/, omitiendo${R}`)
    } else {
      renameSync(src, dest)
      console.log(`  ${GREEN}✅${R} ${week} → archive/${week}`)
    }
    remaining.splice(remaining.indexOf(week), 1)
  }
}

if (!dryRun) {
  writeManifest(remaining)
  console.log(`\n${GREEN}✅ manifest.json actualizado (${remaining.length} semanas activas)${R}`)
}

console.log('')
