const filter = require('./filter');

/**
 * Add a value to an object
 * @param  {Object} object Object to be manipulated
 * @param  {*} value Value to be removed
 * @return {Object} Object after remove
 */
const removeValue = (object, value) => {
    if (value) {
        return filter(object, (e) => e !== value, true)
    }
    return object;
};

module.exports = removeValue;
