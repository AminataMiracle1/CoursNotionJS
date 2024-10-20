const remplirBtn = document.getElementById("remplirBtn")

// variable initiale
let progress = 0
remplirBtn.addEventListener("click", ()=>{
    // Incrémenter la progression de 2 à chaque clic, sans dépasser 100
    if (progress < 100) {
        progress += 2;
        console.log(progress);

        // Mettre à jour la largeur de la barre de progression
        const progressBar = document.getElementById("progress");
        progressBar.style.width = progress + "%";

        // Afficher le pourcentage dans la barre
        progressBar.textContent = progress + "%";
    }

})