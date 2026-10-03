# Méga menu et page Ressources

## Objectif
Étendre l’expérience Squareful sans changer sa direction éditoriale : navigation plus riche sur ordinateur et mobile, puis une page Ressources dédiée aux catégories et articles.

## Navigation
- Remplacer le menu actuel par un méga menu accessible, ouvert au clic, avec fermeture au clic extérieur et via Échap.
- Organiser le panneau en rubriques utiles : catégories d’articles, sujets populaires, article mis en avant et accès direct à toutes les ressources.
- Conserver le style blanc, précis et minimal de la page actuelle, avec l’accent bleu et la photographie éditoriale.
- Sur mobile, créer un panneau plein écran sous l’en-tête avec rubriques dépliables, article mis en avant et bouton principal, sans débordement horizontal.
- Ajouter des états actifs, focus clavier, libellés accessibles et navigation réelle vers la page Ressources.

## Page Ressources
- Créer `/resources` avec ses propres métadonnées de partage et de référencement.
- Ajouter une introduction éditoriale, un article principal, des catégories filtrables et une grille d’articles reprenant les visuels existants.
- Prévoir des catégories telles que Fintech, Digital Banking, Innovation, Technology et Finance, avec compteurs et filtres interactifs.
- Ajouter un bloc d’inscription et conserver le même pied de page visuel que l’article.
- Rendre la grille et tous les contrôles confortables sur mobile, tablette et ordinateur.

## Structure technique
- Extraire l’en-tête et le pied de page partagés afin que l’article et Ressources utilisent exactement la même navigation.
- Garder les données éditoriales locales et réutilisables, sans ajouter de stockage ni de service externe.
- Utiliser la navigation native du projet pour les liens entre `/` et `/resources`.
- Mettre à jour la règle d’architecture du projet pour autoriser cette seconde page publique.

## Vérification
- Tester l’ouverture, la fermeture et les liens du méga menu sur ordinateur et mobile.
- Tester les filtres de catégories sur Ressources.
- Vérifier les deux pages aux largeurs mobile et ordinateur, sans chevauchement ni débordement.
- Confirmer l’absence d’erreurs de compilation et d’exécution.
