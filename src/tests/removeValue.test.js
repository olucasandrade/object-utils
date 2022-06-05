const removeValue = require('../utils/removeValue.js');

describe('removeValue', () => {
    it('Should not do anything if value not exists', () => {
        const object = { a: 1, b: 2, c: 3 };
        removeValue(object);
        expect(object).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('Should remove a value successfully', () => {
        const object = { a: 1, b: 2, c: 3 };
        const expectedResult = { a: 1, b: 2 };
        removeValue(object, 3);
        expect(object).toEqual(expectedResult);
    });
});
