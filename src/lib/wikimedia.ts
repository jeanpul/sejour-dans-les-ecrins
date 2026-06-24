// Wikimedia n'autorise plus que des largeurs de vignette "bucket" précises
// (les autres renvoient HTTP 400 "Use thumbnail sizes listed on https://w.wiki/GHai").
const BUCKETS = [120, 250, 500, 1280, 1920]

function snap(width: number): number {
  return BUCKETS.find((b) => b >= width) ?? BUCKETS[BUCKETS.length - 1]
}

// Transforme une URL fichier Wikimedia Commons en URL de vignette (bucket autorisé),
// pour alléger le chargement (mobile-first). Si l'URL n'est pas reconnue, renvoie l'original.
//   .../commons/3/34/Fichier.jpg -> .../commons/thumb/3/34/Fichier.jpg/<bucket>px-Fichier.jpg
export function thumbnail(url: string, width = 500): string {
  const marker = '/commons/'
  const idx = url.indexOf(marker)
  if (idx === -1 || url.includes('/thumb/')) return url
  const prefix = url.slice(0, idx + marker.length)
  const rest = url.slice(idx + marker.length) // ex: 3/34/Fichier.jpg
  const file = rest.slice(rest.lastIndexOf('/') + 1)
  return `${prefix}thumb/${rest}/${snap(width)}px-${file}`
}
