let input
let inputValido

do {
    input = prompt("Elige pares o impares (P/I)").toUpperCase()

    if (input === "P") {
        inputValido = true

        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                console.log (i)
            }
        }

    } else if (input === "I") {
        inputValido = true

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                console.log (i)
            }
        }
    } else {
        inputValido = false
    }

    if (!inputValido) console.log ("El valor introducido no es válido. Inténtalo de nuevo")

} while (!inputValido)

