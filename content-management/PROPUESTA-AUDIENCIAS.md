# Propuesta: taxonomía de públicos para Ciudadanía Presente

> **Estado: investigación cerrada (Fase A) y aprobada para implementación (Fases B y C).** La tabla del §1 quedó sin ⚠️ pendientes de investigación — los ⚠️ que quedan son ambigüedades reales de contenido, no vacíos de análisis.

Públicos objetivo:
- **Docentes**
- **Familias**
- **Adultos mayores**
- **Niñas, niños y adolescentes** (NNA)
- **Mujeres** — categoría agregada tras la fase de investigación, para el caso `violencia-digital` (contenido dirigido específicamente a mujeres adultas víctimas de violencia de género digital, marco Ley Olimpia), que no encajaba de forma honesta en "familias". Ver §2, punto 4 (resuelto).

Fuente: lectura completa de las 15 temáticas con contenido real (`alfabetizacion-digital` tiene `sinContenido: true` y se excluye), más una segunda pasada sobre los 5 subcomponentes de `ciudadania-digital` (§1, §2 punto 1 — resuelto).

**Nota de alcance:** "Adultos mayores" se mantiene en la lista de públicos objetivo aunque hoy ninguna temática la tenga asignada — es una decisión intencional del propietario del producto, no un vacío a completar en esta pasada (§2, punto 2 — resuelto).

---

## 1. Tabla: temática → público(s) sugerido(s) → justificación

| Temática | Público(s) sugerido(s) | Justificación breve |
|---|---|---|
| `ciudadania-digital` | ⚠️ Ambiguo (sin clasificar) | Segunda pasada completa sobre las 5 sub-secciones (`intro`, `paso1` seguridad, `paso2` netiqueta, `paso3` bulos/IA, `herramientas`). Registro "kit/protocolo" consistentemente neutro: se dirige a un adulto genérico con cuentas propias (banco, gestor de contraseñas, "el profesional que quieres ser", "colega"). Ningún marcador de docente, familia, adulto mayor, mujeres o NNA en ninguna de las 5 piezas. Conclusión de contenido, no vacío de investigación — ver §2, punto 1 (resuelto). |
| `huella-digital` | Familias (adultos en general) | Se dirige a un usuario adulto genérico gestionando sus propias cuentas (bancos, huella biométrica, Google Takeout). Ningún marcador de rol/edad explícito. |
| `hiperconectividad-digital` | **Docentes + Familias** | Explícito: badge "Guía para familias y educadores", CTA de cierre "#SuMayorInfluencer es usted". Habla *sobre* adolescentes, no *a* ellos. |
| `alfabetizacion-mediatica` | ⚠️ Ambiguo / multi | Registro gamificado "protocolo/sistema" sin marcador de rol. Podría servir a docentes (como recurso de aula) y público general adulto; UI con gráficos Chart.js puede ser una barrera para adultos mayores no familiarizados. |
| `ia-etica-ciudadania` | **Docentes** | Registro más académico/filosófico/jurídico del corpus (Merleau-Ponty, Levinas, AI Act). Cita "la escuela como garante de equidad digital". Demasiado denso para NNA o público general sin mediación. |
| `estafas-digitales` | Familias + ⚠️ Adultos mayores (candidato fuerte, no confirmado por texto) | El dominio temático (phishing/vishing/smishing bancario) es clásico contenido de protección al adulto mayor, pero el texto **no** los nombra explícitamente — dato notable: existe un array `helpLines` con "Línea de los Chicos" (102) que **no se renderiza en ningún lado**, señal de que se pensó una segmentación por público y se descartó. |
| `violencia-digital` | **Mujeres** | Dirigido **exclusiva y explícitamente** a mujeres víctimas ("hacia la Mujer", "el agresor" en masculino, Ley Olimpia). Se resolvió como categoría propia (`mujeres`) en vez de forzarlo dentro de "familias" — ver §2, punto 4 (resuelto). |
| `violencia-digital-infancias` | **Docentes + Familias** | Explícito: "protocolo de actuación para adultos referentes", registro formal "usted", nunca se dirige a NNA directamente. |
| `subculturas-digitales` | **Docentes** (Familias posible, no confirmado) | Explícito: "tensiones que cualquier docente reconoce entre sus estudiantes", sección dedicada "Qué significa esto para el aula". Todo el archivo fuente (`libres-bajo-influencia-data.ts`) se declara "adaptado de la conferencia... dirigida a docentes". |
| `algoritmos-perfilado` | ⚠️ Ambiguo | Registro de ciudadano general, sin marcador docente/familia pese a heredar el contexto "dirigido a docentes" del archivo fuente. Único rastro: un ítem de fuentes menciona un "Checklist de privacidad... para padres y madres" de UNICEF, pero no se cita en el cuerpo. |
| `diseno-persuasivo-patrones-oscuros` | ⚠️ Ambiguo (Docentes por complejidad) | Muy técnico-jurídico (DSA/GDPR/DMA/AI Act, COPPA). Menciona menores como víctimas en casos (Epic Games/Fortnite) pero no se dirige a un público específico. Complejidad regulatoria sugiere Docentes como mejor encaje, no confirmado por el texto. |
| `caldos-de-cultivo` | **Docentes** | Encuadre reiterado en tercera persona: "Para un aula, esto tiene una consecuencia directa...", caso de estudio explícitamente escolar ("El rumor escolar"). |
| `recuperar-la-agencia` | **Docentes + Familias + NNA** (el más multi-público del corpus) | Descripción explícita: "en casa y en la escuela"; texto base: "para adultos y para chicos". Es el único subtema que se dirige simultáneamente a los tres públicos. |
| `poliedro-ciudadania-digital` | **Docentes** | Registro técnico-institucional (comparativa regulatoria EU/US/China, "comunidades educativas", voz docente en primera persona plural: "formar es lento, y es lo nuestro"). El más denso del corpus. |
| `cibercrianza` | **Familias** | Se dirige directamente a padres/madres con "vos"/"tu hijo/a" en toda la pieza. Sin mención a docentes. |
| `nnya-entorno-digital` | **Familias** | Mismo patrón que cibercrianza: imperativos dirigidos al adulto cuidador ("Preguntales...", "Enseñales..."), nunca a NNA directamente. |

