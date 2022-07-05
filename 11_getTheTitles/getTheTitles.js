const getTheTitles = function(arr) {
    let newArr = [];
    for (const c of arr) {
        newArr.push(c.title);
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;