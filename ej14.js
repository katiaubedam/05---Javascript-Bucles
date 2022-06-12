let num = parseInt(prompt("Escribe un número"))
let cadena = ""

for (let i = 1; i <= num; i++) {
    cadena = ""

    for (let j = 1; j <= i; j++) {
        cadena += "*"
    }

    console.log(cadena)
}