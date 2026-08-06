import type { Metadata } from 'next'
import SubculturasDigitalesPage from '@/components/tematicas/SubculturasDigitalesPage'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('subculturas-digitales')!

export const metadata: Metadata = {
  title: 'Subculturas digitales | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Subculturas digitales | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function Page() {
  return <SubculturasDigitalesPage />
}
