-- Agrega los campos de perfil que se solicitan en el alta pero antes no se guardaban,
-- más la foto de perfil. Ejecutar una sola vez contra una base ya existente
-- (la base local de desarrollo y, cuando corresponda, la de producción).

ALTER TABLE usuarios
  ADD COLUMN provincia VARCHAR(255) NULL AFTER ciudad,
  ADD COLUMN pais VARCHAR(100) NULL AFTER provincia,
  ADD COLUMN telefono VARCHAR(50) NULL AFTER pais,
  ADD COLUMN fecha_nacimiento DATE NULL AFTER telefono,
  ADD COLUMN nivel_educativo VARCHAR(50) NULL AFTER fecha_nacimiento,
  ADD COLUMN genero VARCHAR(30) NULL AFTER nivel_educativo,
  ADD COLUMN foto_perfil LONGTEXT NULL AFTER genero;
