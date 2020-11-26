/**
 * Funcion para borrar los elementos hijos del nodo seleccionado
 * 
 * @param {String} id Id de la lista en HTML 
 */
function borrarLista(id) {
    let padre = document.getElementById(id);

    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}

function ordendar() {
    var answer = confirm("¿Deseas ordendar la lista?");

    let listaOrdenada = new Array();
    if (answer == true) {

        //Recogo los nodos correspondientes
        let hijo = document.querySelectorAll("#lista li");
        let padre = document.getElementById('lista');

        for (const valor of hijo) {
            listaOrdenada.push(valor.innerText);
        }

        borrarLista("lista");

        //Metodo para ordenar un array a - b
        listaOrdenada.sort();

        /**
         * Creo un nuevo elemento hijo que es 'li' 
         * donde añado el valor (palabra) del nuevo array que almacenadas
         * de la antigua lista.  
         */
        for (const palabra in listaOrdenada) {
            let newLi = document.createElement('li');
            newLi.innerHTML = listaOrdenada[palabra];
            padre.appendChild(newLi);

        }
    } else {
        console.log("ok");
    }
}

// Hace que llame la funcion despues de 3 segundos de haber abierto la pagina
setTimeout(function() { ordendar() }, 3000);