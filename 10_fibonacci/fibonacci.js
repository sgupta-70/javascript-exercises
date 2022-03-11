const fibonacci = function(n) {
    if (n<0)
        return 'OOPS';
    else if (n==0)
        return 0;
    else {
        let prevFib=0,currentFib=1;
        for (let i=1; i<=n-1; i++){
            let newFib=prevFib+currentFib;
            prevFib=currentFib;
            currentFib=newFib;
        }
        return currentFib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
