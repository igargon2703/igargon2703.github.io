// Ejercicio 1: declara variables de distintos tipos y muestra sus tipos.
const nombre = "Ana";
const edad = 20;
const altura = 1.68;
const esEstudiante = true;
const indefinido = undefined;
const nulo = null;
const simbolo = Symbol("id");
const grande = 12345678901234567890n;
const persona = { nombre: "Ana" };
const colores = ["azul", "verde"];

const variables = { nombre, edad, altura, esEstudiante, indefinido, nulo, simbolo: String(simbolo), grande: String(grande), persona, colores };
console.log("Ejercicio 1: variables y tipos");
console.table(Object.entries(variables).map(([variable, valor]) => ({
  variable,
  valor: typeof valor === "object" && valor !== null ? JSON.stringify(valor) : String(valor),
  tipo: variable === "nulo" ? "null (caso especial de JavaScript)" : typeof ({ nombre, edad, altura, esEstudiante, indefinido, nulo, simbolo, grande, persona, colores })[variable]
})));
console.info("Mensaje informativo");
console.debug("Mensaje de depuración");
console.error("Ejemplo de console.error (mensaje de demostración)");
document.querySelector("#resultado").textContent = "Variables declaradas. Abre la consola del navegador para ver los tipos y mensajes.";
