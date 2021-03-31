/*
Crear una función esPuenteSeguro que tome como 
string un puente que consista en caracteres 
numerales # y espacios y devuelva false si el puente 
está cortado (tiene espacios) o true si está 
entero y es seguro atravesar

esPuenteSeguro('### ##') // false
esPuenteSeguro('##### ####') // false
esPuenteSeguro('########') // true
*/
const esPuenteSeguro = (puente) => puente.indexOf(' ') < 0;
//Localizo el index del espacio (" ").
//Luego le pregunto si es nenor a 0, ya que:
/* indexOf me dice en que posicion se encuentra el 
inicio de la palabra/elemto que busco, si no la
encuentra me devuelve un -1 */
//Si el (" ") no existe en el string, el index es -1
//Y -1 es < 0
console.log(esPuenteSeguro('### ##'));
console.log(esPuenteSeguro('##### ####'));
console.log(esPuenteSeguro('########'));