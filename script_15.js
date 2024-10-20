// Ajouter des images dans une galerie.

const ajouterImageBtn = document.getElementById("ajouterImageBtn")

ajouterImageBtn.addEventListener("click", function () {
    // Recuperer le lien de l'image
    let imageUrl = document.getElementById("imageURL").value.trim()

    if (imageUrl){
        // creer une place pour l'image et transformer le lien en image
        let imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container")

        let img = document.createElement("img")
        img.src = imageUrl

        // ajouter le bouton de supprission
        let supprimerBtn = document.createElement("button")
        supprimerBtn.textContent = "Supprimer";
        supprimerBtn.classList.add("supprimerBtn");
        supprimerBtn.classList.add("supprimerBtn")

        // ajouter un listner sur le button
        supprimerBtn.addEventListener("click", function () {
            imageContainer.remove()
        })

        // maintenant ajouter l'image  et button sup dans le div et le div dans la galerier
        imageContainer.appendChild(img)
        imageContainer.appendChild(supprimerBtn)
        document.getElementById("galerie").appendChild(imageContainer)

        // Réinitialiser le champ de texte
        document.getElementById("imageURL").value = "";
    } else {
        alert("Veuillez entrer une URL valide !");
    }

})