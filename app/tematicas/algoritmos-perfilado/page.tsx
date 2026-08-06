import type { Metadata } from 'next'
import { AlgoritmosPerfiladoPage } from '@/components/tematicas/AlgoritmosPerfiladoPage'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'

const data = getLibresSubtopicBySlug('algoritmos-perfilado')!

export const metadata: Metadata = {
  title: 'Algoritmos y perfilado | Libres bajo influencia | José Farhat',
  description: data.description,
  openGraph: {
    title: 'Algoritmos y perfilado | Libres bajo influencia',
    description: data.description,
    type: 'article',
    locale: 'es_AR',
  },
}

export default function Page() {
  return <AlgoritmosPerfiladoPage />
}

