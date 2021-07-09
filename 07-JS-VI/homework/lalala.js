
//************************************************** */
// Un concepto muy importante en Javascript es la capacidad de pasar una función como argumento a otra función. 
// Estas funciones se denominan callbacks. Estas funciones pueden llamarse en cualquier momento y pasar argumentos dentro de la función. 
// Pronto descubriremos por qué las devoluciones de llamada son tan importantes para Javascript. 
// La convención es usar cb como argumento para la variable que se usará de callback.
//cb es callback que lo que hace es utilizar una funcion como un parametro, podriamos llamar una funcion dentro de otra
function decirHola(usuario) {
    return 'hola ' + usuario
}
function crearSaludo(usuario, cb) {
    return cb(usuario)
}
console.log(crearSaludo("Cristhian", decirHola))


alumno = ["a", "b", "c", "d"]

function imprimir(elemento, indice) {
    console.log(elemento)
}
alumno.forEach(function imprimir(elemento, indice) {
    console.log(elemento)
});
//************************************************************** */
function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    primeraLetra = nombre.charAt(0)
    residuo = nombre.slice(1)
    primeraLetra = primeraLetra.toUpperCase()
    mayus = primeraLetra + residuo
    return mayus
}
mayuscula("cristhian")
console.log(mayus)
//************************************************** */
//------------------.FOREACH COMO CALLBACK------------------//
//forEach es un bucle for integrado en cada array. .forEach toma un callback como su único argumento,
//  e itera sobre cada elemento de la matriz y llama al callback en él. El callback puede tomar dos argumentos, 
// el primero es el elemento en sí, el segundo es el índice del elemento (este argumento es opcional).
numero = [1, 2, 3, 4, 5, 6]
numero.forEach(function (elemento) {
    elemento = elemento + 10
    console.log(elemento)
})
// EJEMPLO DOS FOREACH
autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla']
miAutos = []
autos.forEach(function (elemento) {
    elemento = "Mi auto " + elemento
    miAutos.push(elemento)
})
console.log(autos)
console.log(miAutos)
//************************************************** */
//------------------.REDUCE COMO CALLBACK------------------//
// .reduce ejecutará un bucle en nuestra matriz con la intención de reducir cada elemento en un elemento que se devuelve. 
// Como es el primer argumento, acepta un callback que toma dos argumentos, primero un 'acumulador' 
// (el resultado del método de reducción hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. 
// El callback debe contener siempre una declaración de devolución ("return"). .reduce también toma un segundo argumento opcional,
// que sería el acumulador de arranque ("starting accumulator"). Si no se suministra el acumulador de arranque, 
// la reducción comenzará en el primer elemento de la matriz.reduce siempre devolverá el acumulador cuando termine de recorrer los elementos.
numeros = [1, 2, 3, 4, 5]
var suma = numeros.reduce(function (acumulador, elemento) {
    // suma = acumulador + elemento
    console.log(elemento)
    console.log(acumulador)
    suma = acumulador + elemento
    return suma
}, 0)
console.log(suma)

//************************************************** */
//------------------.MAP COMO CALLBACK------------------//
// .map se usa cuando queremos cambiar cada elemento de una matriz de la misma manera.
//  .map toma una devolución de llamada como único argumento. Al igual que el método .
// forEach, el callback tiene el elemento y el índice de argumentos opcionales. A diferencia de .reduce,
//  .map devolverá toda la matriz OJO EL MAP NO MODIFICA EL ARREGLO ORIGINAL COMO EL FOR EACH, ESTE MAP CREA UN NUEVO ARREGLO
tiposDeportes = ["futbol", "basketball", "baseball", "tenis"]

var nuevoDeporte = tiposDeportes.map(function (elemento) {
    return nuevoDeporte = elemento + " Bajo el agua"
})

console.log(nuevoDeporte)

//************************************************** */
//------------------.FILTER COMO CALLBACK------------------//
// Filtra todos los elementos del array
var arrray = ["arbol", "atleeta", "alejandra", "enene", "flauta", "perro"]
// nuevoArrayLetra = []
// nuevoArrayLetra = arrray.filter(function(elemento){
//     nuevo = elemento.charAt(0)
//     if (nuevo==="a"){
//         nuevoArrayLetra.push(elemento)
//         return nuevoArrayLetra     
//     }    xdvv
// })
function filter(array) {
    var nuevoArrayLetra = array.filter(function (elemento) {
        return elemento[0] === 'a'   
    })
    return nuevoArrayLetra
}

