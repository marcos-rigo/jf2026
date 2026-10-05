import type { Metadata } from 'next';
import DeteccionRespuestaYReparacionContent from './deteccion-respuesta-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Detección, Respuesta y Reparación';
const DESCRIPTION =
  'Protocolo institucional para actuar frente a un caso de violencia digital ya ocurrido: detectar, interrumpir, responder y reparar.';

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

export default function DeteccionRespuestaYReparacionPage() {
  return (
    <RequireAuth>
      <DeteccionRespuestaYReparacionContent />
    </RequireAuth>
  );
}
