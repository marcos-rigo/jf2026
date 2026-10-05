import type { Metadata } from 'next';
import GobiernosLocalesYAdministracionPublicaContent from './gobiernos-locales-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Gobiernos Locales y Administración Pública';
const DESCRIPTION =
  'Cómo un gobierno local puede incorporar tecnología sin perder cercanía ni rendición de cuentas, y qué significa participación ciudadana digital desde el Estado.';

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
