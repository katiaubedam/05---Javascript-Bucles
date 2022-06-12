let symbol = prompt("Escribe el símbolo con el que quieres hacer la pirámide")
let cadena

if (symbol.length === 1) {
    let height = parseInt(prompt("¿Cuántas líneas tendrá tu pirámide?"))

    for (let i = 1; i <= height; i++) {
        cadena = ""

        for (let j = 1; j <= height - i; j++) {
            cadena += " "
        }

        for (let j = 1; j <= i + (i - 1); j++) {
            cadena += "#"
        }

        cadena += (i + (i - 1)).toString()

        console.log(cadena)
    }
} else {
    console.log("El símbolo debe contener un único caracter")
}