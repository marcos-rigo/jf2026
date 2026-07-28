import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { query, withTransaction, queryConn } from './db'
import type { SubtopicState, WizardStep } from './types'

export interface RegisterData {
  email:          string
  password:       string
  fullName:       string
  dni:            string
  ciudad:         string
  pais:           string
  provincia?:     string
  telefono?:      string
  birthDate?:     string
  nivelEducativo?: string
  genero?:        string
}

export interface MysqlUserData {
  id:            number
  email:         string
  fullName:      string
  dni:           string
  ciudad:        string
  pais:          string | null
  provincia:     string | null
  telefono:      string | null
  birthDate:     string | null
  nivelEducativo: string | null
  genero:        string | null
  fotoPerfil:    string | null
  emailVerified: boolean
  consent:       boolean
  memberSince?:  string
}

// Solo los campos que el usuario puede modificar desde su perfil.
// Nombre completo, DNI y email quedan fijados en el alta.
export interface EditableProfileData {
  ciudad:         string
  pais?:          string
  provincia?:     string
  telefono?:      string
  birthDate?:     string
  nivelEducativo?: string
  genero?:        string
}

export interface ProgressData {
  screen:           'dashboard' | 'wizard' | 'certificate'
  activeSubtopicId: number | null
  subtopics:        SubtopicState[]
}

export interface LoginResponse {
  user:     MysqlUserData
  progress: ProgressData
}

const INITIAL_SUBTOPICS: SubtopicState[] = [
  { id: 1, status: 'in-progress', currentStep: 'intro', score: null, passed: false, introRead: false, videoWatched: false, podcastListened: false },
  { id: 2, status: 'locked',      currentStep: 'intro', score: null, passed: false, introRead: false, videoWatched: false, podcastListened: false },
  { id: 3, status: 'locked',      currentStep: 'intro', score: null, passed: false, introRead: false, videoWatched: false, podcastListened: false },
]

interface SubtemaRow {
  subtema_id:        number
  estado:            string
  paso_actual:       string
  score:             number | null
  aprobado:          number | boolean
  intro_leida:       number | boolean
  video_visto:       number | boolean
  podcast_escuchado: number | boolean
}

function rowToSubtopicState(row: SubtemaRow): SubtopicState {
  return {
    id:              row.subtema_id,
    status:          row.estado as SubtopicState['status'],
    currentStep:     row.paso_actual as WizardStep,
    score:           row.score,
    passed:          Boolean(row.aprobado),
    introRead:       Boolean(row.intro_leida),
    videoWatched:    Boolean(row.video_visto),
    podcastListened: Boolean(row.podcast_escuchado),
  }
}

interface UsuarioRow {
  id: number
  email: string
  nombre_completo: string
  dni: string
  ciudad: string
  pais: string | null
  provincia: string | null
  telefono: string | null
  fecha_nacimiento: string | null
  nivel_educativo: string | null
  genero: string | null
  foto_perfil: string | null
  email_verificado: number
  creado_en: string
}

const USUARIO_COLUMNS = `id, email, nombre_completo, dni, ciudad, pais, provincia, telefono,
  fecha_nacimiento, nivel_educativo, genero, foto_perfil, email_verificado, creado_en`

function rowToUserData(row: UsuarioRow): MysqlUserData {
  return {
    id:             row.id,
    email:          row.email,
    fullName:       row.nombre_completo,
    dni:            row.dni,
    ciudad:         row.ciudad,
    pais:           row.pais,
    provincia:      row.provincia,
    telefono:       row.telefono,
    birthDate:      row.fecha_nacimiento,
    nivelEducativo: row.nivel_educativo,
    genero:         row.genero,
    fotoPerfil:     row.foto_perfil,
    emailVerified:  Boolean(row.email_verificado),
    consent:        true,
    memberSince:    row.creado_en,
  }
}

