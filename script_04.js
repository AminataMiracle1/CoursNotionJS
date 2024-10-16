// Utiliser Css pour fair disparetre un element et L'afficher

const toggleBtn = document.getElementById("toggleBtn");
const texte = document.getElementById("texte");




toggleBtn.addEventListener("click", function() {
    if (texte.style.display === "none") {
        texte.style.display = "block";
    }else {
        texte.style.display = "none";
    }
})