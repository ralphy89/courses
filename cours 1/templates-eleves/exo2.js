/**
 * Exercice 2 — À compléter (template élève)
 * Page : exo2.html
 */

let inventaire = [];

const stockForm = document.getElementById("stock-form");

stockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO : objet appareil + inventaire.push + reset + afficherInventaire()

  document.getElementById("stock-count").textContent =
    "À vous : complétez l’exercice 2 dans exo2.js.";
});

function afficherInventaire() {
  // TODO : vider #stock-list, boucle for, <li> pour chaque inventaire[i]
}
