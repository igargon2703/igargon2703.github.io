// Ejercicio 6: par o impar usando un campo input
document.querySelector("#formulario").addEventListener("submit", function (evento) {
  evento.preventDefault();
  let numero = Number(document.querySelector("#numero").value);
  let mensaje;
  if (numero % 2 === 0) {
    mensaje = "El número es par";
  } else {
    mensaje = "El número es impar";
  }
  document.querySelector("#resultado").textContent = mensaje;
  console.log(mensaje);
});
