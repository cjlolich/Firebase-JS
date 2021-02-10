class Cliente {
  constructor (nombre, apellido, direccion, numero, localidad, cp, telefono)
    {
      this.nombre = nombre,
      this.apellido = apellido,
      this.direccion = direccion,
      this.numero = numero,
      this.localidad = localidad,
      this.cp = cp,
      this.telefono = telefono
    }
}

//funcion constructora (sin definir una Clase) que crea su propio scope
function Persona (nombre, apellido) { //sirven para crear objetos, prototipos, se pueden pasar como parametros y se pueden retornar como el resultado de otra funcion - closure
  this.nombre = nombre;
  this.apellido = apellido;
  //return console.log(this.nombre);
  return function() { //funcion anonima
    console.log(this.nombre);
  }
}


let cliente = new Cliente();

let claudio = new Persona("Claudio");
claudio(); //ejecuto la funcion constructora de Persona
//comentario

/*
Comentario de varias lineas
*/

