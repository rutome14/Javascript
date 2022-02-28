// Recuperar el evento INPUT

const inputText = document.getElementById('inputTexto');
const labelTexto = document.getElementById('labelTexto');

const recuperaTexto = (event) => {
    // console.log(event.target.value);
    console.log(labelTexto.id);
    labelTexto.innerText = event.target.value;
    labelTexto.style.border = '3px solid red';
}

inputText.addEventListener('input', recuperaTexto);

// Capturar el evento CHANGE sobre un select

const selectPaises = document.getElementById('selectPaises');
const paisSeleccionado = document.getElementById('paisSeleccionado');

const cambiaPais = (event) => {
    console.log(event.target.value);
    paisSeleccionado.innerText = event.target.value;
}

selectPaises.addEventListener('change', cambiaPais);

// Capturar el valor de un campo de texto cuando haga click en un botón

const inputMensaje = document.getElementById('inputMensaje');
const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    console.log(inputMensaje.value);
});