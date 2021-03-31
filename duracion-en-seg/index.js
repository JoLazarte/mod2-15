/*
Crear una función obtenerDuracionEnSegundos que 
tome como argumento un string duracion con el 
formato (mm:ss) y devuelva la cantidad de segundos 
totales de la duración

obtenerDuracionEnSegundos('00:33') // 33
obtenerDuracionEnSegundos('01:05') // 65
obtenerDuracionEnSegundos('10:42') // 642
*/
const obtenerDuracionEnSegundos = (duracion) => {
    const minutosYsegundos = duracion.split(":");
    console.log(minutosYsegundos);
    const minutos = Number(minutosYsegundos[0]);
    const segundos = Number(minutosYsegundos[1]);
    if (minutos >= 1) {
        return minutos * 60 + segundos;
    } else {
        return segundos;
    }
};
console.log(obtenerDuracionEnSegundos('00:33')); // 33
console.log(obtenerDuracionEnSegundos('01:05')); // 65
console.log(obtenerDuracionEnSegundos('10:42')); // 642