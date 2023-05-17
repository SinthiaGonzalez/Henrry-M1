'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
let contador = 0;
return function(){
  contador++;
  return contador;
}
}
const otroContador = counter()
console.log(otroContador());//1
console.log(otroContador());//2
const nuevoContador = counter()
console.log(nuevoContador());//1
console.log(nuevoContador());//2
   

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
 //declaramos una variable que sea un objeto vacio donde se guardara la memoria chache donde se guardara LO QUE ITRODUZCO EN CB
 var cache = {};
 //creamos la function con argumento arg
 return function(arg) {
    //si en el cache existe la propiedad arg enrtonces devuelvo el valor de cache arg
    if (cache.hasOwnProperty(arg)) {
    return cache[arg];
    } else {
    //si no existe la propiedad arg en el cache entonces tomo el valor cb(arg) y lo guardo en cache arg y despues devolvemos el valor de cache arg
    cache[arg] = cb(arg);
    return cache[arg];
    }
 };
}
// ! hasOwnProperty() chequea si una propiedad ya existe en un OBJETOO!!!

//----------------------------------------

// Bind
//con el metodo bind establecemos el contexto de la fucntion que se esta llamando 

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}
/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreInstructor()); // 'Franco'
console.log(getNombreAlumno()); // 'Juan'

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}
//creamos las variables que van a guardar las funciones con el metodo bind y le pasamos los argumentos que queremos que se guarden en la funcion, en este caso no tenemos unthis por ende colocamos null y procedemos a definir los argumentos de la function
let textoAsteriscos = crearCadena.bind(null, "*","*");
let textoGuiones = crearCadena.bind(null, "-","-");
let textoUnderscore = crearCadena.bind(null, "_","_");
// llamamos a las funciones y le pasamos el argumento de cadena que no determinamso en el bind anterior solo determinasmo el comportamiento de los parametos de delimitador izquiedo y derecho 
console.log(textoAsteriscos('Hola')); // '*Hola Mundo*'
console.log(textoGuiones('Hola')); // '-Hola Mundo-'
console.log(textoUnderscore('Hola')); // '_Hola Mundo_'


// CALL / BIND / APPLY : 
//* CALL : ejecuta la funcion inmediatamente Y UNA SOLA VEZ y hay que comletar todos los artgumentos porque no retorna una nueva funcion porque no guarda nada en memoria SI O SI HAY QUE PASARLE EL THIS , Y ESTA FUNCTION DEBE TENER UN THIS
//* BIND : no ejecuta la funcion inmediatamente, sino que retorna una nueva funcion con el contexto y los argumentos que le pasemos y lo guarda en memoria para que pueda llamarlo de nuevo 
// * APPLY : ejecuta la funcion inmediatamente TIENE QUE TENER UN THIS SI O SI y los argumentos deben ser pasados dentro de un array y no retorna una nueva funcion porque no guarda nada en memoria  


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
