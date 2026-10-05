'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Fingerprint } from 'lucide-react';
import { TOC_SECTIONS, type TocSection } from '@/lib/huella-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Índice de navegación por scroll — mismo mecanismo que components/ciudadania-digital/toc-nav.tsx
// (sticky en desktop, scroll-spy vía IntersectionObserver, selector desplegable en mobile),
// con paleta clara para esta temática.
export function TocNav() {
  const [activeId, setActiveId] = useState(TOC_SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);

  function label(section: TocSection) {
    return section.labelAudiencia ? resolveTexto(section.labelAudiencia, audienciaActual, 'docentes') : section.label;
  }

  const activeIndex = Math.max(0, TOC_SECTIONS.findIndex((s) => s.id === activeId));
  const activeSection = TOC_SECTIONS[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    TOC_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Cierra el desplegable mobile cuando el scroll-spy cambia de sección
  // (el usuario sigue desplazándose por la página con el menú abierto).
  useEffect(() => {
    setMobileOpen(false);
  }, [activeId]);

  return (
    <>
      {/* ── Desktop: sidebar vertical fijo y compacto ── */}
      <nav className="hidden md:flex w-64 pt-20 bg-white/80 backdrop-blur-xl border-r border-slate-200 flex-col shadow-sm h-screen sticky top-0 shrink-0 z-10 overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/80">
          <h1 className="text-base font-bold text-slate-900 flex items-center gap-2.5 font-display">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md shrink-0">
              <Fingerprint className="w-4 h-4 text-white" />
            </div>
            <span>Huella Digital</span>
          </h1>
        </div>

        <div className="flex flex-col p-2.5 gap-0.5">
          {TOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
              className={`w-full text-left px-3.5 py-2 rounded-lg font-medium transition-all border-l-2 text-sm leading-tight ${
                activeId === section.id
                  ? 'bg-gradient-to-r from-blue-500/10 to-transparent border-l-blue-500 text-slate-900'
                  : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900 border-l-transparent hover:border-l-slate-300'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-xs text-blue-500 font-mono">{section.number}</span>
              {label(section)}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile: selector desplegable, sticky bajo el navbar. Al tocar el botón
          (con el indicador neón que marca que es interactivo) despliega la lista completa
          empujando el contenido hacia abajo — nunca lo tapa. Elegir una sección cierra el
          menú al instante y deja el contenido visible. ── */}
      <nav className="md:hidden sticky top-20 z-20">
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="shrink-0 text-xs font-mono font-semibold text-blue-500">
              {activeIndex + 1}/{TOC_SECTIONS.length}
            </span>
            <span className="truncate text-sm font-semibold text-slate-900">{label(activeSection)}</span>
          </span>
          <span
            className="relative shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ backgroundColor: '#3B82F6', boxShadow: '0 0 12px #3B82F6aa, 0 0 2px #3B82F6' }}
          >
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ backgroundColor: '#3B82F6', opacity: 0.55 }}
              aria-hidden
            />
            <ChevronDown
              className={`relative w-4 h-4 text-white transition-transform duration-300 ${mobileOpen ? 'rotate-180' : ''}`}
            />
          </span>
        </button>

        {mobileOpen && (
          <div className="bg-white border-b border-slate-200 shadow-lg max-h-[60vh] overflow-y-auto">
            {TOC_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setMobileOpen(false);
                }}
                aria-current={activeId === section.id ? 'true' : undefined}
                className={`w-full flex items-center gap-3 text-left px-4 py-3 border-b border-slate-100 last:border-b-0 text-sm transition-colors ${
                  activeId === section.id
                    ? 'bg-blue-500/10 text-slate-900 font-semibold'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span className="w-6 shrink-0 text-xs font-mono text-blue-500">{section.number}</span>
                {label(section)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
