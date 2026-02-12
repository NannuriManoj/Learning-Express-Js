const address = {
    street: " ",
    town: " ",
    country: " "
}

// to acess the above generally we use something as below
const street = address.street;
const town = address.town;
const country = address.country;
// the above code is have alot of "address.value" so instead we use something like below

const { street: str, town:tn, country:cty } = address;
// the both peices of code represent the same.

// lets say we want to use a name something as 'st' for street
const{ street: st} = address;

const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3