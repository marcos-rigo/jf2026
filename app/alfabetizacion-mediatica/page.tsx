import type { Metadata } from 'next'
import AlfabetizacionMediaticaContent from './alfabetizacion-mediatica-content'

export const metadata: Metadata = {
  title: 'Alfabetización Mediática e Informacional | José Farhat',
  description:
    'Optimizá tu filtro de información. Herramientas, frameworks y módulos de entrenamiento para consumir y compartir datos con precisión en la era digital.',
  keywords: [
    'alfabetización mediática',
    'desinformación',
    'fact-checking',
    'infoxicación',
    'AMI',
    'ciudadanía digital',
  ],
  openGraph: {
    title: 'Alfabetización Mediática e Informacional | José Farhat',
    description:
      'Entrenamiento práctico para detectar desinformación y consumir información con criterio.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function AlfabetizacionMediaticaPage() {
  return <AlfabetizacionMediaticaContent />
}
