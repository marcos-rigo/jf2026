'use client'

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft, User, MapPin, Lock, ShieldCheck, ShieldAlert,
  KeyRound, LogOut, CheckCircle2, Loader2, BadgeCheck, Camera, Trash2, X,
} from 'lucide-react'
import { useAppStore } from '@/lib/ciudadania/app-store'
import { PasswordField } from '@/components/platform/PasswordField'
import { compressImage } from '@/lib/utils/compress-image'

const GENERO_OPTIONS = ['Femenino', 'Masculino', 'No binario', 'Prefiero no decir', 'Otro']
const NIVEL_EDUCATIVO_OPTIONS = ['Primario', 'Secundario', 'Terciario', 'Universitario', 'Posgrado', 'Otro']

function inputCls(err?: boolean) {
  return [
    'w-full px-3 py-2.5 rounded-xl border-2 text-[#1A2A36] text-sm bg-[#F5F8FC]',
    'placeholder-[#9eb5c4] transition-all outline-none',
    err
      ? 'border-red-400 bg-red-50'
      : 'border-[#d3e2f0] focus:border-[#4272BB] focus:ring-2 focus:ring-[#4272BB]/10',
  ].join(' ')
}

function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function Section({ icon: Icon, title, description, children }: {
  icon: typeof User; title: string; description?: string; children: React.ReactNode
}) {
  return (
    <section className="bg-white rounded-2xl border border-[#d3e2f0] shadow-sm overflow-hidden">
      <div className="flex items-start gap-3 px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-[#eef2f6]">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#003257,#4272BB)' }}>
          <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-black text-[#003257] leading-tight">{title}</h2>
          {description && <p className="text-[#5a7a8e] text-xs sm:text-sm mt-0.5">{description}</p>}
        </div>
      </div>
      <div className="px-5 sm:px-6 py-5">{children}</div>
    </section>
  )
}

function Banner({ kind, message }: { kind: 'success' | 'error'; message: string }) {
  return (
    <div className={[
      'flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium mb-4',
      kind === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200',
    ].join(' ')}>
      {kind === 'success' ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <ShieldAlert className="w-4 h-4 flex-shrink-0" />}
      {message}
    </div>
  )
}

function LockedField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide flex items-center gap-1">
        <Lock className="w-3 h-3 text-[#8ca9be]" /> {label}
      </label>
      <div className="w-full px-3 py-2.5 rounded-xl border-2 border-[#e6edf3] bg-[#F5F8FC] text-[#5a7a8e] text-sm cursor-not-allowed">
        {value}
      </div>
    </div>
  )
}

