//changer l'arrière plan avec du Js de l'animation
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
    // Bascule entre mode clair et sombre en modifiant la classe 'sombre'
    body.classList.toggle("sombre");

    // Change le texte du bouton selon l'état actuel
    if (body.classList.contains("sombre")) {
        toggleThemeBtn.textContent = "Mode Clair";
    } else {
        toggleThemeBtn.textContent = "Mode Sombre";
    }
});