'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/gobiernos-locales/toc-nav';
import IntroduccionSection from '@/components/gobiernos-locales/introduccion-section';
import LoQueVasALograrSection from '@/components/gobiernos-locales/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/gobiernos-locales/por-que-importa-section';
import DeDondePartimosSection from '@/components/gobiernos-locales/de-donde-partimos-section';
import GobiernoAbiertoYCercaniaSection from '@/components/gobiernos-locales/gobierno-abierto-y-cercania-section';
import UnCasoResueltoSection from '@/components/gobiernos-locales/un-caso-resuelto-section';
import PracticaVosSection from '@/components/gobiernos-locales/practica-vos-section';
import PoneAPruebaSection from '@/components/gobiernos-locales/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/gobiernos-locales/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/gobiernos-locales/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function GobiernosLocalesYAdministracionPublicaContent() {
  return (
    <>
      <Navbar />
      <BackToDashboardButton />

      <div className="min-h-screen flex flex-col md:flex-row relative text-slate-700 bg-brand-light-blue">
        <TocNav />

        {/* overflow-x-hidden va acá y no en el wrapper flex: rompería el sticky del sidebar (ver CLAUDE.md). */}
        <main className="flex-1 min-w-0 overflow-x-hidden px-4 sm:px-6 lg:px-8 md:pt-24 pt-28 pb-16 max-w-4xl mx-auto w-full space-y-16 md:space-y-20">
          <IntroduccionSection />
          <LoQueVasALograrSection />
          <PorQueImportaSection />
          <DeDondePartimosSection />
          <GobiernoAbiertoYCercaniaSection />
          <UnCasoResueltoSection />
          <PracticaVosSection />
          <PoneAPruebaSection />
          <LlevaloATuAulaSection />
          <RecursosYCierreSection />
        </main>
      </div>

      <Footer />
    </>
  );
}
