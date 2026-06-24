# Traces GPX

Dépose ici un fichier `<gpxId>.gpx` par randonnée (le `gpxId` correspond au champ
`gpxId` de chaque rando dans `../sejour.ts`). Ils sont **inlinés au build**
(via `import.meta.glob(..., '?raw')`) — donc compatibles avec l'ouverture en
`file://` (aucun téléchargement à l'exécution).

Tant qu'un fichier est absent, la carte affiche seulement le marqueur de départ
(coordonnées réelles) + le lien vers la fiche topo source.

Télécharge les traces depuis les fiches topo (liens `topoUrl` dans `sejour.ts`,
ex. Visorando) puis renomme-les :

- `pontet.gpx`
- `emparis.gpx`
- `arsine.gpx`
- `lauvitel.gpx`
