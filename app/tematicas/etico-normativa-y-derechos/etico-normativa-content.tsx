'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/etico-normativa/toc-nav';
import IntroduccionSection from '@/components/etico-normativa/introduccion-section';
import LoQueVasALograrSection from '@/components/etico-normativa/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/etico-normativa/por-que-importa-section';
import DeDondePartimosSection from '@/components/etico-normativa/de-donde-partimos-section';
import CriteriosDeLegitimidadSection from '@/components/etico-normativa/criterios-de-legitimidad-section';
import UnCasoResueltoSection from '@/components/etico-normativa/un-caso-resuelto-section';
import PracticaVosSection from '@/components/etico-normativa/practica-vos-section';
import PoneAPruebaSection from '@/components/etico-normativa/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/etico-normativa/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/etico-normativa/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function EticoNormativaContent() {
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
          <CriteriosDeLegitimidadSection />
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
