/*
Crear una función obtenerPrimeraOracion que 
tome como argumento un string str y la primera 
oración de dicho string

obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'
*/
/*
Ejemplo de .slice:
const cadena1 = "La mañana se nos echa encima.";
const cadena2 = cadena1.slice(4,6);
//Primer parametro: 4, es decir, 
//en index 4 = a (segunda "a" del string), inicia mi nuevo string
//Segundo parametro: 6, es decir,
//en index (6 - 1) = ñ, finaliza mi nuevo string
console.log(cadena2); // Obtengo "añ" como mi nuevo string
*/
/*
    //Ejemplo1
    //str = 'Tengo varias oraciones. Esta es la segunda. 
    //Y esta es la tercera.'
    //Primer punto = 22
    //Nuevo_str = 'Tengo varias oraciones.'
    //Ejemplo2
    //str2 = 'A mí no me preguntes, sólo soy una oración.'
    //punto = -1 
    //Nuevo_str2 = 'A mí no me preguntes, sólo soy una oración.'
const obtenerPrimeraOracion = (str) =>{   
    //A continuación, localizo el primer punto.
    const punto = str.indexOf(".");
    //Me aseguro de que si el index del primer punto 
    //es igual o mayor a 0, el primer parametro de mi 
    //nuevo string sea el index 0 del string original
    //y que el segundo parametro sea el el index donde 
    //este ese primer punto.
    //Ya había guardado la localización de ese primer 
    //punto en la variable "punto". 
    //Pero como el método .slice siempre resta 1 al 
    //index de su segundo parametro que sea POSITIVO,
    //en este ejemplo (obtenerPrimeraOracion()),
    //cancelo esa resta, sumandole exactamente 1.

    //Traducción-cursos: SR4T
    
    if(punto >=0) {
    return str.slice(0, punto+1);
    
    }
    //Si el index del primer punto es menor a 0, devuelvo el string completo
    else {
      return str;
    }
}; 
*/
//Puede simplificarse a:
const obtenerPrimeraOracion = (str) => {
    if (str.indexOf('.') >= 0) return str.slice(0, str.indexOf('.') + 1);
    else return str;
};

console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración.'));
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));
