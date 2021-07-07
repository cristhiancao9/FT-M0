function Alumno(nombre, apellido, corte){
    this.nombre = nombre
    this.apellido = apellido
    this.corte = corte
    this.saludar = function(){
        return `Hola soy ${this.nombre}  ${this.apellido}`
    };
}
var alumno1 = new Alumno("cristhian","muñoz","pre-04")

console.log(alumno1.saludar())