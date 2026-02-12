function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}

function celciusTofahrenheit(celcius){
    return (celcius*9)/5 + 32;
}

// module.exports = randomNumber;
// module.exports = { randomNumber, celciusTofahrenheit }; // commonJs way of exporting functions, object.