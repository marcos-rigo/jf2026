'use client';

import { useEffect, useRef, useState } from 'react';
import { TOC_SECTIONS } from '@/lib/ciudadania-digital-content';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Índice de navegación por scroll (reemplaza el sidebar de tabs anterior).
// Nunca oculta/muestra contenido — solo hace scroll a cada sección y resalta
// cuál está visible (scroll-spy vía IntersectionObserver).
//
// Desktop: sidebar vertical fijo (igual look que el nav anterior).
// Mobile: barra horizontal compacta y scrolleable — 9 secciones no entran como
// texto completo en una fila, así que acá se usan las etiquetas cortas
// (`shortLabel`) en vez del label completo que usa desktop.
export function TocNav() {
  const [activeId, setActiveId] = useState(TOC_SECTIONS[0].id);
  const mobileItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

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

  useEffect(() => {
    mobileItemRefs.current[activeId]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeId]);

  return (
    <>
      {/* ── Desktop: sidebar vertical fijo y compacto — las 9 secciones entran
          sin scroll interno en una pantalla de laptop estándar (~800px de alto útil) ── */}
      <nav className="hidden md:flex w-64 pt-20 backdrop-blur-xl bg-[#141A28]/70 border-r border-slate-800 flex-col shadow-2xl h-screen sticky top-0 shrink-0 z-10 overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-800/50 bg-slate-900/50">
          <h1 className="text-base font-bold text-white flex items-center gap-2.5 font-display">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF] to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] shrink-0">
              <span className="text-sm">🛡️</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
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
                  ? 'bg-gradient-to-r from-[#00F0FF]/20 to-transparent border-l-[#00F0FF] text-white'
                  : 'hover:bg-slate-800/50 text-slate-400 hover:text-white border-l-transparent hover:border-l-slate-600'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-xs text-[#00F0FF]">{section.number}</span>
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile: barra horizontal compacta, sticky bajo el navbar ── */}
      <nav className="md:hidden sticky top-20 z-20 backdrop-blur-xl bg-[#141A28]/90 border-b border-slate-800 overflow-x-auto">
        <div className="flex gap-2 px-4 py-3 w-max">
          {TOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              ref={(el) => {
                mobileItemRefs.current[section.id] = el;
              }}
              onClick={() => scrollToSection(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border font-sans ${
                activeId === section.id
                  ? 'bg-[#00F0FF]/20 border-[#00F0FF]/50 text-white'
                  : 'bg-slate-800/40 border-slate-700 text-slate-400'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-xs text-[#00F0FF]">{section.number}</span>
              {section.shortLabel}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
