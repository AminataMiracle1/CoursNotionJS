const modifierBtn = document.getElementById('modifierBtn');

modifierBtn.addEventListener('click', e => {
    document.getElementById("titre").textContent = "Titre modifié!"
    document.getElementById("paragraphe").textContent = "Le contenu a été modifié avec succès."
})


