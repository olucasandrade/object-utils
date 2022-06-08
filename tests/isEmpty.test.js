const isEmpty = require('../utils/isEmpty.js');

describe('isEmpty', () => {
    it('Should return false if object is not empty', () => {
        const object = { foo: 'bar' };
        const result = isEmpty(object);
        expect(result).toBe(false);
    });

    it('Should return false if parameter is not a object', () => {
        const param = 2;
        const result = isEmpty(param);
        expect(result).toBe(false);
    });

    it('Should return true if object is empty', () => {
        const object = {};
        const result = isEmpty(object);
        expect(result).toBe(true);
    });
});
