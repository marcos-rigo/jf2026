'use client';

import { type ReactNode, Fragment } from 'react';
import { resolveContenido } from '@/lib/socio-comunicacional-content';
import { useAudienciaStore } from '@/lib/audiencia-store';

// Contenido de la página para la audiencia activa (fallback 'docentes', ver
// lib/socio-comunicacional-content.ts).
export function useContenido() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  return resolveContenido(audienciaActual);
}

// Parser mínimo de énfasis Markdown (**negrita**, *cursiva*) para que el contenido
// transcripto de los prompts se renderice como negrita/cursiva real y nunca como
// asteriscos literales. No usa dangerouslySetInnerHTML.
export function parseRichText(text: string): ReactNode[] {
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<em key={key++}>{match[2]}</em>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function RichText({ text }: { text: string }) {
  return <Fragment>{parseRichText(text)}</Fragment>;
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

export function P({ children, className = '' }: { children: string; className?: string }) {
  return (
    <p className={`leading-relaxed text-slate-700 ${className}`}>
      <RichText text={children} />
    </p>
  );
}

export function Note({ children }: { children: string }) {
  return (
    <p className="text-sm italic text-slate-500 leading-relaxed">
      <RichText text={children} />
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

// Recuadro destacado con título y varios párrafos cortos (ej. "Lo que convivir NO es").
export function RecuadroDestacado({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm space-y-3">
      <p className="font-display font-bold text-brand-navy">{title}</p>
      {paragraphs.map((p) => (
        <p key={p} className="leading-relaxed text-slate-700">
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

// Lista numerada simple. Cada instancia es su propio <ol>, así que cuando aparece
// más de una vez en la misma sección (sección 5 de esta página) cada una reinicia
// en 1 por sí sola — no hace falta manejar un `start` explícito.
export function ListaNumerada({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 rounded-xl bg-white border border-slate-200 p-4">
          <span className="font-display font-bold text-brand-blue w-6 shrink-0">{i + 1}</span>
          <p className="leading-relaxed text-slate-700">
            <RichText text={item} />
          </p>
        </li>
      ))}
    </ol>
  );
}

// Lista con viñetas, con énfasis real (ej. "Audiencia:", "Persistencia:", "Circulación:").
export function ListaViñetas({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

// Tabla reutilizable de 2 columnas (ej. rúbrica de desempeño).
export function TablaDosColumnas({
  encabezados,
  filas,
}: {
  encabezados: [string, string];
  filas: { celdas: [string, string] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {encabezados.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {filas.map((f, i) => (
            <tr key={i} className="align-top">
              <td className="px-4 py-3 font-semibold text-brand-navy whitespace-nowrap">
                <RichText text={f.celdas[0]} />
              </td>
              <td className="px-4 py-3 text-slate-700">
                <RichText text={f.celdas[1]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
