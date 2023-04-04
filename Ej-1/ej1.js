// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

// Obtener los elementos de la interfaz de usuario
const comenzarBoton = document.getElementById("comenzar");
const enviarBoton = document.getElementById("enviar");
const numeroInput = document.getElementById("numero");

// Definir variables
let numeroMagico;

// Función para generar el número aleatorio
function generarNumeroAleatorio() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
}

// Función para verificar si el número ingresado es el número mágico
function verificarNumero() {
  const numeroIngresado = parseInt(numeroInput.value);
  if (numeroIngresado === numeroMagico) {
    alert("¡Felicitaciones, adivinaste el número mágico!");
  } else if (numeroIngresado < numeroMagico) {
    alert("El número que ingresaste es menor que el número mágico.");
  } else {
    alert("El número que ingresaste es mayor que el número mágico.");
  }
}

// Agregar eventos a los botones
comenzarBoton.addEventListener("click", function () {
  generarNumeroAleatorio();
  alert("¡El juego ha comenzado! Adivina el número mágico.");
});

enviarBoton.addEventListener("click", function () {
  verificarNumero();
});
