/**
 * Obtenemos valor de las cookie indicada
 * @param {string} nombreCookie Nombre de la cookie que deseamos ver
 * @returns {Number} valor de la cookie
 */
function getCookie(nombreCookie) {
    let arrayCookie = document.cookie.split(";");

    // Array donde coloco el nombre de la cookie como clave con su valor correspondiente
    let arrayValor = new Array();
    for (let dato of arrayCookie) {
        let [nombre, valor] = dato.split("=");
        arrayValor[nombre] = valor;
    }

    return arrayValor[nombreCookie];
}

/**
 * Envio las nuevas visitas para almacenar
 * 
 * @param {String} nombre Nombre de la cookie
 * @param {Number} valor Valor que tendra el nombre de la cookie
 * @param {Number} caducidad Dias que caducira la cookie
 */

function setCookie(nombre, valor, caducidad) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + caducidad * 60 * 60 * 1000);
    let expiracion = "expires=" + fecha.toUTCString();

    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

/**
 * Funcion para borrar la cookie indicada
 * 
 * @param {String} nombre
 */
function deleteCookie(nombre) {
    setCookie(nombre, "", 0)
}

function mostrarVisita(contador) {
    document.getElementById('contador').innerHTML = contador;
}

/**
 * Compruebo se la cookie esta almacenada 
 * si no esta la creo he con los valores de inicio
 * y si esta compruebo las visitas hasta que llegue al limite para comenzar de nuevo
 */
var contador = getCookie("visitas");

if (!contador) {
    contador = 1;
    mostrarVisita(contador);
    setCookie("visitas", contador, 30);
} else {
    contador = parseInt(getCookie("visitas")) + 1;
    if (contador <= 10) {
        setCookie("visitas", contador, 30);
        mostrarVisita(contador);
    } else {
        contador = 0;
        mostrarVisita(contador);
        deleteCookie("visitas");
    }
}