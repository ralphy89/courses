/**
 * Version CORRIGÉE — à déployer sur le site formateur (référence + démo fonctionnelle).
 */

const form = document.getElementById("device-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomAppareil = document.getElementById("device-name").value.trim();
  const marque = document.getElementById("brand").value.trim();
  const prix = Number(document.getElementById("price").value);
  const type = document.getElementById("category").value;
  const estNeuf = document.getElementById("is-new").checked;

  const resume =
    `Appareil : ${nomAppareil}\n` +
    `Marque : ${marque}\n` +
    `Prix : ${prix} €\n` +
    `Type : ${type}\n` +
    `Neuf : ${estNeuf ? "oui" : "non"}`;

  document.getElementById("output").textContent = resume;
  console.log({ nomAppareil, marque, prix, type, estNeuf });
});

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

let inventaire = [];

function afficherInventaire() {
  const liste = document.getElementById("stock-list");
  const compteur = document.getElementById("stock-count");
  liste.innerHTML = "";
  compteur.textContent = inventaire.length + " appareil(s) en stock";

  for (let i = 0; i < inventaire.length; i++) {
    const a = inventaire[i];
    const li = document.createElement("li");
    li.textContent = a.nom + " — " + a.marque + " — " + a.prix + " € — " + a.type;
    liste.appendChild(li);
  }
}

const stockForm = document.getElementById("stock-form");

stockForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const appareil = {
    nom: document.getElementById("stock-device-name").value.trim(),
    marque: document.getElementById("stock-brand").value.trim(),
    prix: Number(document.getElementById("stock-price").value),
    type: document.getElementById("stock-category").value,
  };
  inventaire.push(appareil);
  stockForm.reset();
  afficherInventaire();
});

afficherInventaire();
