-- Corrige la base de PRODUCCIÓN: la migración 001 (que agrega los campos de perfil)
-- nunca se corrió ahí. Este archivo agrega esas mismas columnas más `foto_perfil`
-- directamente como VARCHAR(500) (no hace falta pasar por LONGTEXT primero, porque
-- en producción esa columna nunca llegó a existir).
--
-- Cada bloque primero revisa si la columna ya existe (por si alguna se agregó
-- suelta en algún momento) y solo la crea si falta. Así podés correr este archivo
-- entero sin miedo a que rompa si alguna columna ya estaba.

-- ── provincia ──────────────────────────────────────────────────────────────
-- Busca si la columna "provincia" ya existe en la tabla "usuarios" de esta base.
-- Si no existe, arma la instrucción para agregarla justo después de "ciudad";
-- si ya existe, arma una instrucción "vacía" que no hace nada. Después ejecuta
-- lo que haya armado.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'provincia');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN provincia VARCHAR(255) NULL AFTER ciudad'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── pais ───────────────────────────────────────────────────────────────────
-- Mismo mecanismo: agrega "pais" después de "provincia" solo si falta.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'pais');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN pais VARCHAR(100) NULL AFTER provincia'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── telefono ───────────────────────────────────────────────────────────────
-- Agrega "telefono" después de "pais" solo si falta.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'telefono');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(50) NULL AFTER pais'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── fecha_nacimiento ───────────────────────────────────────────────────────
-- Agrega "fecha_nacimiento" (tipo fecha) después de "telefono" solo si falta.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'fecha_nacimiento');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN fecha_nacimiento DATE NULL AFTER telefono'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── nivel_educativo ────────────────────────────────────────────────────────
-- Agrega "nivel_educativo" después de "fecha_nacimiento" solo si falta.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'nivel_educativo');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN nivel_educativo VARCHAR(50) NULL AFTER fecha_nacimiento'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── genero ─────────────────────────────────────────────────────────────────
-- Agrega "genero" después de "nivel_educativo" solo si falta.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'genero');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN genero VARCHAR(30) NULL AFTER nivel_educativo'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── foto_perfil ────────────────────────────────────────────────────────────
-- Esta es la que te tiró el error #1054. Se agrega directamente como
-- VARCHAR(500) (para guardar la URL de Vercel Blob) después de "genero".
-- No hace falta crearla como LONGTEXT primero: en esta base nunca existió,
-- así que no hay datos viejos en base64 que preservar.
SET @col_exists = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'foto_perfil');
SET @sql = (SELECT IF(@col_exists > 0, 'SELECT 1',
  'ALTER TABLE usuarios ADD COLUMN foto_perfil VARCHAR(500) NULL AFTER genero'));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── Verificación final ─────────────────────────────────────────────────────
-- Esto no modifica nada, solo te muestra cómo quedó la tabla al final para
-- que confirmes visualmente que las 7 columnas están.
SHOW COLUMNS FROM usuarios;
