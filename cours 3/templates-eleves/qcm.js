/**
 * Exercice 2 — À compléter (template élève)
 * Page : qcm.html
 *
 * Rappel : utilisez getElementById / getElementsByName.
 */

// TODO : mettez ici les bonnes réponses (une par question) dans l’ordre
// Exemple : ["a", "c", "b", "a"]
const bonnesReponses = [];

function radioCoche(nom) {
  const liste = document.getElementsByName(nom);
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].checked) return liste[i];
  }
  return null;
}

document.getElementById("btn-resultat").addEventListener("click", function () {
  // TODO : calculer le score en lisant q1, q2, q3, q4
  // TODO : afficher le score dans #resultat
  document.getElementById("resultat").textContent = "À vous : complétez l’exercice dans qcm.js.";
});
