// utiliser setTimeout
const demarrerTimerBtn = document.getElementById("demarrerTimerBtn");

demarrerTimerBtn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("messageTimer").innerHTML = "Bienvenu dans notre page"
    }, 10000)
})

