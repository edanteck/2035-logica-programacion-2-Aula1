/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
 */

function saludoUsuario(){
    console.log("¡Hola, mundo!");
}
/*Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.
 */

function nombreUsuario(nombre){
alert(`¡Hola, ${nombre}`);

}

//let nameUser = prompt("Me indica su nombre por favor: ");
//nombreUsuario (nameUser); 


/*Crear una función 
que reciba un número como parámetro 
y devuelva el doble de ese número. */

function duplicarValor(numeroADuplicar){
    return numeroADuplicar * 2;
}

// Se pide el parametro con el que trabajara la función
// let numeroUsuario = parseInt(prompt("Me indica un número para duplicar su valor: "));
 //Se llama la función para que se ejecute y envie el parametro de entrada
 // además se guarda el resultado en una variable 
// let doblenumero= duplicarValor(numeroUsuario);
// alert(`El doble del número ingresado es: ${doblenumero}`);

 /*
 Crear una función que reciba tres números 
 como parámetros 
 y devuelva su promedio.
 */
function promedioValor(numeroUno, numeroDos, numeroTres){
   
    return (numeroUno + numeroDos + numeroTres)/3;
    
}
// pedido de los 3 números
//let primerNumero = parseInt(prompt("Me indica el primer número: "));
//let segundoNumero = parseInt(prompt("Me indica el segundo número: "));
//let tercerNumero = parseInt(prompt("Me indica el tercer número: "));

//llamado de la función y envio de los parametros así como
// se obtiene los promedios
//let total =promedioValor(primerNumero,segundoNumero,tercerNumero);
//alert(`El promedio de los 3 números ingresados es: ${total}`);

/*Crear una función que reciba un número como parámetro 

y devuelva el resultado de multiplicar ese número por sí mismo. */

function  mutiplicarNumero(numeroMultiplicar) {
    return numeroMultiplicar * numeroMultiplicar
}

// Se solicita el dato con el cual se trabajara
//let numeroAMultiplicar = parseInt(prompt("Me indica el número a mpultiplicar"));

// se evoca la función y se guarda el resultado
//let respuesta = mutiplicarNumero(numeroAMultiplicar);
//alert(`La múltiplicación del número que me proporciono es: ${respuesta}`);

/**
 Has sido contratado(a) para desarrollar una calculadora que calcula el promedio y así verificar la situación de aprobación de un estudiante en función de sus cuatro notas. El promedio requerido para aprobar es de mínimo 5. Tu tarea es implementar dos funciones en JavaScript:

calcularPromedio(nota1, nota2, nota3, nota4) => Esta función recibe las cuatro notas del estudiante como parámetros y devuelve el promedio calculado con base en esas notas.
verificarAprobacion(promedio) => Esta función recibe el promedio del estudiante como parámetro y devuelve "Aprobado" si el promedio es mayor o igual a 5, en caso contrario, devuelve "Reprobado".
Utiliza estos valores para las calificaciones: 
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5; 
*/

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5; 

function calcularPromedio(nota1, nota2, nota3, nota4) {
    let resultado = (nota1 + nota2 + nota3 + nota4)/4;
    return  resultado;
}

function  verificarAprobacion(promedio) {
     return promedio >= 5 ? 'Aprobado' : 'Reprobado'; 
}
// alternativa
//verificarAprobacion(calcularPromedio(nota1,nota2,nota3,nota4)); 
//Llamado de la función para calcular el promedio
//let  promedio =  calcularPromedio(nota1,nota2,nota3,nota4);
//proceso para validar si se aprobo o no
//let respuesta =verificarAprobacion(promedio);
   
//alert(`El estudiante fue ${respuesta}`);

/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros 
y peso en kilogramos, 
que se recibirán como parámetros.*/
//Variables que se manejan para calcular el indice
let peso = 106;
let altura = 1.72;
//Función para indicar el indice
function calculoImc(peso,altura){
    let Imc= peso/(altura^2);
    return Imc;
}
//let indicador = calculoImc(peso,altura);
//alert(`El índice de masa corportal o (IMC) es: ${indicador}`);

