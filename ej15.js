let password = prompt("Escribe tu contraseña")

if (password.length >= 8 && /[0-9]/.test(password) && password.charAt(0) === password.charAt(0).toUpperCase()) {
    console.log("Tu contraseña es válida")
} else {
    console.log("La contraseña no cumple los requisitos")
}