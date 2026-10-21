// Ejercicio 10: encontrar el número mayor
let numeros = [12, 45, -3, 89, 27, 6];
let mayor = Math.max(...numeros);
console.log("Array:", numeros);
console.log("Número mayor:", mayor);
document.querySelector("#resultado").textContent = "Número mayor: " + mayor;
