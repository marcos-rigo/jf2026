-- Esquema de la plataforma Ciudadanía Presente.
-- Única fuente de verdad: cualquier cambio de columnas debe reflejarse acá
-- y aplicarse tanto en la base local de desarrollo como en la de producción (Hostinger).

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nombre_completo VARCHAR(255) NOT NULL,   -- fijado en el alta ("Apellido, Nombre"), no editable desde el perfil
  dni VARCHAR(50) NOT NULL,                -- fijado en el alta, no editable desde el perfil
  ciudad VARCHAR(255) NOT NULL,
  provincia VARCHAR(255) NULL,
  pais VARCHAR(100) NULL,
  telefono VARCHAR(50) NULL,
  fecha_nacimiento DATE NULL,
  nivel_educativo VARCHAR(50) NULL,
  genero VARCHAR(30) NULL,
  foto_perfil VARCHAR(500) NULL,           -- URL pública en Vercel Blob
  email_verificado BOOLEAN NULL DEFAULT FALSE,
  creado_en TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP  -- se llamó "fecha_registro" en producción hasta la migración 004
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS estado_usuario (
  usuario_id INT PRIMARY KEY,
  pantalla_actual VARCHAR(50) NOT NULL DEFAULT 'dashboard',
  subtema_activo INT NULL,
  certificado_emitido BOOLEAN NOT NULL DEFAULT FALSE,
  modulos_completados INT NOT NULL DEFAULT 0,
  fecha_certificado TIMESTAMP NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS progreso_subtemas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  subtema_id INT NOT NULL,
  estado VARCHAR(50) NOT NULL DEFAULT 'locked',
  paso_actual VARCHAR(50) NOT NULL DEFAULT 'intro',
  score INT NULL,
  aprobado BOOLEAN NOT NULL DEFAULT FALSE,
  intro_leida BOOLEAN NOT NULL DEFAULT FALSE,
  video_visto BOOLEAN NOT NULL DEFAULT FALSE,
  podcast_escuchado BOOLEAN NOT NULL DEFAULT FALSE,
  completado_en TIMESTAMP NULL,
  UNIQUE KEY uniq_usuario_subtema (usuario_id, subtema_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inscripción + progreso por temática editorial (/tematicas). "Inscribirse"
-- es la primera fila con todo en cero; ver migración 005 para más detalle.
CREATE TABLE IF NOT EXISTS inscripciones_tematicas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  tematica_id VARCHAR(50) NOT NULL,        -- slug estable, ej. "cibercrianza" (no hay tabla de catálogo)
  fecha_inscripcion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completada BOOLEAN NOT NULL DEFAULT FALSE,
  porcentaje INT NOT NULL DEFAULT 0,
  detalle JSON NULL,                       -- forma libre por temática: cada quiz/checklist usa su propia clave
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_usuario_tematica (usuario_id, tematica_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS password_resets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL,
  expira_en TIMESTAMP NOT NULL,
  usado BOOLEAN NOT NULL DEFAULT FALSE,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
