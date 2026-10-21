// Ejercicio 11: generar 100 números del 1 al 20 y contar apariciones
let numeros = [];
let cuentas = [];
for (let i = 1; i <= 20; i++) {
  cuentas[i] = 0;
}
for (let i = 0; i < 100; i++) {
  let numero = Math.floor(Math.random() * 20) + 1;
  numeros.push(numero);
  cuentas[numero]++;
}
let distintos = 0;
for (let i = 1; i <= 20; i++) {
  if (cuentas[i] > 0) distintos++;
}
console.log("Números generados:", numeros);
console.table(cuentas);
console.log("Números que han aparecido:", distintos);
document.querySelector("#resultado").textContent =
  "Han aparecido " + distintos + " números distintos de los 20 posibles.";
