'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
    if (array.length <= 1) {
      return array;
    }
  
    // Seleccionamos un elemento como pivote (generalmente el último elemento del array)
    const pivot = array[array.length - 1];
  
    // Creamos dos arrays para almacenar los elementos menores y mayores que el pivote
    const less = [];
    const greater = [];
  
    // Iteramos sobre el array, excepto por el último elemento que es el pivote
    for (let i = 0; i < array.length - 1; i++) {
      // Si el elemento es menor que el pivote, lo agregamos al array de elementos menores
      if (array[i] < pivot) {
        less.push(array[i]);
      } else {
        // Si el elemento es mayor o igual al pivote, lo agregamos al array de elementos mayores
        greater.push(array[i]);
      }
    }
  
    // Aplicamos recursivamente el algoritmo QuickSort a los arrays de elementos menores y mayores
    const sortedLess = quickSort(less);
    const sortedGreater = quickSort(greater);
  
    // Unimos los arrays ordenados de elementos menores, el pivote y los elementos mayores
    return [...sortedLess, pivot, ...sortedGreater];
  }



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora


    // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
    if (array.length <= 1) {
      return array;
    }
  
    // Dividimos el array en dos mitades
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    // Aplicamos recursivamente el algoritmo Merge Sort a las dos mitades
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Combinamos las dos mitades ordenadas en un nuevo array
    return merge(sortedLeft, sortedRight);
  }
  
  // Función auxiliar para combinar dos arrays ordenados en uno nuevo
  function merge(left, right) {
    let i = 0;
    let j = 0;
    const merged = [];
  
    // Comparamos los elementos de ambos arrays y los agregamos al array combinado en orden ascendente
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
  
    // Agregamos los elementos restantes del array izquierdo, si los hay
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
  
    // Agregamos los elementos restantes del array derecho, si los hay
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
  
    return merged;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
