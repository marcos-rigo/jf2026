import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ciudadanía Presente - Plataforma Educativa',
  description: 'Plataforma educativa de Ciudadanía Presente. Formación en competencias digitales para ciudadanos. Secretaría de Participación Ciudadana - José Farhat.',
}

export default function CiudadaniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