---

## 2. Casos dudosos y hallazgos que condicionan la taxonomía

Estos son señalamientos explícitos, no resueltos por mí — decisiones de criterio que te corresponden a vos:

1. ✅ **Resuelto — `ciudadania-digital`.** Segunda pasada completa sobre las 5 sub-secciones. Resultado: contenido consistentemente neutro/genérico-adulto en las 5 piezas (seguridad de cuentas, netiqueta entre "colegas", framework anti-bulos "VERIFICA"), sin un solo marcador textual de rol (docente/familia/adulto mayor/mujeres/NNA). Queda como **ambiguo/sin clasificar** en la tabla del §1 — es una conclusión de contenido, no un vacío de investigación pendiente.

2. ✅ **Resuelto — "Adultos mayores" se mantiene como categoría vacía intencional.** Decisión tomada: la categoría queda visible en el filtro de UI aunque hoy ninguna temática la tenga asignada — es una señal de que falta contenido para ese público, no un error a esconder ni a completar forzando etiquetas. El array `helpLines` muerto en `estafas-digitales` ("Línea de los Chicos", 102) sigue siendo el único indicio de que alguna vez se pensó en segmentar por edad; no se usa para inferir una clasificación.

3. **NNA como lector directo sigue siendo un vacío, distinto de "contenido sobre NNA"** — sin resolver, no era parte de las 3 decisiones tomadas. Varias temáticas (`cibercrianza`, `violencia-digital-infancias`, `nnya-entorno-digital`) hablan largamente *sobre* niños, niñas y adolescentes, pero siempre dirigiéndose al adulto ("tu hijo/a", "adultos referentes"). Ninguna está redactada en segunda persona hacia el NNA mismo. La excepción parcial es `recuperar-la-agencia`, que dice explícitamente "para adultos y para chicos" — pero es una frase, no una reestructuración real del registro. Etiquetar contenido como "para NNA" hoy sería forzar la categoría sobre texto que no fue escrito para ese lector. Este punto queda abierto para una decisión futura, igual que el punto 2 lo estaba.

