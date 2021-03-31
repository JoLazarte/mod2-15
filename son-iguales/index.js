/*
Crear una función sonIguales que tome 
como argumentos dos strings a y b y 
devuelva true si ambos strings tienen el 
mismo contenido independientes del caso y 
false en caso contrario.

sonIguales('javascript', 'JavaScript') // true
sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false
*/

const sonIguales = (a, b) => a.toLowerCase() === b.toLowerCase();

// const datoA = prompt('ingrese datoA');
// const datoB = prompt('ingrese datoB');
// console.log("prueba prompt",sonIguales(datoA, datoB));
console.log(sonIguales('javascript', 'JavaScript')); // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')); // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')); // false