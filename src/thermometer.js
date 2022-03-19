/* eslint-disable no-useless-constructor */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/*
 * thermometer.js
 * Language: javascript
 * Test: tests/thermometer.test.js
 * Path: src/thermometer.js
 *
 * Create a Thermometer class
 * Using getters and setters - https://bit.ly/3DLVSuF (Javascript.info)
 * getters - access properties https://mzl.la/3p9oLwR
 * setters - change properties https://mzl.la/3vjPiZl
 * private class field - https://mzl.la/3vhtrC5
 *
 */

/**
 * @class Thermometer
 *
 * An instance of this class is a temperature that
 * is represented in celsius units (store it in a private class field)
 * The other unit values are calculated from the
 * stored celsius temperature
 *
 *
 */
class Thermometer {
  #celsius;

  /**
   * @constructor
   * @param {number} celsius
   */
  constructor(celsius) {
    this.#celsius = celsius;
  }

  /*  -------- celsius -------------------*/
  /**
   * @getter celsius
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the celsius temperature
   * */
  get celsius() {
    return this.#celsius;
  }

  /**
   * @setter celsius
   * @param {number} celsius
   * @memberof Thermometer
   * @description - sets the celsius temperature
   */
  set celsius(tempCelsius) {
    this.#celsius = tempCelsius;
  }

  /*  -------- kelvin -------------------*/
  /**
   * @getter kelvin
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the kelvin temperature
   */
  get kelvin() {
    return this.kelvin;
  }

  /**
   * @setter kelvin
   * @param {number} kelvin
   * @memberof Thermometer
   * @description - sets the kelvin temperature
   */
  set kelvin(tempKelvin) {
    this.kelvin = tempKelvin;
  }

  /*  -------- fahrenheit -------------------*/
  /**
   * @getter fahrenheit
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the fahrenheit temperature
   */
  get fahrenheit() {
    return this.fahrenheit;
  }

  /**
   * @setter fahrenheit
   * @param {number} fahrenheit
   * @memberof Thermometer
   * @description - sets the fahrenheit temperature
   */
  set fahrenheit(tempFahrenheit) {
    this.fahrenheit = tempFahrenheit;
  }

  /**
   * @method toString
   * @param {string} unit - 'C', 'K', 'F'
   * @returns {string} - the temperature in the specified unit
   * @memberof Thermometer
   * @description - returns a string with the temperature in the specified unit
   *
   * Example: Assuming an instance of this class is 0°C
   * toString('C') returns '0°C'
   * toString('K') returns '273.15K' - notice no ° symbol
   * toString('F') returns '32°C'
   * Any other value, or no value, for unit returns the celsius value + '°C'
   *
   */
  toString(unit) {
    if (unit === 'C') return this.#celsius.unit;
    if (unit === 'K') return this.kelvin.unit;
    if (unit === 'F') return this.fahrenheit.unit;
    return this.#celsius.unit;
  }
}

module.exports = {
  Thermometer,
};
