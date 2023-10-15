import { caesarCipherEncryptor } from "../CaesarCipherEncryptor";

describe("caesarCipherEncryptor", () => {
  it("encrypts a string with a positive key", () => {
    expect(caesarCipherEncryptor("abc", 3)).toBe("def");
  });

  it("encrypts a string with a large key", () => {
    expect(caesarCipherEncryptor("xyz", 25)).toBe("wxy");
  });

  it("wraps around the alphabet", () => {
    expect(caesarCipherEncryptor("z", 1)).toBe("a");
  });

  it("handles non-alphabetic characters", () => {
    expect(caesarCipherEncryptor("abc123", 3)).toBe("def123");
  });

  it("encrypts with a key of 0 (no change)", () => {
    expect(caesarCipherEncryptor("xyz", 0)).toBe("xyz");
  });

  it("encrypts an empty string", () => {
    expect(caesarCipherEncryptor("", 5)).toBe("");
  });

  it("encrypts with a key greater than 26", () => {
    expect(caesarCipherEncryptor("abc", 30)).toBe("efg");
  });
});
