// Given a rational number n
//
// n >= 0, with denominator strictly positive
//
// as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS, Go)
// or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++, Swift, Dart)
// or as a rational or decimal number (example: 3/4, 0.67 in R)
// or two integers (Fortran)
// decompose this number as a sum of rationals with numerators equal to one and without repetitions (2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).
//
// The algorithm must be "greedy", so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.
//
// 2/3 = 1/3 + 1/3 doesn't fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 in the decomposition 2/3 = 1/2 + 1/6.
//
// Example:
//     (You can see other examples in "Sample Tests:")
//
// decompose("21/23") or "21" "23" or 21/23 should return
//
// ["1/2", "1/3", "1/13", "1/359", "1/644046"] in Ruby, Python, Clojure, JS, CS, Haskell, Go
//
// "[1/2, 1/3, 1/13, 1/359, 1/644046]" in Java, CSharp, C++, Dart
//
// "1/2,1/3,1/13,1/359,1/644046" in C, Swift, R
// Notes
// The decomposition of 21/23 as
//
//     21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897
// is exact but don't fulfill our requirement because 598 is bigger than 359. Same for
//
// 21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
// or
// 21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).
// The rational given to decompose could be greater than one or equal to one, in which case the first "fraction" will be an integer (with an implicit denominator of 1).
//
// If the numerator parses to zero the function "decompose" returns [] (or "",, or "[]").
//
// The number could also be a decimal which can be expressed as a rational.
//
//     Example:
// 0.6 in Ruby, Python, Clojure,JS, CS, Julia, Go
//
// "66" "100" in Haskell, Java, CSharp, C++, C, Swift, Scala, Kotlin, Dart, ...
//
// 0.67 in R.
//
// const decompose = (s: string) => sumOfFraction(numToFraction(s));


function sum(result: string[]): number {

    if (result.length > 0) {


        return sumOfFractionFormelReal(result);
    }
    return 0;

}
const sumOfFraction = (number: number) => {
    let factor = 15
    let factor2 = 15

    let resultprincipal: string[] = []
    let resultreste: string[] = []
    if (number >= 1) {
        resultprincipal.push(number.toString().split('.')[0]);
        number = Number('0.'+number.toString().split('.')[1]);
    }
    let i = 2;

    while ((Math.abs(Number((sum(resultreste)- number).toFixed(factor))) )> 0) {

        i=Math.trunc(1/(Math.abs(sum(resultreste) - number)));
        resultreste.push("1/" + i.toString());
        if (i>50000000) factor2=20
        if (Math.abs(Number((sum(resultreste)- number).toFixed(factor2)))> 0 ){

            resultreste.pop();
            i++
            resultreste.push("1/" + i.toString());

        }

    }

    return resultprincipal.concat(resultreste);
};









const numToFraction = (s: string): number => {
    if (!s.includes('/')) return Number(s); //no fractions
    let denominator = Number.isNaN(parseInt(s.split('/')[1])) ? 1 : parseInt(s.split('/')[1]);
    let numerator = Number.isNaN(parseInt(s.split('/')[0])) ? 1 : parseInt(s.split('/')[0]);

    return numerator / denominator;
};

function sumOfFractionFormel(numérateur1: number, denominateur1: number, numérateur2: number, denominator2: number): string {
    return (numérateur1 * denominator2 + numérateur2 * denominateur1).toString() + "/" + (denominateur1 * denominator2).toString();
}

function soustract(result: string[]) {
    if (result.length > 0) {
        let sum: string = result[0];
        for (let i = 1; i < result.length; i++) {
            let denominator = Number.isNaN(parseInt(sum.split('/')[1])) ? 1 : parseInt(sum.split('/')[1]);
            let numerator = Number.isNaN(parseInt(sum.split('/')[0])) ? 1 : parseInt(sum.split('/')[0]);
            let denominator2 = Number.isNaN(parseInt(result[i].split('/')[1])) ? 1 : parseInt(result[i].split('/')[1]);
            let numerator2 = Number.isNaN(parseInt(result[i].split('/')[0])) ? 1 : parseInt(result[i].split('/')[0]);
            sum = sumOfFractionFormel(numerator, denominator, -numerator2, denominator2);
        }
        return numToFraction(sum);
    }
    return 0;
}
export function decompose(n: string): string[] {
    const target = Number.isNaN(Number(n)) ? Number(n.split("/")[0]) / Number(n.split("/")[1]) : Number(n),
        divs: number[] = [],
        nums = target >= 1 ? Math.floor(target) : 0
    let sum = nums ? nums : 0,
        div = 1

    while(target - sum > 0.0000000001) {
        if(sum + (1/div) <= target) {
            divs.push(div)
            sum = sum + (1/div)
        }
        if(div <= 9999999) div++
        else if(div <= 99999999) div += 5
        else div += 10
    }

    let result = nums ? [ nums.toString() ] : []
    return result.concat(divs.map(n => `1/${n}`))
}
const sumOfFractionFormelReal = (result:string[]) => {
    let val=0
    const factor = 1
    for (let i=0;i<result.length;i++){
        let denominator2 = Number.isNaN(parseInt(result[i].split('/')[1]))? Number(result[i]): parseInt(result[i].split('/')[1]);
        let numerator2 = Number.isNaN(parseInt(result[i].split('/')[0]))? Number(result[i]): parseInt(result[i].split('/')[0]);
        val = Number(val.toFixed(18))+numerator2*factor/denominator2
    }
           return val/factor
};

