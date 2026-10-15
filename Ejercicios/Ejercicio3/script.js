// Ejercicio 3: objeto persona con distintos tipos de datos
let persona = {
  nombre: "Lucía",
  apellidos: "García López",
  edad: 22,
  altura: 1.67,
  estudiante: true,
  profesion: null,
  telefonos: ["600123456", "958123456"],
  direccion: {
    calle: "Calle Mayor",
    ciudad: "Granada"
  }
};

console.log(persona);
console.table(persona);
document.querySelector("#resultado").textContent =
  "Persona: " + persona.nombre + " " + persona.apellidos +
  ", edad: " + persona.edad + ", ciudad: " + persona.direccion.ciudad;