export async function registerUser(data: RegisterData): Promise<MysqlUserData> {
  const { email, password, fullName, dni, ciudad, pais, provincia, telefono, birthDate, nivelEducativo, genero } = data
  const normalizedEmail = email.toLowerCase().trim()

  const existing = await query<unknown[]>(
    'SELECT id FROM usuarios WHERE email = ?',
    [normalizedEmail]
  )
  if ((existing as unknown[]).length > 0) {
    throw new Error('Ya existe una cuenta con ese correo.')
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const userId = await withTransaction(async (conn) => {
    const [insertResult] = await conn.execute(
      `INSERT INTO usuarios
         (email, password_hash, nombre_completo, dni, ciudad, pais, provincia, telefono, fecha_nacimiento, nivel_educativo, genero)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        normalizedEmail, passwordHash, fullName.trim(), dni.trim(), ciudad.trim(),
        pais?.trim() || null, provincia?.trim() || null, telefono?.trim() || null,
        birthDate || null, nivelEducativo?.trim() || null, genero?.trim() || null,
      ]
    ) as [{ insertId: number }, unknown]

    const newUserId = insertResult.insertId

    await queryConn(conn,
      `INSERT INTO estado_usuario
         (usuario_id, pantalla_actual, subtema_activo, certificado_emitido, modulos_completados)
       VALUES (?, 'dashboard', 1, FALSE, 0)`,
      [newUserId]
    )

    await queryConn(conn,
      `INSERT INTO progreso_subtemas (usuario_id, subtema_id, estado, paso_actual) VALUES (?, 1, 'in-progress', 'intro')`,
      [newUserId]
    )
    await queryConn(conn,
      `INSERT INTO progreso_subtemas (usuario_id, subtema_id, estado, paso_actual) VALUES (?, 2, 'locked', 'intro')`,
      [newUserId]
    )
    await queryConn(conn,
      `INSERT INTO progreso_subtemas (usuario_id, subtema_id, estado, paso_actual) VALUES (?, 3, 'locked', 'intro')`,
      [newUserId]
    )

    return newUserId
  })

  const rows = await query<UsuarioRow[]>(`SELECT ${USUARIO_COLUMNS} FROM usuarios WHERE id = ?`, [userId])
  return rowToUserData(rows[0])
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const normalizedEmail = email.toLowerCase().trim()

  const rows = await query<(UsuarioRow & { password_hash: string })[]>(
    `SELECT ${USUARIO_COLUMNS}, password_hash FROM usuarios WHERE email = ?`,
    [normalizedEmail]
  )

  if (rows.length === 0) {
    throw new Error('Correo o contraseña incorrectos.')
  }

  const dbUser = rows[0]
  const valid = await bcrypt.compare(password, dbUser.password_hash)
  if (!valid) {
    throw new Error('Correo o contraseña incorrectos.')
  }

  const user = rowToUserData(dbUser)
  const progress = await getUserProgress(dbUser.id)
  return { user, progress }
}

// Solo actualiza campos editables: nombre completo, DNI y email quedan fijados en el alta.
export async function updateProfile(userId: number, data: EditableProfileData): Promise<MysqlUserData> {
  const { ciudad, pais, provincia, telefono, birthDate, nivelEducativo, genero } = data

  await query(
    `UPDATE usuarios
     SET ciudad = ?, pais = ?, provincia = ?, telefono = ?, fecha_nacimiento = ?, nivel_educativo = ?, genero = ?
     WHERE id = ?`,
    [
      ciudad.trim(), pais?.trim() || null, provincia?.trim() || null, telefono?.trim() || null,
      birthDate || null, nivelEducativo?.trim() || null, genero?.trim() || null, userId,
    ]
  )

  const rows = await query<UsuarioRow[]>(`SELECT ${USUARIO_COLUMNS} FROM usuarios WHERE id = ?`, [userId])
  if (rows.length === 0) {
    throw new Error('Usuario no encontrado.')
  }
  return rowToUserData(rows[0])
}

export async function getProfilePhotoUrl(userId: number): Promise<string | null> {
  const rows = await query<{ foto_perfil: string | null }[]>(
    'SELECT foto_perfil FROM usuarios WHERE id = ?',
    [userId]
  )
  return rows[0]?.foto_perfil ?? null
}

export async function updateProfilePhoto(userId: number, fotoPerfil: string | null): Promise<MysqlUserData> {
  await query('UPDATE usuarios SET foto_perfil = ? WHERE id = ?', [fotoPerfil, userId])

  const rows = await query<UsuarioRow[]>(`SELECT ${USUARIO_COLUMNS} FROM usuarios WHERE id = ?`, [userId])
  if (rows.length === 0) {
    throw new Error('Usuario no encontrado.')
  }
  return rowToUserData(rows[0])
}

export async function changePassword(userId: number, currentPassword: string, newPassword: string): Promise<void> {
  const rows = await query<{ password_hash: string }[]>(
    'SELECT password_hash FROM usuarios WHERE id = ?',
    [userId]
  )
  if (rows.length === 0) {
    throw new Error('Usuario no encontrado.')
  }

  const valid = await bcrypt.compare(currentPassword, rows[0].password_hash)
  if (!valid) {
    throw new Error('La contraseña actual es incorrecta.')
  }

  const passwordHash = await bcrypt.hash(newPassword, 10)
  await query('UPDATE usuarios SET password_hash = ? WHERE id = ?', [passwordHash, userId])
}

export async function getUserProgress(userId: number): Promise<ProgressData> {
  const estadoRows = await query<{
    pantalla_actual: string
    subtema_activo: number | null
    certificado_emitido: number
  }[]>(
    'SELECT pantalla_actual, subtema_activo, certificado_emitido FROM estado_usuario WHERE usuario_id = ?',
    [userId]
  )

  const subtemaRows = await query<SubtemaRow[]>(
    `SELECT subtema_id, estado, paso_actual, score, aprobado,
            intro_leida, video_visto, podcast_escuchado
     FROM progreso_subtemas
     WHERE usuario_id = ?
     ORDER BY subtema_id`,
    [userId]
  )

  const screen = (estadoRows[0]?.pantalla_actual ?? 'dashboard') as ProgressData['screen']
  const activeSubtopicId = estadoRows[0]?.subtema_activo ?? null

  const subtopics: SubtopicState[] = subtemaRows.length > 0
    ? subtemaRows.map(rowToSubtopicState)
    : INITIAL_SUBTOPICS

  return { screen, activeSubtopicId, subtopics }
}

export async function updateProgress(userId: number, progressData: ProgressData): Promise<void> {
  const { screen, activeSubtopicId, subtopics } = progressData
  const modulosCompletados = subtopics.filter((s) => s.passed).length
  const certificadoEmitido = screen === 'certificate'

  await query(
    `UPDATE estado_usuario
     SET pantalla_actual      = ?,
         subtema_activo       = ?,
         certificado_emitido  = ?,
         modulos_completados  = ?,
         fecha_certificado    = IF(? = TRUE AND fecha_certificado IS NULL, NOW(), fecha_certificado)
     WHERE usuario_id = ?`,
    [screen, activeSubtopicId, certificadoEmitido, modulosCompletados, certificadoEmitido, userId]
  )

  for (const s of subtopics) {
    await query(
      `INSERT INTO progreso_subtemas
         (usuario_id, subtema_id, estado, paso_actual, score, aprobado,
          intro_leida, video_visto, podcast_escuchado)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         estado            = VALUES(estado),
         paso_actual       = VALUES(paso_actual),
         score             = VALUES(score),
         aprobado          = VALUES(aprobado),
         intro_leida       = VALUES(intro_leida),
         video_visto       = VALUES(video_visto),
         podcast_escuchado = VALUES(podcast_escuchado),
         completado_en     = IF(VALUES(aprobado) = TRUE AND completado_en IS NULL, NOW(), completado_en)`,
      [userId, s.id, s.status, s.currentStep, s.score, s.passed,
       s.introRead, s.videoWatched, s.podcastListened]
    )
  }
}

export async function resetPasswordRequest(email: string): Promise<string> {
  const normalizedEmail = email.toLowerCase().trim()
  const rows = await query<{ id: number }[]>(
    'SELECT id FROM usuarios WHERE email = ?',
    [normalizedEmail]
  )
  if (rows.length === 0) {
    throw new Error('No encontramos ninguna cuenta con ese correo.')
  }

  const token = crypto.randomBytes(32).toString('hex')
  await query(
    'INSERT INTO password_resets (email, token, expira_en) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 1 HOUR))',
    [normalizedEmail, token]
  )

  return token
}

export async function resetPasswordConfirm(token: string, newPassword: string): Promise<void> {
  const rows = await query<{ email: string }[]>(
    'SELECT email FROM password_resets WHERE token = ? AND usado = FALSE AND expira_en > NOW()',
    [token]
  )
  if (rows.length === 0) {
    throw new Error('El enlace de recuperación no es válido o ya expiró.')
  }

  const { email } = rows[0]
  const passwordHash = await bcrypt.hash(newPassword, 10)
  await query('UPDATE usuarios SET password_hash = ? WHERE email = ?', [passwordHash, email])
  await query('UPDATE password_resets SET usado = TRUE WHERE token = ?', [token])
}
