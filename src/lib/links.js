// Lien d'appel : "04 76 79 90 04" -> tel:+33476799004
export function telHref(tel) {
  if (!tel) return null
  const d = tel.replace(/\s+/g, '')
  return 'tel:' + (d.startsWith('0') ? '+33' + d.slice(1) : d)
}

// Lien d'ouverture dans une appli de navigation (coordonnées si dispo, sinon adresse)
export function mapsHref(lieu) {
  if (!lieu) return null
  if (lieu.latlng) {
    return `https://www.google.com/maps/search/?api=1&query=${lieu.latlng[0]},${lieu.latlng[1]}`
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lieu.adresse || lieu.nom)}`
}
