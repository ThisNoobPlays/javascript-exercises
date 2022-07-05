const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    let count = 0;
    for (const c of arr) {
        count += c;
    }
    return count;
};

const multiply = function(arr) {
    let count = 1;
    for (const c of arr) {
        count *= c;
    }
    return count;
};

const power = function(a, b) {
    return Math.pow(a, b);
};

const factorial = function(a) {
    let count = 1;
    for (let i = a; i >= 1; i--) {
        count *= i;
    }
    return count;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};