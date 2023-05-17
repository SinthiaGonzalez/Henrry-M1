"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  //creamos una variable para guardar el resultado de la suma de las multiplicaciones de cada numero
  let resultado = 0;
  
  //recorremos el numero de derecha a izquierda
  for (let i = 0; i < num.length; i++) {
      //convertimos el string a numero
      let posicion = parseInt(num[i]);
      //sumamos el resultado de la multiplicacion de la posicion por 2 elevado a la posicion
      resultado += posicion * 2 ** (num.length - 1 - i);
         
  }
  console.log(resultado); 
  return resultado; 
  
}

console.log(BinarioADecimal("10")); 

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  //convierte el string num a numero
let num2 = parseInt(num);
//creamos una variable para guardar el resultado es decir el binario en string
let binario = "";
//creamos un while para que se ejecute mientras el numero sea mayor a 0
while(num2 > 0){
  //creamos una variable para guardar el residuo de la division del numero entre 2 el residuo se hace con el %
  let residuo = num2 % 2;
  //guardamos el residuo en la variable binario y lo convertimos en string y lo concatenamos con el binario anterior para que se vaya guardando el binario en orden correcto de derecha a izquierda
  binario = residuo.toString() + binario;
  //dividimos el numero introducido por parametro entre 2 y lo convertimos en entero con Math.floor para que no nos de decimales y lo guardamos en la variable num2 para que se vuelva a ejecutar el while hasta que el numero sea menor a 0 y se detenga el while y nos devuelva el binario en string
  num2 = Math.floor(num2 / 2); 
}
//por ultimo retornamos el binario
return binario;



}





module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
