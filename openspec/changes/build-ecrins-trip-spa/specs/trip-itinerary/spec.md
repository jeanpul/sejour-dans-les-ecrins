## ADDED Requirements

### Requirement: Vue d'ensemble du séjour
L'application SHALL présenter une vue d'ensemble du séjour indiquant le titre, les dates (21–23 août 2026), la base (La Grave / La Meije), et un résumé des trois jours.

#### Scenario: Affichage de la vue d'ensemble
- **WHEN** l'utilisateur ouvre l'application
- **THEN** il voit les dates, la base du séjour et les trois jours résumés

### Requirement: Programme jour par jour
L'application SHALL afficher le détail de chaque jour (J1 21/08, J2 22/08, J3 23/08) avec son titre, son résumé, la ou les randonnées prévues et la mention du pique-nique du midi.

#### Scenario: Consultation d'un jour
- **WHEN** l'utilisateur ouvre le détail d'un jour
- **THEN** il voit la/les randonnée(s) du jour avec niveau, distance, dénivelé et durée

#### Scenario: Logique « voiture minimisée »
- **WHEN** un jour implique un trajet en voiture vers un départ de rando
- **THEN** l'information de trajet (depuis la base) est indiquée pour ce jour

### Requirement: Variantes de randonnée
Le modèle de données SHALL permettre d'associer plusieurs randonnées/variantes à un jour (ex. J3 : Lac & col d'Arsine ou option Lauvitel), et l'interface SHALL signaler clairement la variante recommandée et l'alternative.

#### Scenario: Jour avec variante
- **WHEN** un jour propose une randonnée recommandée et une alternative
- **THEN** l'application affiche les deux, en distinguant l'option par défaut de l'alternative
