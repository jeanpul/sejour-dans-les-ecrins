## 1. Échafaudage du projet

- [x] 1.1 Initialiser un projet Vite + Svelte (`npm create vite@latest`, template svelte) avec `base: './'`
- [x] 1.2 Ajouter et configurer `vite-plugin-singlefile` pour produire un `dist/index.html` unique auto-suffisant
- [x] 1.3 Ajouter les dépendances cartes : `leaflet` et `@tmcw/togeojson`
- [x] 1.4 Mettre en place la structure `src/` (composants, `src/data/`, `src/data/gpx/`) et un thème mobile-first (variables CSS, contraste élevé, reset)

## 2. Modèle de données & contenu vérifié

- [x] 2.1 Définir les types TypeScript du modèle (`Sejour`, `Jour`, `Rando`, `Lieu`, `Media`) selon le design
- [x] 2.2 Saisir `src/data/sejour.ts` à partir de la recherche vérifiée : dates, base La Grave, 3 jours, pique-niques, note « voiture minimisée »
- [x] 2.3 Renseigner l'hébergement (Le Castillan par défaut + alternatives : Au Vieux Guide, Le Bec, Le Sérac) avec adresse, tel, lien résa, demi-pension, champ `fiabilite`
- [x] 2.4 Renseigner les randos (Pontet, Oratoire/Perchoir, Emparis lacs Lérié & Noir, Arsine, option Lauvitel) : distance, D+, durée, type, départ/parking, intérêt, topoUrl, statut
- [x] 2.5 Renseigner les médias (URLs Wikimedia en `/thumb/…px`) avec auteur, licence, page source ; ajouter l'Office de Tourisme La Grave (04 76 79 90 05)
- [x] 2.6 Ajouter les fichiers `src/data/gpx/*.gpx` et les importer en `?raw` (inlinés au build) — ✅ 4 traces réelles déposées (`pontet`, `emparis`, `arsine`, `lauvitel`) depuis les fiches Geotrek du **Parc national des Écrins** ; tracés vérifiés à l'écran (polyline + waypoints, 0 erreur)

## 3. Coquille SPA & navigation (mobile-spa-shell)

- [x] 3.1 Construire le layout mobile-first (colonne unique, pas de scroll horizontal, cibles ≥ 44 px)
- [x] 3.2 Implémenter la navigation par sections/onglets en mémoire (Aperçu, J1, J2, J3, Infos), sans routeur
- [x] 3.3 Vérifier l'absence de tout `fetch`/XHR de ressource locale au démarrage (build : zéro référence à un fichier local)

## 4. Itinéraire (trip-itinerary)

- [x] 4.1 Composant Vue d'ensemble (titre, dates, base, résumé des 3 jours)
- [x] 4.2 Composant Jour (titre, résumé, randos, pique-nique, info trajet voiture)
- [x] 4.3 Affichage des variantes (recommandée vs alternative, ex. J3 Arsine / Lauvitel)

## 5. Cartes & randos (hike-maps)

- [x] 5.1 Composant carte Leaflet (fond IGN Géoplateforme par défaut, OSM en repli sur `tileerror`)
- [x] 5.2 Conversion GPX→GeoJSON via `@tmcw/togeojson`, tracé `L.geoJSON`, `fitBounds`, marqueur de départ
- [x] 5.3 Bloc indicateurs clés (distance, D+, durée, type, niveau) lisible même sans carte
- [x] 5.4 Liens fiche topo / GPX externes

## 6. Infos pratiques (practical-info)

- [x] 6.1 Fiche hébergement avec actions `tel:`, lien réservation, ouverture navigation (maps)
- [x] 6.2 Liste restaurants / alternatives avec coordonnées actionnables
- [x] 6.3 Mentions « à vérifier » sur données non confirmées + recours Office de Tourisme

## 7. Médias (media-gallery)

- [x] 7.1 Composant image (URL distante en vignette, `loading="lazy"`, `onerror` placeholder)
- [x] 7.2 Affichage de l'attribution (auteur, licence, lien page) pour CC-BY / CC-BY-SA

## 8. Build, test terrain & livraison

- [x] 8.1 `npm run build` → un seul `dist/index.html` produit (234 kB, vérifié)
- [ ] 8.2 Tester l'ouverture du fichier en `file://` sur iOS Safari et Android Chrome — ✅ vérifié en `file://` sous Chromium headless (rendu, navigation 5 onglets, carte IGN + tuiles, images, `tel:`, 0 erreur console) ; ⏳ reste à confirmer sur **iPhone réel (Safari/WebKit)**
- [ ] 8.3 Vérifier la lisibilité extérieure (contraste) et la navigation au pouce sur smartphone réel — ⏳ à faire sur téléphone réel
- [ ] 8.4 Envoyer `dist/index.html` par mail à Fabien & Christelle + note « enregistrer dans Fichiers puis ouvrir » — ⏳ action manuelle