export default function PerfilPage() {
  const router = useRouter()
  const user = useAppStore((s) => s.user)
  const subtopics = useAppStore((s) => s.subtopics)
  const updateUser = useAppStore((s) => s.updateUser)
  const logout = useAppStore((s) => s.reset)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!user) router.replace('/ciudadania-presente/modulos')
  }, [user, router])

  const [profileForm, setProfileForm] = useState({
    ciudad: '', pais: '', provincia: '', telefono: '', birthDate: '', nivelEducativo: '', genero: '',
  })
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({})
  const [profileMsg, setProfileMsg] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)
  const [savingProfile, setSavingProfile] = useState(false)

  const [pwForm, setPwForm] = useState({ current: '', next: '', confirm: '' })
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [pwErrors, setPwErrors] = useState<Record<string, string>>({})
  const [pwMsg, setPwMsg] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)
  const [savingPw, setSavingPw] = useState(false)

  const [photoMsg, setPhotoMsg] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)
  const [savingPhoto, setSavingPhoto] = useState(false)

  useEffect(() => {
    if (user) {
      setProfileForm({
        ciudad:         user.ciudad ?? '',
        pais:           user.pais ?? '',
        provincia:      user.provincia ?? '',
        telefono:       user.telefono ?? '',
        birthDate:      user.birthDate ?? '',
        nivelEducativo: user.nivelEducativo ?? '',
        genero:         user.genero ?? '',
      })
    }
  }, [user])

  if (!user) return null

  const completedCount = subtopics.filter((s) => s.passed).length
  const memberSinceLabel = user.memberSince
    ? new Date(user.memberSince).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—'

  const onProfileChange = (key: keyof typeof profileForm) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfileForm((f) => ({ ...f, [key]: e.target.value }))
    if (profileErrors[key]) setProfileErrors((er) => ({ ...er, [key]: '' }))
    if (profileMsg) setProfileMsg(null)
  }

  const onPwChange = (key: keyof typeof pwForm) => (e: ChangeEvent<HTMLInputElement>) => {
    setPwForm((f) => ({ ...f, [key]: e.target.value }))
    if (pwErrors[key]) setPwErrors((er) => ({ ...er, [key]: '' }))
    if (pwMsg) setPwMsg(null)
  }

  const handleProfileSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!profileForm.ciudad.trim()) errs.ciudad = 'Ingresá tu ciudad.'
    if (Object.keys(errs).length > 0) { setProfileErrors(errs); return }

    setSavingProfile(true)
    setProfileMsg(null)
    try {
      const res = await fetch('/api/ciudadania/profile/update', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, ...profileForm }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      updateUser({
        ciudad: data.user.ciudad, pais: data.user.pais, provincia: data.user.provincia,
        telefono: data.user.telefono, birthDate: data.user.birthDate,
        nivelEducativo: data.user.nivelEducativo, genero: data.user.genero,
      })
      setProfileMsg({ kind: 'success', text: 'Tu perfil se actualizó correctamente.' })
    } catch (err: unknown) {
      setProfileMsg({ kind: 'error', text: err instanceof Error ? err.message : 'No se pudo actualizar el perfil.' })
    } finally {
      setSavingProfile(false)
    }
  }

  const handlePwSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!pwForm.current) errs.current = 'Ingresá tu contraseña actual.'
    if (pwForm.next.length < 6) errs.next = 'Mínimo 6 caracteres.'
    if (pwForm.confirm !== pwForm.next) errs.confirm = 'Las contraseñas no coinciden.'
    if (Object.keys(errs).length > 0) { setPwErrors(errs); return }

    setSavingPw(true)
    setPwMsg(null)
    try {
      const res = await fetch('/api/ciudadania/profile/change-password', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, currentPassword: pwForm.current, newPassword: pwForm.next }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      setPwMsg({ kind: 'success', text: 'Contraseña actualizada correctamente.' })
      setPwForm({ current: '', next: '', confirm: '' })
    } catch (err: unknown) {
      setPwMsg({ kind: 'error', text: err instanceof Error ? err.message : 'No se pudo cambiar la contraseña.' })
    } finally {
      setSavingPw(false)
    }
  }

  const savePhoto = async (file: Blob | null) => {
    setSavingPhoto(true)
    setPhotoMsg(null)
    try {
      const formData = new FormData()
      formData.append('userId', String(user.id))
      if (file) formData.append('file', file, 'avatar')

      const res = await fetch('/api/ciudadania/profile/photo', {
        method: 'POST',
        body:   formData,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      updateUser({ fotoPerfil: data.user.fotoPerfil })
      setPhotoMsg({ kind: 'success', text: file ? 'Foto de perfil actualizada.' : 'Foto de perfil eliminada.' })
    } catch (err: unknown) {
      setPhotoMsg({ kind: 'error', text: err instanceof Error ? err.message : 'No se pudo actualizar la foto.' })
    } finally {
      setSavingPhoto(false)
    }
  }

  const handlePhotoSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setPhotoMsg({ kind: 'error', text: 'Elegí un archivo de imagen.' })
      return
    }
    setSavingPhoto(true)
    setPhotoMsg(null)
    try {
      const compressed = await compressImage(file)
      await savePhoto(compressed)
    } catch (err: unknown) {
      setPhotoMsg({ kind: 'error', text: err instanceof Error ? err.message : 'No se pudo procesar la imagen.' })
      setSavingPhoto(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/ciudadania-presente/modulos')
  }

  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        {/* Breadcrumb */}
        <Link
          href="/ciudadania-presente/dashboard/inicio"
          className="inline-flex items-center gap-2 text-[#4272BB] hover:text-[#003257] text-sm font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al panel
        </Link>

        {/* Profile summary */}
        <div className="bg-white rounded-2xl border border-[#d3e2f0] shadow-sm p-5 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center overflow-hidden text-xl sm:text-2xl font-black text-white" style={{ background: 'linear-gradient(135deg,#003257,#4272BB)' }}>
              {user.fotoPerfil ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.fotoPerfil} alt={user.fullName} className="w-full h-full object-cover" />
              ) : (
                getInitials(user.fullName)
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={savingPhoto}
              className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-white border-2 border-[#d3e2f0] flex items-center justify-center text-[#4272BB] hover:bg-[#EEF4FB] transition-colors disabled:opacity-60"
              aria-label="Cambiar foto de perfil"
            >
              {savingPhoto ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Camera className="w-3.5 h-3.5" />}
            </button>
            <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handlePhotoSelect} />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-black text-[#003257] truncate">{user.fullName}</h1>
            <p className="text-[#5a7a8e] text-sm truncate">{user.email}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className={[
                'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold',
                user.emailVerified ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600',
              ].join(' ')}>
                {user.emailVerified ? <ShieldCheck className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                {user.emailVerified ? 'Correo verificado' : 'Correo sin verificar'}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EEF4FB] text-[#4272BB]">
                <BadgeCheck className="w-3 h-3" />
                Miembro desde {memberSinceLabel}
              </span>
              {user.fotoPerfil && (
                <button
                  onClick={() => savePhoto(null)}
                  disabled={savingPhoto}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-60"
                >
                  <Trash2 className="w-3 h-3" /> Quitar foto
                </button>
              )}
            </div>
            {photoMsg && (
              <p className={['text-xs mt-2 flex items-center gap-1', photoMsg.kind === 'success' ? 'text-green-600' : 'text-red-500'].join(' ')}>
                {photoMsg.kind === 'success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                {photoMsg.text}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 bg-[#F5F8FC] rounded-xl px-4 py-3 text-center border border-[#d3e2f0]">
            <p className="text-xl font-black text-[#003257]">{completedCount}/3</p>
            <p className="text-[#5a7a8e] text-[11px]">módulos completados</p>
          </div>
        </div>

        <div className="grid gap-6">

          {/* Locked identity data */}
          <Section icon={Lock} title="Datos de registro" description="Estos datos se fijaron al crear tu cuenta y no se pueden modificar. Si hay un error, contactá a soporte.">
            <div className="grid sm:grid-cols-3 gap-4">
              <LockedField label="Nombre completo" value={user.fullName} />
              <LockedField label="DNI" value={user.dni} />
              <LockedField label="Correo electrónico" value={user.email} />
            </div>
          </Section>

          {/* Editable info */}
          <Section icon={User} title="Información personal" description="Datos de contacto y demográficos, podés actualizarlos cuando quieras.">
            <form onSubmit={handleProfileSubmit} className="grid gap-4">
              {profileMsg && <Banner kind={profileMsg.kind} message={profileMsg.text} />}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Ciudad
                  </label>
                  <input value={profileForm.ciudad} onChange={onProfileChange('ciudad')} className={inputCls(!!profileErrors.ciudad)} />
                  {profileErrors.ciudad && <p className="text-[11px] text-red-500 mt-0.5">⚠ {profileErrors.ciudad}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Provincia</label>
                  <input value={profileForm.provincia} onChange={onProfileChange('provincia')} className={inputCls()} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">País</label>
                  <input value={profileForm.pais} onChange={onProfileChange('pais')} className={inputCls()} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Teléfono</label>
                  <input value={profileForm.telefono} onChange={onProfileChange('telefono')} placeholder="Ej: +54 381…" className={inputCls()} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Fecha de nacimiento</label>
                  <input type="date" value={profileForm.birthDate ?? ''} onChange={onProfileChange('birthDate')} className={inputCls()} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Nivel educativo</label>
                  <select value={profileForm.nivelEducativo} onChange={onProfileChange('nivelEducativo')} className={inputCls() + ' cursor-pointer'}>
                    <option value="">Seleccionar…</option>
                    {NIVEL_EDUCATIVO_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Género</label>
                  <select value={profileForm.genero} onChange={onProfileChange('genero')} className={inputCls() + ' cursor-pointer'}>
                    <option value="">Seleccionar…</option>
                    {GENERO_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={savingProfile}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg,#003257,#4272BB)' }}
                >
                  {savingProfile && <Loader2 className="w-4 h-4 animate-spin" />}
                  Guardar cambios
                </button>
              </div>
            </form>
          </Section>

          {/* Security */}
          <div id="seguridad" className="scroll-mt-24">
          <Section icon={KeyRound} title="Seguridad" description="Actualizá tu contraseña de acceso.">
            <form onSubmit={handlePwSubmit} className="grid gap-4">
              {pwMsg && <Banner kind={pwMsg.kind} message={pwMsg.text} />}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Contraseña actual</label>
                  <PasswordField
                    show={showCurrent} onToggle={() => setShowCurrent((v) => !v)}
                    value={pwForm.current} onChange={onPwChange('current')}
                    autoComplete="current-password" className={inputCls(!!pwErrors.current)}
                  />
                  {pwErrors.current && <p className="text-[11px] text-red-500 mt-0.5">⚠ {pwErrors.current}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Nueva contraseña</label>
                  <PasswordField
                    show={showNext} onToggle={() => setShowNext((v) => !v)}
                    value={pwForm.next} onChange={onPwChange('next')}
                    autoComplete="new-password" className={inputCls(!!pwErrors.next)}
                  />
                  {pwErrors.next && <p className="text-[11px] text-red-500 mt-0.5">⚠ {pwErrors.next}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#1A2A36] tracking-wide">Confirmar nueva contraseña</label>
                  <PasswordField
                    show={showConfirm} onToggle={() => setShowConfirm((v) => !v)}
                    value={pwForm.confirm} onChange={onPwChange('confirm')}
                    autoComplete="new-password" className={inputCls(!!pwErrors.confirm)}
                  />
                  {pwErrors.confirm && <p className="text-[11px] text-red-500 mt-0.5">⚠ {pwErrors.confirm}</p>}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={savingPw}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg,#003257,#4272BB)' }}
                >
                  {savingPw && <Loader2 className="w-4 h-4 animate-spin" />}
                  Actualizar contraseña
                </button>
              </div>
            </form>
          </Section>
          </div>

          {/* Session */}
          <Section icon={LogOut} title="Sesión" description="Cerrá tu sesión en este dispositivo.">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </Section>
        </div>
      </main>
    </div>
  )
}
