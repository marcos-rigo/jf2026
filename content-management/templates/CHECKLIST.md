# Checklist antes de publicar contenido semanal

Completá cada punto antes de hacer commit.

## Contenido

- [ ] Título ≤ 50 caracteres
- [ ] Descripción ≤ 150 caracteres (legible en mobile)
- [ ] Texto del CTA es accionable (ej: "Ver Iniciativas", no "Click aquí")
- [ ] El link del CTA lleva a la página correcta
- [ ] El GIF/video representa fielmente el contenido de destino

## Archivo visual

- [ ] El archivo existe en la carpeta `public/weekly-content/YYYY-WNN/`
- [ ] El tamaño es < 5 MB (ideal < 3 MB)
- [ ] El formato es `.gif`, `.webp` o `.mp4`
- [ ] Se ve bien en mobile (aspect-ratio 16:9)
- [ ] No tiene texto incrustado que sea ilegible en pantallas pequeñas

## Técnico

- [ ] `npm run validate-week YYYY-WNN` pasa sin errores
- [ ] `npm run preview-week YYYY-WNN` muestra el modal correctamente
- [ ] El modal se ve bien en desktop Y mobile (probado en el preview)
- [ ] El CTA abre la ruta/URL correcta
- [ ] La semana está en `manifest.json`

## Publicación

- [ ] Commit incluye solo la carpeta `public/weekly-content/YYYY-WNN/`
- [ ] Mensaje de commit sigue el formato: `feat: contenido semanal YYYY-WNN - Tema`
