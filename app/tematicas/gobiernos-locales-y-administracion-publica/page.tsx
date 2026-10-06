import type { Metadata } from 'next';
import GobiernosLocalesYAdministracionPublicaContent from './gobiernos-locales-y-administracion-publica-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Gobiernos Locales y Administración Pública: de digitalizar trámites a garantizar derechos';
const DESCRIPTION =
  'Cuándo una barrera tecnológica se convierte en barrera para derechos, la capacidad especial de los gobiernos locales para construir políticas territoriales, y por qué la responsabilidad del Estado por sus sistemas algorítmicos no se transfiere al proveedor.';

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

export default function GobiernosLocalesYAdministracionPublicaPage() {
  return (
    <RequireAuth>
      <GobiernosLocalesYAdministracionPublicaContent />
    </RequireAuth>
  );
}
