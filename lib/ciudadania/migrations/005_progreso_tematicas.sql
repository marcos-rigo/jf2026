-- Tabla única de inscripción + progreso por temática editorial (/tematicas).
-- "Inscribirse" es simplemente la primera fila de progreso con todo en cero;
-- no hay una tabla de inscripciones separada de la de progreso.
--
-- `tematica_id` es un slug estable (ej. "cibercrianza"), no un FK numérico:
-- las 11 temáticas viven como datos hardcodeados en lib/tematicas-data.ts,
-- no en una tabla de catálogo.
--
-- `detalle` es JSON de forma libre: cada quiz/checklist de cada temática
-- guarda su propia clave (ver lib/hooks/use-tematica-progress.ts), porque las
-- 11 temáticas no comparten estructura de contenido entre sí (ver auditoría
-- de sesión anterior). `completada`/`porcentaje` se guardan desnormalizados
-- para no tener que parsear el JSON al pintar la barra de progreso del listado.
CREATE TABLE IF NOT EXISTS inscripciones_tematicas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  tematica_id VARCHAR(50) NOT NULL,
  fecha_inscripcion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completada BOOLEAN NOT NULL DEFAULT FALSE,
  porcentaje INT NOT NULL DEFAULT 0,
  detalle JSON NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_usuario_tematica (usuario_id, tematica_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
