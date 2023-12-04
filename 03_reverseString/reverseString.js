/**
 * Reverses a given string.
 * @param {String} toReverse The string to reverse.
 * returns {String} The reversed string.
 */
const reverseString = function(toReverse) {
    return toReverse.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
