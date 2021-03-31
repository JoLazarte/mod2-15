/*
Crear una función capitalizar que tome 
como argumento un string str y devuelva 
el mismo string con la primera letra en 
mayúscula

capitalizar('lovelace') // 'Lovelace'
capitalizar('había una vez...') // 'Había una vez...'
*/
/*
const capitalizar = (str) => {
    const primeraLetra = str.slice(0,1);
    const mayuscula = primeraLetra.toUpperCase();
    console.log(mayuscula + str.slice(1));
};
*/
/*
// Mejor:
const capitalizar = (str) => {
    const primeraLetra = str
    .slice(0,1)
    .toUpperCase()
    + str.slice(1);
    console.log(primeraLetra);
};

capitalizar('lovelace');
capitalizar('había una vez...');
*/
//Mas sintetizado:
const capitalizar = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

console.log(capitalizar('lovelace'));
console.log(capitalizar('había una vez...'));