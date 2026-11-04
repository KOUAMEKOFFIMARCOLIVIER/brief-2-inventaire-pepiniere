// Synthèse des quantités disponibles.
// Fiche : fiches/5-synthese.md · Vérifier : npm run test:synthese

// Seuil de suivi des stocks faibles, en nombre de plants. C'est un repère pédagogique,
// pas une recommandation de production.
export const SEUIL_STOCK_FAIBLE = 10;

// Renvoie le nombre total de plants. Liste vide : 0.
export function totalPlants(plants) {
  let total = 0;
for (let i = 0; i < plants.length; i++) {
total += plants[i].nombrePlants;
}
return total;
}

// Renvoie un objet : pour chaque groupe, le nombre d'espèces (de lignes) et le total de plants.
// Exemple : { angiosperme: { especes: 8, plants: 222 }, gymnosperme: { especes: 2, plants: 18 } }
// Liste vide : {} (un objet vide).
export function syntheseParGroupe(plants) {
  const synthese = {};
for (let i = 0; i < plants.length; i++) {
const plant = plants[i];
const cle = plant.groupe;
if (!synthese[cle]) {
synthese[cle] = { especes: 0, plants: 0 };
}
synthese[cle].especes += 1;
synthese[cle].plants += plant.nombrePlants;
}
return synthese;
}

// Renvoie un NOUVEAU tableau avec les plants dont le nombre est INFÉRIEUR OU ÉGAL au seuil.
// Exemple : stocksFaibles(donnees, 10) → N09 (8 plants) et N10 (10 plants)
  export function stocksFaibles(plants, seuil) {
const resultat = [];
for (let i = 0; i < plants.length; i++) {
if (plants[i].nombrePlants <= seuil) {
resultat.push(plants[i]);
}
}
return resultat;
}

// Renvoie le plant (la ligne d'inventaire) qui a le plus grand nombre de plants,
// le premier rencontré en cas d'égalité, ou null si l'inventaire est vide.
// Exemple : especeLaPlusAbondante(donnees) → N04 (tomate, 50 plants)
export function especeLaPlusAbondante(plants) {
  if (!plants || plants.length === 0) {
return null;
}
let plusAbondante = plants[0];
for (let i = 1; i < plants.length; i++) {
if (plants[i].nombrePlants > plusAbondante.nombrePlants) {
plusAbondante = plants[i];
}
}
return plusAbondante;
}
