'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/autonomia-progresiva/toc-nav';
import IntroduccionSection from '@/components/autonomia-progresiva/introduccion-section';
import LoQueVasALograrSection from '@/components/autonomia-progresiva/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/autonomia-progresiva/por-que-importa-section';
import DeDondePartimosSection from '@/components/autonomia-progresiva/de-donde-partimos-section';
import ConfianzaYEtapasSection from '@/components/autonomia-progresiva/confianza-y-etapas-section';
import UnCasoResueltoSection from '@/components/autonomia-progresiva/un-caso-resuelto-section';
import PracticaVosSection from '@/components/autonomia-progresiva/practica-vos-section';
import PoneAPruebaSection from '@/components/autonomia-progresiva/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/autonomia-progresiva/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/autonomia-progresiva/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function AutonomiaProgresivaFamiliarContent() {
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
          <ConfianzaYEtapasSection />
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
