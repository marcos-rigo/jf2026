import type { Metadata } from 'next'
import { LibresBajoInfluenciaTemplate } from '@/components/tematicas/LibresBajoInfluenciaTemplate'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('recuperar-la-agencia')!

export const metadata: Metadata = {
  title: 'Recuperar la agencia | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Recuperar la agencia | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function RecuperarLaAgenciaPage() {
  return <LibresBajoInfluenciaTemplate data={data} groupLabel="Libres bajo influencia" />
}
