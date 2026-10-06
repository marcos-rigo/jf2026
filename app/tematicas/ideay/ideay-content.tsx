'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/ideay/toc-nav';
import IntroduccionSection from '@/components/ideay/introduccion-section';
import LoQueVasALograrSection from '@/components/ideay/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/ideay/por-que-importa-section';
import DeDondePartimosSection from '@/components/ideay/de-donde-partimos-section';
import DiagnosticoYConstruccionColectivaSection from '@/components/ideay/diagnostico-y-construccion-colectiva-section';
import UnCasoResueltoSection from '@/components/ideay/un-caso-resuelto-section';
import PracticaVosSection from '@/components/ideay/practica-vos-section';
import PoneAPruebaSection from '@/components/ideay/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/ideay/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/ideay/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function IdeayContent() {
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
          <DiagnosticoYConstruccionColectivaSection />
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
