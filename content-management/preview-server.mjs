#!/usr/bin/env node
/**
 * preview-server.mjs
 * Levanta un servidor local para previsualizar el modal de una semana.
 * Uso: npm run preview-week 2026-W19
 */

import http from 'http'
import { existsSync, readFileSync, createReadStream, statSync } from 'fs'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const WEEKLY_DIR = join(ROOT, 'public', 'weekly-content')
const PORT = 3001

const R = '\x1b[0m'
const B = '\x1b[1m'
const GREEN = '\x1b[32m'
const BLUE = '\x1b[34m'
const CYAN = '\x1b[36m'
const RED = '\x1b[31m'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.mp4':  'video/mp4',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
}

function escape(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildHtml(meta, weekStr) {
  const gifUrl = `/assets/${meta.gifFileName}`
  const ctaHref = escape(meta.ctaLink ?? meta.linkTo ?? '/')
  const ctaText = escape(meta.ctaText ?? 'Ver más')
  const title = escape(meta.title)
  const desc = escape(meta.description)

  const themeColor = meta.theme === 'pink' ? '#D5247A'
    : meta.theme === 'navy' ? '#003257'
    : '#4272BB'

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Preview · ${weekStr}</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f3f4f6;min-height:100vh;display:flex;flex-direction:column}
/* Toolbar */
.tb{background:#003257;color:#fff;padding:10px 20px;display:flex;align-items:center;gap:12px;font-size:13px;flex-wrap:wrap}
.tb strong{font-size:15px}
.badge{background:${themeColor};padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600}
.tb-right{margin-left:auto;display:flex;gap:8px;align-items:center}
select,button.tbtn{padding:5px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-size:12px;cursor:pointer}
button.tbtn:hover,select:hover{background:rgba(255,255,255,.1)}
select option{color:#000}
/* Stage */
.stage{flex:1;display:flex;align-items:center;justify-content:center;padding:40px 20px;background:#e5e7eb;transition:background .2s}
.stage.dark{background:#1f2937}
/* Overlay */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px;z-index:10}
/* Modal */
.modal{background:#fff;border-radius:18px;box-shadow:0 25px 60px rgba(0,0,0,.25);width:100%;max-width:480px;padding:28px;position:relative;transition:max-width .2s,padding .2s}
.modal.mobile{max-width:350px;padding:20px}
.close{position:absolute;top:14px;right:14px;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:18px;line-height:1;padding:4px 6px;border-radius:50%}
.close:hover{color:#D5247A}
.modal-title{font-size:22px;font-weight:700;color:#003257;margin-bottom:8px;padding-right:24px;line-height:1.3}
.modal-desc{font-size:14px;color:#6b7280;margin-bottom:18px;line-height:1.55}
.gif-wrap{aspect-ratio:16/9;border-radius:10px;overflow:hidden;margin-bottom:18px;background:#f3f4f6}
.gif-wrap img,.gif-wrap video{width:100%;height:100%;object-fit:cover}
.cta{display:block;width:100%;background:${themeColor};color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;text-align:center;text-decoration:none;transition:opacity .15s}
.cta:hover{opacity:.88}
/* Info bar */
.info{background:#fff;border-top:1px solid #e5e7eb;padding:10px 20px;font-size:11px;color:#6b7280;display:flex;gap:20px;flex-wrap:wrap}
.info span{display:flex;align-items:center;gap:5px}
.dot{width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0}
/* Char counts */
.warn{color:#f59e0b}
</style>
</head>
<body>
<div class="tb">
  <strong>📅 Preview Semanal</strong>
  <span class="badge">${weekStr}</span>
  <div class="tb-right">
    <select id="sizeSelect" onchange="setSize(this.value)">
      <option value="desktop">Desktop (480px)</option>
      <option value="mobile">Mobile (350px)</option>
    </select>
    <button class="tbtn" onclick="resetModal()">↺ Reabrir modal</button>
    <button class="tbtn" onclick="clearSeen()">🗑 Limpiar localStorage</button>
  </div>
</div>

<div class="stage" id="stage">
  <div class="overlay" id="overlay" onclick="closeIfOutside(event)">
    <div class="modal" id="modal">
      <button class="close" onclick="closeModal()" aria-label="Cerrar">✕</button>
      <h2 class="modal-title">${title}</h2>
      <p class="modal-desc">${desc}</p>
      <div class="gif-wrap">
        ${meta.gifFileName?.endsWith('.mp4')
          ? `<video src="${gifUrl}" autoplay loop muted playsinline></video>`
          : `<img src="${gifUrl}" alt="${title}" />`
        }
      </div>
      <a class="cta" href="${ctaHref}" target="_blank">${ctaText}</a>
    </div>
  </div>
</div>

<div class="info">
  <span><span class="dot"></span> Modal activo</span>
  <span>🔗 CTA → ${ctaHref}</span>
  <span>🎞 ${escape(meta.gifFileName)}</span>
  <span class="${meta.title?.length > 50 ? 'warn' : ''}">📝 título: ${meta.title?.length ?? 0} chars${meta.title?.length > 50 ? ' ⚠️' : ''}</span>
  <span class="${meta.description?.length > 150 ? 'warn' : ''}">descripción: ${meta.description?.length ?? 0} chars${meta.description?.length > 150 ? ' ⚠️' : ''}</span>
</div>

<script>
  function setSize(v) {
    document.getElementById('modal').classList.toggle('mobile', v === 'mobile')
  }
  function closeModal() {
    document.getElementById('overlay').style.display = 'none'
  }
  function closeIfOutside(e) {
    if (e.target === e.currentTarget) closeModal()
  }
  function resetModal() {
    document.getElementById('overlay').style.display = 'flex'
  }
  function clearSeen() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('weeklyModal_'))
    keys.forEach(k => localStorage.removeItem(k))
    alert('Caché limpiado (' + keys.length + ' entradas). El modal aparecerá de nuevo en el sitio real.')
  }
</script>
</body>
</html>`
}

// ── Request handler ───────────────────────────────────────────────────────────
function handler(weekStr, meta) {
  const weekDir = join(WEEKLY_DIR, weekStr)

  return (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`)
    const path = url.pathname

    // Serve the preview HTML at root
    if (path === '/' || path === '/index.html') {
      const html = buildHtml(meta, weekStr)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(html)
      return
    }

    // Serve GIF/assets from the week directory
    if (path.startsWith('/assets/')) {
      const filename = path.replace('/assets/', '')
      const filePath = join(weekDir, filename)
      if (!existsSync(filePath)) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const ext = extname(filePath).toLowerCase()
      const mime = MIME[ext] ?? 'application/octet-stream'
      const stat = statSync(filePath)
      res.writeHead(200, { 'Content-Type': mime, 'Content-Length': stat.size })
      createReadStream(filePath).pipe(res)
      return
    }

    res.writeHead(404)
    res.end('Not found')
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
const weekArg = process.argv[2]

if (!weekArg || !/^\d{4}-W\d{2}$/.test(weekArg)) {
  console.error(`\n${RED}Uso: npm run preview-week <YYYY-WNN>${R}\n`)
  process.exit(1)
}

const metaPath = join(WEEKLY_DIR, weekArg, 'metadata.json')
if (!existsSync(metaPath)) {
  console.error(`\n${RED}No se encontró metadata.json para ${weekArg}${R}`)
  console.error(`Ejecutá primero: npm run create-week\n`)
  process.exit(1)
}

let meta
try {
  meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
} catch (e) {
  console.error(`\n${RED}metadata.json inválido: ${e.message}${R}\n`)
  process.exit(1)
}

const server = http.createServer(handler(weekArg, meta))
server.listen(PORT, () => {
  console.log(`\n${B}${BLUE}👁  Preview: ${weekArg}${R}`)
  console.log(`${GREEN}✅ Servidor en: ${CYAN}http://localhost:${PORT}${R}`)
  console.log(`\n${R}Ctrl+C para detener\n`)
})
