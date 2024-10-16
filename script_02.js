// Créer un element html et ajouter du contenu la dessus



const ajouterBtn = document.getElementById("ajouterBtn");
const maListe = document.getElementById("maListe");

ajouterBtn.addEventListener("click", function() {
    let nouvelElement = document.getElementById("nouvelElement").value;
    console.log(nouvelElement);
    // Creer un nouvelle Li
    const li = document.createElement("li");

    // Ajouter le text du input dans le li et dans la liste
    li.textContent = nouvelElement;
    maListe.appendChild(li);


})