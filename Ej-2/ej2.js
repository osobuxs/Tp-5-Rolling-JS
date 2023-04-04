// 2.-  Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// Generacion Z: año de nacimiento desde 1994 a 2010 y su rasgo caracteristico es la irreverencia
// Generacion Y: año de nacimiento desde 1981 a 1993 y su rasgo caracteristico es la Frustacion
// Generacion X: año de nacimiento desde 1969 a 1980 y su rasgo caracteristico es la Obsecion por el exito
// Generacion Baby Boom: año de nacimiento desde 1949 a 1968 y su rasgo caracteristico es la Ambicion
// Generacion Silent: año de nacimiento desde 1930 a 1948 y su rasgo caracteristico es la Austeridad
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = new Date().getFullYear() - edad;
  }

  mostrarGeneracion() {
    let generacion = "";
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z: la irreverencia";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y: la frustración";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X: la obsesión por el éxito";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Generación Baby Boom: la ambición";
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Generación Silent: la austeridad";
    }
    alert(`${this.nombre} pertenece a la ${generacion}`);
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad`);
    } else {
      alert(`${this.nombre} no es mayor de edad`);
    }
  }

  mostrarDatos() {
    alert(`Nombre: ${this.nombre}
    Edad: ${this.edad}
    DNI: ${this.dni}
    Sexo: ${this.sexo}
    Peso: ${this.peso}
    Altura: ${this.altura}`);
  }
}

document.querySelector("#formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let edad = document.querySelector("#edad").value;
  let dni = document.querySelector("#dni").value;
  let sexo = document.querySelector("#sexo").value;
  let peso = document.querySelector("#peso").value;
  let altura = document.querySelector("#altura").value;
  let persona = new Persona(nombre, edad, dni, sexo, peso, altura);
  document.querySelector("#resultado").innerHTML = `
    <p>Nombre: ${persona.nombre}</p>
    <p>Edad: ${persona.edad}</p>
    <p>DNI: ${persona.dni}</p>
    <p>Sexo: ${persona.sexo}</p>
    <p>Peso: ${persona.peso}</p>
    <p>Altura: ${persona.altura}</p>
  `;
  document
    .querySelector("#mostrar-generacion")
    .addEventListener("click", function () {
      persona.mostrarGeneracion();
    });
  document
    .querySelector("#es-mayor-de-edad")
    .addEventListener("click", function () {
      persona.esMayorDeEdad();
    });
});
