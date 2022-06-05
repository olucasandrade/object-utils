const countTypes = require('../utils/countTypes.js');

describe('countTypes', () => {
    it('Should count types successfully', () => {
        const object = { a: '1', b: 2, c: 3, d: [], e: undefined, f: null, g: null, h: true, i: {} };
        const expectedResult = { 'string': 1, 'number': 2, 'array': 1, object: 1, null: 2, boolean: 1 };
        const result = countTypes(object);
        expect(result).toEqual(expectedResult);
    });
});
