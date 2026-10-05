'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/universidad-ia/toc-nav';
import IntroduccionSection from '@/components/universidad-ia/introduccion-section';
import LoQueVasALograrSection from '@/components/universidad-ia/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/universidad-ia/por-que-importa-section';
import DeDondePartimosSection from '@/components/universidad-ia/de-donde-partimos-section';
import IntegridadAcademicaYCriterioSection from '@/components/universidad-ia/integridad-academica-y-criterio-section';
import UnCasoResueltoSection from '@/components/universidad-ia/un-caso-resuelto-section';
import PracticaVosSection from '@/components/universidad-ia/practica-vos-section';
import PoneAPruebaSection from '@/components/universidad-ia/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/universidad-ia/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/universidad-ia/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function LaUniversidadAnteLaInteligenciaArtificialContent() {
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
          <IntegridadAcademicaYCriterioSection />
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
