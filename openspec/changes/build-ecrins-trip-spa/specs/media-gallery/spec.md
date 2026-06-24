## ADDED Requirements

### Requirement: Images chargées par URL
L'application SHALL afficher les images illustratives en les référençant par URL distante (Wikimedia Commons), sans embarquer les fichiers dans le bundle, et SHALL utiliser des URLs de vignette redimensionnées pour limiter le poids et le temps de chargement.

#### Scenario: Affichage d'une image
- **WHEN** une section dispose d'une image illustrative
- **THEN** l'image est chargée depuis son URL distante (vignette) et affichée

#### Scenario: Chargement différé
- **WHEN** des images sont hors de l'écran visible
- **THEN** leur chargement est différé (lazy) pour préserver les performances

### Requirement: Attribution des images
Chaque image SHALL être accompagnée de son attribution (auteur, licence, lien vers la page source), conformément aux licences Wikimedia (CC-BY / CC-BY-SA), sauf images en domaine public / CC0.

#### Scenario: Crédit affiché
- **WHEN** une image sous licence CC-BY ou CC-BY-SA est affichée
- **THEN** son auteur, sa licence et le lien vers la page source sont accessibles

### Requirement: Repli en cas d'image indisponible
Si une image distante ne se charge pas, l'application SHALL afficher un repli discret (placeholder) sans casser la mise en page.

#### Scenario: Image inaccessible
- **WHEN** l'URL d'une image renvoie une erreur ou ne se charge pas
- **THEN** un placeholder s'affiche à la place sans perturber la mise en page
