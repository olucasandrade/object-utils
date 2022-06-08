const map = require('../utils/map.js');

describe('map', () => {
    it('Should map values by callback function', () => {
        const object = { a: 1, b: 2, c: 3, d: 4 };
        const expectedResult = { a: 2, b: 4, c: 6, d: 8 };
        const result = map(object, (e) => e * 2);
        expect(result).toEqual(expectedResult);
    });
});
