/**
 * Exercice 2 — À compléter (template élève)
 * Page : exo2.html
 *
 * Rappel structure d’un article dans inventaire :
 * { imageUrl, modele, marque, categorie, prix, quantite }
 */

let inventaire = [];

const stockForm = document.getElementById("stock-form");

stockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO : lire les champs (image URL, modèle, marque, catégorie, prix, quantité)
  // TODO : if (champs invalides) → #stock-erreur et return
  // TODO : sinon inventaire.push({ ... }), vider #stock-erreur, reset(), afficherCartes()

  document.getElementById("stock-count").textContent =
    "À vous : complétez l’exercice 2 dans exo2.js.";
});

function afficherCartes() {
  // TODO : vider #stock-cartes
  // TODO : for (let i = 0; i < inventaire.length; i++) { … }
  //     Chaque carte : .stock-card-media avec <img src="…"> OU .stock-card-photo-placeholder
  //     Puis .stock-card-body : titre modèle, lignes marque / type (liste) / prix / quantité
  // TODO : #stock-count = texte avec inventaire.length
}
