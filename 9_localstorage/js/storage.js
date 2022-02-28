const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');

btnGuardar.addEventListener('click', () => {
    // El valor que almacenamos dentro de LocalStorage debe ser de tipo STRING
    localStorage.setItem('nombre', 'Mario Girón');

    const animales = ['perro', 'gato', 'papagayo', 'wombat'];
    localStorage.setItem('animales', JSON.stringify(animales));
});

btnRecuperar.addEventListener('click', () => {
    const nombre = localStorage.getItem('nombre');
    alert(nombre);

    const arr = JSON.parse(localStorage.getItem('animales'));
    console.log(arr);
});