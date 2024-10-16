const modifierBtn = document.getElementById('modifierBtn');

modifierBtn.addEventListener('click', e => {
    document.getElementById("titre").innerText = "Titre modifié!"
    document.getElementById("paragraphe").innerText = "Le contenu a été modifié avec succès."
})


