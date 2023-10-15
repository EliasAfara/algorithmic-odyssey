import { isPalindrome } from "../PalindromeCheck";

describe("isPalindrome", () => {
  it("returns true for a valid palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("ignores spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });

  it("handles letter casing", () => {
    expect(isPalindrome("RacECar")).toBe(true);
  });

  it("returns false for a non-palindrome with spaces", () => {
    expect(isPalindrome("not a palindrome")).toBe(false);
  });
});
