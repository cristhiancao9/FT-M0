function Alumnos(nombre,apellido,edad){
    this.nom = nombre
    this.ape = apellido
    this.ed = edad
}
Alumnos.prototype.saludar = function(){
    return `hola soy ${this.nom} ${this.ape}`
}
Alumnos.prototype.universidad = "UMNG"

var alumno1 = new Alumnos ("cristhian","muñoz",34)
var alumno2 = new Alumnos ("cristhian","muz",3)
console.log(alumno2.saludar())
console.log(alumno2.universidad)
//********************************************************************************************** */
opciones = {
    usuario : "cristhian",
    nombre : "Cristhiancao", 
    email : "u1802342@unimilitar.edu.co",
    password : "Mylifeis"
}


class Usuario{
    constructor(opciones){
      this.usuario = opciones.usuario
      this.nombre = opciones.nombre
      this.email = opciones.email
      this.password = opciones.password
    }
    saludar(){
      return `Hola, mi nombre es ${this.nombre}`
    }
     
  }
var persona1 = new Usuario(opciones)
console.log(persona1)
//*********************************************************************************** */
class Usuario2{
    constructor(nombre,apellido,edad,apodo){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.apodo = apodo
    }
}

const usuario1 = new Usuario2("Jesus","Barajas",27,"EL PERRO HP")
console.log(usuario1)