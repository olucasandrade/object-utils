const hasKey = require('../utils/hasKey.js');

describe('hasKey', () => {
    it('Should return false if key is not in object', () => {
        const object = { foo: 'bar' };
        const result = hasKey(object, 'baz');
        expect(result).toBe(false);
    });

    it('Should return true if object has key', () => {
        const object = { foo: 'bar' };
        const result = hasKey(object, 'foo');
        expect(result).toBe(true);
    });
});
