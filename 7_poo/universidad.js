class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia})`;
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre; // String
        // toUpperCase, split, splice
        this.profesor = pProfesor; // Profesor
        // mostrarProfesor
    }

    mostrarAsignatura(muestraProfesor = true) {
        let result = `ASIGNATURA(nombre: ${this.nombre})`;

        if (muestraProfesor) {
            result += '\nAsignatura impartida por:';
            result += '\n' + this.profesor.mostrarProfesor();
        }

        return result;
    }
}

class Estudiante {

    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }

    agregarAsignatura(pAsignatura) {
        this.asignaturas.push(pAsignatura);
    }

    mostrarEstudiante() {
        let result = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})`;
        result += '\nEstas son las asignaturas que cursa:';

        for (let asignatura of this.asignaturas) {
            result += '\n' + asignatura.mostrarAsignatura(true);
        }

        return result;
    }

}

class Universidad {

    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = [];
    }

    agregarAlumno(pAlumno) {
        this.alumnos.push(pAlumno);
    }

    obtenerAlumnosAsignatura(nombreAsignatura) {
        let cont = 0;

        for (let alumno of this.alumnos) {
            // alumno es un objeto de tipo Estudiante
            // nombre, apellidos, asignaturas
            // asignaturas es un array de objetos de tipo Asignatura
            for (let asignatura of alumno.asignaturas) {
                // asignatura es un objeto de tipo Asignatura
                // nombre, profesor
                if (asignatura.nombre === nombreAsignatura) {
                    cont++;
                }
            }
        }

        return cont;
    }

    mostrarUniversidad() {
        let result = `UNIVERSIDAD(nombre: ${this.nombre})`;

        for (let alumno of this.alumnos) {
            result += '\n' + alumno.mostrarEstudiante();
        }

        return result;
    }

}

const profesor1 = new Profesor('Ramón', 'García', 5)
const profesor2 = new Profesor('Rosa', 'Martinez', 9)
// console.log(profesor1.mostrarProfesor());
// console.log(profesor2.mostrarProfesor());

const algebra = new Asignatura('Álgebra', profesor1);
const electronica = new Asignatura('Electrónica', profesor2);
const fisica = new Asignatura('Física', profesor2);
// console.log(algebra.mostrarAsignatura(false));
// console.log(electronica.mostrarAsignatura(true));
// console.log(fisica.mostrarAsignatura(true));

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)

// console.log(estudiante1.mostrarEstudiante());
// console.log();
// console.log(estudiante2.mostrarEstudiante());
// console.log();
// console.log(estudiante3.mostrarEstudiante());


// console.log(estudiante2.asignaturas[0].profesor.nombre);

let uni1 = new Universidad('UC3M')

uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)

// console.log(uni1.mostrarUniversidad());

uni1.obtenerAlumnosAsignatura('Electrónica');




// const uni = {
//     nombre: 'UC3M',
//     alumnos: [
//         {
//             nombre: 'Pepe',
//             apellidos: 'Ortiz',
//             asignaturas: [
//                 {
//                     nombre: 'Algebra', profesor: {
//                         nombre: 'Ramón',
//                         apellidos: 'García',
//                         experiencia: 7
//                     }
//                 },
//                 {
//                     nombre: 'Física', profesor: {
//                         nombre: 'Ramón',
//                         apellidos: 'García',
//                         experiencia: 7
//                     }
//                 }
//             ]
//         }
//     ]
// }




// const profesor1 = new Profesor('Ramón', 'García', 5)

// const algebra = new Asignatura('Álgebra', profesor1);
// const fisica = new Asignatura('Física', profesor1);

// let estudiante1 = new Estudiante('Pepe', 'Ortiz')
// estudiante1.agregarAsignatura(algebra);

// let uni1 = new Universidad('UC3M')
// uni1.agregarAlumno(estudiante1)