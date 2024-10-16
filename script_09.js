// Utiliser setInterval

const compteReboursBtn = document.getElementById('demarrerCompteReboursBtn');
let compteRebours = document.getElementById('compteRebours');
let sec = 10

compteReboursBtn.addEventListener('click', function () {
    compteRebours.innerHTML = sec; // Affiche la valeur initiale
    const intervalId = setInterval(function () {
        if (sec <= 0) { // Vérifie si sec est inférieur ou égal à 0
            clearInterval(intervalId); // Arrête l'intervalle
        } else {
            sec--; // Décrémente sec
            compteRebours.innerHTML = sec; // Met à jour l'affichage
        }

    }, 1000); // Exécute toutes les secondes
});