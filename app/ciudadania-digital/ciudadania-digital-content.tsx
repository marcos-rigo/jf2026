'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/ciudadania-digital/toc-nav';
import IntroduccionSection from '@/components/ciudadania-digital/introduccion-section';
import LoQueVasALograrSection from '@/components/ciudadania-digital/lo-que-vas-a-lograr-section';
import PorQueImportaSection from '@/components/ciudadania-digital/por-que-importa-section';
import DeDondePartimosSection from '@/components/ciudadania-digital/de-donde-partimos-section';
import PoliedroSection from '@/components/ciudadania-digital/poliedro-section';
import CasoResueltoSection from '@/components/ciudadania-digital/caso-resuelto-section';
import PracticaSection from '@/components/ciudadania-digital/practica-section';
import PoneAPruebaSection from '@/components/ciudadania-digital/pone-a-prueba-section';
import LlevaloAlAulaSection from '@/components/ciudadania-digital/llevalo-al-aula-section';
import RecursosYCierreSection from '@/components/ciudadania-digital/recursos-y-cierre-section';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function CiudadaniaDigitalContent() {
  const userId = useAppStore((s) => s.user?.id ?? null);
  // Sin quiz/checklist medible en la plataforma todavía: solo el botón manual "Marcar como completada".
  const progress = useTematicaProgress({ tematicaId: 'ciudadania-digital', userId });

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
          <PoliedroSection />
          <CasoResueltoSection />
          <PracticaSection />
          <PoneAPruebaSection />
          <LlevaloAlAulaSection />
          <RecursosYCierreSection />

          <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
        </main>
      </div>

      <Footer />
    </>
  );
}
