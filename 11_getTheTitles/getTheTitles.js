const getTheTitles = function(arr) {
    let titles=[];
    for (book of arr){
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
