/**
 * Verify if a value is an object
 * @param  {*} value Value to be verified
 * @return {Boolean}
 */
const isObject = (value) => Object.prototype.toString.call(value) === '[object Object]';

module.exports = isObject;