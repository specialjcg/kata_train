// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//
//     If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
//
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
//     == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]
//
// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)
//
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.
//
//     NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
//
import {describe, expect, it, test} from "vitest";



    const l1: number[] = [1, 4, 8, 7, 3, 15],
        l2: number[] = [1, -2, 3, 0, -6, 1],
        l3: number[] = [20, -13, 40],
        l4: number[] = [1, 2, 3, 4, 1, 0],
        l5: number[] = [10, 5, 2, 3, 7, 5],
        l6: number[] = [4, -2, 3, 3, 4],
        l7: number[] = [0, 2, 0],
        l8: number[] = [5, 9, 13, -3];

export function sumPairs(ints: number[], s: number): [number, number] | void {
    const seen = new Set();
    for (const n of ints) {
        if (seen.has(s - n)) return [s - n, n];
        seen.add(n);
    }
}


describe("example", function() {
        it("testl1", () => {
            expect(sumPairs(l1, 8)).toStrictEqual( [1, 7])
        });
    it("testl2", () => {
        expect(sumPairs(l2, -6)).toStrictEqual( [0, -6])
    });
    it('should testl3', () => {
      expect(sumPairs(l3,-7)).toBeUndefined()
    });
    it('should testl4', () => {
        expect(sumPairs(l4,2)).toStrictEqual([1,1])
    });
    it('should testl5', () => {
        expect(sumPairs(l5, 10)).toStrictEqual([3, 7])
    });
    it('should testl6', () => {
        expect(sumPairs(l6,8)).toStrictEqual([4,4])
    });
    it('should testl7', () => {
        expect(sumPairs(l7, 0)).toStrictEqual([0, 0])
    });

    it('should testl8', () => {
        expect(sumPairs(l8, 10)).toStrictEqual([13, -3])
    });

    });


