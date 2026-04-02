/**
 * Projet — To‑Do List (template élève)
 * Page : todo.html
 *
 * Obligatoire : ajouter / afficher / supprimer
 * Bonus : terminer / vider / sauvegarder (localStorage)
 */

// Modèle simple (obligatoire) : un tableau de textes
// Bonus : passez à [{ texte, done }, ...]
let taches = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const liste = document.getElementById("todo-list");
const zoneErreur = document.getElementById("todo-error");
const compteur = document.getElementById("todo-count");
const btnVider = document.getElementById("todo-clear");

function mettreAJourCompteur() {
  const n = taches.length;
  compteur.textContent = n + (n <= 1 ? " tâche" : " tâches");
}

function afficherTaches() {
  // TODO : vider la liste (liste.textContent = "")
  // TODO : pour chaque tâche :
  // - créer un <li class="todo-item">
  // - afficher le texte dans un <p>
  // - ajouter un bouton "Supprimer" (class todo-delete)
  // - bonus : bouton "Terminer" (class todo-done) + style .is-done
  // - appendChild vers #todo-list
  liste.textContent = "";
  mettreAJourCompteur();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO : lire input.value + trim()
  // TODO : si vide → afficher une erreur dans #todo-error et return
  // TODO : sinon pousser dans taches, vider erreur, reset input, afficherTaches()
  zoneErreur.textContent = "À vous : complétez le projet dans todo.js.";
});

btnVider.addEventListener("click", function () {
  // TODO (bonus) : vider le tableau + afficherTaches()
  zoneErreur.textContent = "À vous : implémentez le bouton « Vider la liste ».";
});

// Initialisation
afficherTaches();

