import { StringCounter } from "./stringCounter";

const tenWords = "Questa frase ha l'aspetto di un linguaggio latino intelligente";
const twentyWords = "Durante il 1500 di Sony A, una stampante adattato il testo di Cicero per sviluppare una pagina degli esempi di tipo."
const noWords = ""
const onlySpaces = "       "
const strangelyFormattedString = "dueh djid çé+     dej     powpwpow   de"

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
      expect(StringCounter.countLetters(tenWords)).toBe(53)
      expect(StringCounter.countLetters(twentyWords)).toBe(90)
      expect(StringCounter.countLetters(noWords)).toBe(0)
      expect(StringCounter.countLetters(onlySpaces)).toBe(0);
      expect(StringCounter.countLetters(strangelyFormattedString)).toBe(21);
    })
  })
});
