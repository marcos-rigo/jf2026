import type { Metadata } from 'next';
import SocioComunicacionalEIdentidadContent from './socio-comunicacional-e-identidad-content';

const TITLE = 'Socio-Comunicacional e Identidad: de publicar a convivir';
const DESCRIPTION =
  'La tercera dimensión del Poliedro de Ciudadanía Digital: cómo anticipar la audiencia, la persistencia y la circulación de lo que decimos, distinguir la netiqueta de la convivencia y aprender a reparar.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'es_AR',
  },
};

export default function SocioComunicacionalEIdentidadPage() {
  return <SocioComunicacionalEIdentidadContent />;
}
