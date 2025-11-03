function generuj() {
    console.log("button click")

    const imie = document.getElementById("imie-input").value
    const nazwisko = document.getElementById("nazwisko-input").value

    console.log(imie)
    console.log(nazwisko)

    document.getElementById("wynik-generowania-imie").innerHTML = imie
    document.getElementById("wynik-generowania-nazwisko").innerHTML = nazwisko
}