import type { Metadata } from 'next'
import { TematicasDashboardContent } from './tematicas-dashboard-content'

export const metadata: Metadata = {
  title: 'Temáticas | Ciudadanía Presente',
  description: 'Todas las temáticas de ciudadanía digital, desbloqueadas para miembros de la plataforma.',
}

export default function TematicasDashboardPage() {
  return <TematicasDashboardContent />
}
