import { firstNonRepeatingCharacter } from "../FirstNonRepeatingCharacter";

describe("firstNonRepeatingCharacter", () => {
  it('Should find the first non-repeating character in "abcdcaf"', () => {
    expect(firstNonRepeatingCharacter("abcdcaf")).toEqual(1);
  });

  it('Should find the first non-repeating character in "faadabcbbebdf"', () => {
    expect(firstNonRepeatingCharacter("faadabcbbebdf")).toEqual(6);
  });

  it('Should handle a single character input "a"', () => {
    expect(firstNonRepeatingCharacter("a")).toEqual(0);
  });

  it('Should handle a two-character input "ab"', () => {
    expect(firstNonRepeatingCharacter("ab")).toEqual(0);
  });

  it('Should handle a three-character input "abc"', () => {
    expect(firstNonRepeatingCharacter("abc")).toEqual(0);
  });

  it('Should find the first non-repeating character in "abac"', () => {
    expect(firstNonRepeatingCharacter("abac")).toEqual(1);
  });

  it('Should find the first non-repeating character in "ababac"', () => {
    expect(firstNonRepeatingCharacter("ababac")).toEqual(5);
  });

  it('Should find the first non-repeating character in "ababacc"', () => {
    expect(firstNonRepeatingCharacter("ababacc")).toEqual(-1);
  });

  it('Should not find any non-repeating character in "lmnopqldsafmnopqsa"', () => {
    expect(firstNonRepeatingCharacter("lmnopqldsafmnopqsa")).toEqual(7);
  });

  it("Should find the first non-repeating character in a long alphabet string", () => {
    expect(
      firstNonRepeatingCharacter(
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
      )
    ).toEqual(25);
  });

  it("Should not find any non-repeating character in a string with repeated alphabet", () => {
    expect(
      firstNonRepeatingCharacter(
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
      )
    ).toEqual(-1);
  });

  it("Should handle an empty input string", () => {
    expect(firstNonRepeatingCharacter("")).toEqual(-1);
  });

  it('Should find the first non-repeating character in "ggyllaylacrhdzedddjsc"', () => {
    expect(firstNonRepeatingCharacter("ggyllaylacrhdzedddjsc")).toEqual(10);
  });

  it("Should find the first non-repeating character in a long string with multiple repeated characters", () => {
    expect(
      firstNonRepeatingCharacter(
        "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
      )
    ).toEqual(-1);
  });

  it('Should find the first non-repeating character in "aabbccddeeff"', () => {
    expect(firstNonRepeatingCharacter("aabbccddeeff")).toEqual(-1);
  });
});
