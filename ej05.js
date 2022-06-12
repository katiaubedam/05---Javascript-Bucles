let resultado
let num = 1
do {
    num = Math.abs(parseInt(prompt("Escribe un número")))

    if (num != 0){
        resultado = 0

        for (let i = 1; i <= num; i++) {
            resultado += i;
        }
    
        console.log(resultado)
    }

} while (num != 0)