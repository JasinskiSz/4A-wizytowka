function generuj() {
    console.log("button click")
    const imie = document.getElementById("imie-input").value
    console.log(imie)

    document.getElementById("wynik-generowania").innerHTML = imie
}