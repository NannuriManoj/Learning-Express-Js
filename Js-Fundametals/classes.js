class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walking...");
    }
}

const person = new Person("Manoj");
person.walk();