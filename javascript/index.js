window.onsubmit = () => {
    const Gebruiker = document.getElementById("naam")
    const Result = document.getElementById("msg")

    Gebruiker.style.marginBottom = "1em"

    if(!Gebruiker.value) {
        Result.innerHTML = "Geen gebruikersnaam ingevoerd."
        Result.style.color = "red"
    } else {
        window.localStorage.setItem("naam", Gebruiker.value)
        Result.innerHTML = "Gebruikersnaam is ingevoerd."
        Result.style.color = "green"
        Gebruiker.value = ""
    }

}