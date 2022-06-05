const isObject = require('./isObject.js');

/**
 * Verify if an object is empty
 * @param  {Object} object Object to be verified
 * @return {Boolean}
 */
const isEmpty = (object) => {
    if (!isObject(object)) return false;
    for (let key in object) {
        if(object.hasOwnProperty(key))
            return false;
    }
    return true;
};

module.exports = isEmpty;
