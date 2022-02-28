class Profesor {
    constructor(pNombre, pExperiencia) {
        this.nombre = pNombre;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}. experiencia: ${this.experiencia})`;
    }
}

export default Profesor;