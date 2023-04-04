//Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
// Obtener los elementos de la interfaz de usuario
const tiempoElemento = document.getElementById("tiempo");
const iniciarBoton = document.getElementById("iniciar");
const pausarBoton = document.getElementById("pausar");
const resetBoton = document.getElementById("reset");

// Variables para el tiempo del cronómetro
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

// Función para actualizar el tiempo del cronómetro
function actualizarTiempo() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }

  tiempoElemento.innerText = `${horas < 10 ? "0" + horas : horas}:${
    minutos < 10 ? "0" + minutos : minutos
  }:${segundos < 10 ? "0" + segundos : segundos}`;
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  intervalo = setInterval(actualizarTiempo, 1000);
  iniciarBoton.disabled = true;
  pausarBoton.disabled = false;
  resetBoton.disabled = true;
}

// Función para pausar el cronómetro
function pausarCronometro() {
  clearInterval(intervalo);
  iniciarBoton.disabled = false;
  pausarBoton.disabled = true;
  resetBoton.disabled = false;
}

// Función para resetear el cronómetro
function resetearCronometro() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  tiempoElemento.innerText = "00:00:00";
  iniciarBoton.disabled = false;
  pausarBoton.disabled = true;
  resetBoton.disabled = true;
}

// Agregar los event listeners a los botones
iniciarBoton.addEventListener("click", iniciarCronometro);
pausarBoton.addEventListener("click", pausarCronometro);
resetBoton.addEventListener("click", resetearCronometro);
