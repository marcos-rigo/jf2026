# Sistema de Contenido Semanal

El modal semanal aparece **una vez por semana ISO** en la home del sitio. El contenido se gestiona con archivos estáticos en `public/weekly-content/`.

---

## Flujo rápido (2 minutos)

```bash
npm run create-week          # 1. Crear estructura + metadata.json interactivamente
# → Copiar el GIF a la carpeta creada
npm run validate-week YYYY-WNN   # 2. Validar
npm run preview-week YYYY-WNN    # 3. Preview visual (opcional)
git add public/weekly-content/YYYY-WNN
git commit -m "feat: contenido semanal YYYY-WNN - Tema"
```

---

## Estructura de carpetas

```
public/weekly-content/
├── manifest.json            ← Lista de semanas disponibles (auto-gestionado)
├── 2026-W19/
│   ├── metadata.json
│   └── promo.gif
├── 2026-W20/
│   ├── metadata.json
│   └── promo.gif
└── archive/                 ← Semanas pasadas (generado por npm run archive-old)
    └── 2026-W18/
        ├── metadata.json
        └── promo.gif
```

---

## metadata.json

```json
{
  "title": "Título del modal",
  "description": "Descripción breve del contenido.",
  "ctaText": "Ver más",
  "ctaLink": "/ciudadania-digital",
  "gifFileName": "promo.gif",
  "theme": "blue",
  "createdAt": "2026-05-05T10:00:00Z"
}
```

### Campos

| Campo | Requerido | Descripción |
|-------|-----------|-------------|
| `title` | ✅ | Título del modal. Recomendado ≤ 50 chars. |
| `description` | ✅ | Texto bajo el título. Recomendado ≤ 150 chars. |
| `ctaText` | ✅ | Texto del botón. |
| `ctaLink` | ✅ | Ruta relativa (`/ruta`) o URL completa (`https://...`). |
| `gifFileName` | ✅ | Nombre del archivo visual (`.gif`, `.webp`, `.mp4`). |
| `theme` | — | Color del botón CTA: `blue` (default), `pink`, `navy`. |
| `createdAt` | — | ISO timestamp — lo genera `create-week` automáticamente. |
| `author` | — | Quién creó el contenido. |
| `expiresAt` | — | ISO date — el validador avisa si ya expiró. |
| `priority` | — | `high`, `normal`, `low` (para uso futuro). |
| `targetAudience` | — | Array de tags (para uso futuro). |

---

## Semanas ISO

El sistema usa **semanas ISO 8601**: comienzan el lunes, y la semana 1 es la que contiene el primer jueves del año.

Para ver qué semana es hoy:
```bash
node -e "
  const d = new Date(), t = new Date(d);
  t.setDate(d.getDate() + (4 - (d.getDay()||7)));
  const y = new Date(t.getFullYear(),0,1);
  const w = Math.ceil(((t-y)/864e5+1)/7);
  console.log(t.getFullYear()+'-W'+String(w).padStart(2,'0'));
"
```

---

## Scripts disponibles

```bash
npm run create-week                  # Crear nueva semana interactivamente
npm run validate-week 2026-W19       # Validar semana específica
npm run validate-all                 # Validar todas las semanas del manifest
npm run preview-week 2026-W19        # Preview visual en http://localhost:3001
npm run archive-old                  # Mover semanas pasadas a /archive
npm run archive-old -- --dry-run     # Ver qué archivaría sin moverlo
```

---

## Mejores prácticas

**GIF/visual**
- Usá `.webp` si es posible (mejor compresión que `.gif`).
- Para animaciones largas o de alta calidad, `.mp4` pesa mucho menos que `.gif`.
- Objetivo: < 3 MB. Máximo aceptable: 5 MB. Error de validación: > 10 MB.
- El contenedor tiene aspect-ratio 16:9 — diseñá el visual con esa proporción.

**Texto**
- Título ≤ 50 chars para que no se corte en mobile.
- Descripción ≤ 150 chars — el modal no tiene scroll.
- CTA accionable: "Ver Iniciativas" > "Clic aquí".

**Timing**
- Creá el contenido de la próxima semana con al menos **2 días de anticipación**.
- El modal usa la semana ISO del navegador del usuario — se activa el lunes.
- Si la carpeta de esa semana no existe en `public/`, el modal simplemente no aparece (silencioso).

---

## Cómo funciona internamente

1. `WeeklyModalLoader` importa `WeeklyModal` con `dynamic({ ssr: false })`.
2. Al montar, `WeeklyModal` calcula la semana ISO actual y verifica `localStorage`.
3. Si no fue visto, hace `fetch('/weekly-content/YYYY-WNN/metadata.json')`.
4. Si el fetch devuelve 200, muestra el modal. Si falla (semana sin contenido), no hace nada.
5. Al cerrar, guarda `weeklyModal_YYYY-WNN=seen` en `localStorage`.

---

## Troubleshooting

**El modal no aparece en el sitio**
- Verificá que la semana correcta exista en `public/weekly-content/`.
- Abrí DevTools → Application → Local Storage → buscá `weeklyModal_` y eliminá la entrada de esta semana.
- Revisá la consola por errores de fetch.

**El GIF no carga en el preview**
- Verificá que el `gifFileName` en `metadata.json` coincida exactamente con el nombre del archivo (mayúsculas/minúsculas incluidas).
- En Windows, los nombres de archivo son case-insensitive localmente pero case-sensitive en el servidor de producción.

**`npm run create-week` no termina**
- Asegurate de responder cada pregunta y presionar Enter.
- En Windows, si usás PowerShell, funciona igual que en bash.

**El modal muestra contenido de la semana anterior**
- `localStorage` guarda el estado por semana. Si cambiaste de semana, el nuevo contenido debería cargar automáticamente.
- Si querés forzar la reaparición: DevTools → Application → Local Storage → eliminá la clave.
