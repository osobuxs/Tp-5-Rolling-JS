//Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.

let intervalo;
let tiempoRestante;
let temporizador = document.getElementById("temporizador");
let iniciarBtn = document.getElementById("iniciar");
let pausarBtn = document.getElementById("pausar");
let resetearBtn = document.getElementById("resetear");
let tiempoInput = document.getElementById("tiempo");

iniciarBtn.addEventListener("click", function () {
  tiempoRestante = tiempoInput.value;
  iniciarBtn.disabled = true;
  pausarBtn.disabled = false;
  resetearBtn.disabled = false;
  intervalo = setInterval(actualizarTemporizador, 1000);
});

pausarBtn.addEventListener("click", function () {
  clearInterval(intervalo);
  iniciarBtn.disabled = false;
  pausarBtn.disabled = true;
});

resetearBtn.addEventListener("click", function () {
  clearInterval(intervalo);
  tiempoInput.value = "";
  tiempoRestante = 0;
  temporizador.innerHTML = "00:00";
  iniciarBtn.disabled = false;
  pausarBtn.disabled = true;
  resetearBtn.disabled = true;
});

function actualizarTemporizador() {
  tiempoRestante--;
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;
  temporizador.innerHTML = `${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
  if (tiempoRestante === 0) {
    clearInterval(intervalo);
    alert("¡Tiempo finalizado!");
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
    resetearBtn.disabled = true;
  }
}

function agregarCeros(numero) {
  if (numero < 10) {
    return `0${numero}`;
  } else {
    return numero;
  }
}
