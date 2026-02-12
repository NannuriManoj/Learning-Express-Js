let stocks = {
    fruits: ["apple","banana","grapes","kiwi"],
    liquid: ["water", "syrup"],
    holder: ["cone","cup","stick"],
    toppings: ["almonds", "cashew"]
}

is_shop_open = true;

function time(ms){
    return new Promise((res, rej)=>{
        if(is_shop_open){
            setTimeout(res,ms);
        } else {
            rej(console.log("Sorry, shop is closed"));
        }
    });
}

async function kitchen() {
    try{
        await(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await(2000)
        console.log("Production has started...")

        await(2000)
        console.log("The fruit was chopped")

        await(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await(2000)
        console.log("Machine was started...")

        await(2000)
        console.log(`${stocks.holder[0]} was choosen as base for ice cream`)

        await(2000)
        console.log(`${stocks.toppings[0]} is great for toppings`)
        
        await(2000)
        console.log("Here is your ice cream")
    }
    catch(err){
        console.log("Ice cream flavour not available");
    }
    finally{
        console.log("Have a nice day, Thank you");
    }
}

kitchen();