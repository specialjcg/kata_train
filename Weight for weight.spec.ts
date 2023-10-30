// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//
//     I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//
//     For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
//

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
//
//     180 is before 90 since, having the same "weight" (9), it comes before as a string.
//
const customSort = (a: number[], b: number[]) => a[0] === b[0] ? a[2].toString().localeCompare(b[2].toString()) : a[0] - b[0];


//     All numbers in the list are positive numbers and the list can be empty.
const orderWeight = (s: string): string => {

    let arrayIndexList: number[][] = sumCharOfStringSeparateBySpace(s).map((x, index) => [x, index, listInteger(s)[index]]).sort(customSort);

    return arrayIndexList.map(index => listInteger(s)[index[1]]).filter(x=>x>0).join(" ");
}

const sumCharOfString = (s: string) => {
    return Array.from(s).reduce((a, b) => Number(a) + Number(b), 0);

};

const listInteger = (s: string): number[] => {
    return s.split(" ").map(x => Number(x));
};

const sumCharOfStringSeparateBySpace = (s: string): number[] => {
    return s.split(" ").map(x => sumCharOfString(x));
};

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
describe('Integers: Recreation One ', () => {
    it('sum of integer char in string ', () => {
        expect(sumCharOfString("103")).toBe(4)
        expect(sumCharOfString("123")).toBe(6)

    });
    it('push integer in a list from string separate by space', () => {
        expect(listInteger("103 123 4444 99 2000")).toStrictEqual([103, 123, 4444, 99, 2000])
    });
    it('should create list of integer and sumCharofstring ', () => {
        expect(sumCharOfStringSeparateBySpace("103 123 4444 99 2000")).toStrictEqual([4, 6, 16, 18, 2])

    });
    it("orderWeight", () => {

        expect(orderWeight("103 123 4444 99 2000")).toStrictEqual("2000 103 123 4444 99");
        expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toStrictEqual("11 11 2000 10003 22 123 1234000 44444444 9999");
        expect(orderWeight("0 0 1")).toStrictEqual("1");


    });

});


