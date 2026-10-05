'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/pedagogica-creativa/toc-nav';
import IntroduccionSection from '@/components/pedagogica-creativa/introduccion-section';
import LoQueVasALograrSection from '@/components/pedagogica-creativa/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/pedagogica-creativa/por-que-importa-section';
import DeDondePartimosSection from '@/components/pedagogica-creativa/de-donde-partimos-section';
import AprenderCrearCuestionarSection from '@/components/pedagogica-creativa/aprender-crear-cuestionar-section';
import UnCasoResueltoSection from '@/components/pedagogica-creativa/un-caso-resuelto-section';
import PracticaVosSection from '@/components/pedagogica-creativa/practica-vos-section';
import PoneAPruebaSection from '@/components/pedagogica-creativa/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/pedagogica-creativa/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/pedagogica-creativa/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function PedagogicaCreativaContent() {
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
          <AprenderCrearCuestionarSection />
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
