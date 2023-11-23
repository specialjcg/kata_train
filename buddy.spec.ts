//
// Buddy pairs
// You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.
//
// Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:
//
//     (n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1
//
// For example 48 & 75 is such a pair:
//
//     Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
// Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
// Task
// Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); m can be greater than limit and has to be greater than n
//
// If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil or (for Dart) null; (for Lua, Pascal, Perl, D) [-1, -1]; (for Erlang {-1, -1}).
//
// Examples
// (depending on the languages)
//
// buddy(10, 50) returns [48, 75]
// buddy(48, 50) returns [48, 75]
// or
// buddy(10, 50) returns "(48 75)"
// buddy(48, 50) returns "(48 75)"
// Notes
// for C: The returned string will be free'd.
// See more examples in "Sample Tests:" of your language.


const getDivisorsSum = (num: number): number => {
    let sum = 1;
    const sqrtNum = Math.sqrt(num);

    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            sum += i;

            // Check if the divisors are different (avoid counting the same divisor twice for perfect squares)
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum;
};

const buddy = (start: number, limit: number): number[]  => {
    for (let i = start; i <= limit; i++) {
        const j = getDivisorsSum(i) - 1;

        if (j > i && getDivisorsSum(j) === i + 1) {
            return [i, j];
        }
    }

    return [];
};


const divisor = (number: number): number[] => {
    const divisors: number[] = [];

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0 ) {
            divisors.push(i);
            if (number / i !== i ) {
                divisors.push(number / i);
            }
        }
    }

    return divisors.sort((a, b) => a - b).slice(0,divisors.length-1);
};
import {describe, expect, it, test} from "vitest";

describe('buddy kata ', () => {
    it('should give all divisor of number', () => {
        expect(divisor(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50]);
    });
    it(" Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs", () => {
        // testing(10, 50, [48, 75] );
        // testing(1071625, 1103735, [1081184, 1331967] );
        // testing(57345, 90061, [62744, 75495] );
        // testing(2382, 3679, [] );
        expect(buddy(10,50)).toStrictEqual( [48, 75]);
        expect(buddy(1071625, 1103735)).toStrictEqual( [1081184, 1331967]);
        expect(buddy(57345, 90061)).toStrictEqual( [62744, 75495]);
        expect(buddy(2382, 3679)).toStrictEqual( []);

    });

    });


