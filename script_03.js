const changerCouleur = document.getElementById("changerCouleur");
const listCouleur = ["white", "blue", "red", "green", "yellow", "pink"];
const zone = document.getElementById("zone");
// Crééer une liste de couleur

changerCouleur.addEventListener("click", e => {
    zone.style.background = listCouleur[Math.floor(Math.random() * listCouleur.length)];
    console.log(listCouleur[Math.floor(Math.random() * listCouleur.length)]);
})