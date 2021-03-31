/*
Crear una función tienenMismaLongitud que tome como 
argumentos dos strings a y b y devuelva 
true si tienen la misma longitud o 
false de lo contrario


*/
const tienenMismaLongitud = (a, b) => a.length === b.length;
console.log(tienenMismaLongitud('javascript', 'java')); // false
console.log(tienenMismaLongitud('manzana', 'cerveza')); // true