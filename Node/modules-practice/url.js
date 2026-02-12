import url from 'url';

const urlString = 'https://www.youtube.com/watch?v=32M1al-Y6Ag'

// URL object
const urlObject = new URL(urlString);

console.log(urlObject);

//format()
console.log(url.format(urlObject));

//import.meta.url - filepath
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// .append .delete can also be used for the object params
const params = new URLSearchParams(urlObject.search);
console.log(params);
