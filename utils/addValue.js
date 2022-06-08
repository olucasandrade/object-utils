/**
 * Add a value to an object
 * @param  {Object} object Object to be manipulated
 * @param  {*} value Value to be added
 * @param  {Boolean} allowUndefined If true, function will add even undefined values
 * @return {Object} Object after add
 */
const addValue = (object, key, value, allowUndefined = false) => {
    if (allowUndefined) {
        object[key] = value;
        return object;
    }
    if (value !== undefined) {
        object[key] = value;
        return object;
    }
    return object;
};

module.exports = addValue;
