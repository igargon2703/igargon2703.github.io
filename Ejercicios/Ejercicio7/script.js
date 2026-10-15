// Ejercicio 7: contar vocales
let palabra = prompt("Escribe una palabra") || "";
let vocales = "aeiouáéíóú";
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i].toLowerCase())) {
    contador++;
  }
}
console.log("Número de vocales:", contador);
document.querySelector("#resultado").textContent = "Número de vocales: " + contador;
