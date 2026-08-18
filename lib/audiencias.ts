// Taxonomía de públicos para el filtro de temáticas. Ver
// content-management/PROPUESTA-AUDIENCIAS.md para el criterio de
// clasificación de cada temática y los casos ambiguos dejados sin etiquetar
// a propósito.
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
