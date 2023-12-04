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

/**
 * Converts a given temperature from Celsius to Fahrenheit
 * @param {number} tempInCelsius 
 * returns {number} tempInFahrenheit
 */
const convertToFahrenheit = function(tempInCelsius) {
  if (typeof tempInCelsius !== 'number') {
    return "ERROR";
  }
  
  let tempInFahrenheit = (tempInCelsius * 9/5) + 32;
  if (tempInFahrenheit % 1 !== 0) {
    tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  }
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
