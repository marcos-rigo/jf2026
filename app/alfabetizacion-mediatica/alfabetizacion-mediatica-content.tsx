'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ReadingProgressBar } from '@/components/reading-progress-bar';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress, checklistProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';
import { CHECKLIST_ITEMS } from '@/lib/alfabetizacion-mediatica-content';

import { HeroSection } from '@/components/alfabetizacion-mediatica/hero-section';
import { HistoriaSection } from '@/components/alfabetizacion-mediatica/historia-section';
import { CaracteristicasSection } from '@/components/alfabetizacion-mediatica/caracteristicas-section';
import { TiposVariantesSection } from '@/components/alfabetizacion-mediatica/tipos-variantes-section';
import { EjemplosSection } from '@/components/alfabetizacion-mediatica/ejemplos-section';
import { VentajasSection } from '@/components/alfabetizacion-mediatica/ventajas-section';
import { RiesgosSection } from '@/components/alfabetizacion-mediatica/riesgos-section';
import { AulaSection } from '@/components/alfabetizacion-mediatica/aula-section';
import { RecursosSection } from '@/components/alfabetizacion-mediatica/recursos-section';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AlfabetizacionMediaticaContent() {
  const userId = useAppStore((s) => s.user?.id ?? null);
  const progress = useTematicaProgress({
    tematicaId: 'alfabetizacion-mediatica',
    userId,
    computeProgress: checklistProgress('checklist', CHECKLIST_ITEMS.length),
  });
  const checkedItems = new Set(
    Array.isArray(progress.detalle.checklist) ? (progress.detalle.checklist as string[]) : []
  );

  function handleCheckboxChange(id: string) {
    progress.toggleChecklistItem('checklist', id);
  }

  return (
    <>
      <Navbar />
      <ReadingProgressBar />
      <BackToDashboardButton />

      {/* Ambient blobs con colores de marca */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="ami-blob bg-brand-blue/20 w-[500px] h-[500px] rounded-full -top-32 -left-32 blur-[100px]" />
        <div className="ami-blob bg-brand-pink/15 w-[600px] h-[600px] rounded-full top-[20%] -right-40 blur-[120px] [animation-delay:-5s]" />
        <div className="ami-blob bg-brand-navy/10 w-[400px] h-[400px] rounded-full bottom-[5%] left-[10%] blur-[80px] [animation-delay:-3s]" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      <main className="bg-slate-50/80 text-slate-800 antialiased min-h-screen backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-20 sm:space-y-24">
          <HeroSection />
          <HistoriaSection />
          <CaracteristicasSection />
          <TiposVariantesSection />
          <EjemplosSection />
          <VentajasSection />
          <RiesgosSection />
          <AulaSection />
          <RecursosSection checkedItems={checkedItems} onCheckboxChange={handleCheckboxChange} />

          <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
        </div>
      </main>

      <Footer />
    </>
  );
}
