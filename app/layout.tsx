import type { Metadata, Viewport } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'José Farhat | Ciudadanía Presente',
  description: 'José Farhat - Abogado, Secretario de Participación Ciudadana de Tucumán. Innovación, participación y democracia desde Tucumán para el mundo.',
  generator: 'v0.app',
  keywords: ['José Farhat', 'Ciudadanía Digital', 'Participación Ciudadana', 'Tucumán', 'Innovación Pública', 'Democracia'],
  authors: [{ name: 'José Farhat' }],
  openGraph: {
    title: 'José Farhat | Ciudadanía Presente',
    description: 'Innovación, participación y democracia desde Tucumán para el mundo.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@JoseFarhatok',
  },
}

export const viewport: Viewport = {
  themeColor: '#003257',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
