#!/usr/bin/env node
/**
 * validate-content.mjs
 * Valida el contenido semanal antes de publicar.
 * Uso:
 *   npm run validate-week 2026-W19
 *   npm run validate-all
 */

import { existsSync, readFileSync, statSync } from 'fs'
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
const RED = '\x1b[31m'

// ── Config ────────────────────────────────────────────────────────────────────
const REQUIRED = ['title', 'description', 'ctaText', 'ctaLink', 'gifFileName']
const SUPPORTED_EXT = ['.gif', '.webp', '.mp4']
const GIF_WARN_MB = 5
const GIF_ERROR_MB = 10
const TITLE_WARN_CHARS = 50
const DESC_WARN_CHARS = 150

// ── Validator ─────────────────────────────────────────────────────────────────
function validateWeek(weekStr) {
  let errors = 0
  let warnings = 0

  function ok(msg)   { console.log(`  ${GREEN}✅${R} ${msg}`) }
  function warn(msg) { console.log(`  ${YELLOW}⚠️  ${msg}${R}`); warnings++ }
  function fail(msg) { console.log(`  ${RED}❌ ${msg}${R}`); errors++ }

  console.log(`\n${B}${BLUE}🔍 Validando: ${weekStr}${R}\n`)

  const weekDir = join(WEEKLY_DIR, weekStr)
  if (!existsSync(weekDir)) {
    fail(`Carpeta no encontrada: public/weekly-content/${weekStr}/`)
    summary(errors, warnings)
    return errors === 0
  }

  const metaPath = join(weekDir, 'metadata.json')
  if (!existsSync(metaPath)) {
    fail('metadata.json no encontrado')
    summary(errors, warnings)
    return false
  }

  let meta
  try {
    meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
    ok('metadata.json existe y es JSON válido')
  } catch (e) {
    fail(`metadata.json tiene JSON inválido: ${e.message}`)
    summary(errors, warnings)
    return false
  }

  // Required fields — support both ctaLink (new) and linkTo (legacy)
  const effectiveMeta = { ctaLink: meta.linkTo, ctaText: 'Ver más', ...meta }
  const missing = REQUIRED.filter(f => !effectiveMeta[f])
  if (missing.length > 0) {
    fail(`Campos requeridos faltantes: ${missing.join(', ')}`)
  } else {
    ok('Todos los campos requeridos presentes')
  }

  // Legacy field warning
  if (meta.linkTo && !meta.ctaLink) {
    warn('"linkTo" está deprecado — reemplazá por "ctaLink" en el próximo update')
  }

  // GIF validation
  const gifName = meta.gifFileName
  if (gifName) {
    const gifPath = join(weekDir, gifName)
    const ext = '.' + gifName.split('.').pop().toLowerCase()

    if (!SUPPORTED_EXT.includes(ext)) {
      fail(`Extensión no soportada: "${ext}" — usá .gif, .webp o .mp4`)
    } else if (!existsSync(gifPath)) {
      fail(`Archivo no encontrado: ${gifName} — colocalo en public/weekly-content/${weekStr}/`)
    } else {
      const sizeMB = statSync(gifPath).size / 1024 / 1024
      const sizeLabel = `${sizeMB.toFixed(1)} MB`
      if (sizeMB > GIF_ERROR_MB) {
        fail(`Archivo demasiado pesado: ${sizeLabel} (máximo ${GIF_ERROR_MB} MB)`)
      } else if (sizeMB > GIF_WARN_MB) {
        warn(`Archivo pesado: ${sizeLabel} — recomendado < ${GIF_WARN_MB} MB`)
        ok(`Archivo encontrado: ${gifName}`)
      } else {
        ok(`Archivo encontrado: ${gifName} (${sizeLabel})`)
      }
    }
  }

  // Link validation
  const link = meta.ctaLink ?? meta.linkTo
  if (link) {
    const isRelative = link.startsWith('/')
    const isAbsolute = (() => { try { new URL(link); return true } catch { return false } })()
    if (isRelative || isAbsolute) {
      ok(`Link válido: ${link}`)
    } else {
      fail(`Link inválido: "${link}" — usá /ruta relativa o https://url-completa`)
    }
  }

  // Best-practice warnings
  if (meta.title?.length > TITLE_WARN_CHARS) {
    warn(`Título tiene ${meta.title.length} caracteres (recomendado < ${TITLE_WARN_CHARS})`)
  }
  if (meta.description?.length > DESC_WARN_CHARS) {
    warn(`Descripción tiene ${meta.description.length} caracteres (recomendado < ${DESC_WARN_CHARS})`)
  }
  if (meta.expiresAt) {
    const exp = new Date(meta.expiresAt)
    if (isNaN(exp.getTime())) {
      warn(`expiresAt no es una fecha ISO válida: "${meta.expiresAt}"`)
    } else if (exp < new Date()) {
      warn(`expiresAt ya expiró: ${meta.expiresAt}`)
    }
  }

  summary(errors, warnings)
  return errors === 0
}

function summary(errors, warnings) {
  console.log('')
  if (errors === 0 && warnings === 0) {
    console.log(`${GREEN}${B}✨ Contenido válido y listo para publicar${R}`)
  } else if (errors === 0) {
    console.log(`${YELLOW}${B}⚡ Válido con ${warnings} advertencia${warnings > 1 ? 's' : ''}${R}`)
  } else {
    console.log(`${RED}${B}💥 ${errors} error${errors > 1 ? 'es' : ''} — corregí antes de publicar${R}`)
  }
}

function readManifest() {
  if (!existsSync(MANIFEST)) return []
  try { return JSON.parse(readFileSync(MANIFEST, 'utf-8')) } catch { return [] }
}

function getCurrentWeek() {
  const now = new Date()
  const thu = new Date(now)
  thu.setDate(now.getDate() + (4 - (now.getDay() || 7)))
  const yearStart = new Date(thu.getFullYear(), 0, 1)
  const n = Math.ceil(((thu - yearStart) / 86400000 + 1) / 7)
  return `${thu.getFullYear()}-W${String(n).padStart(2, '0')}`
}

// ── Entry point ───────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const all = args.includes('--all')

if (all) {
  const manifest = readManifest()
  if (manifest.length === 0) {
    console.log(`\n${YELLOW}⚠️  manifest.json vacío o no encontrado${R}\n`)
    process.exit(0)
  }
  const current = getCurrentWeek()
  console.log(`\n${B}${BLUE}🔍 Validando ${manifest.length} semanas (actual: ${current})${R}`)
  console.log(`${DIM}Futuras: ${manifest.filter(w => w >= current).length} | Pasadas: ${manifest.filter(w => w < current).length}${R}`)

  let allValid = true
  for (const week of manifest) {
    if (!validateWeek(week)) allValid = false
  }
  console.log('')
  if (!allValid) process.exit(1)
} else {
  const weekArg = args[0]
  if (!weekArg) {
    console.error(`\n${RED}Uso: npm run validate-week <YYYY-WNN>${R}`)
    console.error(`     npm run validate-all\n`)
    process.exit(1)
  }
  if (!/^\d{4}-W\d{2}$/.test(weekArg)) {
    console.error(`\n${RED}Formato inválido: "${weekArg}". Usá YYYY-WNN (ej: 2026-W19)${R}\n`)
    process.exit(1)
  }
  console.log('')
  if (!validateWeek(weekArg)) process.exit(1)
  console.log('')
}
