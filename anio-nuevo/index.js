/*
Crear una función esAnioNuevo que tome como 
argumento un string fecha con el formato 
DD/MM/YYYY un argumento y devuelva true si la 
fecha es año nuevo o false si no lo es

esAnioNuevo('03/05/2015') // false
esAnioNuevo('22/01/1987') // false
esAnioNuevo('01/01/2020') // true
*/
const esAnioNuevo = (string) => {
    const fecha = string.split("/");
    console.log(fecha);
    const dia = Number(fecha[0]);
    const mes = Number(fecha[1]);
    const anio = Number(fecha[2]);
    return dia == 1 && mes == 1 && anio >= 0 && anio < 2021;

};
console.log(esAnioNuevo('03/05/2015'));// false
console.log(esAnioNuevo('22/01/1987')); // false
console.log(esAnioNuevo('01/01/2020')); // true
