import type { Metadata } from 'next';
import SaludBienestarContent from './salud-bienestar-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Salud y Bienestar Digital: de contar horas a cuidar el equilibrio';
const DESCRIPTION =
  'La quinta dimensión del Poliedro de Ciudadanía Digital: por qué el bienestar digital no se mide en horas de pantalla, qué factores pesan y qué depende de la persona y qué del entorno.';

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

export default function SaludBienestarPage() {
  return (
    <RequireAuth>
      <SaludBienestarContent />
    </RequireAuth>
  );
}
