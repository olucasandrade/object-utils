const isDeepEqual = require('../utils/isDeepEqual.js');

describe('isDeepEqual', () => {
    it('Should return false if objects are not deeply equal', () => {
        const object1 = { a: 1, b: {
            c: 2
        } };
        const object2 = { a: 1, b: {
            c: 3,
        } };
        const result = isDeepEqual(object1, object2);
        expect(result).toBe(false);
    });

    it('Should return false if objects are deeply equal', () => {
        const object1 = { a: 1, b: {
            c: 2
        } };
        const object2 = { a: 1, b: {
            c: 2,
        } };
        const result = isDeepEqual(object1, object2);
        expect(result).toBe(true);
    });
});
