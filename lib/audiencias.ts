// Taxonomía de públicos para el filtro de temáticas. Ver
// content-management/PROPUESTA-AUDIENCIAS.md para el criterio de
// clasificación de cada temática y los casos ambiguos dejados sin etiquetar
// a propósito.
import { GraduationCap, Home, Baby, HeartHandshake, Glasses, type LucideIcon } from 'lucide-react'

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

// Orden de despliegue en el filtro de UI. 'adultos-mayores' se mantiene acá
// aunque hoy ninguna temática la tenga asignada — es intencional, no un bug.
export const AUDIENCIAS_ORDENADAS: Audiencia[] = [
  'docentes',
  'familias',
  'ninas-ninos-adolescentes',
  'mujeres',
  'adultos-mayores',
]

// Ícono y color distintivo por público, para que el filtro se lea de un
// vistazo en vez de depender solo del texto. Colores elegidos por contraste
// entre sí (no reutilizan brand-blue/brand-pink 1 a 1 con otro significado
// ya establecido en el sitio) manteniéndose dentro de la paleta general.
export const AUDIENCIA_ICONS: Record<Audiencia, LucideIcon> = {
  'docentes': GraduationCap,
  'familias': Home,
  'ninas-ninos-adolescentes': Baby,
  'mujeres': HeartHandshake,
  'adultos-mayores': Glasses,
}

export const AUDIENCIA_COLORS: Record<Audiencia, string> = {
  'docentes': '#4272BB',
  'familias': '#059669',
  'ninas-ninos-adolescentes': '#D5247A',
  'mujeres': '#8B5CF6',
  'adultos-mayores': '#D97706',
}
