/**
 * 
 * FETCH
 * - Ejecutar peticiones web
 * - Fetch nos devuelve una PROMESA
 * 
 * Métodos HTTP
 * GET -> Recuperar información
 * POST -> Crear un recurso
 * PUT -> Modificación de un recurso
 * DELETE -> Borrar un recurso
 * 
 * API
 * 
 */

const containerUsers = document.querySelector('.users');

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
        for (let user of json.data) {
            const divUser = createDivUser(user);
            containerUsers.appendChild(divUser);
        }
    });

function createDivUser(user) {

    const h3Nombre = document.createElement('h3');
    h3Nombre.innerText = `${user.first_name} ${user.last_name}`;
    // <h3>INNER TEXT</h3>

    const img = document.createElement('img');
    img.src = user.avatar;
    // <img src="" />

    const pEmail = document.createElement('p');
    pEmail.innerText = user.email;

    const div = document.createElement('div');
    div.classList.add('user');

    div.appendChild(h3Nombre);
    div.appendChild(img);
    div.appendChild(pEmail);

    return div;
}


//// 1 - En el HTML creamos un div con la clase users
//// 2 - En el JS creamos una función printUser(user)
////      - Devolver el div donde vamos a mostrar los datos del usuario (¡¡IGUAL QUE LOS EMPLEADOS!!)
// 3 - Dentro de la resolución de la promesa, recorremos el array (json.data) y llamamos a la función una vez por usuario