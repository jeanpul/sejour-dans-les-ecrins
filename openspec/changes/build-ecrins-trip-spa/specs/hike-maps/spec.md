## ADDED Requirements

### Requirement: Carte interactive par randonnée
Chaque randonnée SHALL disposer d'une carte interactive (Leaflet) affichant un fond cartographique distant et le tracé GPX de l'itinéraire, centrée automatiquement sur l'étendue du tracé.

#### Scenario: Affichage du tracé
- **WHEN** l'utilisateur ouvre une randonnée disposant d'une trace GPX
- **THEN** la carte affiche le tracé et ajuste son cadrage (fitBounds) à l'itinéraire

#### Scenario: Marqueur de départ
- **WHEN** la carte d'une randonnée est affichée
- **THEN** un marqueur indique le point de départ / parking de la randonnée

### Requirement: Indicateurs clés de randonnée
L'application SHALL afficher pour chaque randonnée la distance (km), le dénivelé positif (m), la durée estimée, le type (boucle ou aller-retour) et le niveau, lisibles même si la carte ne se charge pas.

#### Scenario: Carte indisponible
- **WHEN** le fond de carte distant ne se charge pas (réseau absent)
- **THEN** les indicateurs clés (distance, dénivelé, durée, type) restent affichés en texte

### Requirement: Lien vers fiche topo / GPX externe
Chaque randonnée SHALL fournir un lien vers sa fiche topo source et, si disponible, vers le fichier GPX, pour usage dans une application GPS dédiée.

#### Scenario: Accès au topo source
- **WHEN** l'utilisateur consulte une randonnée
- **THEN** un lien ouvre la fiche topo source de l'itinéraire
