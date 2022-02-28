// async - await 
// 1 - Colocar la palabra await delante de la ejecución de la promesa
// 2 - Colocar la palabra async delante de la función donde estamos ejecutando la promesa
// 3 - El valor que recibimos en then ahora lo recibimos como una variable al ejecutar la promesa

// const ulPersonajes = document.getElementById('personajes');
const ulPersonajes = document.querySelector('#personajes');
const infoPersonaje = document.getElementById('infoPersonaje');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

printMenu();

// Listeners a los botones anterior y siguiente
btnAnterior.addEventListener('click', cambioPagina);
btnSiguiente.addEventListener('click', cambioPagina);

async function getDataMenu(page = 1) {
    const response = await fetch(`https://swapi.dev/api/people/?format=json&page=${page}`);
    const json = await response.json();

    // console.log(json.next);
    // console.log(json.previous);
    btnAnterior.dataset.url = json.previous;
    btnSiguiente.dataset.url = json.next;

    // Ocultar el botón anterior si json.previous es null
    // if (!json.previous) {
    //     btnAnterior.style.display = 'none';
    // } else {
    //     btnAnterior.style.display = 'block';
    // }
    btnAnterior.style.display = (!json.previous) ? 'none' : 'block';

    // Ocultar el botón siguiente si json.next es null
    if (!json.next) {
        btnSiguiente.style.display = 'none';
    } else {
        btnSiguiente.style.display = 'block';
    }

    return json.results;
}

async function printMenu(page = 1) {

    ulPersonajes.innerHTML = '';

    const personajes = await getDataMenu(page);

    for (let personaje of personajes) {
        const li = document.createElement('li');
        li.innerText = personaje.name;
        li.dataset.url = personaje.url + '?format=json';
        // Evento de click para los elementos del menú
        li.addEventListener('click', getPersonajeInfo);
        ulPersonajes.appendChild(li);
    }

}

async function getPersonajeInfo(event) {
    // Lanzar petición al API de star wars para recuperar la información de un único personaje
    // fetch - url - datos a investigar
    // console.log(event);

    const response = await fetch(event.target.dataset.url);
    const json = await response.json();
    console.log(json);

    printPersonaje(json);

}

function printPersonaje(pPersonaje) {
    // Dentro de la etiqueta main del HTML tenemos que mostrar los datos de: altura, pesa, color piel, color pelo, género, año de nacimiento

    // const liName = document.createElement('li');
    // liName.innerText = pPersonaje.name;
    // infoPersonaje.appendChild(liName);

    infoPersonaje.innerHTML = `
        <li>${pPersonaje.name}</li>
        <li>Altura: ${pPersonaje.height}</li>
        <li>Peso: ${pPersonaje.mass}</li>
        <li>Color piel: ${pPersonaje.skin_color}</li>
    `;


}

function cambioPagina(event) {
    const url = event.target.dataset.url;
    const index = url.indexOf('page=');
    const numPage = parseInt(url[index + 5]);

    printMenu(numPage);
}

// Obtener las películas en las que aparece cada uno de los personajes