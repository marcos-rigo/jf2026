import type { Metadata } from 'next';
import RiesgoYProteccionDigitalContent from './riesgo-y-proteccion-digital-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Riesgo y Protección Digital: de pronosticar a trabajar con probabilidades';
const DESCRIPTION =
  'Por qué un factor de riesgo aumenta una probabilidad sin predecir un destino individual, por qué conviene priorizar lo modificable, y por qué una lectura equilibrada identifica tanto déficits como fortalezas de una comunidad.';

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
