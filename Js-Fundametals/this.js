// the value of 'this' is defined how a function is called.
// every function in Js is a object.

'use strict';

const person = {
    name: 'Manoj',
    walk() {
        console.log(this);
    }
}

person.walk();        // logs: { name: 'Manoj', walk: [Function] }

const walk = person.walk; // we are just copying the function itself, losing the context of where it came from. The function has no memory of being part of person.
walk();                   // so, walk here is a standalone function call.
                     // logs: undefined (in strict mode) 
                     // would be window/global in non-strict mode

// Solutions to preserve 'this':
walk.call(person);   // logs: { name: 'Manoj', walk: [Function] }
const boundWalk = person.walk.bind(person);
boundWalk();         // logs: { name: 'Manoj', walk: [Function] }



function greet(greeting, emoji) {
  console.log(`${greeting}, ${this.name} ${emoji}`);
}
const user = { name: "Manoj" };
const sayHello = greet.bind(user, "Hello");   // user object is binded to the greet, "Hello" is a pre-filled argument to greet
sayHello("👋"); // Hello, Manoj 👋

// You could pre-fill both arguments:
const sayHelloWithWave = greet.bind(user, "Hello", "👋");
sayHelloWithWave(); // Hello, Manoj 👋 (no arguments needed)

// Or just bind 'this' without pre-filling:
const boundGreet = greet.bind(user);
boundGreet("Hi", "😊"); // Hi, Manoj 😊

// The original function is unchanged:
greet("Hey", "🎉"); // Hey, undefined 🎉 (no 'this' context)