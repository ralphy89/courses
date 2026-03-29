const profil = {
  nom: "Ralph",
  bio: "Développeur web débutant",
  ville: "Gonaïves",
};

const skills = ["HTML", "CSS", "JavaScript"];

function initialesDepuisNom(nom) {
  const parts = nom.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function afficherPortfolio() {
  const card = document.getElementById("portfolio-card");
  const btn = document.getElementById("btn-portfolio");

  document.getElementById("avatar").textContent = initialesDepuisNom(profil.nom);
  document.getElementById("nom").textContent = profil.nom;
  document.getElementById("bio").textContent = profil.bio + " • " + profil.ville;

  const liste = document.getElementById("skills");
  liste.innerHTML = "";

  for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.className = "skill-tags__item";
    const span = document.createElement("span");
    span.className = "skill-tags__label";
    span.textContent = skills[i];
    li.appendChild(span);
    liste.appendChild(li);
  }

  card.classList.add("is-loaded");
  btn.textContent = "Portfolio affiché";
  btn.disabled = true;
}

document.getElementById("btn-portfolio").addEventListener("click", afficherPortfolio);
