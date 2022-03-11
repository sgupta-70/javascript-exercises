const palindromes = function (str) {
    processedStr = str.replace(/\W/g,'').toLowerCase();
    let revStr = '';
    for (let i = processedStr.length - 1; i >= 0; i--) {
        revStr += processedStr[i];
    }
    if (processedStr===revStr)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
