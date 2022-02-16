var numA = 8;
var numB = 3;

console.log('suma', numA + numB) //11
console.log('resta', numA - numB) //5
console.log('multiplicacion', numA * numB) //24
console.log('division', numA / numB) // 2
console.log('resto', numA % numB) // 2


// comparaciones

//negacion

var activo = true;

//quiero los elementos que no estan activos
console.log('Negacion', !activo);

console.log('IGUALDAD', 13 == '13') //true
console.log('IGUALDAD Extricta', 13 === '13') //false, comparo valor y tipo

//sabiendo estos datos
var genero = 'mujer'
var edad = 15;

//podeis decir si la persona es mujer mayor de 30;

console.log(genero === 'mujer' && edad > 30) // false

//podeis decir si la persona es hombre menor de 18;

console.log('podeis decir si la persona es hombre menor de 18', genero !== 'mujer' && edad < 18) //false

//diferencia entre igualdad estricta y simple (=== , ==)
console.log(13 === '13') //false
console.log(13 == '13') //true