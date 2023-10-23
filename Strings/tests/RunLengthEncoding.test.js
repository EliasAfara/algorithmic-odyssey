import { runLengthEncoding } from "../RunLengthEncoding";

describe("runLengthEncoding", () => {
  it("should encode a string with consecutive characters correctly", () => {
    const input = "AAABBBCCCDDEE";
    const expectedOutput = "3A3B3C2D2E";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle single characters without encoding", () => {
    const input = "aA";
    const expectedOutput = "1a1A";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle special characters", () => {
    const input = "!@##$$$";
    const expectedOutput = "1!1@2#3$";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle a mix of characters", () => {
    const input = "AABBB!@";
    const expectedOutput = "2A3B1!1@";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle a string of consecutive numbers", () => {
    const input = "122333";
    const expectedOutput = "112233";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle a string of consecutive special characters", () => {
    const input = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";
    const expectedOutput = "9*3*7^6$7%6!9A9A2A";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle a mix of lowercase, uppercase, and numbers", () => {
    const input = "aAaAaaaaaAaaaAAAABbbbBBBB";
    const expectedOutput = "1a1A1a1A5a1A3a4A1B3b4B";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle an empty string", () => {
    const input = "";
    const expectedOutput = "";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });

  it("should handle a string with spaces and numbers", () => {
    const input = "1  222 333    444  555";
    const expectedOutput = "112 321 334 342 35";
    const encodedString = runLengthEncoding(input);
    expect(encodedString).toBe(expectedOutput);
  });
});
