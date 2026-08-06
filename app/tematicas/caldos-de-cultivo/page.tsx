import type { Metadata } from 'next'
import { CaldosDeCultivoPage } from '@/components/tematicas/CaldosDeCultivoPage'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('caldos-de-cultivo')!

export const metadata: Metadata = {
  title: 'Caldos de cultivo | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Caldos de cultivo | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function Page() {
  return <CaldosDeCultivoPage />
}
