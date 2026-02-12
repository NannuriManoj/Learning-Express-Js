// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(callbackFn)
// map(callbackFn, thisArg)

// return value is the new created array


// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

