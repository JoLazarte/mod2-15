/*
Crear una función esFraccionMayorAUno que 
tome como argumento un string fraccion 
(en el formato 'numerador/denominador') y 
devuelva true si dicha fracción es 
mayor a 1 o false de lo contrario

esFraccionMayorAUno('1/2') // false
esFraccionMayorAUno('2/2') // false
esFraccionMayorAUno('4/2') // true
*/
const esFraccionMayorAUno = (fraccion) =>
  Number(fraccion.slice(0, fraccion.indexOf('/'))) /
    Number(fraccion.slice(fraccion.indexOf('/') + 1)) >
  1;
//+1 porque en el segundo caso quiero lo que 
//viene despues de la / (el denominador).
//Entonces divido lo que esta antes de la / con 
//lo que viene despúes. Luego aplico el If.

console.log(esFraccionMayorAUno('1/2'));
console.log(esFraccionMayorAUno('2/2'));
console.log(esFraccionMayorAUno('4/2'));
