const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0); // something went wrong ?
}
describe('test kata ', () => {
    it("I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.", () => {

        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);

    });

    });


