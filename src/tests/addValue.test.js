const addValue = require('../utils/addValue.js');

describe('addValue', () => {
    it('Should not do anything if value not exists', () => {
        const object = { a: 1, b: 2, c: 3 };
        addValue(object);
        expect(object).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('Should add undefined value if allowUndefined is true', () => {
        const object = { a: 1, b: 2, c: 3 };
        const expectedResult = { a: 1, b: 2, c: 3, d: undefined };
        addValue(object, 'd', undefined, true);
        expect(object).toEqual(expectedResult);
    });

    it('Should add a value successfully', () => {
        const object = { a: 1, b: 2, c: 3 };
        const expectedResult = { a: 1, b: 2, c: 3, d: 4 };
        addValue(object, 'd', 4);
        expect(object).toEqual(expectedResult);
    });
});
