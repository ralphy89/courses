/**
 * Exercice 1 — À compléter (template élève)
 * Page : connexion.html
 *
 * Rappel (cours) : utilisez uniquement getElementById / getElementsByName.
 */

const BON_LOGIN = "demo";
const BON_MOT_DE_PASSE = "code123";

const form = document.getElementById("login-form");
const zoneMessage = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO : vider zoneMessage, puis lire #login et #password
  // TODO : si un champ est vide → message d’erreur
  // TODO : comparer avec BON_LOGIN / BON_MOT_DE_PASSE
  // TODO : afficher un message succès ou erreur

  zoneMessage.className = "msg-erreur";
  zoneMessage.textContent = "À vous : complétez l’exercice dans connexion.js.";
});
