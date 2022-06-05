const swapPairs = require('../utils/swapPairs.js');

describe('swapPairs', () => {
    it('Should get pairs of objects successfully', () => {
        const object = { a: 1, b: 2, c: 3, d: 4 };
        const expectedResult = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' };
        const result = swapPairs(object);
        expect(result).toEqual(expectedResult);
    });
});
