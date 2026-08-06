import type { Metadata } from 'next'
import { LibresBajoInfluenciaTemplate } from '@/components/tematicas/LibresBajoInfluenciaTemplate'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('poliedro-ciudadania-digital')!

export const metadata: Metadata = {
  title: 'Ciudadanía digital: el poliedro | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Ciudadanía digital: el poliedro | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function PoliedroCiudadaniaDigitalPage() {
  return <LibresBajoInfluenciaTemplate data={data} groupLabel="Libres bajo influencia" />
}
