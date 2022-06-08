const isObject = require('./isObject.js');

const merge = (object1, object2) => {
    const keys = Object.keys(object2);
    let next = { ...object1 };

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = object2[key];
      if (value !== null && isObject(value)) {
        next = { ...next, ...merge(next, value) };
      } else {
        next = { ...next, [key]: value };
      }
    }

    return next;
};

module.exports = merge;