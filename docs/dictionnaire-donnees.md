# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | N09 |
| nomCommun |Nom commun de l'espèce |texte |non vide  |-- | cacao |
| groupe| Grand groupe botanique| texte | valeur parmi la liste autorisé |-- |angiosperme |
| nombrePlants | Nombre de plants en stock |nombre | entier positif ou null |sans unité |30 |
| dateReleve|Date du comptage des plants | |AAAA-MM-JJ |- |2026-10-24 |

**Listes de valeurs autorisées** : 
Nom commun de l'espèce
Grand groupe botanique
Nombre de plants en stock
Date du comptage des plants
**Sources** : 