/*Crea una función que 
calcule el valor del factorial de un número pasado como parámetro. */
let factorial = 0;
//Función para calcular el número factorial
function calculoFactorial(numerCalcular) {
    let respuesta = 1; // Inicializar en 1, ya que multiplicar por 0 da siempre 0
    for (let i = 1; i <= numerCalcular; i++) { // Usar el parámetro numerCalcular
        respuesta *= i; // Multiplicar acumulativamente
        console.log(respuesta); // Imprimir el progreso del cálculo
    }
    return respuesta; // Devolver el resultado final
}
//let valorFactorial =calculoFactorial(factorial);
//alert(`El número factorial de ${factorial} es ${valorFactorial}`);

/**
 *Crea una función que convierta un valor en dólares, 
 pasado como parámetro, y devuelva el valor equivalente en 
 reales(moneda brasileña,si deseas puedes hacerlo con el valor
  del dólar en tu país). Para esto, 
 considera la cotización del dólar igual a R$4,80.
 */
 function cambioDeMoneda(valorMoneda){
    let tazaDeCambio = 4.80;
    let cambioDeReales = valorMoneda * tazaDeCambio;
    return cambioDeReales;
 }

 //let dolares = 50;
 //let guardarResultado = cambioDeMoneda(dolares);
 //alert(`Para ${dolares} dólares en reales es R$ : ${guardarResultado}`);

 /*
 Crea una función que muestre en pantalla el área y el 
 perímetro de una sala rectangular, 
 utilizando la altura y la anchura que se proporcionarán como parámetros.
  */

 function calcularAreaYPerimetroRectangular(largo, ancho){
    let area = largo * ancho;
    let perimetro = 2 *(ancho + largo);
    console.log(`El área es: ${area}`);
    console.log(`El perimetro es: ${perimetro}`);
 }

 //let ancho = 3;
 //let largo = 5;
 //calcularAreaYPerimetroRectangular(ancho,largo);

 /*
 Crea una función que muestre en pantalla el área y 
 el perímetro de una sala circular, utilizando su radio que 
 se proporcionará como parámetro. Considera Pi = 3,14. */

 function caucluarAreaYPerimetroCircular(radio){
    const pi = 3.14;
    let area = pi * radio^2;
    let parimetro = 2*pi * radio;
    console.log(`El área de la circunferencia es: ${area} cm^2`);
    console.log(`El perimetro de la circunferencia es: ${parimetro} cm`); 
 }

 //let radio = 8;
 //caucluarAreaYPerimetroCircular(radio);

 /** Crea una función que muestre en 
  * pantalla la tabla de multiplicar de un número dado como parámetro.*/
function procesoDeMultiplicar(numeroUsuario){
    //Informa al usuario la table que se generara
    alert(`La tabla de múltiplicar de ${numeroUsuario}`);
    //console.log(`La tabla de múltiplicar de ${numeroUsuario}`);
    //ciclo for implementado para generar la tabla del número ingresado por el usaurio
    for(i=0; i<=10; i++){
        let resultado= i*numeroUsuario;
        

        alert(`La multiplicación de ${numeroUsuario} por ${i}, tiene como resultado: ${resultado}`);
        console.log(` ${numeroUsuario} x ${i} = ${resultado}`);

    }
   

}
 
 
 
 
//let numeroAMultiplicar= 5;
//procesoDeMultiplicar(numeroAMultiplicar);

/*
-)Crea una lista vacía llamada "listaGenerica".
 */
let listaGenerica = [];
/**
 Crea una lista de lenguajes de programación llamada
  "lenguagesDeProgramacion con los 
  siguientes elementos: 
  'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
 */
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin'];
    //console.log(lenguajesDeProgramacion);
/**
 * Agrega a la lista "lenguagesDeProgramacion
 *  los siguientes elementos: 
 * 'Java', 'Ruby' y 'GoLang'.
 * */  
lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');

//console.log(lenguajesDeProgramacion)

