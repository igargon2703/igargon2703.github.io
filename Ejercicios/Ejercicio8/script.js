// Ejercicio 8: número aleatorio entre dos valores
function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numero = azar(-5, 10);
console.log(numero);
document.querySelector("#resultado").textContent = "Número aleatorio: " + numero;
