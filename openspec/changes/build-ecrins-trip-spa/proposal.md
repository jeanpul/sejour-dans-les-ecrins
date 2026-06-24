## Why

Fabien & Christelle partent en week-end en couple dans les Écrins (La Grave / La Meije) du **21 au 23 août 2026**. Les infos utiles sur le terrain sont aujourd'hui éparpillées (hébergement, coordonnées, randos, cartes, photos). On veut **une seule appli web mobile, légère et consultable d'un coup d'œil sur place**, qui présente le séjour clé en main : le programme jour par jour, les randos tracées sur carte, et l'accès direct aux contacts/réservations.

## What Changes

- Création d'une **SPA mobile-first** consultable sur smartphone (en ligne), distribuable par simple URL/mail et « ajoutable à l'écran d'accueil ».
- Affichage d'un **séjour structuré jour par jour** (J1 21/08 → J3 23/08) avec randos, pique-nique, et logique « voiture minimisée ». Le modèle de données supporte **plusieurs variantes de randos** (ex. J3 Arsine vs option Lauvitel) pour rester dans l'esprit « plusieurs séjours possibles » du besoin initial.
- **Cartes interactives** par rando (fond cartographique en ligne + tracé GPX), avec dénivelé/distance/durée.
- **Infos pratiques actionnables** : hébergement (demi-pension, chambre privée) et restaurants — adresses, téléphones cliquables (`tel:`), liens de réservation, ouverture dans une appli de navigation.
- **Galerie d'images par URL** (libres de droits, Wikimedia Commons) avec **attribution** auteur/licence, sans embarquer les fichiers (appli légère).
- **Aucune donnée inventée** : les coordonnées affichées proviennent de sources vérifiées et restent « à confirmer » côté disponibilités/tarifs.

Non-goals (hors périmètre de ce change) :
- Pas de mode **offline** (le téléphone a internet sur place — contrainte levée).
- Pas de réservation/paiement en ligne intégré (on renvoie vers les liens officiels).
- Pas de backend / base de données (contenu statique versionné).
- Pas de multi-utilisateurs, comptes, ni i18n (FR uniquement).

## Capabilities

### New Capabilities
- `mobile-spa-shell`: coquille de l'application mobile-first — mise en page lisible en extérieur, navigation au pouce, distribution par URL/mail, ajout à l'écran d'accueil, performance/légèreté, déploiement statique.
- `trip-itinerary`: modèle de données du séjour et présentation jour par jour (vue d'ensemble + détail de chaque jour, randos, pique-nique, variantes).
- `hike-maps`: cartes interactives par randonnée avec tracé GPX et indicateurs clés (distance, dénivelé, durée, type boucle/aller-retour).
- `practical-info`: fiches contacts actionnables pour hébergement et restaurants (adresse, téléphone cliquable, lien de réservation, ouverture navigation) avec mentions de fiabilité des données.
- `media-gallery`: affichage d'images illustratives chargées par URL avec attribution (auteur, licence, lien source) et repli en cas d'image indisponible.

### Modified Capabilities
<!-- Aucune : projet vierge, aucune spec existante dans openspec/specs/. -->

## Impact

- **Nouveau code** : application front-end statique (stack à arrêter en design — orientation : SPA simple, déploiement statique). Bibliothèque de cartes (ex. Leaflet) + parsing/affichage GPX.
- **Données** : un jeu de données de contenu versionné (séjour, randos, hébergements, restaurants, médias) issu de la recherche vérifiée déjà réalisée.
- **Dépendances externes en ligne** : fonds de carte (IGN/OSM), images hotlinkées (Wikimedia Commons). Risque de disponibilité/perf à traiter en design.
- **À vérifier sur le terrain** : disponibilités, tarifs et téléphones (Office de Tourisme La Grave — 04 76 79 90 05). ⚠️ Lauvitel : accès voiture coupé (crue juin 2024), navette uniquement.
- Aucun système existant impacté (projet vierge).
