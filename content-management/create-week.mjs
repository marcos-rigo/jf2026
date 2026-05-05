#!/usr/bin/env node
/**
 * create-week.mjs
 * Crea interactivamente una nueva carpeta de contenido semanal.
 * Uso: npm run create-week
 */

import readline from 'readline/promises'
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const WEEKLY_DIR = join(ROOT, 'public', 'weekly-content')
const MANIFEST = join(WEEKLY_DIR, 'manifest.json')

// ── ANSI helpers ─────────────────────────────────────────────────────────────
const R = '\x1b[0m'
const B = '\x1b[1m'
const DIM = '\x1b[2m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const BLUE = '\x1b[34m'
const CYAN = '\x1b[36m'
const RED = '\x1b[31m'

function ok(msg)   { console.log(`${GREEN}✅${R} ${msg}`) }
function warn(msg) { console.log(`${YELLOW}⚠️  ${msg}${R}`) }
function err(msg)  { console.log(`${RED}❌ ${msg}${R}`) }
function info(msg) { console.log(`${BLUE}ℹ️  ${R}${msg}`) }

// ── ISO week helpers ──────────────────────────────────────────────────────────
function getWeekNumber(date = new Date()) {
  const thursday = new Date(date)
  thursday.setDate(date.getDate() + (4 - (date.getDay() || 7)))
  const yearStart = new Date(thursday.getFullYear(), 0, 1)
  const weekNum = Math.ceil(((thursday - yearStart) / 86400000 + 1) / 7)
  return `${thursday.getFullYear()}-W${String(weekNum).padStart(2, '0')}`
}

function weekToMonday(weekStr) {
  const [yearStr, wStr] = weekStr.split('-W')
  const year = parseInt(yearStr, 10)
  const week = parseInt(wStr, 10)
  // Jan 4 is always in ISO week 1
  const jan4 = new Date(year, 0, 4)
  const dow = jan4.getDay() || 7
  const weekOneMon = new Date(jan4)
  weekOneMon.setDate(jan4.getDate() - dow + 1)
  const monday = new Date(weekOneMon)
  monday.setDate(weekOneMon.getDate() + (week - 1) * 7)
  return monday
}

function nextWeek(weekStr) {
  const monday = weekToMonday(weekStr)
  monday.setDate(monday.getDate() + 7)
  return getWeekNumber(monday)
}

// ── Manifest helpers ──────────────────────────────────────────────────────────
function readManifest() {
  if (!existsSync(MANIFEST)) return []
  try { return JSON.parse(readFileSync(MANIFEST, 'utf-8')) } catch { return [] }
}

function writeManifest(weeks) {
  const sorted = [...new Set(weeks)].sort()
  writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2), 'utf-8')
}

function getNextAvailable() {
  const manifest = readManifest()
  const current = getWeekNumber()
  const future = manifest.filter(w => w >= current).sort()
  const base = future.length > 0 ? future[future.length - 1] : current
  return nextWeek(base)
}

// ── Validation helpers ────────────────────────────────────────────────────────
const VALID_WEEK_RE = /^\d{4}-W\d{2}$/
const VALID_GIF_EXT_RE = /\.(gif|webp|mp4)$/i
const VALID_LINK_RE = /^\/|^https?:\/\//

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  console.log(`\n${B}${BLUE}📅 Crear Contenido Semanal${R}\n`)

  // ── Target week ─────────────────────────────────────────────────────────────
  const suggested = getNextAvailable()
  const weekAnswer = await rl.question(
    `Próxima semana disponible: ${CYAN}${suggested}${R}\n¿Crear para ${B}${suggested}${R}? (s/n o escribí otra semana YYYY-WNN): `
  )

  let targetWeek
  const trimmed = weekAnswer.trim()
  if (trimmed === '' || trimmed.toLowerCase() === 's') {
    targetWeek = suggested
  } else if (trimmed.toLowerCase() === 'n') {
    const custom = (await rl.question('Semana (YYYY-WNN): ')).trim()
    targetWeek = custom
  } else {
    targetWeek = trimmed
  }

  if (!VALID_WEEK_RE.test(targetWeek)) {
    err(`Formato inválido: "${targetWeek}". Usá YYYY-WNN (ej: 2026-W20)`)
    rl.close()
    process.exit(1)
  }

  const weekDir = join(WEEKLY_DIR, targetWeek)
  if (existsSync(weekDir)) {
    const overwrite = await rl.question(
      `${YELLOW}⚠️  La carpeta ${targetWeek} ya existe. ¿Sobreescribir metadata.json? (s/n): ${R}`
    )
    if (overwrite.trim().toLowerCase() !== 's') {
      warn('Operación cancelada.')
      rl.close()
      process.exit(0)
    }
  }

  // ── Content fields ──────────────────────────────────────────────────────────
  console.log('')
  const title       = (await rl.question(`${B}✏️  Título del modal:${R} `)).trim()
  const description = (await rl.question(`${B}✏️  Descripción:${R} `)).trim()
  const ctaText     = (await rl.question(`${B}✏️  Texto del botón CTA:${R} `)).trim()
  const ctaLink     = (await rl.question(`${B}✏️  Link destino (ej: /ciudadania-digital):${R} `)).trim()
  const gifFileName = (await rl.question(`${B}✏️  Nombre del archivo GIF/WebP/MP4:${R} `)).trim()

  rl.close()

  // ── Validate inputs ─────────────────────────────────────────────────────────
  const errors = []
  if (!title)       errors.push('El título es requerido')
  if (!description) errors.push('La descripción es requerida')
  if (!ctaText)     errors.push('El texto del CTA es requerido')
  if (!ctaLink)     errors.push('El link del CTA es requerido')
  else if (!VALID_LINK_RE.test(ctaLink)) errors.push(`Link inválido: "${ctaLink}" — usá /ruta o https://...`)
  if (!gifFileName) errors.push('El nombre del archivo es requerido')
  else if (!VALID_GIF_EXT_RE.test(gifFileName)) errors.push(`Extensión no soportada: "${gifFileName}" — usá .gif, .webp o .mp4`)

  if (errors.length > 0) {
    console.log('')
    errors.forEach(e => err(e))
    process.exit(1)
  }

  // ── Write files ─────────────────────────────────────────────────────────────
  mkdirSync(weekDir, { recursive: true })
  ok(`Carpeta creada: public/weekly-content/${targetWeek}/`)

  const metadata = {
    title,
    description,
    ctaText,
    ctaLink,
    gifFileName,
    createdAt: new Date().toISOString(),
  }
  writeFileSync(join(weekDir, 'metadata.json'), JSON.stringify(metadata, null, 2) + '\n', 'utf-8')
  ok('metadata.json generado')

  const manifest = readManifest()
  if (!manifest.includes(targetWeek)) {
    writeManifest([...manifest, targetWeek])
    ok('manifest.json actualizado')
  }

  // ── Next steps ──────────────────────────────────────────────────────────────
  console.log(`\n${B}📁 Colocá tu archivo en:${R}`)
  console.log(`   ${CYAN}public/weekly-content/${targetWeek}/${gifFileName}${R}`)
  console.log(`\n${DIM}Validar:   npm run validate-week ${targetWeek}`)
  console.log(`Preview:   npm run preview-week ${targetWeek}${R}\n`)
}

main().catch(e => {
  console.error(`\n${RED}Error inesperado: ${e.message}${R}`)
  process.exit(1)
})
