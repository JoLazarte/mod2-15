/*
Reddit es una red de comunidades en la que cada 
comunidad se conocer como subreddit. Crear una 
función obtenerSubreddit que tome como argumento 
un string url que consista en la url de un 
subreddit 
(p. ej. 'https://www.reddit.com/r/dankmemes/') 
y devuelva el subreddit (p. ej. 'dankmemes')

obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 
*/
const obtenerSubreddit = (url) => url.slice(url.indexOf('/r/') + 3, -1);
/*
Primer parametro: url.indexOf('/r/') + 3 -->
porque quiero justo lo que viene despues de '/r/', que ocupa 3 espacios,
3 indexes (/:1, r:2, /:3). Sin el +3, mi nuevo string comenzaría justo en 
la primera / de '/r/'.
Segundo parametro: -1. Mi nuevo string acaba justo antes del ultimo 
index.
*/

console.log(
  obtenerSubreddit('https://www.reddit.com/r/javascript/')
);
console.log(
  obtenerSubreddit('https://www.reddit.com/r/aww/')
);