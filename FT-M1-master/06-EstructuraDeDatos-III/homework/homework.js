'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   // el valor del nodo
 this.value= value;
 //brazo izquierdo
   this.left= null;
   //brazo derecho
   this.right= null;
}
//instanciamos el arbol BinarySearchTree
//! METODO INSERT:  sirve para insertar nodos al arbol
BinarySearchTree.prototype.insert = function (value) {
   //primero preguntarme si el valor que quiero insertar es menor o mayor que el valor del nodo actual
   //si es menor que el valor del nodo actual entonces tengo que insertar el nodo en el brazo izquierdo
   // si el mayor que el valor del nodo actual entonces tengo que insertar el nodo en el brazo derecho


if (value<this.value){
   //si es verdadero es menor entonces tengo que insertar el nodo en el brazo izquierdo
   //primero tengo que preguntarme si el brazo izquierdo esta vacio
   if (this.left===null){
      //si el brazo izquierdo esta vacio entonces puedo insertar el nodo es decir el BinarySearchTree que seria el nodo con el valor nuevo
      this.left= new BinarySearchTree(value);
   }else{
      //si el brazo izquierdo no esta vacio utilizamos la propiedad insert que definimos actualemnte por eso es una function recursiva porque ahora vamos a decirle que inserte el nuevo valor en un nuevo nodo haciendo las comprobaciones de si es mayor o menor como ya esat planteado arriba por eso colocamos que this.left.insert(value) porque this.left es el nodo que ya esta creado y le estamos diciendo que inserte el nuevo valor en un nuevo nodo que tendra el mismo comportamiento si colocamos un nuevo valor que sea mayor o menor que el valor del nodo actual
      this.left.insert(value);
   }
}else{
   //si es falso es mayor
   //primero tengo que preguntarme si el brazo derecho esta vacio
   if (this.right===null){
      this.right= new BinarySearchTree(value);
   }else{
      this.right.insert(value);
   }
}
}
let arbol= new BinarySearchTree(5);
console.log(arbol);
arbol.insert(1);
arbol
console.log(arbol);

// ya creamos en el codigo de arriba el metodo insert que agrega nodos como corresponde siguiendo un orden de mayor a menor
// ahora vamos a crear el metodo size que nos va a decir cuantos nodos tiene el arbol

//! METODO SIZE:  sirve para saber cuantos nodos tiene el arbol
BinarySearchTree.prototype.size = function () {
   let contador=1;
   if (this.left){
      contador+=this.left.size();
   }
  if (this.right){
      contador+=this.right.size();
   }
return contador;
}

console.log(arbol.size());


//! METODO CONTAINS:  sirve para saber si un valor esta en el arbol

BinarySearchTree.prototype.contains = function (value) {

   if (value===this.value){
      return true;
   }
   if (value<this.value){
      if (this.left){
         return this.left.contains(value);
      }else{
         return false;
      }
   }
   if (value>this.value){
      if (this.right){
         return this.right.contains(value);
      }else{
         return false;
      }
   }

}

console.log(arbol.contains(5));

//! METODO DEPTHFIRSTFOREACH:  sirve para recorrer el arbol en profundidad con sus dsitintas variantes segun se indique por parametro "post-order", "pre-order", o "in-order"

BinarySearchTree.prototype.depthFirstForEach = function (cb,order) {

   // orden depthFirstForEach => post-order (izquierdo, derecho, nodo actual)

   switch (order) {
     
      case "post-order":
         this.left && this.left.depthFirstForEach(cb,order);
         this.right && this.right.depthFirstForEach(cb,order);
         cb(this.value);
         break;
      case "pre-order":
         cb(this.value);
         this.left && this.left.depthFirstForEach(cb,order);
         this.right && this.right.depthFirstForEach(cb,order);
         break;
         default:
      // case in order
         this.left && this.left.depthFirstForEach(cb,order);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb,order);
         break;

   }
}

//! METODO BREADTHFIRSTFOREACH:  sirve para recorrer el arbol en anchura
BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
   // creamos una cola vacia
   let cola=[];
   // agregamos el nodo actual a la cola
   cola.push(this);
   // mientras la cola no este vacia
   while (cola.length){
      // sacamos el primer elemento de la cola
      let nodo= cola.shift();
      // ejecutamos la funcion cb con el valor del nodo actual
      cb(nodo.value);
      // si el nodo tiene un brazo izquierdo lo agregamos a la cola
      if (nodo.left){
         cola.push(nodo.left);
      }
      // si el nodo tiene un brazo derecho lo agregamos a la cola
      if (nodo.right){
         cola.push(nodo.right);
      }
   }
}
// hice un cometarios 


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
