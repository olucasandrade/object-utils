const filter = require('./filter');
const isObject = require('./isObject');

const isString = (e) => Object.prototype.toString.call(e) === "[object String]";
const isNumber = (e) => Number.isFinite(e);
const isArray = (e) => Array.isArray(e);
const isNull = (e) => e === null;
const isBoolean = (e) => [true, false].includes(e);

/**
 * Count types from object
 * @param  {Object} object Object to be counted
 * @return {Object} Object with count of all types
 */
const countTypes = (object) => {
    const mapper = {
        string: (obj) => filter(obj, (e) => isString(e)),
        number: (obj) => filter(obj, (e) => isNumber(e)),
        array: (obj) => filter(obj, (e) => isArray(e)),
        object: (obj) => filter(obj, (e) => isObject(e)),
        null: (obj) => filter(obj, (e) => isNull(e)),
        boolean: (obj) => filter(obj, (e) => isBoolean(e)),
    };

    const types = {};

    for (key in mapper) {
        const filteredObject = mapper[key](object);
        const quantity = Object.keys(filteredObject)?.length;
        types[key] = quantity;
    }

    return types;
};

module.exports = countTypes;