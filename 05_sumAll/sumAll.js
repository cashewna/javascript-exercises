const sumAll = function(arg1, arg2) {
    if (
        arg1 < 0 || arg2 < 0 ||
        typeof arg1 !== "number" || typeof arg2 !== "number"
    ) {
        return "ERROR";
    }

    let sum = 0;
    let start = arg1 > arg2 ? arg2 : arg1;
    let end = arg1 > arg2 ? arg1 : arg2;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
