const findOutlier = (numbers: number[]) => {
    const odds = numbers.filter(v => v % 2);
    const evens = numbers.filter(v => !(v % 2));

    return odds.length === 1 ? odds[0] : evens[0];

};

describe('You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.', () => {
    it("findOutlier", () => {

        expect(findOutlier([0, 1, 2])).toBe(1);
        expect(findOutlier([1, 2, 3])).toBe(2);
        expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
        expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
        expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);

    });

    });


