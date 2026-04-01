/**
 * Exercices 1 & 2 — Variables, formulaire, liste, objets
 * Fichier : index.js (lié depuis index.html)
 */

const form = document.getElementById("device-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO élèves : déclarer des variables à partir des champs du formulaire
  // Indices :
  //   document.getElementById("device-name").value
  //   document.getElementById("price").value  → Number(...) pour le prix
  //   document.getElementById("is-new").checked  → true / false

  const output = document.getElementById("output");
  output.textContent = "À vous : remplissez les variables et construisez le texte du récapitulatif.";
});

/* Thème clair / sombre — variable booléenne + attribut sur <html> */
const themeToggle = document.getElementById("theme-toggle");
let modeClair = false;

function appliquerTheme() {
  if (modeClair) {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "Mode sombre";
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "Mode clair";
    themeToggle.setAttribute("aria-pressed", "false");
  }
}

themeToggle.addEventListener("click", function () {
  modeClair = !modeClair;
  appliquerTheme();
});

/* -------------------------------------------------------------------------- */
/* Exercice 2 — Liste (tableau) et objets                                     */
/* -------------------------------------------------------------------------- */

let inventaire = [];

const stockForm = document.getElementById("stock-form");

stockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO élèves :
  // 1) Lire #phone-image, #phone-modele, #phone-marque, #phone-categorie, #phone-prix, #phone-quantite
  // 2) if (...) { message dans #stock-erreur ; return }
  // 3) inventaire.push({ imageUrl, modele, marque, categorie, prix, quantite })
  // 4) vider #stock-erreur, stockForm.reset(), afficherCartes()

  document.getElementById("stock-count").textContent =
    "À vous : complétez l’exercice 2 (objet + push + afficherCartes).";
});

function afficherCartes() {
  // TODO élèves :
  // const zone = document.getElementById("stock-cartes")
  // zone.innerHTML = ""
  // #stock-count avec inventaire.length
  // for (...) { article.stock-card, .stock-card-media (img ou placeholder), .stock-card-body ... }
}

/* Afficher / masquer les blocs correction */
function bindCorrectionToggle(buttonId, blockId) {
  const btn = document.getElementById(buttonId);
  const block = document.getElementById(blockId);
  if (!btn || !block) return;

  const closedLabel =
    buttonId === "toggle-correction-2"
      ? "Afficher une correction possible (cartes + image)"
      : "Afficher une correction possible (script)";

  btn.addEventListener("click", function () {
    const open = block.classList.toggle("visible");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Masquer la correction" : closedLabel;
  });
}

bindCorrectionToggle("toggle-correction", "correction-block");
bindCorrectionToggle("toggle-correction-2", "correction-block-2");
