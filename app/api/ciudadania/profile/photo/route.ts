import { NextRequest, NextResponse } from 'next/server'
import { put, del } from '@vercel/blob'
import { getProfilePhotoUrl, updateProfilePhoto } from '@/lib/ciudadania/mysql-auth'

const MAX_UPLOAD_BYTES = 500_000 // backstop; la compresión client-side deja las fotos en ~50-150KB
const ALLOWED_TYPES = /^image\/(png|jpe?g|webp)$/

async function deleteOldPhoto(oldUrl: string | null) {
  if (!oldUrl || !oldUrl.startsWith('https://')) return
  try {
    await del(oldUrl)
  } catch (error) {
    console.error('[profile/photo] No se pudo borrar el blob anterior:', error)
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const userId = formData.get('userId')
    const file = formData.get('file')

    if (!userId || typeof userId !== 'string') {
      return NextResponse.json({ error: 'Falta el usuario.' }, { status: 400 })
    }

    const oldUrl = await getProfilePhotoUrl(Number(userId))

    // file === null explícito (o ausente) significa "quitar foto"
    if (!(file instanceof File)) {
      await deleteOldPhoto(oldUrl)
      const user = await updateProfilePhoto(Number(userId), null)
      return NextResponse.json({ success: true, user })
    }

    if (!ALLOWED_TYPES.test(file.type)) {
      return NextResponse.json({ error: 'Formato de imagen no válido.' }, { status: 400 })
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json({ error: 'La imagen es demasiado grande.' }, { status: 400 })
    }

    await deleteOldPhoto(oldUrl)

    const extension = file.type === 'image/webp' ? 'webp' : file.type === 'image/png' ? 'png' : 'jpg'
    const { url } = await put(`perfil/${userId}-${Date.now()}.${extension}`, file, {
      access: 'public',
    })

    const user = await updateProfilePhoto(Number(userId), url)

    return NextResponse.json({ success: true, user })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al actualizar la foto de perfil.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
