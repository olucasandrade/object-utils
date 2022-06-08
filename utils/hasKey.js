/**
 * Verify if an object contains a key
 * @param  {Object} object Object to be verified
 * @param {*} value Value to be searched
 * @return {Boolean}
 */
const hasKey = (object, value) => {
    const keys = Object.keys(object);
    return keys.some(key => key === value);
};

module.exports = hasKey;
