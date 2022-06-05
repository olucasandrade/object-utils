const filter = require('../utils/filter.js');

describe('filter', () => {
    it('Should filter values by callback function', () => {
        const object = { a: 1, b: 2, c: 3, d: 4 };
        const expectedResult = { a: 1, c: 3 };
        const result = filter(object, (e) => e % 2 !== 0);
        expect(result).toEqual(expectedResult);
    });

    it('Should filter original object if removeOriginal is true', () => {
        const object = { a: 1, b: 2, c: 3, d: 4 };
        const expectedResult = { a: 1, c: 3 };
        filter(object, (e) => e % 2 !== 0, true);
        expect(object).toEqual(expectedResult);
    });
});
