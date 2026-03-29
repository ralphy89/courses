const profil = {
  nom: "Ralph",
  bio: "Développeur web débutant",
  ville: "Gonaïves",
};

const skills = ["HTML", "CSS", "JavaScript"];

function afficherPortfolio() {
  document.getElementById("nom").textContent = profil.nom;
  document.getElementById("bio").textContent = profil.bio + " • " + profil.ville;

  const liste = document.getElementById("skills");
  liste.innerHTML = "";

  for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    liste.appendChild(li);
  }
}

document.getElementById("btn-portfolio").addEventListener("click", afficherPortfolio);
