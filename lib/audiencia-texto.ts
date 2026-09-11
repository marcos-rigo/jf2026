// Infraestructura para contenido con variantes por audiencia. Dos formas de
// dato, según el grupo de temáticas (ver content-management — investigación
// "contenido con variantes por audiencia"):
//
// - Grupo A (reescritura completa, texto largo estructurado en secciones):
//   `AudienciaTexto` + `resolveTexto`, con fallback obligatorio a una
//   audiencia base — la sección tiene que mostrar algo siempre.
// - Grupo B (toques livianos, una nota puntual al lado del contenido
//   neutro): `AudienciaNotas`, sin fallback — si no hay nota para la
//   audiencia activa, no se muestra nada (ver `components/nota-audiencia.tsx`).
import type { Audiencia } from './audiencias'

export type AudienciaTexto = Partial<Record<Audiencia, string>>

/**
 * Resuelve qué variante de texto mostrar para la audiencia activa.
 * `fallback` se pasa explícito en cada llamado (no es un default global):
 * varía por temática según a qué público está dirigido el contenido base
 * hoy (ej. 'docentes' para ciudadania-digital/huella-digital/hiperconectividad-digital,
 * 'familias' para cibercrianza/nnya-entorno-digital).
 */
export function resolveTexto(texto: AudienciaTexto, audienciaActual: Audiencia | null, fallback: Audiencia): string {
  if (audienciaActual && texto[audienciaActual]) return texto[audienciaActual]
  return texto[fallback] ?? Object.values(texto)[0] ?? ''
}

// Grupo B: notas puntuales opcionales, una por audiencia, como campos
// hermanos del contenido neutro existente (generaliza el `notaDocente?`
// que ya existía en lib/violencia-digital-content.ts). Deliberadamente sin
// helper de fallback — ver components/nota-audiencia.tsx.
export interface AudienciaNotas {
  notaDocente?: string
  notaFamilias?: string
  notaAdultosMayores?: string
  notaNinasNinosAdolescentes?: string
  notaMujeres?: string
}
