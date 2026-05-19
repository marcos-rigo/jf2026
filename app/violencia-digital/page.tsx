import type { Metadata } from 'next'
import ViolenciaDigitalContent from './violencia-digital-content'

export const metadata: Metadata = {
  title: 'Violencia Digital hacia la Mujer: Protocolo de Protección | José Farhat',
  description:
    'Manual táctico paso a paso basado en la Ley Olimpia y protocolos internacionales para protegerte, recolectar pruebas y actuar ante la violencia digital hacia la mujer.',
  keywords: [
    'violencia digital',
    'ley olimpia',
    'ciberacoso',
    'acoso digital',
    'pruebas digitales',
    'ciudadanía digital',
  ],
  openGraph: {
    title: 'Violencia Digital hacia la Mujer: Protocolo de Protección | José Farhat',
    description:
      'Tomá el control ante la violencia digital hacia la mujer con este protocolo de 3 pasos: asegurar, documentar y denunciar.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function ViolenciaDigitalPage() {
  return <ViolenciaDigitalContent />
}
