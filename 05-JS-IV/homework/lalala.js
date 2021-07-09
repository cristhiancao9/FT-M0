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
var usuario = {
    nombre  : "juan",
    apellido : "ortega",
    edad : 26,
}
console.log(usuario)

listaObjetos = [
    usuer = {
        nom : "luis",
        ape : "Muñoz",
        edad: 26,
    },
    usuer = {
        nom : "cristhian",
        ape : "Muño",
        edad: 26,
    }
]
console.log(listaObjetos)
var nuevaLista = []
for (let i = 0; i < listaObjetos.length; i++) {
    listaObjetos[i].edad = 23
}
console.log(listaObjetos)

//******************************************************************************************************************************* */
edad = 23
var listaAnimales = [
    perro = {
        nombre : "ammy",
        edad,
        raza : "pastor Australiano",
    },
    gato = {
        nombre : "lupe",
        edad : 50,
        raza : "africano",
    }
]

console.log(listaAnimales)

for (let i = 0; i < listaAnimales.length; i++) {
    if(listaAnimales[i]===listaAnimales[1])continue
    listaAnimales[i].genero = "femenino"    
}
console.log(listaAnimales)

for (let i = 0; i < listaAnimales.length; i++) {
    console.log(listaAnimales[i].nombre)
    listaAnimales[i].pais = "Colombia"  
}
console.log(listaAnimales)


var centroComercial = {
    puertas : 23,
    restaurantes : 500,
    cinemas : 2,
}   

centroComercial.baños=234
console.log(centroComercial)
 
var tallerAutos = {
    herramienta : ["martillo","pinzas","calibrador"],
    repuestos : ["repuestos nuevos", "repuestos usados"],
    mecanicos : ["german", "willian","jairo"],
}
for (const herramienta in tallerAutos) {
    tallerAutos['herramienta']=[herramienta]("hombresolo")
}
console.log(tallerAutos.herramienta)
