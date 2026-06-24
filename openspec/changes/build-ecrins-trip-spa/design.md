## Context

Appli web perso (un seul séjour, deux utilisateurs) pour un week-end à La Grave (21–23 août 2026). Le contenu réel (hébergements demi-pension, randos, statut des accès post-crue 2024, images libres de droits) a déjà été collecté et sourcé lors de la phase d'exploration. Ce design fige **comment** construire la SPA.

Contraintes structurantes décidées avec l'utilisateur :
- **Stack** : Vite + **Svelte** (Svelte retenu plutôt que Vue : runtime minimal, idéal pour une appli compacte et légère).
- **Distribution** : **fichier HTML autonome envoyé par mail**, ouvert localement sur smartphone (`file://`).
- **En ligne** : internet disponible sur place → tuiles de carte et images chargées par le réseau.

La distribution par fichier `file://` est la contrainte la plus structurante : elle interdit tout `fetch` de ressource locale (CORS file://) et tout service worker. Tout ce qui est « contenu » doit donc être **embarqué dans le bundle au build**, seul le réseau distant (tuiles, images) restant dynamique.

## Goals / Non-Goals

**Goals:**
- Produire **un seul `index.html` auto-suffisant** (JS/CSS/données/GPX inlinés) ouvrable depuis une pièce jointe mail.
- UI **mobile-first**, lisible en plein soleil, navigable au pouce.
- Programme jour par jour + randos avec **carte interactive + tracé GPX**.
- Contacts **actionnables** (`tel:`, lien résa, ouverture navigation).
- Images **par URL** (Wikimedia) avec attribution, appli légère.

**Non-Goals:**
- Pas de offline / service worker / cache de tuiles.
- Pas de backend, base de données, comptes, paiement, i18n.
- Pas de génération automatique de contenu : les données sont saisies à la main depuis la recherche vérifiée.

## Decisions

### D1 — Bundle mono-fichier via `vite-plugin-singlefile`
Vite produit normalement plusieurs chunks avec chemins absolus, inadaptés à `file://`. On utilise **`vite-plugin-singlefile`** pour inliner JS + CSS dans un unique `index.html`, avec `base: './'`.
*Alternative écartée* : build statique multi-fichiers hébergé sur une URL (rejeté car l'utilisateur a choisi la distribution par fichier mail). On garde toutefois la possibilité de déployer le même build sur une URL plus tard (voir Migration).

### D2 — Données & GPX embarqués au build (pas de fetch local)
Le contenu du séjour vit dans un module **`src/data/sejour.ts`** (objet typé) importé statiquement → inliné dans le bundle. Les **traces GPX** sont stockées en `src/data/gpx/*.gpx` et importées en **texte brut** (`import trace from './gpx/emparis.gpx?raw'`), puis converties en GeoJSON à l'exécution. Aucune lecture de fichier à l'exécution → compatible `file://`.
*Alternative écartée* : `fetch('data/sejour.json')` → bloqué par CORS en `file://`.

### D3 — Cartes : Leaflet + fond de carte distant
**Leaflet** (léger, sans dépendance lourde) avec, par défaut, fond **IGN « Plan IGN »/topo via la Géoplateforme (`data.geopf.fr`, tuiles ouvertes sans clé)**, et **OpenStreetMap en repli**. Tracé GPX affiché en `L.geoJSON` via **`@tmcw/togeojson`** (conversion GPX→GeoJSON), marqueur de départ + auto-`fitBounds`.
*Alternative écartée* : `react-leaflet`/`leaflet-gpx` (on reste minimal, pas de React ; parsing maison via togeojson suffit).

### D4 — Images : URLs Wikimedia en vignette + attribution
On référence les URLs `upload.wikimedia.org` en insérant `/thumb/.../<largeur>px-...` pour limiter le poids. Chaque image porte ses métadonnées d'attribution (auteur, licence, lien page) affichées au moins en crédit accessible. `loading="lazy"` + `onerror` (placeholder) pour gérer une image indisponible.
*Alternative écartée* : héberger les images dans le bundle (base64) → alourdit le fichier mail, contraire à l'objectif légèreté.

### D5 — Navigation : sections + ancre, pas de routeur
Appli à écran unique avec sections (Vue d'ensemble, J1, J2, J3, Hébergement, Infos) et navigation par onglets/ancres internes. Pas de routeur (le routing `history` est fragile en `file://`). État d'onglet géré en mémoire (variable Svelte).

### D6 — Modèle de données (esquisse)
```
Sejour { titre, dates, base, voiture:note, jours: Jour[], hebergement: Lieu, restaurants: Lieu[], credits }
Jour   { id, date, titre, resume, randos: Rando[] }   // randos[] permet variantes (ex. J3 Arsine | Lauvitel)
Rando  { nom, niveau, distanceKm, deniveleM, dureeH, type:'boucle'|'aller-retour',
         depart:{nom,latlng,acces}, interet, gpxId, topoUrl, statut, images: Media[] }
Lieu   { nom, type, adresse, latlng, tel?, reservationUrl?, demiPension?, prix?, fiabilite }
Media  { url, alt, auteur, licence, pageUrl }
```

## Risks / Trade-offs

- **`file://` limite l'« ajout à l'écran d'accueil »** (crée un marque-page peu fiable, pas une vraie PWA) → Mitigation : documenter « enregistrer le fichier dans Fichiers et l'ouvrir » ; garder l'option déploiement URL (D1/Migration) si l'expérience déçoit.
- **Hotlink Wikimedia non garanti sous fort trafic** → Mitigation : trafic = 2 personnes, négligeable ; `onerror` placeholder ; possibilité de basculer en images locales plus tard.
- **Tuiles de carte indisponibles si pas de réseau** (tunnel, vallée sans data) → Mitigation : assumé (choix « en ligne ») ; afficher les chiffres clés (D+, distance) en texte même sans carte ; fournir lien GPX/topo pour appli GPS dédiée hors-ligne.
- **Données terrain périssables** (dispo, tarifs, tél, accès Lauvitel/navette) → Mitigation : champ `fiabilite` + mention « à confirmer », téléphone Office de Tourisme affiché ; vérification avant le départ.
- **CORS/`?raw` + togeojson en `file://`** → Mitigation : tout est inliné au build (D2), donc pas d'accès réseau pour les données ; tester l'ouverture réelle du fichier sur iOS Safari et Android Chrome.

## Migration Plan

1. `npm run build` → `dist/index.html` unique.
2. Envoyer `index.html` par mail à Fabien & Christelle ; l'enregistrer dans l'app Fichiers du téléphone et l'ouvrir dans le navigateur.
3. **Repli/évolution** : le même build étant statique, on peut le déposer sur une URL (Netlify/GitHub Pages) sans changement de code (`base: './'`) — utile si l'expérience `file://` déçoit.
4. Rollback : aucun système en prod, il suffit de renvoyer la version précédente du fichier.

## Open Questions

- **J3** : Arsine (2ᵉ grosse journée) confirmé par défaut, ou variante plus light / Lauvitel-navette ? (modélisé comme variantes, choix d'affichage par défaut à trancher).
- **Hébergement par défaut** affiché : Le Castillan (à confirmer dispo demi-pension 21–22/08 par téléphone).
- **Fond de carte** : IGN Géoplateforme (topo plus parlant en montagne) vs OSM — à valider visuellement sur mobile.
