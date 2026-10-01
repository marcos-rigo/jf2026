'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/cognitivo-informacional/toc-nav';
import IntroduccionSection from '@/components/cognitivo-informacional/introduccion-section';
import LoQueVasALograrSection from '@/components/cognitivo-informacional/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/cognitivo-informacional/por-que-importa-section';
import DeDondePartimosSection from '@/components/cognitivo-informacional/de-donde-partimos-section';
import CriterioYVerificacionSection from '@/components/cognitivo-informacional/criterio-y-verificacion-section';
import UnCasoResueltoSection from '@/components/cognitivo-informacional/un-caso-resuelto-section';
import PracticaVosSection from '@/components/cognitivo-informacional/practica-vos-section';
import PoneAPruebaSection from '@/components/cognitivo-informacional/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/cognitivo-informacional/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/cognitivo-informacional/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function CognitivoIntelectualEInformacionalContent() {
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
          <CriterioYVerificacionSection />
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
