/**
 * Convert values from object
 * @param  {Object} object Object to be manipulated
 * @param  {('string'|'number'|'date'|'boolean')} value type to be converted to
 * @param  {string} target Optional param to define a specific value to be converted
 * @return {Object} Object after conversion
 */
const convert = (object, type, target) => {
    if (!['string', 'number', 'date', 'boolean'].includes(type)) {
        return object;
    }
    const mapper = {
        string: (e) => String(e),
        number: (e) => Number(e),
        date: (e) => Date.parse(e),
        boolean: (e) => !!e,
    };
    if (target) {
        const value = object[target];
        object[target] = mapper[type](value);
        return object;
    };
    for (key in object) {
        const value = object[key];
        object[key] = mapper[type](value);
    };
    return object;
};

module.exports = convert;