// Gener des nombres aleotoire et verifier le nombre generer et ce que l'utilisateur
// a diviner corresponde.

const devinerBtn = document.getElementById("devinerBtn");

devinerBtn.addEventListener("click", function() {
    // Gener les nombres de 1 a 100
    let nbrAleatoir = Math.floor(Math.random() * 100);
    console.log(nbrAleatoir);

    while (true)
    {
        // Demander l'utilisateur de devine le nom
        let nbrDeviner = prompt("Deviner le nombre")

        // Condition qui verifier s'il a trouver
        if (parseInt(nbrDeviner) < nbrAleatoir) {
            alert("Plus petit")
        } else if(parseInt(nbrDeviner) > nbrAleatoir) {
            alert("Plus grand que le nombre a deviner")
        } else if(parseInt(nbrDeviner) === nbrAleatoir) {
            alert("Bravo!")
            break;
        }
    }


})