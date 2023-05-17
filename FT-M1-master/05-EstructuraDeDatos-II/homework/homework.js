'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

//procedemos a crerar una function constructora que funcionara como el gancho al siguiente nodo
function LinkedList() {
  //! creamos una variable head tambien puede llamarse gancho y este tendra un valor de null porque por el momento no tiene ningun nodo enganchado en el 
  this.head = null;
}

//creamos una function constructora de nodos con un parametro value, es decir por donde le pasaremos lo qeu queramos que valga el nodo mas su gancho que se llamara next y esatra en null ya que por el momento este nodo no tiene ningun nodo extra al cual engancharse, son como modelos vacios a rellenar la fucntion constructora de nodos 
function Node(value) {
//! 
  this.value = value;
  this.next = null;
}
// una vez lista las function constrcutoras, ya que son fucntiones vacias a los cuales podemos darles valor como queramos  procedemos a crear 
LinkedList.prototype.add = function (value) {

  //instancio el function Node en la variable neewNode esto significa volverlo un objeto y le paso por parametro el nuevo valor que va atener el nodo nuevo 
  let newNode = new Node(value);
  // creo una variable llamada current que servira como gancho nuevo porque lo estamos igualando en terminos de valor al this.head que vale null 
  let current = this.head;
  // ahora yo le digo mediante if si el current es igual a null es decir si  la lista esta vacia entonces que el this.head que vale null ahora valga el valor de newNode que es el nuevo nodo que creamos con el valor que le pasamos por parametro
  if (current === null) {
    this.head = newNode;
    return value;
  } else {
    // pero si hay nodos tengo que recorrer los distintos nodos hasat encontrar el final y asi insertar el nuevo nodo
    //* creamos un while con el parametro sigueinte: mientras current tenga next entonces que current valga netx asi se mueve al siguiente nodo 
    while (current.next !== null) {
      current = current.next;
      
    }
    current.next = newNode;
    return value;
    // una vez que el while termina de recorrer todos los nodos y llega al ultimo que es el que tiene el valor de null, entonces le decimos que el valor de null que tiene current.next ahora valga el valor de newNode que es el nuevo nodo que creamos con el valor que le pasamos por parametro
   
  }
  
}
// insatnaciamos con el new la clase LinkedList y la guardamos en una variable milista, y luego llamamos al metodo add y le pasamos como parametro el valor que queremos que tenga el nodo
let  milista = new LinkedList();
milista.add(1);
milista.add(suma());
milista.add(3);
milista.add({});
console.log(milista);

function suma(){
  return 1+1;
}


//* los 3 casos que tengo que tener en cuenta a la hora de crear la function remove son: 1- si la lista esta vacia, 2- si la lista tiene un solo nodo, 3- si la lista tiene mas de un nodo
LinkedList.prototype.remove = function () {
 let current = this.head;
  // !si la lista esta vacia
  // o sea que current es igual a null entonces que retorne null ya que no hay nodos a eliminar
  if (current === null) {
    return null;
  }
  //!si la lista tiene un solo nodo
  // si la lista tiene un solo nodo o sea que current.next entonces creo una variable donde guardo el valor del nodo que voy a eliminar porque la consigna me pide que retorne el valor del node que elimino y luego que el this.head que vale current que es el nodo que voy a eliminar ahora valga null porque la lista quedo vacia 
if (!current.next) {
  let valorguardado = current.value;
  this.head = null;
  return valorguardado;}
  // !si la lista tiene mas de un nodo
  // entonces tengo que recorrer los nodos hasta llegar al ultimo y eliminarlo
  while (current.next.next !== null) {
    current = current.next;
  }
  // una vez que llego al ultimo nodo que es el que tiene el valor de null, entonces creo una variable donde guardo el valor del nodo que voy a eliminar porque la consigna me pide que retorne el valor del node que elimino y luego que el current.next que vale node ahora valga null porque la lista quedo vacia
  let valorguardado = current.next.value;
  current.next = null;
  return valorguardado;

}

//* TENER EN CUENTA 2 CASOS: 1- si el parametro es un valor, 2- si el parametro es una funcion

LinkedList.prototype.search = function (parametro) {
  var current = this.head;
  if(!current) return false;

  if (typeof parametro === "function") {
    while(current){
      if(parametro(current.value)) return current.value;
      else current = current.next;
    }
return null;
}else{
  while(current){
    if(current.value === parametro) return current.value;
    else current = current.next;
  }
  return null;
}
};
console.log(milista.add('one'))
milista.add('two');
milista.add('three');
milista.add('four');
console.log(milista.search('one'))
console.log(milista.search(1))
milista.search('one')
milista.search('four')

console.log(milista);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable( key) {
  this.numBuckets = 35;
  this.buckets = [];
  this.key = key;

}


//la propiedad hash me esta retornando el indice del array que se supone va de 0a 35 donde se va a guardar el valor
HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.numBuckets;  
}
// tenia que instacial la clase hastable para que me corriera bien el error y pasara el test
let hashTable = new HashTable();
console.log(hashTable instanceof HashTable)


HashTable.prototype.set = function (key, value) {

  if (typeof key !=="string"){
    throw TypeError("Keys must be strings")
  }
  let index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = {[key]: value};
  }else{
    this.buckets[index][key] = value;
  }
}

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  return this.buckets[index] [key];
}

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
 return !!this.get(key);
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
