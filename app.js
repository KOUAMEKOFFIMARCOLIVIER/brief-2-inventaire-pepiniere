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
  console.log(GROUPES);

  const plants = await chargerJson(FICHIER_DONNEES);
  let continuer = true;

  console.log("==================================================");
  console.log(" INVENTAIRE DE LA PÉPINIÈRE ");
  console.log(" Pépinière pédagogique ");
  console.log("==================================================");
  console.log(`${plants.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.\n`);

  while (continuer) {
    console.log("--------- MENU ---------");
    console.log("1. Ajouter un plant");
    console.log("2. Lister l'inventaire");
    console.log("3. Rechercher (code, nom, groupe)");
    console.log("4. Trier (nombre de plants)");

    const choix = await demander("Votre choix : ");
    if (choix === null) break;

    if (choix === '1') {
      const code = await demander("Code du plant : ");
      if (code === null) continue;
      const nom = await demander("Nom commun : ");
      if (nom === null) continue;
      const groupe = await demander("Groupe botanique : ");
      if (groupe === null) continue;
      const nbPlants = await demander("Nombre de plants : ");
      if (nbPlants === null) continue;
      const dateRel = await demander("Date du relevé : ");
      if (dateRel === null) continue;

      const saisie = {
        id: code,
        nomCommun: nom,
        groupe: groupe,
        nombrePlants: nbPlants,
        dateReleve: dateRel
      };

      const erreurs = ajouterPlant(plants, saisie);

      if (erreurs.length === 0) {
        await enregistrerJson(FICHIER_DONNEES, plants);
        console.log(`Plant ${saisie.id} ajouté. L'inventaire compte ${plants.length} espèce(s).`);
      } else {
        console.log('Ajout refusé :');
        erreurs.forEach(err => console.log(`- ${err}`));
        console.log(`L'inventaire compte toujours ${plants.length} espèce(s).`);
      }

    } else if (choix === '2') {
      console.log(`\n--- Inventaire (${plants.length} espèce(s)) ---`);
      console.log(listerPlants(plants));

    } else if (choix === '3') {
      console.log("\n--- Rechercher ---");
      console.log("1. Par code");
      console.log("2. Par nom commun");
      console.log("3. Les espèces d'un groupe botanique");
      const sousChoix = await demander("Votre choix : ");

      if (sousChoix === '1') {
        const code = await demander("Code : ");
        if (code !== null) {
          const plant = trouverParId(plants, code.toUpperCase());
          if (plant) {
            console.log(formaterPlant(plant));
          } else {
            console.log(`Plant ${code.toUpperCase()} introuvable.`);
          }
        }
      } else if (sousChoix === '2') {
        const texte = await demander("Nom ou partie du nom : ");
        if (texte !== null) {
          const resultats = rechercherParNom(plants, texte.toLowerCase());
          console.log(`${resultats.length} espèce(s) dont le nom contient « ${texte.toLowerCase()} » :`);
          console.log(listerPlants(resultats));
        }
      } else if (sousChoix === '3') {
        const groupe = await demander("Groupe (angiosperme ou gymnosperme) : ");
        if (groupe !== null) {
          const resultats = filtrerParGroupe(plants, groupe.toLowerCase());
          console.log(`${resultats.length} espèce(s) du groupe ${groupe.toLowerCase()} :`);
          console.log(listerPlants(resultats));
        }
      } else {
        console.log("Choix inconnu : retour au menu.");
      }

    } else if (choix === '4') {
      console.log("\n--- Trier ---");
      console.log("1. Par nombre de plants croissant");
      const sousChoix = await demander("Votre choix : ");

      if (sousChoix === '1') {
        const plantsTries = trierParNombrePlants(plants);
        console.log(listerPlants(plantsTries));
      } else {
        console.log("Choix inconnu : retour au menu.");
      }

    } else {
      console.log(`Choix inconnu : « ${choix} ». Veuillez entrer un chiffre valide.`);
    }
  }

  fermerSaisie();
}

main();
