const merge = require('../utils/merge.js');

describe('merge', () => {
    it('Should merge two objects successfully', () => {
        const object1 = {
            a: 1,
            b: {
                c: 2,
            },
        };
        const object2 = {
            d: 3,
            e: 4,
        };

        const mergedObjects = merge(object1, object2);

        expect(mergedObjects.a).toBe(1);
        expect(mergedObjects.b.c).toBe(2);
        expect(mergedObjects.d).toBe(3);
        expect(mergedObjects.e).toBe(4);
    });
});
