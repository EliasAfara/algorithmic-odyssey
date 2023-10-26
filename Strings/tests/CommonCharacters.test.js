import { commonCharacters } from "../CommonCharacters";

describe("commonCharacters", () => {
  it("should find common characters in an array of strings", () => {
    const strings = ["abc", "bcd", "cbaccd"];
    const result = commonCharacters(strings);
    expect(result).toEqual(expect.arrayContaining(["b", "c"]));
  });

  it("should handle empty strings", () => {
    const strings = ["abc", "bed", ""];
    const result = commonCharacters(strings);
    expect(result).toEqual([]);
  });

  it("should handle no common characters", () => {
    const strings = ["xyz", "123", "abc"];
    const result = commonCharacters(strings);
    expect(result).toEqual([]);
  });

  it("should handle special characters", () => {
    const strings = ["!@*#$", "%^&*", "*&^%$#"];
    const result = commonCharacters(strings);
    expect(result).toEqual(["*"]);
  });

  it("should find common characters in the first set of strings", () => {
    const strings = [
      "abcde",
      "aa",
      "foobar",
      "foobaz",
      "and this is a string",
      "aaaaaaaa",
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea",
    ];
    const result = commonCharacters(strings);
    expect(result).toEqual(expect.arrayContaining([]));
  });

  it("should find common characters in the second set of strings", () => {
    const strings = [
      "abcdef",
      "fedcba",
      "abcefd",
      "aefbcd",
      "efadbc",
      "effffffffffffbcda",
      "eeeeeffffffbbbbbaaaaaccccdddd",
      "**************abdcef************",
    ];
    const result = commonCharacters(strings);
    expect(result).toEqual(
      expect.arrayContaining(["a", "b", "c", "d", "e", "f"])
    );
  });

  it("should find common characters in the third set of strings", () => {
    const strings = [
      "ab&cdef!",
      "f!ed&cba",
      "a&bce!d",
      "ae&fb!cd",
      "efa&!dbc",
      "eff!&fff&fffffffbcda",
      "eeee!efff&fffbbbbbaaaaaccccdddd",
      "*******!***&****abdcef************",
      "*******!***&****a***********f*",
      "*******!***&****b***********c*",
    ];
    const result = commonCharacters(strings);
    expect(result).toEqual(expect.arrayContaining(["&", "!"]));
  });
});
