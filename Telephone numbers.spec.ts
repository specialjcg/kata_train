// telephone numbers
// When you start to enter a phone number, the smartphone proposes you some choices of possible phone numbers from your repertory.
//
//     The goal of this kata is to save the phone numbers by keeping in common the same parts of the phone numbers thus reducing the total size of the repertory.
//
//     Goal
// Your function will take in arguments an array of phone numbers. (Of at least one element); A phone number contains at least one digit and can contains up to 20 digits.
//
//     You must return the number of elements your graph contains.
//
//     You must not modify the input array.
//
//     Example :
// We have the following phone numbers : 0123456789 0123987654 0123987456 2365498756 2365498765
//
// This gives the following graphs :
//
//     4 - 5 - 6 - 7 - 8 - 9
// 0 - 1 - 2 - 3 <
//                 \            4 - 5 - 6
// 9 - 8 - 7 <
// 6 - 5 - 4
//
// 6 - 5
// 2 - 3 - 6 - 5 - 4 - 9 - 8 - 7 <
// 5 - 6
// The graphs contains 31 elements. So the function must return 31


// const phoneNumber = (strings: string[]): number => {
//     let repertory:string[]=[];
//     for (let i=0;i<strings.length;i++){
//         saveNum(strings[i]).map(s=>repertory=addList(s,repertory));
//     }
//      return repertory.length
//
// };
const phoneNumber = (strings: string[]): number => {
    const repertory: string[] = strings.reduce((acc, val) => acc.concat(saveNum(val)), []).reduce((acc, val) => addList(val, acc), []);
    return repertory.length;
};
const saveNum = (s: string): string[] => {
    return Array.from(s).map((_, i) => s.slice(0, i + 1));
};

const addList = (s: string, list: string[]): string[] => list.includes(s) ? list : [...list, s];


describe('Telephone numbers', () => {
    var tests = [
        [['0','1'],2],
        [['01','02','03'],4],
        [['012','0123','01234'],5],
        [['0123456789','0123987654','0123987456','2365498756','2365498765'],31]
    ];
    it("should save '01' in two store number  '0' and ' 01'", () => {
        expect(saveNum('01')).toStrictEqual(['0','01'])
    });
    it("should save '012' in two store number  '0' and ' 01' and '02'", () => {
        expect(saveNum('012')).toStrictEqual(['0','01','012'])
    });
    it("should save '012' if is not in list ['0','01']", () => {
        expect(addList('012', ['0','01'])).toStrictEqual(['0','01','012'])
    });
    it(`Should equal 2}`, () => {
            expect(phoneNumber(['0','1'])).toStrictEqual(2);
        });
    it(`Should equal 4}`, () => {
        expect(phoneNumber(['01','02','03'])).toStrictEqual(4);
    });
    it(`Should equal 5}`, () => {
        expect(phoneNumber(['012','0123','01234'])).toStrictEqual(5);
    });
    it(`Should equal 31}`, () => {
        expect(phoneNumber(['0123456789','0123987654','0123987456','2365498756','2365498765'])).toStrictEqual(31);
    });
});


