const findTheOldest = function(arr) {
    let oldest = arr[0];
    for (const c of arr) {
        let deathDate = c.yearOfDeath
        let oldestDeathDate = oldest.hasOwnProperty("yearOfDeath") ? oldest.yearOfDeath : new Date().getFullYear();
        if (deathDate - c.yearOfBirth > oldestDeathDate - oldest.yearOfBirth) {
            oldest = c;
        }
    }

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;