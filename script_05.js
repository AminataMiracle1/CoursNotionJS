const clicBtn = document.getElementById('clicBtn');
let compteur = document.getElementById('compteur');
let nbrClick = 0
clicBtn.addEventListener('click', function (event){
    nbrClick++;
    compteur.innerHTML = nbrClick;
})