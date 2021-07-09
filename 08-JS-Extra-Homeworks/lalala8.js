var objeto = {
    D: 1,
    B: 2,
    C: 3
}
var nuevoArray = []
for (const propiedad in objeto) {
    nuevoArray.push([propiedad,objeto[propiedad]])
}
console.log(nuevoArray)

var numero = 6017
var nuevo = numero.toString().split('').reverse().join('')
console.log(nuevo)
var num = parseInt(nuevo)
console.log(num)

cadena = "abcefgh"
for (let i = 0; i < cadena.length; i++) {
    if(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c'){
      cadena = cadena.slice(i) 
    } 
  }