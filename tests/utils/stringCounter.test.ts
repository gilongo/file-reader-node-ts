import { StringCounter } from "../../src/utils/stringCounter";

const tenWords = "Questa frase ha l'aspetto di un linguaggio latino intelligente";
const twentyWords = "Durante il 1500 di Sony A, una stampante adattato il testo di Cicero per sviluppare una pagina degli esempi di tipo.";
const noWords = "";
const onlySpaces = "       ";
const strangelyFormattedString = "dueh djid çé+     dej     powpwpow   de";
const noSense = "Questa un un unfra un se un un ha l'aspetto di un un un un un lingu ununun un unaggio latino intelligente";

describe("StringCounter", () => {
  describe("countWords", () => {
    test("should return the exact number of word contained in a string", () => {
      expect(StringCounter.countWords(tenWords)).toBe(10);
      expect(StringCounter.countWords(twentyWords)).toBe(20);
      expect(StringCounter.countWords(noWords)).toBe(0);
      expect(StringCounter.countWords(onlySpaces)).toBe(0);
      expect(StringCounter.countWords(strangelyFormattedString)).toBe(5);
    });
  });

  describe("countLetters", () => {
    test("should return the exact number of letters contained in a string", () => {
      expect(StringCounter.countLetters(tenWords)).toBe(53);
      expect(StringCounter.countLetters(twentyWords)).toBe(90);
      expect(StringCounter.countLetters(noWords)).toBe(0);
      expect(StringCounter.countLetters(onlySpaces)).toBe(0);
      expect(StringCounter.countLetters(strangelyFormattedString)).toBe(21);
    })
  })

  describe("countWhitespaces", () => {
    test("should return the exact number of whitespaces contained in a string", () => {
      expect(StringCounter.countWhitespaces(tenWords)).toBe(8);
      expect(StringCounter.countWhitespaces(twentyWords)).toBe(20);
      expect(StringCounter.countWhitespaces(noWords)).toBe(0);
      expect(StringCounter.countWhitespaces(onlySpaces)).toBe(7);
      expect(StringCounter.countWhitespaces(strangelyFormattedString)).toBe(15);
    })
  })

  describe("countRepeatingWords", () => {
    test("should return repeating words and the number of times they appear in a string", () => {
      expect(StringCounter.countRepeatingWords(noSense, 10)).toEqual([["un",11]]);
      expect(StringCounter.countRepeatingWords(tenWords, 10)).toEqual([]);
      expect(StringCounter.countRepeatingWords(twentyWords, 2)).toEqual([
        ["il",2],
        ["di",3],
        ["una",2]
      ]);
      expect(StringCounter.countRepeatingWords(noWords, 10)).toEqual([]);
    })
  })
});
