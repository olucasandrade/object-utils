const countTypes = require('../utils/countTypes.js');

describe('countTypes', () => {
    it('Should count types successfully', () => {
        const object = { a: '1', b: 2, c: 3, d: [] };
        const expectedResult = { 'string': 1, 'number': 2, 'array': 1 };
        const result = countTypes(object);
        expect(result).toEqual(expectedResult);
    });
});
