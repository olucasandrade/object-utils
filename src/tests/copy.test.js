const copy = require('../utils/copy.js');

describe('copy', () => {
    it('Should deeply copy an object successfully', () => {
        const originalObject = {
            a: 1,
            b: {
                c: 2,
            },
        };
        const objectCopy = copy(originalObject);

        expect(originalObject).toEqual(objectCopy);
        expect(originalObject.a).toEqual(objectCopy.a);
        expect(originalObject.b.c).toEqual(objectCopy.b.c);

        originalObject.a = 2;
        originalObject.b.c = 3;

        expect(originalObject).not.toEqual(objectCopy);
        expect(originalObject.a).not.toEqual(objectCopy.a);
        expect(originalObject.b.c).not.toEqual(objectCopy.b.c);
    });
});
