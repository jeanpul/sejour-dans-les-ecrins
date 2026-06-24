import { gpx as gpxToGeoJSON } from '@tmcw/togeojson'

// Les traces GPX sont embarquées au BUILD (compatibilité file://, pas de fetch local).
// Dépose des fichiers .gpx dans src/data/gpx/ : ils sont automatiquement inlinés ici.
const files = import.meta.glob('../data/gpx/*.gpx', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const byId = {}
for (const [path, raw] of Object.entries(files)) {
  const id = path.slice(path.lastIndexOf('/') + 1).replace(/\.gpx$/, '')
  byId[id] = raw
}

/** @returns {string|null} contenu brut du GPX pour un id, ou null si absent */
export function getGpxRaw(id) {
  return id && byId[id] ? byId[id] : null
}

/** Convertit un GPX brut en GeoJSON FeatureCollection, ou null si invalide. */
export function gpxToGeoJson(raw) {
  if (!raw) return null
  try {
    const dom = new DOMParser().parseFromString(raw, 'text/xml')
    return gpxToGeoJSON(dom)
  } catch {
    return null
  }
}
