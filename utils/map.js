const copy = require('./copy');

/**
 * Verify if two objects are equal
 * @param  {Object} object Object to be mapped
 * @param  {function(): *} fn Function whose return produces the element of the new Object
 * @return {Object} Object after map
 */
const map = (object, fn) => {
    const newObject = copy(object);
    Object.keys(newObject).map(key => {
        const value = newObject[key]
        newObject[key] = fn(value);
    });
    return newObject;
};


module.exports = map;