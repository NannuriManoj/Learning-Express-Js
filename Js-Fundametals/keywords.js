// var -> function scope 
// let -> block scope
// const -> block scope

// function useVar() {
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// useVar();

// function useLet() {
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     // console.log(i);  // here we will get an error as 'i' is not defined
// }
// useLet();

const val = 10;
// val = 20; // a type-error: Assignment to constant variable