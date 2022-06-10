const removeFromArray = function(arr, ...exclude) {
    let result = [];
    
    for (const c of arr) {
        
        let bruh = true;
        for (const b of exclude) {
            if (b === c) {
                bruh = false;
            }
        }

        if (bruh) {
            result.push(c);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
