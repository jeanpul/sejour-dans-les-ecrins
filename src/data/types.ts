export interface Media {
  url: string
  alt: string
  auteur: string
  licence: string
  pageUrl: string
  /** true => pas d'attribution obligatoire (domaine public / CC0) */
  domainePublic?: boolean
}

export interface Depart {
  nom: string
  latlng: [number, number]
  acces?: string
}

export type TypeRando = 'boucle' | 'aller-retour'

export interface Rando {
  id: string
  nom: string
  niveau: string
  distanceKm: string
  deniveleM: string
  dureeH: string
  type: TypeRando
  depart: Depart
  interet: string
  /** correspond à un fichier src/data/gpx/<gpxId>.gpx (optionnel) */
  gpxId?: string
  topoUrl?: string
  /** ex. statut d'accès / alerte terrain */
  statut?: string
  /** true => randonnée recommandée du jour ; alternative sinon */
  recommandee?: boolean
  images: Media[]
}

export interface Jour {
  id: string
  date: string
  titre: string
  resume: string
  /** info trajet voiture depuis la base (logique "voiture minimisée") */
  transport?: string
  piqueNique?: string
  randos: Rando[]
}

export interface Lieu {
  nom: string
  type: string
  adresse: string
  latlng?: [number, number]
  tel?: string
  telFiable?: boolean
  reservationUrl?: string
  demiPension?: string
  prix?: string
  note?: string
  /** mention de fiabilité des données (à confirmer, source, etc.) */
  fiabilite?: string
}

export interface Sejour {
  titre: string
  sousTitre: string
  dates: string
  base: string
  depuis: string
  voiture: string
  intro: string
  jours: Jour[]
  hebergement: Lieu
  alternatives: Lieu[]
  restaurants: Lieu[]
  contacts: Lieu[]
  banniere: Media
}
