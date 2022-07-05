const palindromes = function(s) {
    s = s.replace(/[.,\/#!$%\^&\*\';:{}=\-_`~()/\s]/g, "")
    s = s.toLowerCase();
    if (s.split("").reverse().join("") === s) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

palindromes("y',.our motheo....eouro.u.");