'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/ciudadania-digital/toc-nav';
import HeroSection from '@/components/ciudadania-digital/hero-section';
import HistoriaSection from '@/components/ciudadania-digital/historia-section';
import CaracteristicasSection from '@/components/ciudadania-digital/caracteristicas-section';
import TiposVariantesSection from '@/components/ciudadania-digital/tipos-variantes-section';
import Paso1Section from '@/components/ciudadania-digital/paso1-section';
import Paso2Section from '@/components/ciudadania-digital/paso2-section';
import Paso3Section from '@/components/ciudadania-digital/paso3-section';
import VentajasSection from '@/components/ciudadania-digital/ventajas-section';
import RiesgosSection from '@/components/ciudadania-digital/riesgos-section';
import AulaSection from '@/components/ciudadania-digital/aula-section';
import HerramientasSection, { CHECKLIST_ITEMS } from '@/components/ciudadania-digital/herramientas-section';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress, checklistProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

export default function CiudadaniaDigitalContent() {
  const userId = useAppStore((s) => s.user?.id ?? null);
  const progress = useTematicaProgress({
    tematicaId: 'ciudadania-digital',
    userId,
    computeProgress: checklistProgress('checklist', CHECKLIST_ITEMS.length),
  });
  const checkedItems = new Set(
    Array.isArray(progress.detalle.checklist) ? (progress.detalle.checklist as string[]) : []
  );

  const handleCheckboxChange = (id: string, _checked: boolean) => {
    progress.toggleChecklistItem('checklist', id);
  };

  return (
    <>
      <Navbar />
      <BackToDashboardButton />

      <div className="min-h-screen flex flex-col md:flex-row relative text-slate-300 bg-brand-dark">
        {/* Grid de fondo */}
        <div className="fixed inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] pointer-events-none opacity-20 z-0" />

        <TocNav />

        {/* Contenido — scroll continuo */}
        <main className="flex-1 min-w-0 overflow-x-hidden p-6 md:pt-24 md:px-12 md:pb-12 max-w-6xl mx-auto w-full relative z-10 space-y-16 md:space-y-24">
          <HeroSection />
          <HistoriaSection />
          <CaracteristicasSection />
          <TiposVariantesSection />

          {/* Ejemplos concretos: las 3 fases actuales */}
          <div id="ejemplos-concretos" className="scroll-mt-28 md:scroll-mt-32 space-y-16">
            <Paso1Section />
            <Paso2Section />
            <Paso3Section />
          </div>

          <VentajasSection />
          <RiesgosSection />
          <AulaSection />
          <HerramientasSection checkedItems={checkedItems} onCheckboxChange={handleCheckboxChange} />

          <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
        </main>
      </div>

      <Footer />
    </>
  );
}
