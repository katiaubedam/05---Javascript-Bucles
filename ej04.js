let suma = 0

for (let i = 1; i <= 10; i++) {
    suma += parseInt(prompt(`Introduce el número ${i}`))
}

console.log(`La media es ${suma/10}`)