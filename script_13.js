//use a css style in js to build a carte
const genererBtn = document.getElementById("genererBtn")

genererBtn.addEventListener("click", ()=>{
    // répurer les value du input
    let nom = document.getElementById("nom").value
    console.log(nom)
    let gmail = document.getElementById("email").value
    console.log(gmail)
    let fondCarte = document.getElementById("couleurFond").value
    console.log(fondCarte)

    // Nous avons la carte qui est mis en display none recupérons les champs de la carte.
    let carte = document.getElementById("carte")
    let carteNom = document.getElementById("carteNom")
    let carteEmail = document.getElementById("carteEmail")

    // remplir les champs
    carteNom.textContent = nom
    carteEmail.textContent = gmail
    carte.style.background = fondCarte

    // Afficher la carte
    carte.style.display = "block"



})