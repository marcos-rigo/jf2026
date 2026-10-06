'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/infancias-intimidad/toc-nav';
import IntroduccionSection from '@/components/infancias-intimidad/introduccion-section';
import LoQueVasALograrSection from '@/components/infancias-intimidad/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/infancias-intimidad/por-que-importa-section';
import DeDondePartimosSection from '@/components/infancias-intimidad/de-donde-partimos-section';
import ConsentimientoYDanoSinteticoSection from '@/components/infancias-intimidad/consentimiento-y-dano-sintetico-section';
import UnCasoResueltoSection from '@/components/infancias-intimidad/un-caso-resuelto-section';
import PracticaVosSection from '@/components/infancias-intimidad/practica-vos-section';
import PoneAPruebaSection from '@/components/infancias-intimidad/pone-a-prueba-section';
import LlevaloATuAulaSection from '@/components/infancias-intimidad/llevalo-a-tu-aula-section';
import RecursosYCierreSection from '@/components/infancias-intimidad/recursos-y-cierre-section';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function InfanciasIntimidadYDanosSinteticosContent() {
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
          <ConsentimientoYDanoSinteticoSection />
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
