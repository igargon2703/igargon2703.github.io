// Ejercicio 5: comprobar si un número es par o impar
let numero = Number(prompt("Introduce un número"));
let mensaje;
if (numero % 2 === 0) {
  mensaje = "El número es par";
} else {
  mensaje = "El número es impar";
}
console.log(mensaje);
document.querySelector("#resultado").textContent = mensaje;
