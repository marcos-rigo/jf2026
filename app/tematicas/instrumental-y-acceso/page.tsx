import type { Metadata } from 'next';
import InstrumentalYAccesoContent from './instrumental-y-acceso-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Instrumental y Acceso: de saber tocar pantallas a tener capacidad real';
const DESCRIPTION =
  'La primera dimensión del Poliedro de Ciudadanía Digital: qué es la capacidad instrumental, qué componentes tiene el acceso y cómo distinguir si una dificultad es de la persona o del diseño del servicio.';

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

export default function InstrumentalYAccesoPage() {
  return (
    <RequireAuth>
      <InstrumentalYAccesoContent />
    </RequireAuth>
  );
}
