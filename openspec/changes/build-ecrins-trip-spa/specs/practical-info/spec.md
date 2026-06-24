## ADDED Requirements

### Requirement: Fiche hébergement actionnable
L'application SHALL présenter l'hébergement retenu avec son nom, son type, son adresse, l'indication demi-pension, et des actions directes : appeler (`tel:`), ouvrir le lien de réservation, et ouvrir l'adresse dans une application de navigation.

#### Scenario: Appeler l'hébergement
- **WHEN** l'utilisateur touche le numéro de téléphone de l'hébergement
- **THEN** le smartphone ouvre l'appli téléphone avec le numéro pré-rempli

#### Scenario: Ouvrir la réservation
- **WHEN** un lien de réservation est disponible pour l'hébergement
- **THEN** le toucher ouvre le site de réservation officiel

### Requirement: Restaurants et alternatives
L'application SHALL pouvoir lister des restaurants / alternatives d'hébergement avec leurs coordonnées actionnables, pour les soirs sans demi-pension ou en repli.

#### Scenario: Consultation d'une alternative
- **WHEN** l'utilisateur ouvre la section infos pratiques
- **THEN** il voit les alternatives/restaurants avec adresse et actions (appel, navigation) disponibles

### Requirement: Indication de fiabilité des données
Toute coordonnée non confirmée (téléphone, prix, disponibilité) SHALL être marquée « à vérifier / à confirmer », et le contact de l'Office de Tourisme de La Grave SHALL être affiché comme recours.

#### Scenario: Donnée non confirmée
- **WHEN** une information n'a pas pu être vérifiée à la source
- **THEN** elle est affichée avec une mention explicite « à vérifier »

#### Scenario: Recours Office de Tourisme
- **WHEN** l'utilisateur consulte les infos pratiques
- **THEN** le numéro de l'Office de Tourisme de La Grave est accessible et appelable
