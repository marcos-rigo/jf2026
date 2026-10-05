'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/justicia-hibrida/toc-nav';
import IntroduccionSection from '@/components/justicia-hibrida/introduccion-section';
import LoQueVasALograrSection from '@/components/justicia-hibrida/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/justicia-hibrida/por-que-importa-section';
import DeDondePartimosSection from '@/components/justicia-hibrida/de-donde-partimos-section';
import JusticiaYPruebaDigitalSection from '@/components/justicia-hibrida/justicia-y-prueba-digital-section';
import UnCasoResueltoSection from '@/components/justicia-hibrida/un-caso-resuelto-section';
import PracticaVosSection from '@/components/justicia-hibrida/practica-vos-section';
import PoneAPruebaSection from '@/components/justicia-hibrida/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/justicia-hibrida/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/justicia-hibrida/recursos-y-cierre-section';
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
