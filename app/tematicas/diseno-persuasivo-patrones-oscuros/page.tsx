import type { Metadata } from 'next'
import { DisenoPersuasivoPatronesOscurosPage } from '@/components/tematicas/DisenoPersuasivoPatronesOscurosPage'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('diseno-persuasivo-patrones-oscuros')!

export const metadata: Metadata = {
  title: 'Diseño persuasivo y patrones oscuros | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Diseño persuasivo y patrones oscuros | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function Page() {
  return <DisenoPersuasivoPatronesOscurosPage />
}
