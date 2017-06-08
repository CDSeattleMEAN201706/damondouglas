let math = require('./mathlib');
let colors = require('colors');
math = math();

let expect = (message, obj1, obj2) => {
    let result = obj1 === obj2;
    let color = result ? colors.green : colors.red;
    console.log(
        message,
        color(obj1 === obj2)
    );
};

let between = (value, from, to) => {
    return value >= from && value <= to;
}

(() => {
    expect('add two numbers (e.g. math.add(2,3) should return 5)', math.add(2,3), 5);
    expect('multiply two numbers (e.g. math.multiply(3,5) should return 15)', math.multiply(3,5), 15);
    expect('square a number (e.g. math.square(5) should return 25)', math.square(5), 25);
    var randomNumber = math.random(1,35);
    expect(
        'return a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)',
        between(randomNumber, 1, 35), 
        true
    )
})();

