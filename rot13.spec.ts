
// How can you tell an extrovert from an introvert at NSA?
//     Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
//     According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
//
//     For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
//
// Test examples:
//
//     "EBG13 rknzcyr." -> "ROT13 example."
//
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"


const rot13 = (phrase: string) => {
    return phrase.split('').map((char) => {
        if (!/[a-zA-Z]/.test(char)) {
            return char;
        }
        const baseCharCode = char.charCodeAt(0) >= 97 ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - baseCharCode + 13) % 26) + baseCharCode);
    }).join('');
};

describe('crypto ', () => {
        it('should give crypto for A the letter N', () => {
            expect (rot13("A")).toStrictEqual("N");
        });
        it("should work for 'EBG13 rknzcyr.'", () =>
            expect(rot13("EBG13 rknzcyr.")).toStrictEqual("ROT13 example.")
        );
        it("should work for 'This is my first ROT13 excercise!'", () =>
            expect(rot13("This is my first ROT13 excercise!")).toStrictEqual("Guvf vf zl svefg EBG13 rkprepvfr!")
        );


});


