import type { Metadata } from 'next';
import CiudadaniaDigitalContent from '@/app/ciudadania-digital/ciudadania-digital-content';

const TITLE = 'Ciudadanía Digital: de usuario a ciudadano';
const DESCRIPTION =
  'El módulo base de la plataforma: qué significa ejercer ciudadanía en un mundo mediado por tecnología, y el mapa de las 10 capacidades para hacerlo.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['ciudadanía digital', 'Poliedro de la Ciudadanía Digital', 'territorio híbrido', 'derechos digitales', 'docentes'],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'es_AR',
  },
};

export default function CiudadaniaDigitalPage() {
  return <CiudadaniaDigitalContent />;
}
