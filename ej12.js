let num = parseInt(prompt("Escribe un número de 3 cifras"))

if (num > 99 && num < 1000) {

    let numString = num.toString()
    let suma = 0

    for(let i = 0; i < numString.length; i++) {
        suma += parseInt(numString.charAt(i))
    }

    console.log(`La suma de los dígitos es ${suma}`)

} else {
    console.log ("No es un número de 3 cifras")
}