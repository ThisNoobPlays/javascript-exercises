const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS";
    }
    let series = [1, 1];
    for (let i = 1; i < num; i++) {
        series.push(series[i] + series[i - 1]);
    }
    return series[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;