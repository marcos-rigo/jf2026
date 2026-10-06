import type { Metadata } from 'next';
import DeteccionRespuestaYReparacionContent from './deteccion-respuesta-y-reparacion-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Detección, Respuesta y Reparación: de vigilar a acompañar en cinco momentos';
const DESCRIPTION =
  'Por qué detectar a tiempo no es lo mismo que vigilar indiscriminadamente, los cinco momentos de la respuesta ante un hecho de violencia digital —detectar, interrumpir, proteger, responder y reparar— y por qué la reparación excede el cierre formal de un caso.';

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
