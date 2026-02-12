const person = {
    talk(){
        // At this point, 'this' = person
        // because talk() was called as person.talk()
        
        setTimeout(() => {
            // Arrow function doesn't have its own 'this'
            // So it "inherits" or "captures" 'this' from talk()
            // which is 'person'
            console.log("this", this); // person
        }, 1000)
    }
}

// regular vs arrow
const person2 = {
    talk(){
        console.log("1:", this); // person2
        
        setTimeout(function(){
            console.log("2:", this); // window/undefined
            // Regular function HAS its own 'this'
            // Called standalone by setTimeout
            // So 'this' is window/undefined
        },1000)
    }
}

// example
const person3 = {
    talk(){
        const myVariable = "hello";
        
        setTimeout(() => {
            console.log(myVariable); // "hello"
            // How does it find myVariable?
            // It looks up to the parent scope!
        })
    }
}

// clear example

const person4 = {
    name: "Manoj",
    
    talk(){
        // Scope 1: this = person
        console.log("In talk:", this.name); // "Manoj"
        
        const regularFunc = function(){
            // Scope 2a: this = window/undefined (own 'this')
            console.log("Regular:", this.name); // undefined
        };
        
        const arrowFunc = () => {
            // Scope 2b: NO own 'this', inherits from Scope 1
            console.log("Arrow:", this.name); // "Manoj"
        };
        
        regularFunc(); // standalone call
        arrowFunc();   // standalone call, but still has person's 'this'
    }
}

person.talk();
```

**Output:**

In talk: Manoj
Regular: undefined
Arrow: Manoj
```