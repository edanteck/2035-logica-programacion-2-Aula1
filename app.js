/*
let titulo = document.querySelector("h1");
    titulo.innerHTML = 'Juego del número secreto';
//buscar más información del innerHTML
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10: ';
*/

let numeroSecreto = 0;
// Variable de la cantidad de intentos que realiza el usaurio
 let intentos = 0;
 //Se declara la variable de lista, para el manejo de los números secretos
 let listaNumerosSorteados = [];
 //Variable para el control de la recursividad aplicada en el número secreto
 let numeroMaximo = 10;
//console.log(numeroSecreto);
//Función para asignar texto a los elementos
function asignatTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//Función  creación  de forma tradicional
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Función con la cual se valida si el colaborador acerto
    // y se le indica si hacerto
    console.log(intentos); 
    if(numeroDeUsuario === numeroSecreto){
        asignatTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez.':'veces.')}`);
        //Proceso para habilitar el boton de reinicio del juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no  acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignatTextoElemento('p','El número secreto es menor')
        }else{
            asignatTextoElemento('p','El número secreto es mayor.')
        }
        // se aumeta el contador de la cantidad de intentos
        intentos ++;
        // Se llama la función para limpiar la caja cuando no se adivina el número
        limpiarCaja();
    }
    return;
}

//Función para crear u obtener un número pseudo aleatorio
function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    console.log("El número es:"+numeroGenerado);
    console.log(listaNumerosSorteados);
    //Consulta si ya se sortearon todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignatTextoElemento('p','Ya se sortearon todos los números posibles.')
    }else{
        //Validación si el número generado está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
        //Uso del méotodo push para guardar el número generado
        listaNumerosSorteados.push(numeroGenerado);
            //Si el número no esta en la lista se devuleve dicho número
            return numeroGenerado;
        }

    }
   

}

//Función para  limpiar la caja de valores
function limpiarCaja(){
    //document.querySelector('#') al usar el numerar le indica al query selector 
    // que se esta manejando por id
 /*  let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = "";*/
   //reducción de la acción
    document.querySelector('#valorUsuario').value = "";
}
//Función para el manejo de las condiciones inicales
function condicionesIniciales(){
    //Llamado de la función para asignar texto a los elementos en HTML
    asignatTextoElemento("h1","Juego del número secreto");// Este no es necesario en la función pero se adiciona para que el llamado no quede volando en alguna parte del código
    asignatTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}:`);
    // el número secreto aleatorio 
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    //reinición del número de intentos
    intentos = 1;
 
}

//Función para reiniciar el juego
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja()
    // Restaura juego 
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
  condicionesIniciales(); 
    //Deshabiliar el botoón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}
//Arreglos o arrays espacio que contiene multiples valores

//LLAMADA DE LA FUNCIÓN para su funcionamiento
condicionesIniciales();

