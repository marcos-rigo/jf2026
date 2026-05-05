# Temáticas de Ciudadanía Digital — Referencia Completa

Guía de referencia para gestionar las 4 temáticas del módulo **Kit de Acción del Ciudadano Digital**.

---

## Estado actual (al 05/05/2026)

| # | Temática | Ruta del sitio | Semana ISO | GIF modal | Estado |
|---|----------|---------------|------------|-----------|--------|
| 1 | Ciudadanía Digital | `/ciudadania-digital` | **2026-W19** (11 may) | `ciudadaniaDigital.gif` | ✅ Live |
| 2 | Alfabetización Mediática | `/alfabetizacion-mediatica` | **2026-W20** (18 may) | `alfMedInfGif.gif` | ✅ Listo |
| 3 | Huella Digital | `/huella-digital` | **2026-W21** (25 may) | `huellaDigGif.gif` | ✅ Listo |
| 4 | Violencia Digital | `/violencia-digital` | **2026-W22** (1 jun) | `violDigGif.gif` | ✅ Listo |

> Las semanas ISO arrancan el **lunes**. El modal aparece automáticamente para cada visitante la semana asignada.

---

## Archivos de cada temática

### Temática 1 — Ciudadanía Digital

```
Página:       app/ciudadania-digital/
Modal:        public/weekly-content/2026-W19/
  ├── metadata.json       ← título, descripción, CTA, link
  └── ciudadaniaDigital.gif
Banner:       public/weekly-content/2026-W19/infografiaSemanal.svg
```

### Temática 2 — Alfabetización Mediática e Informacional

```
Página:       app/alfabetizacion-mediatica/
Modal:        public/weekly-content/2026-W20/
  ├── metadata.json
  └── alfMedInfGif.gif
Banner:       public/weekly-content/2026-W20/infogAlfMeInf.png
```

### Temática 3 — Huella Digital

```
Página:       app/huella-digital/
Modal:        public/weekly-content/2026-W21/
  ├── metadata.json
  └── huellaDigGif.gif
Banner:       public/weekly-content/2026-W21/infHueDig.png
```

### Temática 4 — Violencia Digital

```
Página:       app/violencia-digital/
Modal:        public/weekly-content/2026-W22/
  ├── metadata.json
  └── violDigGif.gif
Banner:       public/weekly-content/2026-W22/infViolDig.png
```

---

## Qué controla cada archivo

### `metadata.json` — solo afecta el modal emergente

```json
{
  "title": "Texto grande del modal",
  "description": "Subtítulo del modal (≤ 150 caracteres)",
  "ctaText": "Texto del botón",
  "ctaLink": "/ruta-de-la-pagina",
  "gifFileName": "nombre.gif",
  "theme": "blue"           ← color del botón: blue | pink | navy
}
```

### Páginas (`app/[ruta]/`)

Cada temática tiene dos archivos:
- `page.tsx` — metadatos SEO (título, descripción para Google)
- `[nombre]-content.tsx` — todo el contenido visual e interactivo

---

## Cómo modificar el texto del modal

1. Abrí `public/weekly-content/YYYY-WNN/metadata.json`
2. Editá los campos que necesitás
3. Guardá y hacé commit

```bash
git add public/weekly-content/2026-W20/metadata.json
git commit -m "fix: actualizar texto modal W20 - Alfabetización"
git push
```

Los cambios se ven en producción inmediatamente después del deploy.

---

## Cómo cambiar el GIF del modal

1. Copiá el nuevo archivo a `public/weekly-content/YYYY-WNN/`
2. En `metadata.json`, actualizá `"gifFileName"` con el nuevo nombre
3. Validá: `npm run validate-week 2026-WNN`
4. Commit y push

---

## Cómo modificar el contenido de una página

Abrí el archivo `*-content.tsx` correspondiente:

| Temática | Archivo a editar |
|----------|-----------------|
| Ciudadanía Digital | `app/ciudadania-digital/ciudadania-digital-content.tsx` + `components/ciudadania-digital/` |
| Alfabetización Mediática | `app/alfabetizacion-mediatica/alfabetizacion-mediatica-content.tsx` |
| Huella Digital | `app/huella-digital/huella-digital-content.tsx` |
| Violencia Digital | `app/violencia-digital/violencia-digital-content.tsx` |

El contenido (textos, listas, pasos) está definido como arrays de datos al principio del archivo. Por ejemplo, en Huella Digital:

```ts
// Buscá estas constantes al principio del archivo y editá ahí:
const STEPS = [ ... ]
const ERRORS = [ ... ]
const NEXT_STEPS = [ ... ]
```

---

## Cómo agregar una nueva temática

### Paso 1 — Crear el modal

```bash
npm run create-week
# El script te guía interactivamente
```

### Paso 2 — Pegar el GIF

```
public/weekly-content/YYYY-WNN/tu-gif.gif
```

### Paso 3 — Crear la página

Copiá como base el archivo más parecido a tu nueva temática:

```bash
# Ejemplo: nueva temática "Identidad Digital"
# Copiar estructura de huella-digital (la más simple)
```

Creá:
- `app/identidad-digital/page.tsx`
- `app/identidad-digital/identidad-digital-content.tsx`

### Paso 4 — Conectar modal con página

En `metadata.json` de la nueva semana:
```json
"ctaLink": "/identidad-digital"
```

### Paso 5 — Validar y publicar

```bash
npm run validate-week 2026-WNN
npm run preview-week 2026-WNN   # ver el modal antes de subir
git add public/weekly-content/YYYY-WNN
git add app/nueva-tematica
git commit -m "feat: nueva temática - Identidad Digital (YYYY-WNN)"
git push
```

---

## Previsualizar los modales ahora mismo

Para ver el modal de cualquier semana sin esperar a que llegue esa fecha:

```bash
npm run preview-week 2026-W20   # Alfabetización Mediática
npm run preview-week 2026-W21   # Huella Digital
npm run preview-week 2026-W22   # Violencia Digital
```

Se abre en `http://localhost:3001`.

Para forzar que aparezca en el sitio real (sin esperar):
1. Abrí el sitio en el navegador
2. DevTools → Application → Local Storage
3. Borrá la clave `weeklyModal_2026-WNN` de la semana que querés probar
4. Recargá la página → el modal aparece

---

## Cronograma de publicación 2026

| Semana | Fechas | Temática | Modal activo |
|--------|--------|----------|-------------|
| W19 | 11 – 17 may | Ciudadanía Digital | Sí (ya pasó) |
| W20 | 18 – 24 may | Alfabetización Mediática | Próxima |
| W21 | 25 – 31 may | Huella Digital | En 2 semanas |
| W22 | 1 – 7 jun | Violencia Digital | En 3 semanas |

> **No necesitás hacer nada para activar cada semana.** El sistema detecta automáticamente la semana ISO del navegador y muestra el modal correspondiente si existe el archivo.

---

## Validar todo de una vez

```bash
npm run validate-all
```

Revisa las 4 semanas y reporta errores o advertencias en cada una.
