import { NextRequest, NextResponse } from 'next/server'
import { changePassword } from '@/lib/ciudadania/mysql-auth'

export async function POST(req: NextRequest) {
  try {
    const { userId, currentPassword, newPassword } = await req.json()

    if (!userId || !currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Todos los campos obligatorios deben completarse.' }, { status: 400 })
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'La nueva contraseña debe tener al menos 6 caracteres.' }, { status: 400 })
    }

    await changePassword(userId, currentPassword, newPassword)

    return NextResponse.json({ success: true, message: 'Contraseña actualizada correctamente.' })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al cambiar la contraseña.'
    const status = message.includes('incorrecta') ? 401 : 500
    return NextResponse.json({ error: message }, { status })
  }
}
