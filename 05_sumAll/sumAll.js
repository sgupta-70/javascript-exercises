const sumAll = function (n1, n2) {
    let min = max = sum = 0;
    if (n1 < 0 || n2 < 0 || !(Number.isInteger(n1)) || !(Number.isInteger(n2)))
        return 'ERROR';
    if (n1 < n2) {
        min = n1;
        max = n2;
    }
    else {
        min = n2;
        max = n1;
    }
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
