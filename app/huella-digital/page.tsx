import type { Metadata } from 'next'
import HuellaDigitalContent from './huella-digital-content'

export const metadata: Metadata = {
  title: 'Huella Digital: Recuperá el Control de tu Identidad | José Farhat',
  description:
    'Guía práctica en 3 pasos para auditar, limpiar y blindar tu huella digital. De la sobreexposición al control total.',
  keywords: [
    'huella digital',
    'privacidad online',
    'egosurfing',
    'derecho al olvido',
    'seguridad digital',
    'ciudadanía digital',
  ],
  openGraph: {
    title: 'Huella Digital: Recuperá el Control de tu Identidad | José Farhat',
    description:
      'Auditá, limpiá y blindá tu identidad digital en 3 pasos prácticos.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function HuellaDigitalPage() {
  return <HuellaDigitalContent />
}
