import {describe, expect, it} from "vitest";

type MorseDictionary = {
    [key: string]: string;
};

const MORSE_CODE: MorseDictionary = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': ' '
};
type InverseMorseDictionary = {
    [key: string]: string;
};
// Create the inverse dictionary
const inverseMorseCodeDictionary: InverseMorseDictionary = {};
Object.entries(MORSE_CODE).forEach(([key, value]) => {
    inverseMorseCodeDictionary[value] = key;
});

const decodeMorse = (s: string):string => {
    return s.split(' ')
        .map(morseChar => inverseMorseCodeDictionary[morseChar] || ' ')
        .join('').replace('  ',' ');};

describe('test kata morse decode', function () {
    it("decode message morse", function () {

        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toStrictEqual( 'HEY JUDE')

    });


});
