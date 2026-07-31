'use client'

import { CheckCircle2 } from 'lucide-react'

interface TematicaCompletarButtonProps {
  completada: boolean
  onComplete: () => void
}

// Botón manual para temáticas sin quiz/checklist medible: el único progreso
// posible es que el usuario diga "ya lo leí/vi".
export function TematicaCompletarButton({ completada, onComplete }: TematicaCompletarButtonProps) {
  return (
    <div className="flex justify-center py-14 px-6">
      <button
        type="button"
        onClick={onComplete}
        disabled={completada}
        className={[
          'inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300',
          completada
            ? 'bg-green-50 text-green-700 border-2 border-green-200 cursor-default'
            : 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/25',
        ].join(' ')}
      >
        <CheckCircle2 className="w-5 h-5" />
        {completada ? 'Temática completada' : 'Marcar como completada'}
      </button>
    </div>
  )
}
