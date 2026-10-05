import type { Metadata } from 'next';
import EconomicaConsumoContent from './economica-consumo-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Económica, Productiva y de Consumo: de comprar con un clic a decidir con condiciones claras';
const DESCRIPTION =
  'La décima y última dimensión del Poliedro de Ciudadanía Digital: las condiciones reales detrás de una compra, una suscripción o una herramienta de trabajo automatizada, y cómo decidir con autonomía.';

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

export default function EconomicaConsumoPage() {
  return (
    <RequireAuth>
      <EconomicaConsumoContent />
    </RequireAuth>
  );
}
