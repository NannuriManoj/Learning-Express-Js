let stocks = {
    fruits: ["apple","banana","grapes","kiwi"],
    liquid: ["water", "syrup"],
    holder: ["cone","cup","stick"],
    toppings: ["almonds", "cashew"]
}

let is_shop_open = true;

let order2 = (time, work)=>{
    return new Promise((res, rej)=> {
        if(is_shop_open){

            setTimeout(()=>{
                res(work());
            },time);

        } else {
            rej(console.log("Shop is closed"));
        }
    })
};

order2(2000, ()=> console.log(`${stocks.fruits[0]} was selected`))
.then(() => {
    return order2(0, () => console.log("Production has started..."));
})

.then(()=>{
    return order2(2000, () => console.log("The fruit was chopped"));
})

.then(()=>{
    return order2(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})

.then(()=>{
    return order2(2000, () => console.log("Machine was started..."));
})

.then(()=>{
    return order2(1000, ()=> console.log(`${stocks.holder[0]} was choosen as base for ice cream`));
})

.then(()=>{
    return order2(3000, ()=> console.log(`${stocks.toppings[0]} is great for toppings`));
})

.then(()=>{
    return order2(2000, ()=> console.log("Here is your ice cream"));
})

.catch(()=>{
    console.log("no ice cream left");
})

.finally(()=>{
    console.log("Thank you, have a great day...!!!");
})

// order()
// .then()      // runs when the promise is resolved 
// .then()      // runs when the promise is resolved
// .catch()     // when the promise is rejected
// .finally()   // runs if promise is resolved or rejected