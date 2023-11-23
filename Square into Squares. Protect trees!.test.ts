// My little sister came back home from school with the following task: given a squared sheet of paper
// she has to cut it in pieces which, when assembled, give squares the sides of which form an increasing
// sequence of numbers. At the beginning
// it was lot of fun but little by little we were tired of seeing the pile of torn paper. So we decided
// to write a program that could help us and protects trees.
//
//     Task
// Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on
// the language) of numbers, so that the sum of the squares is equal to n².
//
// If there are multiple solutions (and there will be), return as far as possible the result with the
// largest possible values:
//
//     Examples
// decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.
//
// For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49]
// doesn't form a strictly increasing sequence.
//
//     Note
// Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists,
// return nil, null, Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).
//
//     The function "decompose" will take a positive integer n and return the decomposition of N = n² as:
//
//     [x1 ... xk] or
// "x1 ... xk" or
// Just [x1 ... xk] or
// Some [x1 ... xk] or
// {x1 ... xk} or
// "[x1,x2, ... ,xk]"
// depending on the language (see "Sample tests")
//
// Note for Bash
//     decompose 50 returns "1,3,5,8,49"
// decompose 4  returns "Nothing"
// Hint
// Very often xk will be n-1.

import {describe, expect, it, test} from "vitest";

const decompose = (n: number): number[] | null => {
    const decomposeHelper = (remaining: number, current: number): number[] | null => {
        // Base case: If remaining is 0, return an array with the current value
        if (remaining === 0) {
            return [current];
        }

        // Iterate from the current value down to 1
        for (let i = current; i >=1; i--) {
            const nextValue = i * i;

            // If the nextValue is less than or equal to the remaining value, proceed with the recursive call
            if (nextValue <= remaining) {
                // Recursive call with the remaining value reduced by the square of i
                const result = decomposeHelper(remaining - nextValue, i - 1);

                // If a valid result is found, add the current value to the result array
                if (result !== null ) {
                    return [i, ...result];
                }
            }
        }

        // If no valid result is found, return null
        return null;
    };

    // Start the decomposition with n² and the initial value n - 1
    const result = decomposeHelper(n * n, n - 1);
    const result1=result===null?null:result
    return result1.reverse().splice(1)
};
// const realDecompose = (sum: number, from: number): number[] | null => {
//     if (sum <= 0) {
//         return sum === 0 ? [] : null;
//     }
//
//     for (let i = Math.min(from, Math.floor(Math.sqrt(sum))); i >= 1; i--) {
//         const midAns = realDecompose(sum - i * i, i - 1);
//         if (midAns) {
//             midAns.push(i);
//             return midAns;
//         }
//     }
//
//     return null;
// };
//
// export const decompose = (n: number) => realDecompose(n * n, n - 1);




const invertSquarre = (n: number) => Array.from({length: n}, (_, i) => i + 1)
    .map((n, i) => n * n).reduce((previousValue, currentVal) => previousValue + currentVal, 0);
describe('square into squares ', () => {
    it ("Basic tests squarre invert", function() {
        expect(invertSquarre(4)).toEqual(1+2*2+3*3+4*4);
    })

    it("Basic tests decompose", function() {
        // testing(50, [1,3,5,8,49]);
        // testing(44, [2,3,5,7,43]);
        expect(decompose(50)).toEqual([1,3,5,8,49]);
        expect(decompose(44)).toEqual([2,3,5,7,43]);
    });

    });


