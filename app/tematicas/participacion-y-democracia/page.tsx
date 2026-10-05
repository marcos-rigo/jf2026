import type { Metadata } from 'next';
import ParticipacionDemocraciaContent from './participacion-democracia-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Participación y Democracia: de conectarse a incidir';
const DESCRIPTION =
  'La novena dimensión del Poliedro de Ciudadanía Digital: la diferencia entre interacción e incidencia, las condiciones de una participación democrática de calidad y qué hacer cuando una decisión importante la toma un sistema automatizado.';

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

export default function ParticipacionDemocraciaPage() {
  return (
    <RequireAuth>
      <ParticipacionDemocraciaContent />
    </RequireAuth>
  );
}
