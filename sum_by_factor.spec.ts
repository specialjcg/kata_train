// Given an array of positive or negative integers
//
// I= [i1,..,in]
//
// you have to produce a sorted array P of the form
//
//     [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
//
// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
//
//     Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
//
//     Notes:
//
// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
//
//     In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
//
const nbrPremier = (nbr:number) => {
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0) return false;
    return nbr > 1;
};
const listNbrpremier = (number: number): number[] => Array(number).fill(1).map((n, i) => n + i).filter(nbrPremier);

export const primeFactor:number[]=listNbrpremier(10000)

import {describe, expect, it, test} from "vitest";


const sumallDivider = (numbers: number[], val: number): number => {
    if (numbers.some(currentValue => currentValue % val === 0)) {
        return numbers.reduce((previousValue, currentValue) =>
            currentValue % val === 0 ? previousValue + currentValue : previousValue, 0);
    }
    return 0.1;
};

export const sumOfDivided = (numbers: number[]):number[][] => {
    return primeFactor.map((val)=>[val,sumallDivider(numbers, val)]).filter(val=>val[1]!==0.1)
};

describe('[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...] ', () => {


    it("sumOfDivided", () => {
        // testing([12, 15], [ [2, 12], [3, 27], [5, 15] ]);
        // testing([15,21,24,30,45], [ [2, 54], [3, 135], [5, 90], [7, 21] ]);

        expect(sumOfDivided([12, 15])).toStrictEqual([ [2, 12], [3, 27], [5, 15] ]);
        expect(sumOfDivided([15,21,24,30,45])).toStrictEqual( [ [2, 54], [3, 135], [5, 90], [7, 21] ]);



    });

});


