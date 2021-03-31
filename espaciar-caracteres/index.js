/*
Crear una función espaciarCaracteres que 
tome como argumento un string str y devuelva 
un string con todos sus caracteres separados 
por un espacio

espaciarCaracteres('javascript') // 'j a v a s c r i p t'
espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'
*/

/*
const espaciarCaracteres = (string) => {
    var arr = string.split("");
    arr.forEach(myFunction);
}
const separarItems = (item) => {
    var palabra = document.getElementById("word");
    var items = item + " ";
    palabra.innerHTML = items; 
}
*/

/*'dsgdfgdf'.split('')
(8) ["d", "s", "g", "d", "f", "g", "d", "f"]0: "d" 1: "s"2: "g"3: "d"4: "f"5: "g"6: "d"7: "f"length: 8__proto__: Array(0)
'dsgdfgdf'.split('').join(' ')
"d s g d f g d f"*/
/*
const espaciarCaracteres = (string) => {
    const arr = string.split("");
    const espaciado = arr.join(" ");
    console.log(espaciado);
   
};
*/
/*
//Mejor:
const espaciarCaracteres = (string) => {
    const arr = string
    .split("")
    .join(" ");
    console.log(arr);
   
};

espaciarCaracteres('javascript');
espaciarCaracteres('ada lovelace');
espaciarCaracteres('Everyday is everyday.');
*/
const espaciarCaracteres = (string) => string
    .split("")
    .join(" ");
    

espaciarCaracteres('javascript');
espaciarCaracteres('ada lovelace');
espaciarCaracteres('Everyday is everyday.');
