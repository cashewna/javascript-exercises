/**
 * Converts a given temperature from Fahrenheit to Celsius
 * @param {number} tempInFahrenheit 
 * returns {number} tempInCelsius
 */
const convertToCelsius = function(tempInFahrenheit) {
  if (typeof tempInFahrenheit !== 'number') {
    return "ERROR";
  }
  
  let tempInCelsius = (tempInFahrenheit - 32) * 5/9
  if (tempInCelsius % 1 !== 0) {
    tempInCelsius = Math.round(tempInCelsius * 10) / 10;
  }
  return tempInCelsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
