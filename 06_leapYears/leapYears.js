/**
 * Determines if a year is a leap year.
 * @param {number} year 
 * returns {boolean} true if year is a leap year, false otherwise
 */
const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
