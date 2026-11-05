# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : ✏️

1. **Une fonction que j'ai écrite**, et comment elle marche :verifierPlant(saisie, plants), Vérifier que les informations d'un plant sont correctes avant de l'ajouter ou de modifier ses informations dans l'inventaire.
2. **Une difficulté, et sa solution** : J’ai rencontré un souci avec la persistance des données quand je faisais des modifications ou des suppressions : après avoir supprimé un plant de l'inventaire, je remarquais qu'il réapparaissait à chaque fois que je relançais l'application.

La solution a été de bien m'assurer que la fonction de suppression mettait à jour le tableau en mémoire et qu'elle déclenchait correctement l'enregistrement dans le fichier JSON, tout en veillant à ce que le format du fichier reste propre et valide pour éviter que le programme ne recharge les données d'origine par défaut.
3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : Niangoran Anne; Tiemoko Marie Carmelle.
