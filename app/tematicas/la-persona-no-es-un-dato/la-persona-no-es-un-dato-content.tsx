'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/persona-no-es-dato/toc-nav';
import IntroduccionSection from '@/components/persona-no-es-dato/introduccion-section';
import LoQueVasALograrSection from '@/components/persona-no-es-dato/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/persona-no-es-dato/por-que-importa-section';
import DeDondePartimosSection from '@/components/persona-no-es-dato/de-donde-partimos-section';
import DatosYDignidadSection from '@/components/persona-no-es-dato/datos-y-dignidad-section';
import UnCasoResueltoSection from '@/components/persona-no-es-dato/un-caso-resuelto-section';
import PracticaVosSection from '@/components/persona-no-es-dato/practica-vos-section';
import PoneAPruebaSection from '@/components/persona-no-es-dato/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/persona-no-es-dato/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/persona-no-es-dato/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function LaPersonaNoEsUnDatoContent() {
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
          <DatosYDignidadSection />
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
