/**
 * Verify if an object contains a value
 * @param  {Object} object Object to be verified
 * @param {*} value Value to be searched
 * @return {Boolean}
 */
const hasValue = (object, value) => {
    const values = Object.values(object);
    return values.some(v => v === value);
};

module.exports = hasValue;
