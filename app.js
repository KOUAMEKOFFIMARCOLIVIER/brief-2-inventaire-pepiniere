// Inventaire de la pépinière — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

async function main() {
  ouvrirSaisie();
  const plants = await chargerJson(FICHIER_DONNEES);
  let continuer = true;

  while (continuer) {
    console.log("\n==============================");
    console.log(" GESTION DE LA PEPINIERE ");
    console.log("=================================");
    console.log("1. Ajouter un plant");
    console.log("2. Lister l'inventaire");
    console.log("3. Quitter");

    const choix = await demander("Votre Choix : ");

    if (choix === "1") {
      const code = await demander("Code du plant : ");
      const nom = await demander("Nom commun : ");
      const groupe = await demander("Groupe botanique : ");
      const nbPlants = await demander("Nombre de plants : ");
      const dateRel = await demander("Date du relevé : ");

      const saisie = {
        id: code,
        nomCommun: nom,
        groupe: groupe,
        nombrePlants: nbPlants,
        dateReleve: dateRel
      };

      const existant = trouverParId(plants, saisie.id);
      if (existant !== undefined) {
        formaterPlant(existant);
      }

      console.log(GROUPES.join(" "));

      const erreurs = ajouterPlant(plants, saisie);

      if (erreurs.length === 0) {
        await enregistrerJson(FICHIER_DONNEES, plants);
        console.log("Plant ajouté avec succès.");
      } else {
        console.log("Ajout refusé :");
        erreurs.forEach(err => console.log(" - " + err));
      }
    } else if (choix === "2") {
      console.log("\n--- Inventaire ---");
      console.log(listerPlants(plants));
    } else if (choix === "3") {
      continuer = false;
      console.log("Au revoir !");
    } else {
      console.log("Choix inconnu. Veuillez entrer 1, 2 ou 3.");
    }
  }
  fermerSaisie();
}

main();
