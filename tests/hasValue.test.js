const hasValue = require('../utils/hasValue.js');

describe('hasValue', () => {
    it('Should return false if value is not in object', () => {
        const object = { foo: 'bar' };
        const result = hasValue(object, 'baz');
        expect(result).toBe(false);
    });

    it('Should return true if object has value', () => {
        const object = { foo: 'bar' };
        const result = hasValue(object, 'bar');
        expect(result).toBe(true);
    });
});
