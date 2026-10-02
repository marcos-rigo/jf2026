import type { Metadata } from 'next';
import EmocionalContent from './emocional-content';

const TITLE = 'Emocional: de reaccionar a elegir';
const DESCRIPTION =
  'La cuarta dimensión del Poliedro de Ciudadanía Digital: cómo las emociones participan de nuestras decisiones digitales, cómo los entornos las amplifican, y cuándo pausar, pedir una segunda mirada o pedir ayuda.';

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

export default function EmocionalPage() {
  return <EmocionalContent />;
}
