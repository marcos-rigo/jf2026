import type { Metadata } from 'next';
import EmpresasOrganizacionesYPlataformasContent from './empresas-plataformas-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Empresas, Organizaciones y Plataformas';
const DESCRIPTION =
  'Qué responsabilidad tienen las plataformas y las empresas en las condiciones digitales que les imponen a sus usuarios y trabajadores.';

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

export default function EmpresasOrganizacionesYPlataformasPage() {
  return (
    <RequireAuth>
      <EmpresasOrganizacionesYPlataformasContent />
    </RequireAuth>
  );
}
