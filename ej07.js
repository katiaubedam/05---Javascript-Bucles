let suma = 0
let input

do {
    input = parseInt(prompt("Te pido un valor"))

    if (input < 0) {
        console.log("Los valores negativos serán ignorados")
    } else if (input > 0) {
        suma += input
    }


} while (input != 0)

console.log(`La suma de los valores introducidos es ${suma}`)