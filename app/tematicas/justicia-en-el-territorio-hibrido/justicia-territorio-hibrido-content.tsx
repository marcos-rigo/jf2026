'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/justicia-territorio-hibrido/toc-nav';
import IntroduccionSection from '@/components/justicia-territorio-hibrido/introduccion-section';
import LoQueVasALograrSection from '@/components/justicia-territorio-hibrido/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/justicia-territorio-hibrido/por-que-importa-section';
import DeDondePartimosSection from '@/components/justicia-territorio-hibrido/de-donde-partimos-section';
import JusticiaYPruebaDigitalSection from '@/components/justicia-territorio-hibrido/justicia-y-prueba-digital-section';
import UnCasoResueltoSection from '@/components/justicia-territorio-hibrido/un-caso-resuelto-section';
import PracticaVosSection from '@/components/justicia-territorio-hibrido/practica-vos-section';
import PoneAPruebaSection from '@/components/justicia-territorio-hibrido/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/justicia-territorio-hibrido/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/justicia-territorio-hibrido/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function JusticiaEnElTerritorioHibridoContent() {
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
          <JusticiaYPruebaDigitalSection />
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
