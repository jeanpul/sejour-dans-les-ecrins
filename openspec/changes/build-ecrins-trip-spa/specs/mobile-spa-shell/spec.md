## ADDED Requirements

### Requirement: Application mono-fichier autonome
Le build SHALL produire un unique fichier `index.html` auto-suffisant (JS, CSS, données de séjour et traces GPX inlinés), ouvrable directement depuis une pièce jointe e-mail en `file://`, sans dépendance à un serveur ni à un `fetch` de ressource locale.

#### Scenario: Ouverture depuis une pièce jointe
- **WHEN** l'utilisateur enregistre puis ouvre le fichier `index.html` reçu par mail dans le navigateur de son smartphone
- **THEN** l'application se charge et affiche le séjour sans erreur de chargement de ressource locale

#### Scenario: Aucune requête de ressource locale
- **WHEN** l'application démarre depuis `file://`
- **THEN** elle ne déclenche aucun `fetch`/XHR vers un fichier local (les données et GPX sont déjà embarqués)

### Requirement: Interface mobile-first lisible en extérieur
L'interface SHALL être conçue mobile-first : cibles tactiles d'au moins 44×44 px, contraste élevé pour lecture en plein soleil, mise en page fluide en orientation portrait, sans défilement horizontal.

#### Scenario: Affichage sur smartphone en portrait
- **WHEN** l'application est ouverte sur un écran de largeur ≤ 430 px
- **THEN** le contenu s'affiche sur une colonne, sans débordement horizontal, avec des boutons/onglets actionnables au pouce

### Requirement: Navigation par sections sans routeur
L'application SHALL permettre de naviguer entre les sections (Vue d'ensemble, jours du séjour, hébergement, infos pratiques) via une navigation interne (onglets/ancres) sans routeur d'historique, afin de rester fiable en `file://`.

#### Scenario: Changement de section
- **WHEN** l'utilisateur sélectionne une section dans la navigation
- **THEN** la section correspondante s'affiche sans rechargement de page ni changement d'URL cassant
