# Séjour dans les Écrins 🏔️

Petite application web (SPA) « carnet de séjour » pour un week-end en couple à
**La Grave / La Meije**, du **21 au 23 août 2026**. Mobile-first, consultable en
ligne sur smartphone, avec le programme jour par jour, les randonnées tracées sur
carte (IGN), les photos et les contacts utiles (hébergement, restaurants).

**En ligne :** https://jeanpul.github.io/sejour-dans-les-ecrins/

## Stack

- [Vite](https://vitejs.dev/) + [Svelte 5](https://svelte.dev/)
- [Leaflet](https://leafletjs.com/) (fond IGN Géoplateforme, OSM en repli) + [@tmcw/togeojson](https://github.com/tmcw/togeojson) pour les traces GPX
- [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) : le build produit **un seul `index.html` autonome** (envoyable par mail, ouvrable hors-serveur)

## Démarrer

```bash
npm install
npm run dev        # serveur de dev (http://localhost:5173)
npm run build      # build -> dist/index.html (fichier unique)
npm run preview    # prévisualiser le build
```

## Structure

```
src/
  App.svelte            # coquille + navigation par onglets (Aperçu / J1-J3 / Infos)
  app.css               # thème mobile-first
  data/
    sejour.ts           # ⭐ TOUT le contenu du séjour (jours, randos, hébergement, restos)
    types.ts            # types du modèle de données
    gpx/                # traces GPX (.gpx), inlinées au build
  lib/
    Overview.svelte     # écran d'aperçu
    DayCard.svelte      # un jour
    HikeCard.svelte     # une randonnée (stats + carte + topo)
    MapView.svelte      # carte Leaflet + tracé GPX
    Practical.svelte    # hébergement, restaurants, contacts
    Figure.svelte       # image (vignette Wikimedia -> repli plein écran -> placeholder)
    wikimedia.ts        # URLs de vignettes (buckets autorisés)
    links.js            # liens tel: et navigation
    gpx.js              # chargement + conversion GPX -> GeoJSON
```

## Modifier le contenu

Tout le contenu vit dans [`src/data/sejour.ts`](src/data/sejour.ts) : édite-le, le
reste suit. Les images sont référencées par URL (Wikimedia Commons, libres de droits,
avec attribution).

### Ajouter / remplacer une trace GPX

Dépose un fichier `<gpxId>.gpx` dans `src/data/gpx/` (le `gpxId` correspond au champ
`gpxId` de la rando dans `sejour.ts`). Il est inliné automatiquement au build et la
carte affiche le tracé. Les traces actuelles proviennent des fiches du
**Parc national des Écrins** (Geotrek).

## Déploiement

Push sur `main` → **GitHub Actions** build et publie sur GitHub Pages
automatiquement (voir [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

```bash
git add -A && git commit -m "..." && git push
```

## ⚠️ Fiabilité des données

Disponibilités, tarifs, téléphones et état des accès sont **à confirmer avant le
départ** (ils évoluent). Recours : **Office de Tourisme La Grave – La Meije,
04 76 79 90 05**. En particulier, l’accès au **Lauvitel / vallée du Vénéon** reste
perturbé depuis la crue de juin 2024 (navette obligatoire).

---

## Cahier des charges initial

> du 21 août au 23 août 2026 nous partons en couple d'amoureux Fabien et Christelle pour un séjour dans les écrins. Nous souhaitons avoir un SPA que l'on peut faire tourner offline sur notre smartphone (par exemple par envoie mail) et qui va nous proposer des séjours possibles. Voici les contraintes :
> - nous avons une voiture
> - arrivée le 21 août matinée
> - départ 23 août le soir
>
> Nous voulons un hébergement avec notre propre chambre et la possibilité de repas (petit déj et soir) si possible dans le logement (hôtel) ou proche logement. Nous souhaitons partir à la journée en rando et donc pique-nique le midi. Le séjour doit permettre de minimiser les déplacements en voitures soit par 1 boucle, soit utilisation voiture pour aller au départ de la rando et revenir au logement (pas forcément le même). Nous avons besoin de connaître les adresses, numéros de tél, liens vers les réservations des logements et/ou restaurants, les itinéraires tracés sur cartes des différentes randos, et si possible des photos illustrant les environs.
