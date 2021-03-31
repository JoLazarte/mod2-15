/*
Crear una función obtenerExtension que tome como 
argumento un string archivo con el formato 
'nombre.extension' y devuelva la extensión del 
archivo

obtenerExtension('imagen.png') // 'png'
obtenerExtension('index.html') // 'html'
obtenerExtension('notas.txt') // 'txt'
*/
const obtenerExtension = (archivo) => 
    archivo.slice(archivo.indexOf('.') + 1);
//+1 porque quiero lo que viene despues del "."
console.log(obtenerExtension('imagen.png'));
console.log(obtenerExtension('index.html'));
console.log(obtenerExtension('notas.txt'));

/*
slice recive dos parametros, el primero me dice 
donde empiezo a cortar y el segundo me dice hasta 
donde. El segundo es opcional, es decir, que no hace
falta colocarlo.
Cuando en el segundo parametro pongo un numero 
negativo, defino el nuevo final del string, contando 
desde el final, de derecha a izquierda, y empiezo 
desde el 1 (NO el 0). El primer parametro sigue 
definiendo el nuevo inicio del string 
(contando desde el 0). Si no lo coloco, el nuevo 
string estará definido solo por el conteo del 
segundo parametro.
*/
/*
//Ejemplo:
const cadena1 = "La mañana se nos echa encima.";
const cadena2 = cadena1.slice(4,-2);
//El nuevo string comienza en el index 4.
console.log(cadena2);
*/