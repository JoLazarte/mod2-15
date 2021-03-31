/*
Crear una función convertirEnAcronimo que tome como 
argumento un string str y devuelva un string con 
todos los caracteres en mayúscula y separados por 
un punto

convertirEnAcronimo('afip') // 'A.F.I.P.'
convertirEnAcronimo('nasa') // 'N.A.S.A.'
*/
/*
const convertirEnAcronimo = (str) => {
    const mayuscula = str.toUpperCase();
    const array = mayuscula.split("");
    const acronimo = array.join(".");
    console.log(acronimo);
};
convertirEnAcronimo('afip') // 'A.F.I.P.'
convertirEnAcronimo('nasa') // 'N.A.S.A.'
*/
//Mas sintetizado:
const convertirEnAcronimo = (str) => 
    str
        .toUpperCase()
        .split("")
        .join(".");

console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'