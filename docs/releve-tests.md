# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
stock total de plants = 30+45+20+50+25+18+12+22+8+10 = 240
Angiospermes : 8 espèces; 222 plants
Gymnospermes 2 espèces: 18 plants

Lignes de 10 plants ou moins:
N09 : pin (gymnosperme), 8plants
N10 : cycas (gymnosperme), 10plants


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Choix inconnu| Choix invalide et de retour au menu| Choix invalide et  | |
| Ajout de nouveau plants |Ajouter le plant |Ajout de plant avec succès |Axel Junior BENE |
|Lister l'inventaire |afficher la liste d'inventaire |affichage de la liste d'inventaire avec succès |Axel Junior BENE |
|Rechercher code |Rechercher des elements|Recherche d'element avec succès | Axel Junior BENE|
| Trier |Trier (Par nom) |Trie (Par nom) avec succès |Axel Junior BENE |
| Synthèse des quantités |afficher la synthèse des quantités |affichage de la synthèse des quantités avec succès |Axel Junior BENE |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
