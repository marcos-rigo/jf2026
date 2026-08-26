'use client';

import { useEffect, useRef, useState } from 'react';
import { TOC_SECTIONS } from '@/lib/alfabetizacion-digital-content';
import { BookOpen } from 'lucide-react';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
      {/* ── Desktop: Sidebar vertical blanco/lúmino premium ── */}
      <nav className="hidden md:flex w-64 pt-20 backdrop-blur-xl bg-white/80 border-r border-slate-200/80 flex-col shadow-[4px_0_24px_rgba(15,23,42,0.03)] h-screen sticky top-0 shrink-0 z-10 overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-200/60 bg-sky-50/40">
          <h1 className="text-base font-bold text-slate-900 flex items-center gap-2.5 font-display">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0 text-white">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-sky-900 to-blue-800 font-extrabold">
              Alf. Digital
            </span>
          </h1>
        </div>

        <div className="flex flex-col p-2.5 gap-1">
          {TOC_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg font-medium transition-all border-l-2 font-sans text-sm leading-tight ${
                activeId === section.id
                  ? 'bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border-l-sky-600 text-sky-950 font-bold shadow-sm'
                  : 'hover:bg-slate-100/70 text-slate-600 hover:text-slate-900 border-l-transparent'
              }`}
            >
              <span className="opacity-70 mr-2 text-xs font-mono text-sky-600">{section.number}</span>
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile: Barra horizontal sticky sobre fondo claro ── */}
      <nav className="md:hidden sticky top-20 z-20 backdrop-blur-xl bg-white/95 border-b border-slate-200/80 overflow-x-auto shadow-sm">
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
                  ? 'bg-sky-500/10 border-sky-400 text-sky-900 font-semibold shadow-sm'
                  : 'bg-slate-100/80 border-slate-200 text-slate-600'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-xs font-mono text-sky-600">{section.number}</span>
              {section.shortLabel}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
