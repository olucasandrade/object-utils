const isObject = require('./isObject');

/**
 * Verify if two objects are deeply equal
 * @param  {Object} object1 Object to be compared
 * @param  {Object} object2 Object to be compared
 * @return {Boolean}
 */
const isDeepEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !isDeepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
    return true;
};

module.exports = isDeepEqual;