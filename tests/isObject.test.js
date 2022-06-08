const isObject = require('../utils/isObject.js');

describe('isObject', () => {
    it('Should return false if param is not an object', () => {
        const param = 1;
        const result = isObject(param);
        expect(result).toBe(false);
    });

    it('Should return false if param is not defined', () => {
        const result = isObject();
        expect(result).toBe(false);
    });

    it('Should return true if param is an object', () => {
        const param = { a: 'b' };
        const result = isObject(param);
        expect(result).toBe(true);
    });
});