4. ✅ **Resuelto — `violencia-digital`.** Decisión tomada: se crea la categoría `mujeres`, específica para este caso, en vez de forzarlo dentro de `familias`. El tipo `Audiencia` pasa a 5 valores (ver §3).

5. **Grupo "Libres bajo influencia" es internamente inconsistente en dirección de público**, pese a que el archivo de datos entero se declara "dirigido a docentes" en su comentario de cabecera: `subculturas-digitales` y `caldos-de-cultivo` mantienen esa dirección explícita; `algoritmos-perfilado` y `diseno-persuasivo-patrones-oscuros` mutan a un registro neutro sin marcador de público; `recuperar-la-agencia` se abre a familias y NNA; `poliedro-ciudadania-digital` (el cierre de la serie) vuelve a un registro fuertemente docente/institucional. No es un error — es una fuente heterogénea (charla original + expansiones posteriores por subtema) — pero significa que **no podés asumir "todo el grupo Libres = docentes" por herencia**; hay que tematica por tematica.

6. **Contenido "neutro" adaptable vs. intrínsecamente específico:**
   - **Adaptable con poco esfuerzo** (formato ya modular, registro no está atado a un rol): `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros`, `alfabetizacion-mediatica`, `huella-digital` — todos ya en registro "ciudadano general", podrían etiquetarse para varios públicos sin reescribir texto.
   - **Intrínsecamente específico** (reescribir el registro cambiaría el sentido del contenido): `violencia-digital` (marco legal de género), `cibercrianza`/`nnya-entorno-digital` (voz de padre/madre en segunda persona), `ia-etica-ciudadania`/`poliedro-ciudadania-digital` (densidad académica/regulatoria que no se puede simplificar sin perder el contenido).

---

## 3. Propuesta de estructura de datos

**No implementado. Boceto para tu revisión.**

### 3.1 Tipo base

```ts
// lib/audiencias.ts (nuevo archivo, o agregado a lib/tematicas-data.ts)

export type Audiencia =
  | 'docentes'
  | 'familias'
  | 'adultos-mayores'
  | 'ninas-ninos-adolescentes'
  | 'mujeres'

export const AUDIENCIA_LABELS: Record<Audiencia, string> = {
  'docentes': 'Docentes',
  'familias': 'Familias',
  'adultos-mayores': 'Adultos mayores',
  'ninas-ninos-adolescentes': 'Niñas, niños y adolescentes',
  'mujeres': 'Mujeres',
}
```

### 3.2 Nivel temática (`lib/tematicas-data.ts`)

Agregar `audiencias: Audiencia[]` a `TematicaItem`. Lo dejo opcional (`?`) para no romper los ítems que hoy quedarían sin clasificar (como `ciudadania-digital`, pendiente de investigación) ni forzar una etiqueta donde el análisis dice "ambiguo":

```ts
export interface TematicaItem {
  id: string
  href: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  color: string
  locked: boolean
  sinContenido?: boolean
  // Públicos a los que el contenido, tal como está redactado hoy, le sirve.
  // Ausente o [] = no clasificado todavía (no asumir "todos los públicos").
  audiencias?: Audiencia[]
}
```

**Ejemplo aplicado — `cibercrianza`** (público único, señal fuerte en el texto):

```ts
{
  id: "cibercrianza",
  href: "/tematicas/cibercrianza",
  category: "Cibercrianza",
  title: "¿Sabés dónde interactúan tus hijos?",
  description: "Cibercrianza: datos reales, quiz interactivo y claves para acompañar a tus hijos en el entorno digital.",
  image: "/img/tematicas/cibercrianza_card.png",
  imageAlt: "Banner Cibercrianza",
  icon: Users,
  color: "#14B8A6",
  locked: false,
  audiencias: ["familias"],
},
```

