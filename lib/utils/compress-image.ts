const MAX_DIMENSION = 512
const QUALITY = 0.8

function readExifOrientation(buffer: ArrayBuffer): number {
  const view = new DataView(buffer)
  if (view.byteLength < 4 || view.getUint16(0) !== 0xffd8) return 1

  let offset = 2
  while (offset < view.byteLength - 1) {
    const marker = view.getUint16(offset)
    if (marker === 0xffe1) {
      const exifStart = offset + 4
      if (view.getUint32(exifStart) !== 0x45786966) return 1 // "Exif"
      const tiffOffset = exifStart + 6
      const little = view.getUint16(tiffOffset) === 0x4949
      const firstIfdOffset = view.getUint32(tiffOffset + 4, little)
      const dirStart = tiffOffset + firstIfdOffset
      const entries = view.getUint16(dirStart, little)
      for (let i = 0; i < entries; i++) {
        const entryOffset = dirStart + 2 + i * 12
        if (view.getUint16(entryOffset, little) === 0x0112) {
          return view.getUint16(entryOffset + 8, little)
        }
      }
      return 1
    }
    if ((marker & 0xff00) !== 0xff00) break
    offset += 2 + view.getUint16(offset + 2)
  }
  return 1
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Archivo de imagen inválido.'))
    img.src = src
  })
}

function applyOrientation(
  ctx: CanvasRenderingContext2D,
  orientation: number,
  width: number,
  height: number
) {
  switch (orientation) {
    case 2: ctx.transform(-1, 0, 0, 1, width, 0); break
    case 3: ctx.transform(-1, 0, 0, -1, width, height); break
    case 4: ctx.transform(1, 0, 0, -1, 0, height); break
    case 5: ctx.transform(0, 1, 1, 0, 0, 0); break
    case 6: ctx.transform(0, 1, -1, 0, height, 0); break
    case 7: ctx.transform(0, -1, -1, 0, height, width); break
    case 8: ctx.transform(0, -1, 1, 0, 0, width); break
    default: break
  }
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality))
}

export async function compressImage(file: File): Promise<Blob> {
  const buffer = await file.arrayBuffer()
  const orientation = readExifOrientation(buffer)

  const objectUrl = URL.createObjectURL(new Blob([buffer], { type: file.type }))
  let img: HTMLImageElement
  try {
    img = await loadImage(objectUrl)
  } finally {
    URL.revokeObjectURL(objectUrl)
  }

  const swapped = orientation >= 5 && orientation <= 8
  const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height))
  const drawWidth = Math.round(img.width * scale)
  const drawHeight = Math.round(img.height * scale)

  const canvas = document.createElement('canvas')
  canvas.width = swapped ? drawHeight : drawWidth
  canvas.height = swapped ? drawWidth : drawHeight

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('No se pudo procesar la imagen.')

  applyOrientation(ctx, orientation, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0, drawWidth, drawHeight)

  let blob = await canvasToBlob(canvas, 'image/webp', QUALITY)
  if (!blob) blob = await canvasToBlob(canvas, 'image/jpeg', QUALITY)
  if (!blob) throw new Error('No se pudo comprimir la imagen.')

  if (process.env.NODE_ENV === 'development') {
    console.log(`[compressImage] ${file.size} bytes -> ${blob.size} bytes (${blob.type})`)
  }

  return blob
}
