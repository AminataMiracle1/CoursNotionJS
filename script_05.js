// Utiliser modulo et calculer le nombre click sur un bouton

const clicBtn = document.getElementById('clicBtn');
let compteur = document.getElementById('compteur');
let nbrClick = 0
clicBtn.addEventListener('click', function (event){
    nbrClick++;
    if (nbrClick % 10 === 0){
        nbrClick = 0;
    }else {
        compteur.innerHTML = nbrClick;
    }

})