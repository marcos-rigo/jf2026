import type { Metadata } from 'next';
import CiudadaniaDigitalContent from '@/app/ciudadania-digital/ciudadania-digital-content';

export const metadata: Metadata = {
  title: 'Kit de Acción del Ciudadano Digital | José Farhat',
  description:
    'Toma el control de tu vida en línea. Aprende sobre seguridad digital, netiqueta, IA y cómo detectar desinformación. Un protocolo interactivo para ciudadanía digital responsable.',
  keywords: ['ciudadanía digital', 'seguridad digital', 'privacidad online', 'desinformación', 'netiqueta'],
  openGraph: {
    title: 'Kit de Acción del Ciudadano Digital | José Farhat',
    description:
      'Toma el control de tu vida en línea. Aprende sobre seguridad digital, netiqueta, IA y cómo detectar desinformación.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function CiudadaniaDigitalPage() {
  return <CiudadaniaDigitalContent />;
}
