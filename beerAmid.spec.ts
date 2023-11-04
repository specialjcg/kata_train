//
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
//     A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
//     Complete the beerAmidSpec function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
// the price of a beer can
//
// For example:
//
//     beerAmidSpec(1500, 2); // should === 12
// beerAmidSpec(5000, 3); // should === 16

// const beerAmidSpec = (bonus: number, price: number): number => {
//     if (bonus>=0 && price>=0){
//     let numberBeer =Math.trunc(bonus / price);
//     let sommebeer=0
//     for (let result=0;result<=20;result++)
//     {
//         sommebeer=sommebeer+result*result
//        if (sommebeer>numberBeer)  return result-1
//     }
// }
//
//     return 0
// };
 const beerAmidSpec = (bonus: number, price: number): number => {
    let level: number = 0;
    let n: number = 1;
    let i: number = 1
    while(n <= Math.floor(bonus / price)){
        i++;
        n += i ** 2;
        level++
    }
    return level
};

const numberOfBeer = (bonus: number, price: number): number => Math.trunc(bonus / price);

describe('Integers: Recreation One ', () => {
    it('should give the number of beer from price and bonus', () => {
        expect(numberOfBeer(1500, 2)).toStrictEqual(750);
        expect(numberOfBeer(5000, 3)).toStrictEqual(1666);

    });

    it("BeerAmid", () => {
        // assert.strictEqual(beerAmidSpec(9, 2), 1);
        // assert.strictEqual(beerAmidSpec(10, 2), 2);
        // assert.strictEqual(beerAmidSpec(11, 2), 2);
        // assert.strictEqual(beerAmidSpec(21, 1.5), 3);
        // assert.strictEqual(beerAmidSpec(454, 5), 5);
        // assert.strictEqual(beerAmidSpec(455, 5), 6);
        // assert.strictEqual(beerAmidSpec(4, 4), 1);
        // assert.strictEqual(beerAmidSpec(3, 4), 0);
        // assert.strictEqual(beerAmidSpec(0, 4), 0);
        // assert.strictEqual(beerAmidSpec(-1, 4), 0);
        expect(beerAmidSpec(9, 2)).toStrictEqual(1);
        expect(beerAmidSpec(10, 2)).toStrictEqual(2);
        expect(beerAmidSpec(11, 2)).toStrictEqual(2);
        expect(beerAmidSpec(21, 1.5)).toStrictEqual(3);
        expect(beerAmidSpec(454, 5)).toStrictEqual(5);
        expect(beerAmidSpec(455, 5)).toStrictEqual(6);
        expect(beerAmidSpec(4, 4)).toStrictEqual(1);
        expect(beerAmidSpec(3, 4)).toStrictEqual(0);
        expect(beerAmidSpec(0, 4)).toStrictEqual(0);
        expect(beerAmidSpec(-1, 4)).toStrictEqual(0);
        expect(beerAmidSpec(-90, 2.2)).toStrictEqual(0);


    });

});


