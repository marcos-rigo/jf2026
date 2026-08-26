'use client';

import { useEffect, useRef, useState } from 'react';
import { Fingerprint } from 'lucide-react';
import { TOC_SECTIONS } from '@/lib/huella-digital-content';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Índice de navegación por scroll — mismo mecanismo que components/ciudadania-digital/toc-nav.tsx
// (sticky en desktop, scroll-spy vía IntersectionObserver, barra horizontal compacta en mobile),
// con paleta clara para esta temática.
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
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile: barra horizontal compacta, sticky bajo el navbar ── */}
      <nav className="md:hidden sticky top-20 z-20 bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-x-auto">
        <div className="flex gap-2 px-4 py-3 w-max">
          {TOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              ref={(el) => {
                mobileItemRefs.current[section.id] = el;
              }}
              onClick={() => scrollToSection(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeId === section.id
                  ? 'bg-blue-500/10 border-blue-300 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-xs text-blue-500 font-mono">{section.number}</span>
              {section.shortLabel}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
