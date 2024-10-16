const afficherHeureBtn = document.getElementById("afficherHeureBtn");
const date = new Date();

afficherHeureBtn.addEventListener('click', function () {
    const updateHeure = () => {
        const maintenant = new Date();
        const heures = String(maintenant.getHours()).padStart(2, '0');
        const minutes = String(maintenant.getMinutes()).padStart(2, '0');
        const secondes = String(maintenant.getSeconds()).padStart(2, '0');
        horloge.innerHTML = `${heures}:${minutes}:${secondes}`;
    };

    updateHeure(); // Affiche l'heure immédiatement
    setInterval(updateHeure, 1000); // Met à jour l'heure chaque seconde
});