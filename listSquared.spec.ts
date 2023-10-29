// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
//
// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
//
//     We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
//


const listSquared = (m: number, n: number): number[][] => {
    let result:number[][]=[]

    for (let j=m; j<=n; j++) {
        if (isSqrtInteger(sumSquarred(squarred(divisor(j))))) {
            result.push([j, sumSquarred(squarred(divisor(j)))])

        }
    }
    // Array.from({ length: n - m + 1 }, (_, index) => m + index)
    //     .map((j) => [j, sumSquarred(squarred(divisor(j)))])
    //     .filter(([j, sum]) => isSqrtInteger(sumSquarred(squarred(divisor(j)))));
    return  result
};

const divisor = (number: number): number[] =>  Array.from({length: number}, (_, i) => i + 1).filter(x=>number%x===0);;


const squarred = (numbers: number[]): number[] => {
    return numbers.map(x=>x*x);
};

const sumSquarred = (numbers: number[]) => {
    return numbers.reduce((a,b)=>a+b,0);
};

const isSqrtInteger = (number: number):boolean => Number.isInteger(Math.sqrt(number));

const SqrtInteger = (number: number) => Math.sqrt(number);

describe('Integers: Recreation One ', () => {
    it('returned a list of divisor of integer', () => {
        expect(divisor(246)).toStrictEqual([1, 246, 2, 123, 3, 82, 6, 41].sort((a, b) => a - b));
    });
    it('return squarred of list divisor', () => {
        expect(squarred(divisor(246))).toStrictEqual([1, 60516, 4, 15129, 9, 6724, 36, 1681].sort((a, b) => a - b));
    });
    it('return sum of list integer', () => {
        expect(sumSquarred(squarred(divisor(246)))).toStrictEqual(84100)
    });
    it('is sqrt of number is a integer number', () => {
        expect(isSqrtInteger(sumSquarred(squarred(divisor(246))))).toStrictEqual(true)
        expect(SqrtInteger(sumSquarred(squarred(divisor(246))))).toStrictEqual(290)
    });

    it("listSquared", () => {
        // testing(1, 250, [[1, 1], [42, 2500], [246, 84100]]);
        // testing(42, 250, [[42, 2500], [246, 84100]]);
        // testing(250, 500, [[287, 84100]]);
        // testing(300, 600, []);
        expect(listSquared(1, 250)).toStrictEqual([[1, 1], [42, 2500], [246, 84100]]);
        expect(listSquared(42, 250)).toStrictEqual([[42, 2500], [246, 84100]]);
        expect(listSquared(250, 500)).toStrictEqual([[287, 84100]]);
        expect(listSquared(300, 600)).toStrictEqual([]);


    });

});


