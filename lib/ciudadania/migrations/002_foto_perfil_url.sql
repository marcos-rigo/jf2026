-- Migra el storage de la foto de perfil de base64 (LONGTEXT) a URL de Vercel Blob.
-- No hay usuarios con foto guardada todavía en producción, así que no hace falta
-- backfill: es un ALTER directo. Ejecutar una sola vez contra una base ya existente.

ALTER TABLE usuarios
  MODIFY COLUMN foto_perfil VARCHAR(500) NULL;
