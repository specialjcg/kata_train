// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
//
//     He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//
// His mother looks out of a window 1.5 meters from the ground.
//
//     How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
//
// Three conditions must be met for a valid experiment:
//     Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
//     If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
//
// Note:

import {describe, expect, it, test} from "vitest";

const bouncingBall = (h: number, bounce: number, window: number) => {
    if (h > 0 && bounce > 0 && bounce < 1 && window > 0 && h!=window) {
        let result = 1;
        let rebond = h;
        while (rebond > window) {
            rebond = rebond * bounce;
            result += 2; //mother see ball in mount and descend

        }

        return result - 2;
    }

    return -1;
};

//     The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
describe('BouncingBall ', () => {
    it("bouncing ball", () => {
        // assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
        // assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
        // assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
        // assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
        expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
        expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
        expect(bouncingBall(30, 0.75, 1.5)).toBe(21);
        expect(bouncingBall(30, 0.4, 10)).toBe(3);
        expect(bouncingBall(98, 9, 6.5)).toBe(-1);

    });

});


