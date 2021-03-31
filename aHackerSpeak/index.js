/*
Crear una función aHackerSpeak que tome 
como argumento un string str y el mismo 
string convertido a H4CK3R 5P3AK, siguiendo 
las siguientes reglas:

- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0

aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

*/
/*
const aHackerSpeak = (palabra) => {
    const str = palabra.replace(/i/gi,"1");
    const palabra2 = str.replace(/e/gi,"3");
    const palabra3 = palabra2.replace(/a/gi,"4");
    const palabra4 = palabra3.replace(/s/gi, "5");
    const palabra5 = palabra4.replace(/o/gi, "0");
    console.log(palabra5);
};
Mejor:
*/
/*
const aHackerSpeak = (palabra) => {
    let str = palabra.replace(/i/gi,"1");
    str = str.replace(/e/gi,"3");
    str = str.replace(/a/gi,"4");
    str = str.replace(/s/gi, "5");
    str = str.replace(/o/gi, "0");
    console.log(str);
};
aHackerSpeak('javascript');
aHackerSpeak('soy una hacker');
aHackerSpeak('ADA LOVELACE');

Mas sintetico:
*/
const aHackerSpeak = (palabra) => 
palabra
    .replace(/i/gi,"1")
    .replace(/e/gi,"3")
    .replace(/a/gi,"4")
    .replace(/s/gi,"5")
    .replace(/o/gi,"0");

console.log(aHackerSpeak('javascript'));
console.log(aHackerSpeak('soy una hacker'));
console.log(aHackerSpeak('ADA LOVELACE'));

