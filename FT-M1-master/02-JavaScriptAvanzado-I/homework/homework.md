# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
//  aunque no espsificamos el tipo de variable, en estos casos se ejecutara como una variable de tipo var es decir global.
```javascript
x = 1; /** 
* TODO:este tipo de declaraciones no tiene hoisting ya que no tiene var */
var a = 5;
var b = 10; 
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //imrpime el valor de x que es 10 ya que esat en le contexto global y por ende puede acceder a ella
   console.log(a); /** 
   * *imprime el valor de a que es 8 es el valor asignado a la hora de ser invocada pero tambien porque los parametros de las functions suelen estar declaradas dentro de las mismas como variables ocultos a los cuales se les asignara valor normalmente desde el contexto globalo no */
   var f = function (a, b, c) {
      b = a;
      console.log(b); //8
      b = c; 
      var x = 5; 
   };
   f(a, b, c);
   console.log(b);// imprime 9 porque es el valor que esta asignado cuando se lo invoca en el contexto global  y solo vale 10 en el scope de la function  F y cmo se hace console log fuera de esta ya no encuentra en el contexto nuevo ese valor. 
};

c(8, 9, 10);
console.log(b); //10 porque esta llamando a la variable b que esat fuera del scope de la function y por ende toma el valor del var declarado al inicio antes de la
console.log(x); //1 porque esta llamando a la x que esata fuera del scope de la function y por ende toma el valor de x
```

```javascript
console.log(bar); // indefinido porque tiene hoisting y por ende entra en el lexico enviroment y se le asigna el valor undifined y cuando llege a la linea de abajo de todo recin tendria el valor que se le asigno mas adelnate  por eso da undifined porque se ejecuta antes de esa linea

console.log(baz); //is not definido  porque no llego a ser escrito en el lexico enviroment porque no tiene hoisting al no tener el var por eso da error o rompe la ejecucion 

foo(); // Hola! porque las function son copias dentro del lexico enviroment junto con toda su definicion por ende se conoce su valor y por ende da hola!
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//Franco ya que se consideras los boleanos y los condicionales  NO CREAN CONTEXTO  por ende es como declarar una variable con el mismo nombre y asignarle un nuevo valor en el contexto global por eso toma franco y no tony.
```

```javascript
var instructor = 'Tony';
console.log(instructor); //Tony porque no es afectado por el scope  de abajo sino por el contexto global o scope global 
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco  toma el valor declarado dentro del contexto de su function 
   }
})(); /** 

*!  ES UNA FUNCTION QUE SE CREA Y LOS DOS ()envuelve la fucntion  en parentesis y luego () AL FINAL, esto REPRESENTA QUE se crea la fucntion y luego se ejecuta pero esto ya esta en desuso por ser mala practica */

console.log(instructor); //Tony porque el primer valor declarado para tony esta en instructor que esat fuera de la function y toma el valor que esta en el contexto global
```

```javascript
var instructor = 'Tony'; 
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //The Flash 
   console.log(pm); // Reverse Flash
}
console.log(instructor); //The flash ya que en el if anterior se asigno valor con el = a instructor y al ser un var tambien se modifico la declaracion anterior
console.log(pm); //Franco porque no llega a remplazar al let anterior debido a que los let no salen si tienen LLAVES si bien estamos en el mismo contexto global el if tiene llaves y por ende el let no remplazo al pm de arriba como si lo hizo el var instructor que si pudo remplazar 
```

### Coerción de Datos

/**
* ? JAVA SCRIP AL SER DEBILMENTE TIPADO LE INTENTA DAR SENTIDO A LAS SUMAS O RESTAS Y DEMAS OPERACIONES POR ESO VEMOS CMO SUA UN STRING CON UN NUMERO */

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // por cooercion de string a numero da 2 INTUYE QUE SE QUIERE DIVIDIR LOS NUMEROS  AUQUE ESTEN TIPADOS DIFERENTE
"2" * "3" // por cooercion de string a numero da 6 ya que considera que quiere multiplicar los numeros dentro del string
4 + 5 + "px" // por la regla asociativa js lee de izquiera a derecha y define que debe sumar  y despues concatenar dando 9px
"$" + 4 + 5 // por la regla asociativa js lee de izquiera a derecha y define que debe concatenar dando $45
"4" - 2 // por cooercion de string a numero da 2 al ser una resta
"4px" - 2 // por cooercion de string a numero da NaN ya que es un string menos 2 al tener el px (Nan es un tipo de dato number aunque sea contradictorio)
7 / 0 // da infinito ya que es una division entre 0 pero esto es tecnicamento imposible pero js interpreta que el 0 es un numero muy pequeño muy cerca al cero y por ende tiende a infinito
{}[0] // da undefined ya que no existe el valor 0 en el objeto no hay nda definido dentro del objeto {} y por mas que pregunto todo sera undifined
parseInt("09") // da 9 porque js interpreta 09 como un numero en base 10 y devuelve 9 por esa razon
5 && 2 // 2 cuando tenemos un operador logico && que son dos valores verdaderos se suele quedar con el ultimo valor que leyo
2 && 5 //5  cuando tenemos un operador logico && que son dos valores verdaderos se suele quedar con el ultimo valor que leyo
5 || 0 // da 5 cuando tenemos un operador logico || que son dos valores ENTRE FALSO Y TRUE se suele quedar con el VALOR QUE LE DA TRUE
0 || 5 // da 5 cuando tenemos un operador logico || que son dos valores ENTRE FALSO Y TRUE se suele quedar con el VALOR QUE LE DA TRUE EN ESTE CASO 0 ES FALSO  Y POR ENDE SE QUEDO CON 5
[3]+[3]-[10] // da 23 ya que js concatena los valores de los arrays y luego los resta POR EL OPERADOR DE LA RESTA 
3>2>1 // da false ya que js lee de izquierda a derecha y 3>2 da true y true>1 da false
[] == ![] // TRUE ya que js cooerciona el array a un string vacio y el ![] es un array no vacio cosa que tambien es falso por ende queda: false == false y nos da true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

<!-- var y fucntion entran en hoisting es decir muestra que existen dentro del lexico enviroment en cambio let y const no -->

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // indefinido porque la variable se declara despues de ser invocado sin envargo esat dentro del hosting con el valor undifined
   console.log(foo()); //2 ya que es un function y estas se copian en el lexico enviroment completo dentro del hosting Y ESTED RETORNA COMO VALOR 2 PORque ha sido ejecutado, si no fuera ejecutado retornaria solo foo y no 2 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // indefinido porque el var si entro el el hoisting dentro del lexico enviroment pero al no ser ejecutada el if entonces nunca s ele asigno valor y quedo como undifined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//Aurelio de Rosa porque el this esta señalando al objeto obj por ende cuando se ejecuta el valor que toma es el de aurelio de rosa

var test = obj.prop.getFullname; 

console.log(test()); /** 
*! JUAN PEREZ  porque declaramos una variable test QUE ESTA EN EL CONTEXTO GLOBAL y esta contiene a la fucntion getfullname y al invocarlo con () con esos parentesis lo ejecutamos este busca la variable fullname en el contexto global porque la variable test esat declarado en el contexto global.
*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); //1, 4, 3, 2 porque set time out son function asincronicas es decir que se ejcutaran otras funciones anets que ellas, son metodos que suelen ser asignadas no a la pila si no a otro sitio mientrsa se espera su resolucion sigue leyendose la pila por eso es el orden de los datos ya que eso conlleva sus tiempos

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
