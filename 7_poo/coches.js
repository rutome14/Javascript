class Coche {

    // Método constructor
    // Indica cómo se generan los objetos de esta clase
    constructor(pMarca, pModelo, pColor) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        this.velocidad = 0;
    }

    acelerar(pIncremento) {
        this.velocidad += pIncremento;
    }

    frenar(pDecremento) {
        this.velocidad -= pDecremento;
    }

}

const coche1 = new Coche('mercedes', 'X360VG', 'azul');
const coche2 = new Coche('ford', 'fiesta', 'verde');

console.log(coche1);
coche1.acelerar(56);
coche1.frenar(150);
console.log(coche1);
coche1.acelerar(23);

console.log(coche1);
// console.log(coche2);