**Ejemplo aplicado — `subculturas-digitales`** (grupo Libres bajo influencia, señal fuerte):

```ts
{
  id: "subculturas-digitales",
  href: "/tematicas/subculturas-digitales",
  category: "Comunidad digital",
  title: "Subculturas digitales",
  description: "Por qué lo digital funciona más como un territorio que como una herramienta...",
  image: "/img/tematicas/subculturas-digitales/infografia.webp",
  imageAlt: "Infografía de Subculturas digitales",
  icon: Users,
  color: "#9333EA",
  locked: true,
  audiencias: ["docentes"],
},
```

**Ejemplo aplicado — `recuperar-la-agencia`** (multi-público explícito):

```ts
{
  id: "recuperar-la-agencia",
  href: "/tematicas/recuperar-la-agencia",
  category: "Autonomía",
  title: "Recuperar la agencia",
  description: "Reconocer todo lo anterior no significa negar nuestra capacidad de actuar...",
  image: "/img/tematicas/recuperar-la-agencia/infografia.webp",
  imageAlt: "Infografía de Recuperar la agencia",
  icon: Compass,
  color: "#059669",
  locked: true,
  audiencias: ["docentes", "familias", "ninas-ninos-adolescentes"],
},
```

### 3.3 Nivel sección/módulo (opcional, solo donde aporta)

El contenido del grupo "Libres bajo influencia" vive en `lib/libres-bajo-influencia-data.ts` con su propio tipo (`LibresSubtopicContent` / `LibresSection`). Ahí el campo tendría más sentido a nivel **subtema completo**, no por sección individual — las secciones internas (`sections: LibresSection[]`) no traen marcadores de público diferenciados entre sí en el contenido inventariado; forzar `audiencias` por sección sería inventar una granularidad que el texto no sostiene hoy.

```ts
export interface LibresSubtopicContent {
  slug: string
  title: string
  category: string
  color: string
  iconName: LibresIconName
  description: string
  authors: string[]
  intro: string
  sections: LibresSection[]
  caseStudy?: LibresCaseStudy
  closingQuote: string
  quizQuestions: LibresQuizQuestion[]
  pdfUrl?: string
  pdfLabel?: string
  infografiaUrl?: string
  infografiaAlt?: string
  // Nuevo, opcional — mismo criterio que TematicaItem.
  audiencias?: Audiencia[]
}
```

Si en el futuro un subtema puntual necesita audiencia distinta *por sección* (ejemplo real: `poliedro-ciudadania-digital` tiene un módulo entero — `PolyhedronExplorer`, tab "Brechas Digitales LatAm" — que podría ser más específico de política pública que el resto), ahí sí valdría un campo opcional en `LibresSection`, pero no lo propongo como default: es trabajo de reclasificación fino que conviene hacer sección por sección cuando llegue el caso, no como parte de esta primera pasada.

### 3.4 Por qué no un campo obligatorio ni un valor por defecto "todos"

Si `audiencias` fuera obligatorio con fallback `[]` = "todos los públicos", el filtro de UI mostraría contenido sin clasificar como si sirviera a los 4 públicos por igual — que es exactamente lo que el §2 dice que **no** es cierto (ej. `ia-etica-ciudadania` no debería aparecer bajo "adultos mayores" solo porque nadie lo etiquetó todavía). Prefiero opcional + ausente = "sin clasificar, no mostrar en filtros de público hasta decidir" antes que un default que miente por omisión.

---

## 4. Propuesta de UI de filtro

**No implementado. Boceto textual.**

### 4.1 Dónde

