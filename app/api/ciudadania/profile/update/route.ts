import { NextRequest, NextResponse } from 'next/server'
import { updateProfile } from '@/lib/ciudadania/mysql-auth'

// Solo acepta campos editables del perfil. Nombre completo, DNI y email
// quedan fijados en el alta y no se modifican desde acá aunque el cliente los envíe.
export async function POST(req: NextRequest) {
  try {
    const { userId, ciudad, pais, provincia, telefono, birthDate, nivelEducativo, genero } = await req.json()

    if (!userId || !ciudad) {
      return NextResponse.json({ error: 'Todos los campos obligatorios deben completarse.' }, { status: 400 })
    }

    const user = await updateProfile(userId, { ciudad, pais, provincia, telefono, birthDate, nivelEducativo, genero })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al actualizar el perfil.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
