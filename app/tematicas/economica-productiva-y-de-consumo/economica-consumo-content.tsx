'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/economica-consumo/toc-nav';
import IntroduccionSection from '@/components/economica-consumo/introduccion-section';
import LoQueVasALograrSection from '@/components/economica-consumo/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/economica-consumo/por-que-importa-section';
import DeDondePartimosSection from '@/components/economica-consumo/de-donde-partimos-section';
import CondicionesYAutonomiaSection from '@/components/economica-consumo/condiciones-y-autonomia-section';
import UnCasoResueltoSection from '@/components/economica-consumo/un-caso-resuelto-section';
import PracticaVosSection from '@/components/economica-consumo/practica-vos-section';
import PoneAPruebaSection from '@/components/economica-consumo/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/economica-consumo/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/economica-consumo/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function EconomicaConsumoContent() {
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
          <CondicionesYAutonomiaSection />
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
