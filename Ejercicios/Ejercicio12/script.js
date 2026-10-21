// Ejercicio 12: filtrar números pares
function filtrarPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = filtrarPares(numeros);
console.log(pares);
document.querySelector("#resultado").textContent = "Pares: " + pares.join(", ");
