'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/escuela-civica/toc-nav';
import IntroduccionSection from '@/components/escuela-civica/introduccion-section';
import LoQueVasALograrSection from '@/components/escuela-civica/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/escuela-civica/por-que-importa-section';
import DeDondePartimosSection from '@/components/escuela-civica/de-donde-partimos-section';
import AprendizajeCivicoDigitalSection from '@/components/escuela-civica/aprendizaje-civico-digital-section';
import UnCasoResueltoSection from '@/components/escuela-civica/un-caso-resuelto-section';
import PracticaVosSection from '@/components/escuela-civica/practica-vos-section';
import PoneAPruebaSection from '@/components/escuela-civica/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/escuela-civica/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/escuela-civica/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function LaEscuelaComoEspacioCivicoContent() {
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
          <AprendizajeCivicoDigitalSection />
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
