// const generateRandomNumber =require('./util');
// const { randomNumber, celciusTofahrenheit } = require('./util');   // commonJs syntax for importing

// console.log(randomNumber());
// console.log(celciusTofahrenheit(0));

import  getPostLength,{ getPost } from "./postController.js";
console.log(getPost());
console.log(getPostLength());