
let cadena = ""
let numFInal = 20

for (let i = 10; i <= numFInal; i++) {
    i == numFInal ? cadena += i : cadena += i + " "
}

console.log(cadena)