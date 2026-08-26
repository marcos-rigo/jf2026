'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/huella-digital/toc-nav';
import HeroSection from '@/components/huella-digital/hero-section';
import HistoriaSection from '@/components/huella-digital/historia-section';
import CaracteristicasSection from '@/components/huella-digital/caracteristicas-section';
import TiposVariantesSection from '@/components/huella-digital/tipos-variantes-section';
import EjemplosSection from '@/components/huella-digital/ejemplos-section';
import VentajasSection from '@/components/huella-digital/ventajas-section';
import RiesgosSection from '@/components/huella-digital/riesgos-section';
import AulaSection from '@/components/huella-digital/aula-section';
import RecursosSection from '@/components/huella-digital/recursos-section';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress, checklistProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';

export default function HuellaDigitalContent() {
  const userId = useAppStore((s) => s.user?.id ?? null);
  const progress = useTematicaProgress({
    tematicaId: 'huella-digital',
    userId,
    computeProgress: checklistProgress('checklist', 3),
  });
  const checkedItems = new Set(
    Array.isArray(progress.detalle.checklist) ? (progress.detalle.checklist as string[]) : []
  );

  function toggleCheck(id: string) {
    progress.toggleChecklistItem('checklist', id);
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row relative bg-slate-50">
        <TocNav />

        <main className="flex-1 min-w-0 overflow-x-hidden px-4 sm:px-6 lg:px-8 md:pt-24 pt-28 pb-16 max-w-4xl mx-auto w-full space-y-16 md:space-y-20">
          <HeroSection />
          <HistoriaSection />
          <CaracteristicasSection />
          <TiposVariantesSection />
          <EjemplosSection checkedItems={checkedItems} onToggleCheck={toggleCheck} />
          <VentajasSection />
          <RiesgosSection />
          <AulaSection />
          <RecursosSection progressPct={progress.porcentaje} completedCount={checkedItems.size} />

          <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
        </main>
      </div>

      <Footer />
    </>
  );
}
