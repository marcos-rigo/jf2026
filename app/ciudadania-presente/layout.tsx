import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Ciudadanía Presente - Plataforma Educativa',
  description: 'Plataforma educativa de Ciudadanía Presente. Formación en competencias digitales para ciudadanos. Secretaría de Participación Ciudadana - José Farhat.',
}

export default function CiudadaniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
      <Toaster />
    </>
  )
}
