var persona = {
    nombre : 'tonny',
    apellido : 'perro',
    saludar: function(){
        console.log("hola" + " "+ this.nombre)
        return "hola" + " "+ this.nombre
    }
}
persona.saludar()
console.log(persona.saludar())