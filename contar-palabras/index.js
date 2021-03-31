/*
Crear una función contarPalabras que tome 
como argumento un string str y devuelva 
la cantidad de palabras que posee

contarPalabras('javascript') // 1
contarPalabras('ada lovelace') // 2
contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14
*/
/*
const contarPalabras = (string) => {
    const array = string.split(" ");
    const palabras = array.length;
    console.log(palabras);
    
};


contarPalabras('javascript');
contarPalabras('ada lovelace');
contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos');
*/
/*
//Mejor:
const contarPalabras = (string) => {
    const array = string
    .split(" ")
    .length;
    console.log(array);
    
};

contarPalabras('javascript');
contarPalabras('ada lovelace');
contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos');
*/
/*
//O también:
const contarPalabras = (string) => {
    return string
        .split(" ")
        .length;
    
};
*/
//Mas sintetizado:
const contarPalabras = (string) => string
        .split(" ")
        .length;
    

console.log(contarPalabras('javascript'));
console.log(contarPalabras('ada lovelace'));
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));
