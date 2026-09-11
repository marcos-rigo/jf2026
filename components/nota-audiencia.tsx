'use client'

// Componente compartido para el patrón "Grupo B" (toques livianos): renderiza
// la nota correspondiente a la audiencia activa, o nada si esa audiencia no
// tiene nota escrita todavía. A diferencia de `resolveTexto` (Grupo A), acá
// no hay fallback a otra audiencia — es contenido adicional opcional, no el
// cuerpo principal de la sección.
import type { Audiencia } from '@/lib/audiencias'
import type { AudienciaNotas } from '@/lib/audiencia-texto'

const FIELD_BY_AUDIENCIA: Record<Audiencia, keyof AudienciaNotas> = {
  'docentes': 'notaDocente',
  'familias': 'notaFamilias',
  'adultos-mayores': 'notaAdultosMayores',
  'ninas-ninos-adolescentes': 'notaNinasNinosAdolescentes',
  'mujeres': 'notaMujeres',
}

interface NotaAudienciaProps {
  notas: AudienciaNotas
  audienciaActual: Audiencia | null
  className?: string
}

export function NotaAudiencia({ notas, audienciaActual, className }: NotaAudienciaProps) {
  if (!audienciaActual) return null
  const texto = notas[FIELD_BY_AUDIENCIA[audienciaActual]]
  if (!texto) return null
  return <p className={className}>{texto}</p>
}
