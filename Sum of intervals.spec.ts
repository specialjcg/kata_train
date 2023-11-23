// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
//
//     Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
//
// Overlapping Intervals
// List containing overlapping intervals:
//
//     [
//         [1, 4],
//         [7, 10],
//         [3, 5]
//     ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
//
// Examples:
//     sumIntervals( [
//         [1, 2],
//         [6, 10],
//         [11, 15]
//     ] ) => 9
//
// sumIntervals( [
//     [1, 4],
//     [7, 10],
//     [3, 5]
// ] ) => 7
//
// sumIntervals( [
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
// ] ) => 19
//
// sumIntervals( [
//     [0, 20],
//     [-100000000, 10],
//     [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

import {describe, expect, it, test} from "vitest";

const sumOfIntervals = (intervals: number[][]) => {
    // Ensure that the intervals are valid
    if (intervals.some(val => val[0] > val[1])) {
        return 0;
    }

    // Sort intervals based on their start values
    intervals.sort((a, b) => a[0] - b[0]);

    let totalSum = 0;
    let currentMaxEnd = -Infinity;

    for (const [start, end] of intervals) {
        // Check for overlap and update the currentMaxEnd accordingly
        const adjustedStart = Math.max(start, currentMaxEnd);
        const adjustedEnd = Math.max(end, currentMaxEnd);

        // Update the total sum
        totalSum += adjustedEnd - adjustedStart;

        // Update currentMaxEnd for the next iteration
        currentMaxEnd = Math.max(currentMaxEnd, end);
    }

    return totalSum;
};


describe("Sum of intervals", () => {
    it("basic tests", () => {
        // assert.strictEqual(sumOfIntervals([[1, 5]]), 4);
        // assert.strictEqual(sumOfIntervals([[1, 5], [6, 10]]), 8);
        // assert.strictEqual(sumOfIntervals([[1, 5], [1, 5]]), 4);
        // assert.strictEqual(sumOfIntervals([[1, 4], [7, 10], [3, 5]]), 7);
        expect(sumOfIntervals([[1, 5]])).toStrictEqual( 4);
        expect(sumOfIntervals([[1, 5], [6, 10]])).toStrictEqual( 8);
        expect(sumOfIntervals([[1, 5], [1, 5]])).toStrictEqual( 4);
        expect(sumOfIntervals([[1, 4], [7, 10], [3, 5]])).toStrictEqual( 7);
    });

    it("large numbers", () => {
        // assert.strictEqual(sumOfIntervals([[-1e9, 1e9]]), 2e9);
        // assert.strictEqual(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40]]), 1e8 + 30);
        expect(sumOfIntervals([[-1e9, 1e9]])).toStrictEqual( 2e9);
        expect(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40]])).toStrictEqual( 1e8 + 30);
    });
});
