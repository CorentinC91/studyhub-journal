// script.js
console.log("script.js chargé");

const titre = document.querySelector("#titre");
const para = document.querySelector("#para");

// si le titre existe, on ajoute un événement clic
if (titre) {
  titre.addEventListener("click", () => {
    para.textContent = "Tu as cliqué — bravo ! 🎉";
  });
}

// Exemple : ajouter un bouton depuis JS
const btn = document.createElement("button");
btn.textContent = "Changer le texte";
btn.id = "changeText";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  para.textContent = "Texte changé avec le bouton JS !";
});

