import {describe, expect, it, test} from "vitest";

const countBits = (number: number) => Array.from(number.toString(2)).reduce((a, b) => Number(a) + Number(b) , 0);

describe('test kata ', function () {
    it("compter les bit dans integer", function () {

        expect(countBits(0)).toBe(0);
        expect(countBits(4)).toBe(1);
        expect(countBits(7)).toBe(3);
        expect(countBits(9)).toBe(2);
        expect(countBits(10)).toBe(2);


    });


});
