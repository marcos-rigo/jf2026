'use client'

import { Eye, EyeOff } from 'lucide-react'

export function PasswordField({ show, onToggle, className, ...props }: {
  show: boolean; onToggle: () => void
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input type={show ? 'text' : 'password'} className={[className, 'pr-10'].join(' ')} {...props} />
      <button
        type="button"
        onClick={onToggle}
        tabIndex={-1}
        aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8ca9be] hover:text-[#4272BB] transition-colors"
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  )
}
