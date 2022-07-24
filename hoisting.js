
// Ejemplo 1
console.log(miNombre);
var miNombre = 'Larry';

//Ejemplo 2
var miNombre = undefined;
console.log(miNombre + ' soy ese hoisting');
miNombre = 'Larry';

//Ejemplo 3
hey();

function hey() {
  console.log('hola ' + miNombre);
}

var miNombre = 'Larry';