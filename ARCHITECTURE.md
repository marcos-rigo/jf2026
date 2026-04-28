# Arquitectura — José Farhat v2 · Ciudadanía Presente

> Documento generado: 2026-04-28  
> Plataforma: sitio web personal/político de **José Farhat**, Secretario de Participación Ciudadana, Tucumán, Argentina.

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.4 |
| Lenguaje | TypeScript | 5.7.3 |
| Estilos | Tailwind CSS v4 + PostCSS | 4.2.0 |
| Animaciones | Framer Motion | 12.38.0 |
| Componentes UI | shadcn/ui (Radix UI) | varios |
| Base de datos | Firebase Firestore | 12.11.0 |
| Email | EmailJS | 4.4.1 |
| Noticias | GNews API / NewsAPI | — |
| IA (scripts) | Anthropic Claude API (SDK) | 0.50.0 |
| Analytics | Vercel Analytics | 1.6.1 |
| Deploy | Vercel | — |
| Fuentes | DM Sans + Plus Jakarta Sans (Google Fonts) | — |

---

## Estructura de directorios

```
josefarhat.v2/
├── app/                          ← Next.js App Router
│   ├── layout.tsx                ← Root layout: fuentes, metadata, Analytics
│   ├── globals.css               ← Tailwind v4, CSS variables, tokens de marca
│   ├── page.tsx                  ← Home (server component + secciones client)
│   ├── blog/
│   │   ├── page.tsx              ← Metadata
│   │   └── blog-content.tsx      ← Client: listado de artículos
│   ├── contacto/
│   │   ├── page.tsx
│   │   └── contact-content.tsx   ← Client: formulario de contacto completo
│   ├── conoceme/
│   │   ├── page.tsx
│   │   └── about-content.tsx     ← Client: bio, stats, filosofía
│   ├── multimedia/
│   │   ├── page.tsx
│   │   └── multimedia-content.tsx← Client: grilla de videos y podcasts
│   ├── novedades/
│   │   ├── page.tsx
│   │   └── news-content.tsx      ← Client: listado de noticias
│   ├── caja-de-herramientas/
│   │   ├── page.tsx
│   │   └── toolbox-content.tsx   ← Client: 6 tarjetas de recursos
│   └── temas/
│       ├── page.tsx              ← Listado de temas (client, hardcoded)
│       └── [id]/
│           ├── page.tsx          ← Template de tema dinámico
│           └── topic-content.tsx ← Client: detalle del tema
├── components/
│   ├── navbar.tsx                ← Header fijo, dropdowns, mobile menu
│   ├── hero.tsx                  ← Hero con video de fondo
│   ├── footer.tsx                ← Links + newsletter Google Forms
│   ├── floating-elements.tsx     ← Decoración animada
│   ├── placeholder-image.tsx
│   ├── podcast-section.tsx
│   ├── theme-provider.tsx
│   ├── sections/                 ← Secciones del Home
│   │   ├── current-topics-server.tsx    ← Server: fetch GNews/NewsAPI (ISR 3d)
│   │   ├── current-topics-section.tsx   ← Client: cards de noticias live
│   │   ├── news-section.tsx             ← Client: noticias destacadas
│   │   ├── local-news-section.tsx       ← Client: noticias locales
│   │   ├── multimedia-section.tsx       ← Client: videos/podcasts
│   │   ├── pillars-section.tsx          ← Client: 6 pilares temáticos
│   │   ├── podcast-section.tsx
│   │   ├── quick-contact-section.tsx    ← Client: form → Firebase + EmailJS
│   │   ├── testimonials-section.tsx     ← Client: 2 testimonios
│   │   └── toolbox-section.tsx          ← Client: recursos/herramientas
│   └── ui/                       ← shadcn/ui primitives (no editar)
├── hooks/
│   ├── use-mobile.ts             ← Detección de breakpoint md/lg
│   └── use-toast.ts              ← Toast notifications (Sonner)
├── lib/
│   └── utils.ts                  ← Solo cn() = clsx + tailwind-merge
├── public/
│   ├── data/
│   │   └── current-topics.json   ← Backup JSON de noticias fetched
│   ├── img/                      ← Imágenes organizadas por sección
│   │   ├── articulos/
│   │   ├── caja-herramientas/
│   │   ├── carrusel/
│   │   ├── noti/                 ← Imágenes de noticias
│   │   ├── jose-farhat.jpg
│   │   ├── marcaJF.svg           ← Logo color
│   │   └── marcaJFb.svg          ← Logo blanco
│   └── vid/
│       └── vid.mp4               ← Video del hero
├── scripts/
│   ├── update-topics.ts          ← Script: fetch noticias con Claude API
│   └── README.md
├── .github/
│   └── workflows/                ← CI/CD (Vercel)
├── CLAUDE.md                     ← Guía para Claude Code
├── ARCHITECTURE.md               ← Este archivo
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── components.json               ← Config shadcn/ui
└── .env.example
```

