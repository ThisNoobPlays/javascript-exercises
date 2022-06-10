const repeatString = function(stri, num) {

    if (num < 0) {
        return "ERROR";
    }
    result = "";
    for (let i = 0; i < num; i++) {
        result += stri;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
