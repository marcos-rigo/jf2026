import type { Metadata } from 'next';
import SeguridadProteccionContent from './seguridad-proteccion-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Seguridad, Privacidad y Protección Digital: de la sospecha a la confianza informada';
const DESCRIPTION =
  'La séptima dimensión del Poliedro de Ciudadanía Digital: qué se protege hoy, qué es la confianza informada y cómo usar Pausar–Verificar–Decidir frente a la urgencia y la autoridad aparente.';

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

export default function SeguridadProteccionPage() {
  return (
    <RequireAuth>
      <SeguridadProteccionContent />
    </RequireAuth>
  );
}
