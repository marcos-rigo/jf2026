import type { Metadata } from 'next';
import RiesgoYProteccionDigitalContent from './riesgo-proteccion-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Riesgo y Protección Digital';
const DESCRIPTION =
  'Un marco para pensar en probabilidades, no en certezas: cuándo un riesgo digital amerita actuar y cuándo no.';

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

export default function RiesgoYProteccionDigitalPage() {
  return (
    <RequireAuth>
      <RiesgoYProteccionDigitalContent />
    </RequireAuth>
  );
}
