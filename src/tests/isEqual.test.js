const isEqual = require('../utils/isEqual.js');

describe('isEqual', () => {
    it('Should return false if objects are not equal', () => {
        const object1 = { a: 1 };
        const object2 = { b: 2 };
        const result = isEqual(object1, object2);
        expect(result).toBe(false);
    });

    it('Should return true if objects are equal', () => {
        const object1 = { a: 1 };
        const object2 = { a: 1 };
        const result = isEqual(object1, object2);
        expect(result).toBe(true);
    });
});
