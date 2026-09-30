# Inventario estructural — Temáticas (Ciudadanía Presente)

Mapa estructural de los 6 grupos y 16 temáticas definidos en `lib/tematicas-data.ts`. Solo lectura — sin análisis de contenido en profundidad.

Patrones de audiencia detectados (4, no 2 — ver nota al final):

- **Group A** — `AudienciaTexto` + `resolveTexto()` (`lib/audiencia-texto.ts`): reescritura completa por audiencia (5 valores posibles), con fallback explícito.
- **Group B** — `AudienciaNotas` + `<NotaAudiencia>` (`components/nota-audiencia.tsx`): nota opcional bolteada, sin fallback, se renderiza vacío si no hay nota para la audiencia activa.
- **Bespoke binario (familias/no-familias)** — ternarios `audienciaActual === 'familias' ? … : …` contra campos ad-hoc del propio `lib/*.ts` (`notaFamilias`/`notaDocente`, `introFamilias`, `paragraphsFamilias`, etc.), sin pasar por `resolveTexto` ni `NotaAudiencia`. Solo distingue familias vs. todo lo demás, no las 5 audiencias.
- **`pickFamilias` binario** (`lib/alfabetizacion-mediatica-content.ts`): mismo binario familias/no-familias que el anterior pero centralizado en un helper propio del archivo, no en `lib/audiencia-texto.ts`.
- **Ninguno**: sin lógica de audiencia detectada en el componente.

---

## 1. Ciudadanía Digital (`#4272BB`)

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `ciudadania-digital` | `ciudadania-digital-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto` en las secciones (`components/ciudadania-digital/hero-section.tsx`, `paso1/2/3-section.tsx`, `herramientas-section.tsx`, `aula-section.tsx`), no en el content file top-level | `docentes`, `familias` |
| `huella-digital` | `huella-digital-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto` en secciones (`hero-section.tsx`, `riesgos-section.tsx`, `ejemplos-section.tsx`, `recursos-section.tsx`, `aula-section.tsx`, `toc-nav.tsx`) | `familias`, `docentes` |
| `hiperconectividad-digital` | `hiperconectividad-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto` directo en el content file (no delegado a subcomponentes) | `docentes`, `familias` |

## 2. Alfabetización (`#0EA5E9`)

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `alfabetizacion-digital` | `alfabetizacion-digital-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto` en `components/alfabetizacion-digital/aula-section.tsx` y `ejemplos-section.tsx` | `docentes`, `familias` |
| `alfabetizacion-mediatica` | `alfabetizacion-mediatica-content.tsx` (two-file pattern) | propio | **`pickFamilias` binario** — helper propio de `lib/alfabetizacion-mediatica-content.ts`, usado en las 6 secciones (`hero`, `ejemplos`, `tipos-variantes`, `ventajas`, `recursos`, `aula`). El archivo define un tipo `AudienciaTexto` pero **no** llama `resolveTexto` — no es Group A real pese a compartir el tipo. | `docentes`, `familias` |
| `ia-etica-ciudadania` | `IaEticaCiudadaniaContent` (`components/ia-etica-ciudadania-content.tsx`), `page.tsx` sin content file propio en `app/` | propio | **Group A** — `resolveTexto` directo en el componente | `docentes`, `familias` |

## 3. Seguridad (`#F59E0B`)

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `estafas-digitales` | `estafas-digitales-content.tsx` (two-file pattern) | propio | **Mixto: Group A + Group B** — `resolveTexto`/`AudienciaTexto` importados y usados directo en el content file, **y además** `AULA_ROL` en `lib/estafas-digitales-content.ts` expone `notaDocente`/`notaFamilias` consumidos vía `<NotaAudiencia>` (Group B). Es el único caso con ambos patrones a la vez. | `docentes`, `familias` |

## 4. Violencia Digital (`#FF6B35`)

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `violencia-digital` | `violencia-digital-content.tsx` (two-file pattern) | propio | **Bespoke binario** — ternarios inline (`audienciaActual === "familias" ? MAGNITUD_ARGENTINA.notaFamilias : MAGNITUD_ARGENTINA.notaDocente`, `FAQ3_AMPLIACION_FAMILIAS`) contra campos de `lib/violencia-digital-content.ts`. **No** usa `<NotaAudiencia>` ni `resolveTexto` pese a que `lib/violencia-digital-content.ts` tiene campos con nombres `notaDocente`/`notaFamilias` (mismo naming que `AudienciaNotas` pero consumidos a mano, no vía el componente compartido). | `mujeres`, `docentes`, `familias` |
| `violencia-digital-infancias` | `violencia-infancias-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto`/`AudienciaTexto` (`lib/violencia-digital-infancias-content.ts` confirmado como Group A) | `docentes`, `familias` |

