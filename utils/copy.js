/**
 * Copy an object without connection
 * @param  {Object} object Object to be copied
 * @return {Object} Object after copy
 */
const copy = (object) => {
    return JSON.parse(JSON.stringify(object));
};

module.exports = copy;
