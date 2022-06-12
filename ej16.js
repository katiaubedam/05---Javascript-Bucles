let fechaString = prompt("Escribe una fecha en formato dd/mm/aaaa")

if (fechaString.length === 10 && fechaString.charAt(2) === '/' && fechaString.charAt(5) === '/') {
    
    let year = parseInt(fechaString.substring(6))
    let month = parseInt(fechaString.substring(3,5))
    let day = parseInt(fechaString.substring(0,2))

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {

        // Podría comprobar la fecha del usuario en más formatos, pero no creo
        // que el objetivo del ejercio sea meterse en esos jardines

        let fecha = new Date(`${year}/${month}/${day}`)
        let tomorrow = new Date(fecha.setDate(fecha.getDate() + 1))

        console.log(`El día siguiente de la fecha introducida es ${tomorrow.getDate()}/${tomorrow.getMonth()+1}/${tomorrow.getFullYear()}`)

        
    } else {
        console.log("Fecha no válida")
    }

} else {
    console.log("Fecha no válida")
}