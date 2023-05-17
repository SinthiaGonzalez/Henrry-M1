'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

//* FUNCIONES RECURSIVAS: son  aquellas funciones que se llaman asi mismas es decir dentro de ellas estan ellas mismas y se les suele colocar una condicion de corte para que esto no se llame infinitamente, suele hacerse con un IF.

//* DEFINICION DE NFACTORIAL:  es el producto es decir el resultado de la multiplicacion de el numero que se le pasa por parametro por todos los numeros naturales menores que el y mayores a 0.
//* ejemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120  y suele mostrarse el factorial de un numro con la siguiente denotacion n!

//* DEFINICION DE NFIBONACCI: es el enesimo numero de la secuencia de fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.



nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, y
a que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }

}

console.log(nFactorial(5));

function nFibonacci(n) {

  if (n === 0 || n === 1) {
    return n;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }

}

console.log(nFibonacci(2));

// ! *************************************************************************************************************!

//* SET: es una estructura de datos que no permite elementos repetidos, es decir que si se intenta agregar un elemento que ya existe en el set este no lo agregara. Es muy parecido a un arreglo/array pero no es lo mismo.

//* STACK (PILA): es una estructura de datos que permite agregar elementos y quitarlos, pero solo permite quitar el ultimo elemento que se agrego, es decir que si se agrega un elemento y luego otro y luego otro, solo se podra quitar el ultimo elemento que se agrego, no se podra quitar el primero ni el segundo, solo el ultimo.tambien conocido como LIFO (last in first out) ultimo en entrar primero en salir. este esat compuesto por METODOS Y QUE SON  PUSH (agregar) y POP (quitar), ESTOS  metodos son functions. los STACK NO SON ANTIVOS DE JS POR ENDE DEBEMOS CREARLOS.
// EJEMPLO:

// FUNCTION STACK() {
//   THIS.ARRAY = [];
// }

// STACK.PROTOTYPE.PUSH = FUNCTION(ELEMENT) {
//   THIS.ARRAY.PUSH(ELEMENT);
// }

// STACK.PROTOTYPE.POP = FUNCTION() {
//    THIS.ARRAY.POP();
// }

// VAR MISTACK = NEW STACK();

// //* le damos un elemento que colocar al array vacio de la function stack que es el array que creamos y luego le decimos que lo agregue al array con el metodo push que creamos en el prototype de la function stack y luego le decimos que lo quite con el metodo pop que creamos en el prototype de la function stack.
// MISTACK.PUSH(10);

// console.log(MISTACK);

/*
! OCURRE LO OPUESTO AL STACK  EN ESTE CASO EL PRIMERO EN ENTRAR ES EL PRIEMRO EN SALIR 
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
! METODOS DE LA QUEUE:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//* creamos la funcion con la porpiedade de aaray vacio para que se vaya llenando con los elementos que se le agreguen.
function Queue() {

this.array = [];
}

//* creamos los METODOS de la funcion QUEUE que son ENQUEUE, DEQUEUE y SIZE.
Queue.prototype.enqueue = function(element) {
//* PUSH PORQUE ES EL METODO QUE AGREGA ELEMENTOS AL ARRAY.
    this.array.push(element);
}

Queue.prototype.dequeue = function() {
  //*SHIFTH PORQUE ES EL METODO QUE QUITA EL PRIMER ELEMENTO DEL ARRAY.
    return this.array.shift();
}

Queue.prototype.size = function() {
  
  //* LENGTH PORQUE ES EL METODO QUE NOS DICE EL TAMAÑO DEL ARRAY.
      return this.array.length;
}

//* creamos una variable que es una nueva instancia de la funcion QUEUE.
var myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);

console.log(myQueue.size());

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
