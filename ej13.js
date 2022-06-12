let fecha = prompt("Escribe tu fecha de nacimiento en formato dd/mm/aaaa")

if (fecha.length === 10 && fecha.charAt(2) === '/' && fecha.charAt(5) === '/') {
    
    let year = parseInt(fecha.substring(6))
    let month = parseInt(fecha.substring(3,5))
    let day = parseInt(fecha.substring(0,2))

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        let numString = (year + month + day).toString()
        let luckyNum = 0

        for(let i = 0; i < numString.length; i++){
            luckyNum += parseInt(numString.charAt(i))
        }

        if (luckyNum >= 10) {
            numString = luckyNum.toString()
            luckyNum = 0

            for(let i = 0; i < numString.length; i++){
                luckyNum += parseInt(numString.charAt(i))
            }
        } 
        
        console.log(`Tu Lucky Number es ${luckyNum}`)
        
    } else {
        console.log("Fecha no válida")
    }

} else {
    console.log("Fecha no válida")
}