


/**
 * Suma dos numeros
 * @param {Number} numeroUno recibido 
 * @param {Number} numeroDos recibido
 * @returns devuelve la suma de "numeroUno" y "numeroDos"
 */
function suma(numeroUno, numeroDos){
    return numeroUno +  numeroDos;
}

/**
 * muestra el resultado de suma en la pagina
 * @param {Number} numeroAlfa recibido en la pagina
 * @param {Number} numeroBeta recibido en la pagina
 * @param {Number} resultadoMostrar en la pagina
 */
function mostrarResultado(numeroAlfa, numeroBeta, resultadoMostrar){
    document.querySelector("#resultado_suma").innerHTML = `
        <h1> Resultado de suma con ${numeroAlfa} y  ${numeroBeta} es  ${resultadoMostrar} </h1>
    `;
}


/**
 * recibe valores de la pagina para la operacion a realizar
 */
function recibirValores(){
    let numeroA = Number(document.querySelector("#numero_a").value);
    let numeroB = Number(document.querySelector("#numero_b").value);
    mostrarResultado(numeroA, numeroB, suma(numeroA, numeroB));
}