## 5. Libres bajo influencia (`#9333EA`)

Datos compartidos en `lib/libres-bajo-influencia-data.ts` (`getLibresSubtopicBySlug`); estado/quiz compartido vía `lib/hooks/use-libres-subtopic.ts`. `components/tematicas/LibresBajoInfluenciaTemplate.tsx` existe pero es código muerto — ningún route lo importa.

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `subculturas-digitales` | `SubculturasDigitalesPage.tsx` | **componente propio** (standalone, no usa el template compartido) | **Bespoke binario** — campos `introFamilias`/`paragraphsFamilias`/`headingFamilias`/`quoteFamilias` en `lib/libres-bajo-influencia-data.ts`, resueltos con ternario `audienciaActual === 'familias' && data.X ? data.X : data.default` inline en el JSX | `docentes`, `familias` |
| `algoritmos-perfilado` | `AlgoritmosPerfiladoPage.tsx` | componente propio | Bespoke binario (mismo patrón) | `docentes`, `familias` |
| `diseno-persuasivo-patrones-oscuros` | `DisenoPersuasivoPatronesOscurosPage.tsx` | componente propio | Bespoke binario (mismo patrón) | `docentes`, `familias` |
| `caldos-de-cultivo` | `CaldosDeCultivoPage.tsx` | componente propio | Bespoke binario (mismo patrón) | `docentes`, `familias` |
| `recuperar-la-agencia` | `RecuperarLaAgenciaPage.tsx` | componente propio | Bespoke binario (mismo patrón) | `docentes`, `familias`, `ninas-ninos-adolescentes` |
| `poliedro-ciudadania-digital` | `PoliedroCiudadaniaDigitalPage.tsx` | componente propio | Bespoke binario (mismo patrón) | `docentes` (única sin `familias`) |

> Nota: el patrón "bespoke binario" está **duplicado 6 veces** entre estas páginas (mismo shape de ternario, mismos nombres de campo `*Familias`), no centralizado en un helper como `pickFamilias` o `resolveTexto`.

## 6. Infancia y Crianza (`#14B8A6`)

| Slug | Componente | Fork/propio | Patrón de audiencia | `audiencias?` |
|---|---|---|---|---|
| `cibercrianza` | `cibercrianza-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto`/`AudienciaTexto`, incluso el tipo `Opcion` del quiz admite `string \| AudienciaTexto` | `familias`, `docentes` |
| `nnya-entorno-digital` | `nnya-entorno-digital-content.tsx` (two-file pattern) | propio | **Group A** — `resolveTexto`/`AudienciaTexto`, fallback `'familias'` (comentario explícito en el código) | `familias`, `docentes` |

---

## Resumen rápido

- **16 temáticas** en 6 grupos.
- **Ninguna** usa `LibresBajoInfluenciaTemplate.tsx` (confirmado muerto).
- Distribución de patrón de audiencia:
  - Group A puro: `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `alfabetizacion-digital`, `ia-etica-ciudadania`, `violencia-digital-infancias`, `cibercrianza`, `nnya-entorno-digital` (8)
  - Group A + Group B mixto: `estafas-digitales` (1)
  - `pickFamilias` binario propio: `alfabetizacion-mediatica` (1)
  - Bespoke binario ad-hoc: `violencia-digital`, y las 6 de "Libres bajo influencia" (7)
- Ninguna temática está en "ninguno" — todas tienen alguna lógica de audiencia, aunque con 4 mecanismos distintos y no documentados como tales en CLAUDE.md (que solo describe Group A y Group B).
- Única temática sin `familias` en `audiencias`: `poliedro-ciudadania-digital` (solo `docentes`).
- Única con 3 audiencias: `violencia-digital` (`mujeres`, `docentes`, `familias`) y `recuperar-la-agencia` (`docentes`, `familias`, `ninas-ninos-adolescentes`).
