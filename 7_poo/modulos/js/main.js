import { sumar, multiplicar } from './operaciones.js';
import Profesor from './profesor.js';

console.log(sumar(3, 4));
console.log(multiplicar(4, 9));

const profe = new Profesor('Irene Martín', 4);
console.log(profe.mostrarProfesor());

const p = document.createElement('p');
p.innerText = profe.mostrarProfesor();

document.body.appendChild(p);