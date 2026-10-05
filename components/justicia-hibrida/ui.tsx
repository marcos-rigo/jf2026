'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { resolveContenido } from '@/lib/justicia-hibrida-content';
import { useAudienciaStore } from '@/lib/audiencia-store';

// Contenido de la página para la audiencia activa (fallback 'docentes', ver
// lib/justicia-hibrida-content.ts).
export function useContenido() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  return resolveContenido(audienciaActual);
}

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 md:scroll-mt-32 space-y-6">
      <header>
        <p className="text-xs font-mono font-semibold tracking-widest text-brand-blue">{number}</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mt-1">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-lg md:text-xl font-bold text-brand-navy pt-2">{children}</h3>;
}

// Parsea énfasis en formato Markdown (**negrita**, *cursiva*) dentro de un string y lo
// renderiza como <strong>/<em>, sin dejar nunca asteriscos literales en pantalla.
export function Enfasis({ children }: { children: string }) {
  const partes = children.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((p) => p !== '');
  return (
    <>
      {partes.map((parte, i) => {
        if (parte.startsWith('**') && parte.endsWith('**')) {
          return <strong key={i}>{parte.slice(2, -2)}</strong>;
        }
        if (parte.startsWith('*') && parte.endsWith('*')) {
          return <em key={i}>{parte.slice(1, -1)}</em>;
        }
        return <span key={i}>{parte}</span>;
      })}
    </>
  );
}

export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`leading-relaxed text-slate-700 ${className}`}>
      {typeof children === 'string' ? <Enfasis>{children}</Enfasis> : children}
    </p>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm italic text-slate-500 leading-relaxed">
      {typeof children === 'string' ? <Enfasis>{children}</Enfasis> : children}
    </p>
  );
}

export function Callout({
  title,
  children,
  tone = 'blue',
}: {
  title?: string;
  children: ReactNode;
  tone?: 'blue' | 'pink' | 'navy';
}) {
  const tones = {
    blue: 'border-brand-blue bg-white',
    pink: 'border-brand-pink bg-white',
    navy: 'border-brand-navy bg-brand-navy text-white',
  };
  return (
    <div className={`rounded-xl border-l-4 p-5 shadow-sm ${tones[tone]}`}>
      {title && <p className="font-display font-bold mb-2">{title}</p>}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

export function Reveal({ label, hideLabel, children }: { label: string; hideLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
      >
        {open ? hideLabel : label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 space-y-3">{children}</div>}
    </div>
  );
}

const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40';

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  label?: string;
}) {
  return (
    <textarea
      aria-label={label ?? placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={fieldClass}
    />
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  label?: string;
}) {
  return (
    <input
      aria-label={label ?? placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={fieldClass}
    />
  );
}

// Recuadro destacado con título y varios párrafos cortos.
export function RecuadroDestacado({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm space-y-3">
      <p className="font-display font-bold text-brand-navy">{title}</p>
      {paragraphs.map((p) => (
        <P key={p}>{p}</P>
      ))}
    </div>
  );
}

// Lista numerada simple, reinicia en 1 en cada uso.
export function ListaNumerada({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 rounded-xl bg-white border border-slate-200 p-4">
          <span className="font-display font-bold text-brand-blue w-6 shrink-0">{i + 1}</span>
          <P>{item}</P>
        </li>
      ))}
    </ol>
  );
}

// Lista con viñetas simple.
export function ListaViñetas({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item) => (
        <li key={item} className="leading-relaxed text-slate-700">
          <Enfasis>{item}</Enfasis>
        </li>
      ))}
    </ul>
  );
}
