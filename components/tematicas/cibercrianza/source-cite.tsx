import { ExternalLink } from "lucide-react"
import type { Source } from "@/lib/cibercrianza-content"

interface SourceCiteProps {
  source: Source
  className?: string
}

// Cita de fuente para "Cibercrianza" — misma interfaz que components/huella-digital/source-cite.tsx,
// deliberadamente duplicada con tipografía lc-mono y paleta neon-blue/pink para calzar con la
// estética "Light Cyberpunk" propia de esta página.
export function SourceCite({ source, className = "" }: SourceCiteProps) {
  const base = "lc-mono inline-flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-400"

  const content = (
    <>
      <span className="opacity-70" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? "italic" : ""}>{source.author}</span>
      {source.note && <span className="opacity-80">— {source.note}</span>}
      {source.unverified && (
        <span
          className="opacity-80 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border"
          style={{ borderColor: "rgba(217,119,6,.35)", color: "#D97706" }}
        >
          sin verificar
        </span>
      )}
    </>
  )

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} hover:text-brand-blue transition-colors ${className}`}
        style={{ textShadow: "none" }}
      >
        {content}
        <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
      </a>
    )
  }

  return <span className={`${base} ${className}`}>{content}</span>
}
