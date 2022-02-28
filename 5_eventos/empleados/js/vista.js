const listaEmpleados = document.querySelector('.listaEmpleados');
const inputNombre = document.getElementById('inputNombre');
const inputEmail = document.getElementById('inputEmail');
const inputSalario = document.getElementById('inputSalario');
const inputDepartamento = document.getElementById('inputDepartamento');
const btnSubmit = document.getElementById('btnSubmit');
const selectDepartamento = document.getElementById('selectDepartamento');

printEmpleados(empleados, listaEmpleados);

// Función que pinte todos empleados
function printEmpleados(pEmpleados, pSection) {
    listaEmpleados.innerHTML = '';
    // for of
    // forEach
    for (let empleado of pEmpleados) {
        const div = printEmpleado(empleado);
        pSection.appendChild(div);
    }

    // pEmpleados.forEach(empleado => pSection.appendChild(printEmpleado(empleado)));
}

// Función que pinte un único empleado
function printEmpleado(pEmpleado) {

    const h3Nombre = document.createElement('h3');
    h3Nombre.innerText = pEmpleado.nombre;
    // <h3>Mario Girón</h3>

    const pEmail = document.createElement('p');
    pEmail.innerText = pEmpleado.email;
    // <p>mario@mail.com</p>

    const pSalario = document.createElement('p');
    pSalario.innerText = pEmpleado.salario;
    // <p>1000000</p>

    const pDepartamento = document.createElement('p');
    pDepartamento.innerText = pEmpleado.departamento;

    const btnBorrar = document.createElement('button');
    btnBorrar.innerText = 'Borrar';
    btnBorrar.dataset.id = pEmpleado.id;
    btnBorrar.addEventListener('click', (event) => {
        empleados = borrarEmpleado(event.target.dataset.id, empleados);
        event.target.parentNode.remove();
    });

    const div = document.createElement('div');
    div.classList.add('empleado');
    // <div class="empleado"></div>

    div.appendChild(h3Nombre);
    div.appendChild(pEmail);
    div.appendChild(pSalario);
    div.appendChild(pDepartamento);
    div.appendChild(btnBorrar);

    return div;

}

// Función que nos permita agregar un empleado cuando hagamos SUBMIT del formulario
btnSubmit.addEventListener('click', saveEmpleado);

function saveEmpleado(event) {
    event.preventDefault();

    // Crear un objeto con los datos del nuevo empleado recuperándolos a partir de los campos de texto
    const nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: inputNombre.value,
        email: inputEmail.value,
        salario: inputSalario.value,
        departamento: inputDepartamento.value
    }

    // Incluir ese objeto dentro del array
    empleados.push(nuevoEmpleado);

    // Pintar el nuevo empleado en el HTML. 
    // ¿Pinto únicamente el nuevo empleado? ¿Repinto todos los empleados de nuevo?
    const divNuevoEmpleado = printEmpleado(nuevoEmpleado);
    listaEmpleados.appendChild(divNuevoEmpleado);
}

function borrarEmpleado(pId, pEmpleados) {
    const nuevoArr = [];
    for (let empleado of pEmpleados) {
        if (empleado.id !== parseInt(pId)) {
            nuevoArr.push(empleado);
        }
    }
    return nuevoArr;
}

// 1 - Recuperar el departamento seleccionado
//      - Capturar el select dentro del script
//      - Asignarle el evento CHANGE
// 2 - Filtrar el array
// 3 - Mostrar los empleados filtrados
selectDepartamento.addEventListener('change', (event) => {
    // Filtro el array
    // const filtrados = [];
    // for (let empleado of empleados) {
    //     if (empleado.departamento === event.target.value) {
    //         filtrados.push(empleado);
    //     }
    // }

    // Debemos retornar TRUE o FALSE dependiendo si queremos que el elemento pase el filtro o no
    const filtrados = empleados.filter(empleado => empleado.departamento === event.target.value);

    printEmpleados(filtrados, listaEmpleados);
});