---

## Páginas y rutas

| Ruta | Propósito | Renderizado |
|------|-----------|-------------|
| `/` | Home landing: hero + 10 secciones | SSR/ISR híbrido |
| `/conoceme` | Biografía, estadísticas, filosofía | SSR + Client animations |
| `/blog` | Listado de artículos (3 hardcoded) | SSR + Client |
| `/novedades` | Novedades y noticias (8 hardcoded) | SSR + Client |
| `/multimedia` | Videos y podcasts | SSR + Client |
| `/temas` | Listado de temas actuales | Client-only |
| `/temas/[id]` | Detalle de tema dinámico | Client-only (template) |
| `/caja-de-herramientas` | Recursos y herramientas (6 cards) | SSR + Client |
| `/contacto` | Formulario de contacto completo | SSR + Client |

**Patrón por ruta:**
- `page.tsx` → Server Component, exporta `metadata` de Next.js
- `*-content.tsx` → Client Component (`"use client"`), maneja animaciones e interactividad

---

## Composición del Home (`app/page.tsx`)

```tsx
<Navbar />
<Hero />                     // Video de fondo, título animado
<CurrentTopicsServer />      // Noticias live (ISR 3 días)
<PillarsSection />           // 6 pilares temáticos
<ToolboxSection />           // Herramientas y recursos
<PodcastSection />           // Contenido podcast
<NewsSection />              // Novedades destacadas
<LocalNewsSection />         // Noticias locales
<MultimediaSection />        // Videos/podcasts
<TestimonialsSection />      // 2 testimonios
<QuickContactSection />      // Form → Firebase + EmailJS
<Footer />
<FloatingElements />         // Decoración animada
```

---

## Tokens de marca y sistema de diseño

### Colores (`app/globals.css`)

| Token Tailwind | Variable CSS | Valor HEX | Uso |
|---------------|-------------|-----------|-----|
| `brand-blue` | `--brand-blue` | `#4272BB` | Acciones primarias, hovers |
| `brand-pink` | `--brand-pink` | `#D5247A` | Acentos, CTAs secundarios |
| `brand-navy` | `--brand-navy` | `#003257` | Headers, texto principal |
| `brand-dark` | `--brand-dark` | `#001228` | Fondos modo oscuro |
| `brand-light-blue` | `--brand-light-blue` | `#EEF4FB` | Fondos claros, cards |

### Modo claro (`:root`)
```css
--background: #ffffff
--foreground: #003257        /* navy */
--primary: #4272BB           /* brand-blue */
--accent: #D5247A            /* brand-pink */
--secondary: #EEF4FB         /* light-blue */
--radius: 0.75rem            /* 12px */
```

### Modo oscuro (`.dark`)
```css
--background: #001228        /* brand-dark */
--foreground: #ffffff
--card: #001e3c
--secondary: #002444
```

### Tipografía
- `font-sans` → **DM Sans** (cuerpo, UI)
- `font-display` → **Plus Jakarta Sans** (títulos, headings)
- Cargadas con `next/font/google` en `layout.tsx`

### Animaciones (Framer Motion)
- Entrada: fade, slide, scale con `initial` / `animate`
- Scroll: `whileInView` + `viewport={{ once: true }}`
- Hover: scale, color transitions
- Menú mobile: AnimatePresence + slide down

### Layout
- Contenedor: `max-w-7xl mx-auto px-4 lg:px-8`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Breakpoints Tailwind: `sm` / `md` / `lg` / `xl`

---

## Integraciones externas

### Firebase Firestore
- **Uso:** Guardar envíos del formulario de contacto (`QuickContactSection`)
- **Colección:** `contactos`
- **Campos:** `name`, `lastName`, `email`, `phone`, `message`, `creadoEn`
- **Carga:** lazy-import para no inflar el bundle
- **Variables de entorno:** `NEXT_PUBLIC_FIREBASE_*`

### EmailJS
- **Uso:** Enviar email al recibir formulario de contacto
- **Template:** `template_72zh3ni` | **Service:** `service_eg1x7l6`
- **Carga:** lazy-import
- **Variables:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### GNews API / NewsAPI
- **Uso:** Noticias live en `CurrentTopicsServer` (ISR 3 días)
- **Estrategia geográfica:** Tucumán → Argentina → LatAm → Global (waterfall)
- **Fallback:** array `FALLBACK_TOPICS` hardcoded + `public/data/current-topics.json`
- **Variables:** `NEWS_API_KEY`, `NEWS_API_PROVIDER` (`"gnews"` o `"newsapi"`)

### Anthropic Claude API (scripts)
- **Uso:** `scripts/update-topics.ts` — corre `claude-sonnet-4-6` con `web_search`
- **Función:** Busca 3 noticias relevantes, valida esquema TypeScript, parchea `current-topics-server.tsx`
- **Comando:** `npm run update-topics`
- **Variable:** `ANTHROPIC_API_KEY`

