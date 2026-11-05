# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Cet outil est destiné aux assistants pépinière et aux responsables de pépinière 
pédagogiques pour le suivi de leurs culture.
Il repond au besoin fondamental de centraliser un inventaire d'espèces végétales qui se trouve souvent dispersé.
L'opérateur s'en sert pour retrouver rapidement une espèce, lire son groupe botanique et consulter les quantités disponibles.
Lors de son utilisation, l'utilisateur saisit au clavier des informations précises comme le nom commun, le groupe botanique, le nombre de plants et la date du relevé.
Le programme affiche ensuite un menu interactif permettant d'ajouter de nouveaux plants, de lister l'inventaire complet et d'effectuer des recherches ciblées.
Il permet également de trier les données selon le nombre de plants et de générer une synthèse globale des quantités.
En revanche, cet outil de gestion en ligne de commande ne gère pas la facturation des clients ni la comptabilité financière.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [X] Données lues et enregistrées dans `donnees/plants.json`
- [X] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [X] Lister l'inventaire, message si l'inventaire est vide
- [X] Rechercher par code ou par nom ; filtrer par groupe botanique
- [X] Trier par nombre de plants
- [X] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

id; nomCommun; groupe; nombrePlants; dateReleve

## Limites

Un périmètre limité
Une interface exclusivement en ligne de commande
L'absence de vraie base de données

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Prénom NOM: KOFFI MARC OLIVIER KOUAME, compte GitHub: KOUAMEKOFFIMARCOLIVIER. Entraide : Koffi Marie Carmelle TIEMOKO
Koutouan Ange Cyriack AKUI
Abdallah SALIA
Kaba Konaté

