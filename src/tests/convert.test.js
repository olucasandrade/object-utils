const convert = require('../utils/convert.js');

describe('convert', () => {
    it('Should do anything if type wont be passed', () => {
        const object = { a: 1, b: 2 };
        convert(object);
        expect(object).toEqual({ a: 1, b: 2 });
    });

    it('Should convert all values if value wont be passed', () => {
        const object = { a: 1, b: 2 };
        const expectedResult = { a: '1', b: '2' };
        convert(object, 'string');
        expect(object).toEqual(expectedResult);
    });

    it('Should convert only specified value', () => {
        const object = { a: 1, b: 2 };
        const expectedResult = { a: 1, b: '2' };
        convert(object, 'string', 'b');
        expect(object).toEqual(expectedResult);
    });
});
