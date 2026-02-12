// before arrow function
const add = function(a,b){
    return a+b;
}
add(1,2);

// after arrow function
// we can remove the 'function' keyword
// can remove the 'return' keyword if we are passing a single line to the function
// can remove '{}' if function body has a single expression
const add2 = (a,b) => a+b;
add2(1,2);

// before arrow
const square = function(x){
    return x*x;
}
square(4);

// after arrow
// can also remove the '()' around the params if we passing only a single param
const square2 = x => x*x;
square2(4);

// before arrow
const sayHi = function(){
    return "Hii";
}
sayHi();

// after arrow
// we need to add empty '()' if no aruguments is passed
const sayHii2 = () => "Hiii";
sayHii2();