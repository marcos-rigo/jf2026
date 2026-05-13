import { NextRequest, NextResponse } from 'next/server'
import { resetPasswordRequest, resetPasswordConfirm } from '@/lib/ciudadania/mysql-auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (body.email && !body.token) {
      const token = await resetPasswordRequest(body.email)
      const isDev = process.env.NODE_ENV === 'development'
      return NextResponse.json({
        success: true,
        message: 'Si el correo existe, recibirás instrucciones.',
        ...(isDev && { token }),
      })
    }

    if (body.token && body.newPassword) {
      if (body.newPassword.length < 6) {
        return NextResponse.json({ error: 'La contraseña debe tener al menos 6 caracteres.' }, { status: 400 })
      }
      await resetPasswordConfirm(body.token, body.newPassword)
      return NextResponse.json({ success: true, message: 'Contraseña actualizada correctamente.' })
    }

    return NextResponse.json({ error: 'Parámetros inválidos.' }, { status: 400 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al procesar la solicitud.'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
