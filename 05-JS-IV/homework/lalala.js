var cristhian = {
    nombre : "cristhian",
    apellido : "Muñoz",
    edad : 26,
    saludar : function(){
        return "Hola soy cristhian"
    }
}
console.log(cristhian)
console.log(cristhian.nombre)
console.log(cristhian.saludar()) 

var obj = {
    a : 2,
    b : 3,
}
function suma (key1, key2){
    return obj[key2] +obj[key1]
}