'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { TOC_SECTIONS, TIER_LABELS } from '@/lib/alfabetizacion-digital-content';
import { BookOpen } from 'lucide-react';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** 4 segmentos que se llenan según el nivel del recorrido (1-4) — ver TIER_LABELS. */
function TierBar({ tier }: { tier: 1 | 2 | 3 | 4 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4].map((seg) => (
        <span
          key={seg}
          className={`w-1.5 h-3 rounded-sm transition-colors ${seg <= tier ? 'bg-brand-blue' : 'bg-slate-200'}`}
        />
      ))}
    </span>
  );
}

export function TocNav() {
  const [activeId, setActiveId] = useState(TOC_SECTIONS[0].id);
  const mobileItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const tiers = useMemo(() => {
    const groups: { tier: 1 | 2 | 3 | 4; sections: typeof TOC_SECTIONS }[] = [];
    for (const section of TOC_SECTIONS) {
      const last = groups[groups.length - 1];
      if (last && last.tier === section.tier) {
        last.sections.push(section);
      } else {
        groups.push({ tier: section.tier, sections: [section] });
      }
    }
    return groups;
  }, []);

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
      {/* ── Desktop: Sidebar vertical con recorrido agrupado en 4 niveles ── */}
      <nav className="hidden md:flex w-72 pt-20 backdrop-blur-xl bg-white/85 border-r border-slate-200/80 flex-col shadow-[4px_0_24px_rgba(0,50,87,0.04)] h-screen sticky top-0 shrink-0 z-10 overflow-y-auto">
        <div className="px-5 py-4 border-b border-slate-200/60 bg-brand-light-blue/50">
          <h1 className="text-base font-bold text-brand-navy flex items-center gap-2.5 font-display">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-md shadow-brand-blue/25 shrink-0 text-white">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span>Alf. Digital</span>
          </h1>
          <p className="mt-1.5 text-xs font-mono text-slate-500 pl-[42px]">Tu recorrido, en 4 niveles</p>
        </div>

        <div className="flex flex-col p-3 gap-4">
          {tiers.map(({ tier, sections }) => (
            <div key={tier} className="space-y-1">
              <div className="flex items-center gap-2 px-2 py-1 text-slate-400">
                <TierBar tier={tier} />
                <span className="text-[0.68rem] font-mono uppercase tracking-widest font-bold">{TIER_LABELS[tier]}</span>
              </div>
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={activeId === section.id ? 'true' : undefined}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg font-medium transition-all border-l-2 font-sans text-base leading-tight outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1 ${
                      activeId === section.id
                        ? 'bg-gradient-to-r from-brand-blue/10 via-brand-blue/5 to-transparent border-l-brand-blue text-brand-navy font-bold shadow-sm'
                        : 'hover:bg-slate-100/70 text-slate-600 hover:text-brand-navy border-l-transparent'
                    }`}
                  >
                    <span className="opacity-70 mr-2 text-sm font-mono text-brand-blue">{section.number}</span>
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
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
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-base font-medium transition-all border font-sans outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1 ${
                activeId === section.id
                  ? 'bg-brand-blue/10 border-brand-blue text-brand-navy font-semibold shadow-sm'
                  : 'bg-slate-100/80 border-slate-200 text-slate-600'
              }`}
            >
              <span className="opacity-70 mr-1.5 text-sm font-mono text-brand-blue">{section.number}</span>
              {section.shortLabel}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
