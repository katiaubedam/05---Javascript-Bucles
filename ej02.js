let num = parseInt(prompt("Escribe un número"))
let resultado = 0

if (num >= 1){
    for (let i = 1; i <= num; i++) {
        resultado += i;
    }

    console.log(resultado)
    
} else {
    console.log("El número debe ser mayor que 0")
}