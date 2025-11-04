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

// Afficher la date quand on clique
const btnDate = document.querySelector('#showDate');
const dateHere = document.querySelector('#dateHere');

if (btnDate) {
  btnDate.addEventListener('click', () => {
    const now = new Date();
    dateHere.textContent = now.toLocaleString();
  });
}

// Petit toggle thème sombre (option)
const toggleTheme = () => {
  document.body.classList.toggle('dark');
};

// on peut créer un bouton depuis JS si tu veux
const themeBtn = document.createElement('button');
themeBtn.textContent = "Toggle thème sombre";
themeBtn.style.marginTop = "10px";
document.body.appendChild(themeBtn);
themeBtn.addEventListener('click', toggleTheme);

