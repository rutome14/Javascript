// Crear la clase Persona con nombre, apellidos, edad
class Persona {
    constructor(pNombre, pApellidos, pEdad) {
        this._nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }

    get nombre() {
        // Transformaciones
        console.log('FUNCION NOMBRE');
        return this._nombre;
    }

    set nombre(newValue) {
        console.log('FUNCIÓN SET NOMBRE');
        this._nombre = newValue;
    }

    // Método mostrar que devuelva un string con 'Hola me  llamo XXXX y tengo XXX años
    mostrar() {
        return `Hola!, me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`;
    }

}

class Adulto extends Persona {

    constructor(pNombre, pApellidos, pEdad, pTrabajo) {
        super(pNombre, pApellidos, pEdad);
        this.trabajo = pTrabajo;
    }

}

class Infante extends Persona {
    constructor(pNombre, pApellidos, pEdad, pColegio) {
        super(pNombre, pApellidos, pEdad);
        this.colegio = pColegio;
    }
}

const pers1 = new Persona('Mario', 'Girón', 29);
const pers2 = new Persona('Laura', 'Gómez', 34);


pers1.nombre = 'Pepe';
// console.log(pers1.mostrar());

const adulto1 = new Adulto('Inés', 'López', 56, true);
console.log(adulto1.mostrar());

const infante1 = new Infante('Lorenzo', 'Ramirez', 8, 'Colegio Mercedarias');
console.log(infante1.mostrar());