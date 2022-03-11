const repeatString = function (str, count) {
    if (str === '' || count === 0) {
        return '';
    }
    else if (count < 0) {
        return 'ERROR';
    }
    else {
        let result = '';
        for (let i = 1; i <= count; i++) {
            result += str;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
