import {describe, expect, it} from "vitest";


describe('test kata morse decode', function () {
    it("compter les bit dans integer", function () {

        expect(countBits(0)).toBe(0);
        expect(countBits(4)).toBe(1);
        expect(countBits(7)).toBe(3);
        expect(countBits(9)).toBe(2);
        expect(countBits(10)).toBe(2);


    });


});
