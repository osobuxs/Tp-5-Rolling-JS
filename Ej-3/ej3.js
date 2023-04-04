// Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
// Obtener los elementos de la interfaz de usuario
const agregarBoton = document.getElementById("agregar");
const tareaInput = document.getElementById("tarea");
const listaTareas = document.getElementById("lista-tareas");

// Función para agregar una tarea a la lista
function agregarTarea() {
  const tarea = document.createElement("li");
  tarea.classList.add("list-group-item");
  tarea.innerText = tareaInput.value;

  // Crear un botón para eliminar la tarea
  const eliminarBoton = document.createElement("button");
  eliminarBoton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
  eliminarBoton.innerText = "Eliminar";
  eliminarBoton.addEventListener("click", function () {
    tarea.remove();
  });

  // Agregar el botón de eliminar a la tarea
  tarea.appendChild(eliminarBoton);

  // Agregar la tarea a la lista
  listaTareas.appendChild(tarea);

  // Limpiar el campo de texto
  tareaInput.value = "";
}

agregarBoton.addEventListener("click", function () {
  agregarTarea();
});

tareaInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
