'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/victimologia-digital/toc-nav';
import IntroduccionSection from '@/components/victimologia-digital/introduccion-section';
import LoQueVasALograrSection from '@/components/victimologia-digital/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/victimologia-digital/por-que-importa-section';
import DeDondePartimosSection from '@/components/victimologia-digital/de-donde-partimos-section';
import DespuesDelDanoSection from '@/components/victimologia-digital/despues-del-dano-section';
import UnCasoResueltoSection from '@/components/victimologia-digital/un-caso-resuelto-section';
import PracticaVosSection from '@/components/victimologia-digital/practica-vos-section';
import PoneAPruebaSection from '@/components/victimologia-digital/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/victimologia-digital/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/victimologia-digital/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function VictimologiaDigitalContent() {
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
          <DespuesDelDanoSection />
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
