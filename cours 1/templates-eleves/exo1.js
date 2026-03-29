/**
 * Exercice 1 — À compléter (template élève)
 * Page : exo1.html
 */

const form = document.getElementById("device-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO : lire device-name, brand, price, category, is-new → variables
  // TODO : afficher le récapitulatif dans #output

  const output = document.getElementById("output");
  output.textContent = "À vous : complétez l’exercice 1 dans exo1.js.";
});

/* Thème — laissé tel quel (ou étudier le bonus) */
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
