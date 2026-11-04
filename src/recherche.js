// Rechercher et trier les plants.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les plants dont le nom (ou nom commun) CONTIENT le texte cherché,
// sans tenir compte des majuscules : 'PALM' trouve 'palmier à huile'. Éventuellement vide.
export function rechercherParNom(plants, texte) {
  const texteMinuscule = texte.toLowerCase();
  return plants.filter(plant => plant.nomCommun.toLowerCase().includes(texteMinuscule));
}


// Renvoie un NOUVEAU tableau avec les plants de ce groupe botanique (éventuellement vide).
 export function filtrerParGroupe(plants, groupe) {
const resultat = [];
for (let i = 0; i < plants.length; i++) {
if (plants[i].groupe && groupe && plants[i].groupe.toLowerCase() === groupe.toLowerCase()) {
resultat.push(plants[i]);
}
}
return resultat;
}

// Renvoie une COPIE triée par nombre de plants croissant, avec un comparateur numérique.
// Deux plants de même nombre gardent leur ordre d'origine. Le tableau reçu ne doit pas changer d'ordre.
export function trierParNombrePlants(plants) {
const copie = [...plants];
  copie.sort((a, b) => a.nombrePlants - b.nombrePlants);
  return copie;
}

