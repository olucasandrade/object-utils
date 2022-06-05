const convert = require('../utils/convert.js');

describe('convert', () => {
    it('Should do anything if type wont be passed', () => {
        const object = { a: 1, b: 2 };
        convert(object);
        expect(object).toEqual({ a: 1, b: 2 });
    });

    it('Should do anything if another type be passed', () => {
        const object = { a: 1, b: 2 };
        convert(object);
        expect(object).toEqual({ a: 1, b: 2 }, 'foo');
    });

    it('Should convert all values if value wont be passed', () => {
        const object = { a: 1, b: 2 };
        const expectedResult = { a: '1', b: '2' };
        convert(object, 'string');
        expect(object).toEqual(expectedResult);
    });

    it('Should convert to string successfully', () => {
        const object = { a: 1, b: 2 };
        const expectedResult = { a: 1, b: '2' };
        convert(object, 'string', 'b');
        expect(object).toEqual(expectedResult);
    });
    
    it('Should convert to number successfully', () => {
        const object = { a: 1, b: '2' };
        const expectedResult = { a: 1, b: 2 };
        convert(object, 'number', 'b');
        expect(object).toEqual(expectedResult);
    });

    it('Should convert to date successfully', () => {
        const object = { a: 1, b: '2' };
        const expectedResult = { a: 1, b: 980992800000 };
        convert(object, 'date', 'b');
        expect(object).toEqual(expectedResult);
    });
    
    it('Should convert to boolean successfully', () => {
        const object = { a: 1, b: null };
        const expectedResult = { a: 1, b: false };
        convert(object, 'boolean', 'b');
        expect(object).toEqual(expectedResult);
    });
});
