'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TOC_SECTIONS } from '@/lib/ciudadania-digital-content';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Índice de navegación por scroll (reemplaza el sidebar de tabs anterior).
// Nunca oculta/muestra contenido — solo hace scroll a cada sección y resalta
// cuál está visible (scroll-spy vía IntersectionObserver).
//
// Desktop: sidebar vertical fijo (igual look que el nav anterior).
// Mobile: selector desplegable — un botón sticky con la sección activa que, al
// tocarlo, abre la lista completa en vertical (en vez de una tira horizontal
// con scroll, difícil de leer con 10 secciones amontonadas).
export function TocNav() {
  const [activeId, setActiveId] = useState(TOC_SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      {/* ── Desktop: sidebar vertical fijo y compacto — las 10 secciones entran
          sin scroll interno en una pantalla de laptop estándar (~800px de alto útil) ── */}
      <nav className="hidden md:flex w-64 pt-20 backdrop-blur-xl bg-white/80 border-r border-slate-200 flex-col shadow-xl h-screen sticky top-0 shrink-0 z-10 overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70">
          <h1 className="text-base font-bold text-brand-navy flex items-center gap-2.5 font-display">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0E7490] to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(14,116,144,0.3)] shrink-0">
              <span className="text-sm">🛡️</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-slate-600">
              C-Digital
            </span>
          </h1>
        </div>

        <div className="flex flex-col p-2.5 gap-0.5">
          {TOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
              className={`w-full text-left px-3.5 py-2 rounded-lg font-medium transition-all border-l-2 font-sans text-sm leading-tight ${
                activeId === section.id
                  ? 'bg-gradient-to-r from-[#0E7490]/15 to-transparent border-l-[#0E7490] text-brand-navy'
                  : 'hover:bg-slate-100 text-slate-600 hover:text-brand-navy border-l-transparent hover:border-l-slate-300'
              }`}
            >
              <span className="opacity-80 mr-1.5 text-xs text-[#0E7490]">{section.number}</span>
              {section.label}
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
          className="w-full flex items-center justify-between gap-3 px-4 py-3 backdrop-blur-xl bg-white/90 border-b border-slate-200"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="shrink-0 text-xs font-mono font-semibold text-[#0E7490]">
              {activeIndex + 1}/{TOC_SECTIONS.length}
            </span>
            <span className="truncate text-sm font-semibold text-brand-navy">{activeSection.label}</span>
          </span>
          <span
            className="relative shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{ backgroundColor: '#0E7490', boxShadow: '0 0 12px #0E7490aa, 0 0 2px #0E7490' }}
          >
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ backgroundColor: '#0E7490', opacity: 0.55 }}
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
                className={`w-full flex items-center gap-3 text-left px-4 py-3 border-b border-slate-100 last:border-b-0 font-sans text-sm transition-colors ${
                  activeId === section.id
                    ? 'bg-[#0E7490]/10 text-brand-navy font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="w-6 shrink-0 text-xs font-mono text-[#0E7490]">{section.number}</span>
                {section.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