//     Ref: http://en.wikipedia.org/wiki/Egyptian_fraction
describe('Some Egyptian fractions', () => {
    // testing("3/4", ["1/2", "1/4"]);
    // testing("12/4", ["3"]);
    // testing("4/5", ["1/2", "1/4", "1/20"]);
    // testing("0.66", ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);

    it(`should give 0.9411764696496226 all sum of fractions 1 to x < a x value `, () => {
        expect(sumOfFraction(0.9411764696496226)).toStrictEqual(['1/2', '1/3', '1/10', '1/128', '1/32641']);
    });
    it(`should  sum of empty result 0 `, () => {
        expect(sum([])).toStrictEqual(0);
    });
    it(`should  sum  of  [ '1/84', '1/27055', '1/1359351417' ]  result 0.011941724385001193 `, () => {
        expect(sumOfFractionFormelReal(['1/84', '1/27055', '1/1359351417'])).toStrictEqual(0.011941724385001195);
    });

    it(`should  sum  of [ '1/84', '1/27055', '1/1359351420' ] is  sumOfFraction 0.011941724385001193 `, () => {

        expect(sumOfFraction(0.011941724385001193)).toStrictEqual(['1/84', '1/27055', '1/1359351420']);
    });
    it(`should  sum  of [ '1/84', '1/27055', '1/1359351420' ] is  sumOfFraction x/1359351420 `, () => {

        expect(sumOfFractionFormelReal([ '1/84', '1/27055', '1/1359351420'])).toStrictEqual(0.011941724385001193);
    });
    it(`should  sum  of  [ '1', '1/12' ]  result 1.0833333333333333 `, () => {
        expect(sum(['1', '1/12'])).toStrictEqual(1.0833333333333333);
    });
    it(`should  sum  of  [ '1', '1/12' ] is  sumOfFraction 1.0833333333333333 `, () => {
        expect(sumOfFraction(1.0833333333333333)).toStrictEqual(['1', '1/12']);
    });
    it('should soustract fraction 1 - 1/12', () => {
        expect(soustract(['1', '1/12'])).toStrictEqual(0.9166666666666666);
    });
    it(`should  sum  of [ '1/2', '1/3', '1/10', '1/128', '1/32641' ]  result 0.9411764696496225 `, () => {
        expect(sum(['1/2', '1/3', '1/10', '1/128', '1/32641'])).toStrictEqual(0.9411764696496225);
    });
    it(`should gsum of fractions a/b +c/d = (a*d+b*c)/(b*d) formel calul `, () => {
        expect(sumOfFractionFormel(1, 2, 3, 4)).toStrictEqual("10/8");
    });
    it(`should give numerical 1/2 from fraction`, () => {
        expect(numToFraction("1/2")).toStrictEqual(0.5);
    });
    it(`should give non numerical a from fraction`, () => {
        expect(numToFraction("")).toStrictEqual(0);
    });
    it(`should give for 1.25 numerical a sum fraction`, () => {
        expect(decompose("1.25")).toStrictEqual(['1', '1/4']);
    });
    it(`should give numerical 1/2 from fraction`, () => {
        expect(numToFraction("1/3")).toStrictEqual(0.3333333333333333);
    });
    it(`Given a rational number n`, () => {
        expect(decompose("3/4")).toStrictEqual(["1/2", "1/4"]);
        expect(decompose("12/4")).toStrictEqual(["3"]);
        expect(decompose("4/5")).toStrictEqual(["1/2", "1/4", "1/20"]);
        expect(decompose("0.66")).toStrictEqual(["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);

    });
});


