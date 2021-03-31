/*
Crear una función ocultarContraseña que tome 
como argumento una contrasenia de solo numeros 
y devuelva un string con dicha contraseña 
ocultada con astericos *, es decir, un string 
con la misma longitud donde todos 
sus caracteres son astericos

ocultarContrasenia(123456) // '******'
ocultarContrasenia(111222333) // '*********'
*/
/*
const ocultarContrasenia = (pass) => {
    let string = String(Number(pass));
    string = string.replace(/1/gi, "*");
    string = string.replace(/2/gi, "*");
    string = string.replace(/3/gi, "*");
    string = string.replace(/4/gi, "*");
    string = string.replace(/5/gi, "*");
    string = string.replace(/6/gi, "*");
    string = string.replace(/7/gi, "*");
    string = string.replace(/8/gi, "*");
    string = string.replace(/9/gi, "*");
    string = string.replace(/0/gi, "*");

    console.log(string);

};

ocultarContrasenia(12344444443); 
ocultarContrasenia(123456);
ocultarContrasenia(111222333);
*/

/*
//En clase:
//Si uso los corchetes, uso el return o una variable 
//para guardar lo que haga la función.
const ocultarContrasenia = (pass) => {
//const string = pass
return pass
    .toString()
    .replaceAll('1', '*')
    .replaceAll('2', '*')
    .replaceAll('3', '*')
    .replaceAll('4', '*')
    .replaceAll('5', '*')
    .replaceAll('6', '*')
    .replaceAll('7', '*')
    .replaceAll('8', '*')
    .replaceAll('9', '*')
    .replaceAll('0', '*');
//console.log(pass);
}
Sintetizado a...
*/
/*
const ocultarContrasenia = (pass) =>
pass
    .toString()
    .replaceAll('1', '*')
    .replaceAll('2', '*')
    .replaceAll('3', '*')
    .replaceAll('4', '*')
    .replaceAll('5', '*')
    .replaceAll('6', '*')
    .replaceAll('7', '*')
    .replaceAll('8', '*')
    .replaceAll('9', '*')
    .replaceAll('0', '*');
*/
/*
//Mas sintetico:
const ocultarContrasenia = (pass) =>
    pass
        .toString()
        .replace(/[1234567890]/gi, "*");
*/
/*
Con un guión medio, puedo escribir un rango sin 
escribir todos sus elementos:
*/
const ocultarContrasenia = (pass) => 
    pass.toString().replace(/[0-9]/g,"*");

console.log('ocultarContrasenia(123456)', ocultarContrasenia(123456));
console.log('ocultarContrasenia(111222333)', ocultarContrasenia(111222333));
