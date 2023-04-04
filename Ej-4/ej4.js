// Crear una web con un reloj que muestre la fecha tambien
const fechaI = document.getElementById("fecha");
const horaI = document.getElementById("hora");

// Función para actualizar la fecha y la hora cada segundo
function actualizarFechaHora() {
  const fecha = new Date();
  const fechaTexto = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Actualizar el texto de la fecha y la hora en la página
  fechaI.innerText = fechaTexto;
  horaI.innerText = fecha.toLocaleTimeString();
}

// Actualizar la fecha y la hora por primera vez
actualizarFechaHora();

// Actualizar la fecha y la hora cada segundo
setInterval(actualizarFechaHora, 1000);
