const copy = require('./copy');

/**
 * Filter values from object
 * @param  {Object} object Object to be filtered
 * @param  {function(*): Boolean} fn function to filter
 * @param  {Boolean} removeOriginal If true, original object will be filtered
 * @return {Object} Object after add
 */
const filter = (object, fn, removeOriginal = false) => {
    const objectTarget = removeOriginal ? object : copy(object);
    const filteredKeys = Object.keys(objectTarget)?.filter((key) => !fn(object[key]));
    filteredKeys?.forEach(filteredKey => {
        delete objectTarget[filteredKey];
    });
    return objectTarget;
};

module.exports = filter;
