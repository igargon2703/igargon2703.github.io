// Ejercicio 9: invertir una cadena
let texto = prompt("Escribe un texto") || "";
let invertido = texto.split("").reverse().join("");
console.log(invertido);
document.querySelector("#resultado").textContent = invertido;
