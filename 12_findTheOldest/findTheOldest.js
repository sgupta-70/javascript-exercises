const findTheOldest = function (arr) {
    let oldest, maxAge = 0;
    let dateObj = new Date();
    let currentYear = dateObj.getFullYear();
    for (obj of arr) {
        if (obj.hasOwnProperty('yearOfDeath')) {
            if (obj.yearOfDeath - obj.yearOfBirth > maxAge) {
                oldest = obj;
                maxAge = obj.yearOfDeath - obj.yearOfBirth;
            }
        }
        else {
            if (currentYear - obj.yearOfBirth > maxAge) {
                oldest = obj;
                maxAge = currentYear - obj.yearOfBirth;
            }
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
