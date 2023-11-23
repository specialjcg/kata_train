// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// const findOdd = (listNumbers: number[]): number => {
//     for (let i = 0; i < listNumbers.length; i++) {
//         if (numberOfInt(listNumbers, listNumbers[i]) % 2 !== 0) {
//             return listNumbers[i];
//         }
//     }
//     return 0
// };
import {describe, expect, it, test} from "vitest";

const findOdd = (listNumbers: number[]): number =>
    listNumbers.reduce((occurrences, number) => occurrences ^ number, 0);
function numberOfInt(numbers: number[], number: number) {
    return numbers.filter(int=>int===number).length;
}

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
describe(' Given an array of integers, find the one that appears an odd number of times', () => {
    // doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    // doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    // doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    // doTest([10], 10);
    // doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    // doTest([5,4,3,2,1,5,4,3,2,10,10], 1);

    it(`should return zero when listis empty`, () => {
        expect(findOdd([])).toStrictEqual(0)    });
    it('should return how many times integer in list occurs', () => {
        expect(numberOfInt([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5],1)).toStrictEqual(2)
    });

        it(`should return num times when listis and odd`, () => {
        expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toStrictEqual(4)
            expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toStrictEqual(5)

            expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toStrictEqual(-1)

            expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toStrictEqual(5)


        });
});


