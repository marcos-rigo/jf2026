'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/ciberdelitos-digitales/toc-nav';
import IntroduccionSection from '@/components/ciberdelitos-digitales/introduccion-section';
import LoQueVasALograrSection from '@/components/ciberdelitos-digitales/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/ciberdelitos-digitales/por-que-importa-section';
import DeDondePartimosSection from '@/components/ciberdelitos-digitales/de-donde-partimos-section';
import DelitoYEntornoDigitalSection from '@/components/ciberdelitos-digitales/delito-y-entorno-digital-section';
import UnCasoResueltoSection from '@/components/ciberdelitos-digitales/un-caso-resuelto-section';
import PracticaVosSection from '@/components/ciberdelitos-digitales/practica-vos-section';
import PoneAPruebaSection from '@/components/ciberdelitos-digitales/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/ciberdelitos-digitales/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/ciberdelitos-digitales/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function CiberdelitosDigitalesContent() {
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
          <DelitoYEntornoDigitalSection />
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
