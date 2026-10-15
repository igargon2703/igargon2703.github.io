let numeros = [];
for (let i = 0; i < 100; i++) {
  numeros.push(Math.floor(Math.random() * 101));
}
console.table(numeros);
let filtrados = numeros.filter(numero => numero >= 25 && numero <= 60);
console.log("Números entre 25 y 60:", filtrados);
document.querySelector("#resultado").textContent =
  "Números entre 25 y 60: " + filtrados.join(", ");
