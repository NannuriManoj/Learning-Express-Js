let stocks = {
    fruits: ["apple","banana","grapes","kiwi"],
    liquid: ["water", "syrup"],
    holder: ["cone","cup","stick"],
    toppings: ["almonds", "cashew"]
}

let order = (fruit_index, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_index]} was selected...`);
        call_production();
    },2000)
}

// the below is the call back hell
let production = ()=>{
    setTimeout(()=>{
        console.log("Production has started");

        setTimeout(() => {
            console.log("Fruit was chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("Machine was started...");

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was choosen as base for ice cream`);

                            setTimeout(()=>{
                                console.log(`${stocks.toppings[0]} is great for toppings`);

                                setTimeout(()=>{
                                    console.log("Here is your ice cream");
                                },2000)
                            },3000)
                    },2000)
                },1000)
            },2000)
        },1000)
    })
}

order(0,production);

// Promises are introduces to resolve the issue of the call back hell.
// see the promises.js file for Resolving the issue of call back hell.