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

/* -------------------------------------------------------------------------- */
/* Exercice 2 — inventaire en cartes (aligné templates-eleves / exo2)          */
/* -------------------------------------------------------------------------- */

let inventaire = [];

function ligneMeta(cardBody, label, texte) {
  const p = document.createElement("p");
  p.className = "stock-card-meta";
  const strong = document.createElement("strong");
  strong.textContent = label;
  p.appendChild(strong);
  p.appendChild(document.createTextNode(" — " + texte));
  cardBody.appendChild(p);
}

function afficherCartes() {
  const zone = document.getElementById("stock-cartes");
  const compteur = document.getElementById("stock-count");
  zone.innerHTML = "";
  compteur.textContent = inventaire.length + " référence(s) en inventaire";

  for (let i = 0; i < inventaire.length; i++) {
    const a = inventaire[i];
    const card = document.createElement("article");
    card.className = "stock-card";

    const media = document.createElement("div");
    media.className = "stock-card-media";
    if (a.imageUrl && a.imageUrl.trim() !== "") {
      const img = document.createElement("img");
      img.src = a.imageUrl.trim();
      img.alt = "Photo de " + a.modele;
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "stock-card-photo-placeholder";
      ph.textContent = "📱";
      ph.setAttribute("aria-hidden", "true");
      media.appendChild(ph);
    }
    card.appendChild(media);

    const body = document.createElement("div");
    body.className = "stock-card-body";

    const titre = document.createElement("h3");
    titre.textContent = a.modele;
    body.appendChild(titre);

    ligneMeta(body, "Marque", a.marque);
    ligneMeta(body, "Type", a.categorie);

    const prixLigne = document.createElement("p");
    prixLigne.className = "stock-card-price";
    const prixArrondi = Math.round(a.prix * 100) / 100;
    prixLigne.textContent = prixArrondi + " €";
    body.appendChild(prixLigne);

    const qtyBloc = document.createElement("div");
    qtyBloc.className = "stock-card-qty";
    qtyBloc.appendChild(document.createTextNode("Quantité en stock"));
    const spanQty = document.createElement("span");
    spanQty.textContent = String(a.quantite);
    qtyBloc.appendChild(spanQty);
    body.appendChild(qtyBloc);

    card.appendChild(body);
    zone.appendChild(card);
  }
}

const stockForm = document.getElementById("stock-form");

stockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const err = document.getElementById("stock-erreur");
  err.textContent = "";

  const imageUrl = document.getElementById("phone-image").value.trim();
  const modele = document.getElementById("phone-modele").value.trim();
  const marque = document.getElementById("phone-marque").value.trim();
  const categorie = document.getElementById("phone-categorie").value;
  const prix = Number(document.getElementById("phone-prix").value);
  const quantite = Number(document.getElementById("phone-quantite").value);

  if (!modele || !marque || !categorie) {
    err.textContent = "Modèle, marque et type d’appareil sont obligatoires.";
    return;
  }
  if (Number.isNaN(prix) || prix < 0) {
    err.textContent = "Prix invalide (nombre ≥ 0).";
    return;
  }
  if (Number.isNaN(quantite) || quantite < 0 || !Number.isInteger(quantite)) {
    err.textContent = "Quantité invalide (entier ≥ 0).";
    return;
  }

  inventaire.push({ imageUrl, modele, marque, categorie, prix, quantite });
  stockForm.reset();
  afficherCartes();
});

afficherCartes();
