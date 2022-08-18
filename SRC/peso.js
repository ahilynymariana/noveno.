// Algoritmo que calculara el peso suministrado como si la persona estuviera en la luna

let peso = 0;
//Let usuario = prompt("Escribe tu peso para calcular tu peso en la luna: ");
//Let = peso_usuario = parseInt(usuario);
let luna = 1/6;
console.log(luna);

//Los comentarios se hacen de 2 maneras utilizando //
/* o utilizando la combinacion que enmarca este texto */

// Valores en Javascript

20 //Numero
"Valery" //string o cadena de caracteres 
true //Boolean o booleano

//Variables
// Las variables tienen 2 estados 
//Declarados
let nombre;
//Inicializados
nombre = "Anastasia";
//Para inicializar una variable se usa el signo "=" (llamado operador de asignacion)
// Per0 en Javascript puedo realizar ambas cosas (Declaracion e inicializacion) en una sola linea
let numero = 45;
//Javascript como todo lenguaje de programacion utiliza palabras reservadas. Por ejemplo, para crear variables se puedenusar 3 de estas palabras: var (no es recomendada en el plano actual), Let y const.
/*Tipos de Datos 
En Javascript exiten varios tipos de datos:
Primitivos 
Number
String
Boolean

Array
Object
*/
//Javascript es un lenguaje con un tipado debil y dinamico junto lo que significa que una variante puede tomar un tipo de dato y luego cambiar a otro sin necesidad de ser estricto en su creacion o en su tipo de dato.
//Array
es un tipo de estrutura de datos que me permite organizar valores en una sola variable. puede contener diferentes tipos de datos , tales como numeros, cadenas, objectos y otros arrays 

let nombre =[];
nombres = ["juan", "felipe", "franco", "omar"];

un array organiza sus datos con indices, los cuales indican la posicion con numeros iniciando con el numero 0. esta caracteristica me permite acceder al contenido del array en un lugar especifico que pueda necesitar 

console.log(nombres [1]); //la sengunda posición del array ("felipe") */

//funciones 
let a = 3;
let b= 8;
let numero2 = a+b;
//palabra reservada: es una palabra que le indica a un lenguaje de programación que ejecute una instrución o que aparte un espacio de memoria. algunas de ellas no se pueden usar como nombres variables
funcion sumar () {
    console.log(numero2);
}
sumar();
//las funciones son instrociones determinadas para ejecutarse en el momento que son invocadas o llamadas. Son útiles porque permiten reutilizar código las veces que se necesario
//hay dos tipos de funciones: las declarativas y las de expresión

let suma = function(){
    cosole.log(numero2);
}
function sumar (variable1, variable2){
    let variable = variable1+variable2;
    console.log(variable);
}
sumar(a, b);
//al momento de utilizar una funcion debnemos masegurarnos de que las variables que usemos como parametros estén previamente definidas