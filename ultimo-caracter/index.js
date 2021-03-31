/*
Crear una función esUltimoCaracter 
que tome como argumentos una palabra 
y un caracter y devuelva true si la palabra 
termina con el caracter o false de 
lo contrario

esUltimoCaracter('lovelace', 'e') // true
esUltimoCaracter('lovelace', 'f') // false
*/

/* const esUltimoCaracter = (string, a) => {
    if (string.slice(0, -1) == a) {
        return true;
    } else {
        return false;
    }
}; */

const esUltimoCaracter = (string, a) => string.slice(0, -1) === a;

console.log(esUltimoCaracter('lovelac', 'e'));
console.log(esUltimoCaracter('lovelace', 'f'));

//const esUltimoCaracter = (palabra, caracter) => palabra.slice(-1) === caracter;