### Vercel Analytics
- `<Analytics />` en `app/layout.tsx`
- Tracking automático de page views

### Google Forms (Newsletter)
- Footer → formulario de suscripción
- Webhook: `https://script.google.com/macros/s/AKfycbz.../exec`

---

## Variables de entorno

```env
# Firebase (públicas — NEXT_PUBLIC_*)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# EmailJS (públicas — NEXT_PUBLIC_*)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# News APIs (server-only)
NEWS_API_KEY=
NEWS_API_PROVIDER=gnews       # "gnews" | "newsapi"

# Anthropic (scripts only)
ANTHROPIC_API_KEY=
```

---

## Dependencias principales

### Producción
| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `next` | 16.1.6 | Framework |
| `react` / `react-dom` | 19.2.4 | UI |
| `framer-motion` | 12.38.0 | Animaciones |
| `firebase` | 12.11.0 | Firestore |
| `@emailjs/browser` | 4.4.1 | Envío de emails |
| `@vercel/analytics` | 1.6.1 | Analytics |
| `lucide-react` | 0.564.0 | Iconos (900+) |
| `tailwind-merge` + `clsx` | — | Utilidades CSS |
| `react-hook-form` | 7.54.1 | Manejo de formularios |
| `zod` | 3.24.1 | Validación de esquemas |
| `next-themes` | 0.4.6 | Dark/light mode |
| `sonner` | 1.7.1 | Toast notifications |
| `recharts` | 2.15.0 | Gráficos |
| `embla-carousel-react` | 8.6.0 | Carrusel |
| `date-fns` | 4.1.0 | Manejo de fechas |
| `@radix-ui/react-*` | varios | 30+ primitivos UI |

### Desarrollo
| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `typescript` | 5.7.3 | Tipos |
| `tailwindcss` | 4.2.0 | Estilos |
| `@anthropic-ai/sdk` | 0.50.0 | Script de noticias |
| `tsx` | 4.19.0 | Ejecutar scripts TS |
| `dotenv` | 17.4.2 | Variables de entorno en scripts |

---

## Patrones de datos

Todo el contenido está **hardcodeado como arrays tipados** en los componentes. Hay comentarios indicando migración futura a CMS/API.

| Sección | Ubicación | Estado |
|---------|-----------|--------|
| Noticias actuales | `current-topics-server.tsx` (`FALLBACK_TOPICS`) | Live via API + fallback |
| Novedades | `news-section.tsx` + `news-content.tsx` | Hardcoded |
| Artículos blog | `blog-content.tsx` | Hardcoded (3 posts) |
| Testimonios | `testimonials-section.tsx` | Hardcoded (2) |
| Pilares | `pillars-section.tsx` | Hardcoded (6) |
| Recursos toolbox | `toolbox-content.tsx` | Hardcoded (6) |
| Multimedia | `multimedia-content.tsx` | Hardcoded |
| Temas | `temas/page.tsx` | Hardcoded |

Para agregar contenido: definir un array tipado al inicio del componente y mapear en el JSX.

---

## Configuración de Next.js (`next.config.mjs`)

```js
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,    // Build pasa aunque haya errores TS
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "josefarhat.com", pathname: "/**" }
    ],
  },
}
```

- Para imágenes externas adicionales: agregar entradas a `remotePatterns`
- Para verificar tipos: `npx tsc --noEmit`

---

## Configuración shadcn/ui (`components.json`)

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": { "baseColor": "neutral", "cssVariables": true },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "hooks": "@/hooks"
  }
}
```

Los componentes en `components/ui/` son generados por shadcn — evitar editar directamente; usar `npx shadcn add <component>` para agregar nuevos.

---

## Notas de desarrollo

### Regla de componentes client vs server
- Todo componente con animaciones, estado, o eventos → `"use client"` al tope
- `page.tsx` de cada ruta → server component (solo metadata + importar el `*-content.tsx`)
- `CurrentTopicsServer` es la única excepción: server component que fetcha datos

### Archivos con typos conocidos
- `app/page..tsx` — doble punto (coexiste con `app/page.tsx`)
- `app/temas/[id]/]/page.tsx` — corchete extra en el nombre de carpeta
- Verificar cuál está activo antes de editar

### Imágenes
- Locales: `/public/img/` → referenciar como `/img/nombre.jpg`
- Remotas: solo `josefarhat.com` está permitido por defecto
- Siempre usar `next/image` (`<Image>`) para optimización automática

### Performance
- Firebase y EmailJS se importan con `import()` dinámico (lazy) para no inflar el bundle inicial
- ISR en `CurrentTopicsServer`: `revalidate = 259200` (3 días)
- Fuentes precargadas con `next/font`

### Comandos útiles
```bash
npm run dev              # Dev server en localhost:3000
npm run build            # Build de producción (ignora errores TS)
npx tsc --noEmit         # Verificar tipos explícitamente
npm run lint             # ESLint
npm run update-topics    # Actualizar noticias via Claude API
```
