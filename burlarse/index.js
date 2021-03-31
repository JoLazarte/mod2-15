/*
Crear una función burlarse que tome como 
argumento un string str y devuelva el mismo 
string con todas las vocales reemplazadas por 
la letra i

burlarse('programar es dificil') // 'prigimir is dificil'
*/
/*
const burlarse = (palabra) => {
    const str = palabra.replace(/a/gi,"i");
    const palabra2 = str.replace(/e/gi,"i");
    const palabra3 = palabra2.replace(/o/gi,"i");
    const palabra4 = palabra3.replace(/u/gi, "i");
    console.log(palabra4);
};
burlarse('programar es dificil');
Puede sintetizarse a...
*/
/*
const burlarse = (palabra) =>
  palabra
    .replace(/a/gi, 'i')
    .replace(/e/gi, 'i')
    .replace(/o/gi, 'i')
    .replace(/u/gi, 'i');

console.log(burlarse('progrAmar es dificil'));  
Mejor sintesis:
*/
const burlarse = (palabra) => palabra.replace(/[aeou]/gi,"i");
console.log(burlarse('progrAmar es dificil'));  

/*
// En la clase:
const burlarse = (str) =>{
   let string = str.replaceAll("a","i");//'progrimir es dificil,murcieligo' 
   string =  string.replaceAll("e","i") //'progrimir is dificil,murciiligo';
   string =  string.replaceAll("o","i") //'progrimir is dificil,murciiligo';
   string =  string.replaceAll("u","i") //'progrimir is dificil,murciiligo';
   return string;
 }
Pero, es posible...
 */
/*
const burlarse = (str) =>{
  str.replaceAll("a","i").replaceAll("e","i").replaceAll("o","i").replaceAll("u","i");
  //'progrimir es dificil,murcieligo';
  //'progrimir is dificil,murciiligo';
  //'prigrimir is dificil,murciiligi';
  //'prigrimir is dificil,mirciiligi';
}
Entonces...
*/
/*
const burlarse = (str) =>
  str
    .replaceAll('a', 'i')
    .replaceAll('e', 'i')
    .replaceAll('o', 'i')
    .replaceAll('u', 'i');

console.log(burlarse('programar es dificil')); 
Ahora bien... 
*/
/*
La expresiones regulares regex,se escriben entre / 
entre ambas barra colocolo que quiero buscar

Dentro de [], coloco un grupo de busqueda,ej: [aeou] 
solo busca volcales menos la i.
Tenemos los flag que van despues de la barra,estos 
cambian el comportamiento de busqueda.
g: busca todas la incidencia
i: ignora entre mayuscala y minuscula
"Formula": str.replace(/[]/gi, " ");
Entonces...

const burlarse = (str) => str.replace(/[aeou]/gi,"i");
console.log(burlarse('progrAmar es dificil'));  
*/