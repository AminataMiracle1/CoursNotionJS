// Utiliser la methode prompt pour demande une valeur

const calculerAgeBtn = document.getElementById("calculerAgeBtn");
const date = new Date();

calculerAgeBtn.addEventListener("click", function(){
    let anneNaiss = prompt("Entrer votre année de naissance");
    let year = date.getFullYear();
    age = year - parseInt(anneNaiss);
    alert(age);
    document.getElementById("ageAffiche").innerHTML = age;


})

