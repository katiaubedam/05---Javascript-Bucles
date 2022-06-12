let op

// P.D.: No era tan largo :)

do {
    op = parseInt(prompt(`*****************
    Calculadora
    *****************
    1. Suma
    2. Resta
    3. Multiplicación
    4. Potencia
    5. División
    6. Raíz
    7. Salir
    
    Introduce la opción deseada:`))
    
    if (op > 0 && op < 7) {
        let num1
        let num2

        switch (op) {
            case 1:
                num1 = parseFloat(prompt("Introduce el primer operando"))
                num2 = parseFloat(prompt("Introduce el segundo operando"))

                console.log("Operación seleccionada: Suma")
                console.log(`${num1} + ${num2} = ${num1+num2}`)
                break;
            case 2:
                num1 = parseFloat(prompt("Introduce el primer operando"))
                num2 = parseFloat(prompt("Introduce el segundo operando"))

                console.log("Operación seleccionada: Resta")
                console.log(`${num1} - ${num2} = ${num1-num2}`)
                break;
            case 3:
                num1 = parseFloat(prompt("Introduce el primer operando"))
                num2 = parseFloat(prompt("Introduce el segundo operando"))

                console.log("Operación seleccionada: Multiplicación")
                console.log(`${num1} * ${num2} = ${num1*num2}`)
                break;
            case 4:
                num1 = parseFloat(prompt("Introduce el primer operando"))
                num2 = parseFloat(prompt("Introduce el segundo operando"))

                console.log("Operación seleccionada: Potencia")
                console.log(`${num1} ^ ${num2} = ${num1**num2}`)
                break;
            case 5:
                num1 = parseFloat(prompt("Introduce el primer operando"))
                num2 = parseFloat(prompt("Introduce el segundo operando"))

                console.log("Operación seleccionada: División")
                console.log(`${num1} / ${num2} = ${num1/num2}`)
                break;
            case 6:
                num1 = parseFloat(prompt("Introduce el primer operando"))

                console.log("Operación seleccionada: Raíz")
                console.log(`Raíz de ${num1} = ${Math.sqrt(num1)}`)
                
        }
    } else if (op !==7) {
        console.log(`La opción ${op} no es válida, vuelve a intentarlo`)
    }

} while (op !== 7)