- **Listado público `/tematicas`** (`app/tematicas/tematicas-content.tsx`): tiene más sentido acá primero — es donde alguien llega sin login buscando "qué hay para mí". Ya tiene búsqueda/filtro existente (según CLAUDE.md: "single client component with search/filter"), así que el filtro de audiencia se sumaría como una faceta más del mismo sistema, no un widget nuevo.
- **Dashboard `/ciudadania-presente/dashboard/tematicas`**: mismo filtro, reutilizando el componente — ahí ya hay progreso por temática y grupos colapsables, así que el filtro de público debería convivir con esos, no competir visualmente.
- No propongo un tercer lugar (ej. página propia "elegí tu público") para esta primera fase — es una capa de filtro sobre listados existentes, no una nueva sección.

### 4.2 Mecánica

- **Actualizado (implementación real):** el filtro terminó siendo de **selección única** (chips estilo tabs, `role="tab"`/`aria-selected`), no combinable — decisión posterior del propietario del producto. La clasificación de datos sigue soportando varios públicos por temática (`audiencias: Audiencia[]`), así que `recuperar-la-agencia` sigue apareciendo bajo "Docentes", "Familias" o "Niñas, niños y adolescentes" individualmente — lo que cambió es que el usuario elige un público a la vez, no la cardinalidad del dato.
- Chips con el mismo lenguaje visual que ya exista para categorías/grupos en `/tematicas` (mismo componente de badge/pill, mismos colores de acento por grupo si aplica) — evitar introducir un patrón visual nuevo.
- Estado inicial: **ningún filtro activo = se listan todas las temáticas**, incluidas las no clasificadas (`audiencias` ausente). No ocultar contenido sin clasificar por defecto; solo se oculta cuando el usuario activa un filtro y esa temática no matchea.
- Temáticas sin `audiencias` definido deberían mostrar algo como un badge sutil "Sin clasificar" (visible solo en algún modo admin/dev, no necesariamente al público) para que sea fácil detectar qué falta etiquetar a medida que se completa la taxonomía.
- El chip **"Adultos mayores"** se renderiza siempre entre las opciones del filtro, aunque no matchee ninguna temática hoy — es intencional (§2, punto 2), no se oculta ni se deshabilita por tener 0 resultados.

### 4.3 Coherencia con el patrón existente del dashboard

CLAUDE.md menciona "grupos colapsables, contadores por módulo" en el dashboard de temáticas. Propongo que el filtro de audiencia actúe **sobre** esos grupos existentes (oculta/atenúa items que no matchean dentro de cada grupo colapsable) en vez de aplanar la estructura en una lista nueva — mantiene la jerarquía visual que ya existe (`groups` de `lib/tematicas-data.ts`) y evita construir una segunda taxonomía de navegación en paralelo.

---

## 5. Plan de implementación

1. ✅ **Cerrar los vacíos de investigación** — hecho: segunda pasada sobre `ciudadania-digital`, decisiones tomadas sobre adultos mayores y `violencia-digital`/`mujeres` (§2, puntos 1, 2 y 4).
2. **Agregar el tipo `Audiencia` (5 valores) y el campo opcional** en `lib/tematicas-data.ts` (`TematicaItem.audiencias`) y en `lib/libres-bajo-influencia-data.ts` (`LibresSubtopicContent.audiencias`). Sin lógica de UI todavía — solo el modelo de datos.
3. **Etiquetar las 15 temáticas** usando la tabla ya cerrada del §1. Los casos marcados ⚠️ (ambigüedad real de contenido: `ciudadania-digital`, `alfabetizacion-mediatica`, `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros`) quedan sin `audiencias` definido — no se completan con una suposición.
4. **Construir el filtro de chips combinables** en el listado `/tematicas` primero (menor superficie de riesgo, es la página pública), reutilizando el sistema de búsqueda/filtro que ya existe ahí. El chip "Adultos mayores" se muestra siempre, aunque no matchee nada.
5. **Extender el mismo filtro al dashboard** `/ciudadania-presente/dashboard/tematicas`, respetando la estructura de grupos colapsables existente.
6. **(Pendiente, fuera de este alcance)** El punto 3 del §2 (NNA como lector directo) queda abierto — no dispara trabajo de contenido en esta tarea, es una decisión futura separada de metadata/filtro.
