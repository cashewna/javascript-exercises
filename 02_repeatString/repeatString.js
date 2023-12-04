/**
 * Repeat the given string n times.
 * @param {String} myString The string to repeat.
 * @param {Integer} myNumber The number of times to repeat the string.
 * returns {String} The repeated string.
 */
const repeatString = function(myString, myNumber) {
    if (myNumber < 0) return 'ERROR';
    return myString.repeat(myNumber); 
};

// Do not edit below this line
module.exports = repeatString;
