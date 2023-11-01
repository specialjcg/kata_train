// Some numbers have funny properties. For example:
//
//     89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//     In other words:
//
//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
// If it is the case we will return k, if not return -1.
//
// Note: n and p will always be given as strictly positive integers.
//
// dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


// const digPow = (n: number, p: number):number => {
//     let digtPowValue=digPowList(numberToDigit(n),p);
//     for (let k=1; k<=n*p; k++){
//         if (digtPowValue===n*k) return k
//     }
//     return -1;
// };
const digPow = (n: number, p: number):number => {
    var x = n.toString().split("").reduce((s, d, i) => s + Math.pow(Number(d), p + i), 0)
    return x % n ? -1 : x / n;
};
const numberToDigit = (number: number) => number.toString().split('').map(Number);

const digPowList = (numbers: number[], number: number) =>  numbers.map((x, index) => x ** (index + number)).reduce((a, b) => a + b, 0);

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
describe('Playing with digits ', () => {
    it('should Given a positive integer n written as abcd... (a, b, c, d... being digits) ', () => {
        expect(numberToDigit(89)).toStrictEqual([8,9])
    });
    it('should caculate DigPow', () => {

        expect(digPowList(numberToDigit(89),1)).toStrictEqual(89)
        expect(digPowList(numberToDigit(92),1)).toStrictEqual(13)
        expect(digPowList(numberToDigit(695),2)).toStrictEqual(1390)
        expect(digPowList(numberToDigit(46288),3)===46288*51).toStrictEqual(true)

    });

    it("digPow", () => {
        expect(digPow(89, 1)).toStrictEqual(1);
        expect(digPow(92, 1)).toStrictEqual(-1);
        expect(digPow(695, 2)).toStrictEqual(2);
        expect(digPow(46288, 3)).toStrictEqual(51);

    });

});