/**
 Crea una función que muestre en la consola
  todos los 
 elementos de la lista "lenguagesDeProgramacion.
 */

 function seeList(){
    for(let i=0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i])
    }
}

//seeList();

/*
Crea una función que muestre en 
la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.
*/

function listaInversa(){
    for(i= lenguajesDeProgramacion.length-1; i >= 0; i --){
        console.log(lenguajesDeProgramacion[i])
    }
}

//listaInversa();
/**
 Crea una función que calcule el 
 promedio de los elementos en una lista de números.
 */

  function listaPromedio(arrays){
    let promedio=0;
    let suma = 0;
    for(i=0 ; i<arrays.length; i++){
         suma += parseInt(arrays[i]);
         
    
    }
    return promedio = suma/arrays.length;

 }

 //let promdioNotas =0;
 //let notas= ['8','9','10','11','12','13','14','15'];
  // promedioNotas =  listaPromedio(notas);
  // console.log(promedioNotas);

/**
 Crea una función que muestre en la consola 
 el número más grande y el número más pequeño 
 en una lista.
 */

 function numeroMayorYMenor(lista){
    let mayor =lista[0];
    let menor =lista[0];

    for(i = 0; i<lista.length; i++ ){
        if(lista[i] > mayor){
            mayor = lista[i];
        }
        if( lista[i] <menor){
            menor =lista[i];
        }
    }

    return [mayor,menor];  
 }

 //let numero = ['20','30','40','50','60','70','80','90'];
 // Solo para JS, permite romper la estructura para sacar los 
 // valores de forma individual
 //let[mayor,menor] = numeroMayorYMenor(numero);

//alert(`El número mayor es: ${mayor} y el número menor es: ${menor}`);

/*
Crea una función que devuelva la suma de 
todos los elementos en una lista.
 */
function sumaLista(lista){
    let suma = 0;
    for(i = 0; i <lista.length; i++){
        suma += parseInt(lista[i]);
    }
    return suma;
}

//let numeroSumar = ['26', '28','45','90','500','120'];
//let total = 0;
//total= sumaLista(numeroSumar);
//alert(`La suma de la lista es: ${total}`);

/**
 Crea una función que devuelva la posición en la
  lista donde se encuentra un 
  elemento pasado como parámetro,
   o -1 si no existe en la lista.
 */

   function buscarLista(lista,numeroBuscar){
    //Bucle for para buscar en la lista
    for(i = 0; i < lista.length; i++){
        if(numeroBuscar === parseInt(lista[i])){
           return i;
        }
    }
     return -1;

}

//let numero = 6;
//let numeroLista =['1', '2', '3', '4', '5'];

//let resultado= buscarLista(numeroLista,numero);

// Usando el operador ternario para mostrar el resultado
//alert(`La posición es: ${resultado === -1 ? resultado : resultado}`);

/**
 Crea una función que reciba dos listas 
 de números del mismo tamaño y 
 devuelva una nueva lista con la suma de 
 los elementos uno a uno.
 */

 function sumaDeListas(listaUno,listaDos){
    let listaInter = new Array(listaUno.length);
    for(let i=0;i<listaUno.length;i++){
        listaInter[i] =  parseInt(listaUno[i]) +parseInt(listaDos[i]);
        console.log(listaInter[i]);
    }
    return listaInter;
    

 }

 //let listaUnoSumar = ['1', '2', '3', '4', '5', '6'];
 //let listaDosSumar = ['1', '2', '3', '4', '5', '6'];

//alert( sumaDeListas(listaUnoSumar,listaDosSumar));

/**
 Crea una función que reciba una lista 
 de números y devuelva 
 una nueva lista con el cuadrado de cada número.
 */

 function listaAlCuadrado(lista){
    let listaAlDoble = new Array(lista.length);
    for(let i=0;i<lista.length;i++){
        listaAlDoble[i] =  lista[i]**2;
        console.log(listaAlDoble[i]);
    }
    return listaAlDoble;
    

 }

 let listaEjemplo = [1, 2, 3, 4, 5,6];

 alert(listaAlCuadrado(listaEjemplo));

