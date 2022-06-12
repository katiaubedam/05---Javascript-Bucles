let num

do {
    num = parseInt(prompt("Escribe un número cualquiera"))

    if (!isNaN(num)) {
        let numString = num.toString()
        let reverse = ""

        // Creo que no hemos visto la función charAt, pero en este caso
        // es extremadamente conveniente. También se podría resolver con substring
        // pero es más contraintuitivo

        for (let i = numString.length-1; i >= 0; i--) {
            reverse += numString.charAt(i)
        }

        console.log(`Aquí tienes tu número, pero al revés: ${reverse}`)

    } else {
        alert("El valor introducido no es un número")
    }

} while (num !== 0)