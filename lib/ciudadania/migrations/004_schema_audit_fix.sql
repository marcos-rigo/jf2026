-- Auditoría completa: se comparó columna por columna lo que pide el código
-- (lib/ciudadania/mysql-auth.ts, todos los archivos bajo app/api/ciudadania/,
-- y lib/ciudadania/schema.sql) contra el schema real de producción (Hostinger,
-- base u764418639_ciudadania) y contra la base local de desarrollo.
--
-- Resultado: la tabla `usuarios` de producción le decía "fecha_registro" a la
-- columna que el código (y el resto de las tablas de esta misma base:
-- password_resets.creado_en, suscriptores.creado_en) llaman "creado_en". Por
-- eso el registro tiraba `Unknown column 'creado_en' in 'SELECT'`: la columna
-- SÍ existe, pero con otro nombre.
--
-- Decisión: "creado_en" es la fuente de verdad (no "fecha_registro"), porque:
--   1. Es el nombre que usa el código en todos lados.
--   2. Es el nombre que ya usan las otras dos tablas de esta misma base de
--      producción (password_resets, suscriptores) — "fecha_registro" es la
--      excepción, no la regla.
--   3. Es el nombre que documenta lib/ciudadania/schema.sql como fuente de
--      verdad del schema.
-- Por eso este archivo RENOMBRA la columna de producción, no cambia el código.
--
-- También se encontraron dos columnas más angostas de lo que espera el código
-- (dni y ciudad) — no rompen nada hoy (nadie cargó un DNI de más de 20
-- caracteres ni una ciudad de más de 100), pero achican el margen y no
-- coinciden con schema.sql/la base local. Se agrandan por las dudas; agrandar
-- una columna VARCHAR nunca borra datos existentes.
--
-- Todo el resto de las columnas que pide el código (provincia, pais, telefono,
-- fecha_nacimiento, nivel_educativo, genero, foto_perfil, email_verificado,
-- todas las de estado_usuario, progreso_subtemas y password_resets) ya
-- estaban bien en producción — no se tocan acá.
--
-- Como con la 003, cada paso se fija primero si hace falta antes de aplicarlo,
-- para que puedas correr este archivo entero sin miedo aunque ya se haya
-- corrido antes o alguien haya tocado algo a mano.

-- ── 1) Renombrar fecha_registro → creado_en en `usuarios` ──────────────────
-- Busca si la columna ya se llama "creado_en" (ya migrado) o todavía
-- "fecha_registro" (el estado actual de producción) y arma la instrucción
-- correspondiente. Si por algún motivo no existe ninguna de las dos, la crea
-- de cero como red de seguridad.
SET @has_creado_en = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'creado_en');
SET @has_fecha_registro = (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios' AND COLUMN_NAME = 'fecha_registro');
SET @sql = (SELECT
  IF(@has_creado_en > 0, 'SELECT 1',
    IF(@has_fecha_registro > 0,
      'ALTER TABLE usuarios CHANGE COLUMN fecha_registro creado_en TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP',
      'ALTER TABLE usuarios ADD COLUMN creado_en TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP'
    )
  ));
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- ── 2) Agrandar `dni` a VARCHAR(50) ──────────────────────────────────────────
-- Hoy en producción es VARCHAR(20). El código y la base local ya usan
-- VARCHAR(50). Agrandar una columna de texto no borra ni trunca nada.
ALTER TABLE usuarios MODIFY COLUMN dni VARCHAR(50) NOT NULL;

-- ── 3) Agrandar `ciudad` a VARCHAR(255) ─────────────────────────────────────
-- Hoy en producción es VARCHAR(100). El código y la base local ya usan
-- VARCHAR(255). Mismo caso: agrandar es seguro.
ALTER TABLE usuarios MODIFY COLUMN ciudad VARCHAR(255) NOT NULL;

-- ── Verificación final ───────────────────────────────────────────────────────
-- Esto no modifica nada, solo te muestra cómo quedó la tabla al final.
SHOW COLUMNS FROM usuarios;
