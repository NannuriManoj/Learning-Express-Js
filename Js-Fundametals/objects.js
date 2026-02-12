// Objects in Js are key-value pairs

const person = {
    name: "Manoj",
    walk: function() {},  //method of an object
    talk() {}  // method can also be written in this way, no need for ':'
}

person.talk();
person.name = '';

const targetName = 'manoj';
person[targetName] = 'Nannuri';