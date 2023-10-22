import { nonConstructibleChange } from "../NonConstructibleChange";

describe("nonConstructibleChange", () => {
  it("Test Case 1:", () => {
    const result = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
    expect(result).toBe(20);
  });

  it("Test Case 2:", () => {
    const result = nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]);
    expect(result).toBe(55);
  });

  it("Test Case 3:", () => {
    const result = nonConstructibleChange([1, 1, 1, 1, 1]);
    expect(result).toBe(6);
  });

  it("Test Case 4:", () => {
    const result = nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]);
    expect(result).toBe(3);
  });

  it("Test Case 5: (Empty array)", () => {
    const result = nonConstructibleChange([]);
    expect(result).toBe(1);
  });

  it("Test Case 6:", () => {
    const result = nonConstructibleChange([
      109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4,
    ]);
    expect(result).toBe(87);
  });

  it("Test Case 7:", () => {
    const result = nonConstructibleChange([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toBe(29);
  });

  it("Test Case 8: (Duplicates)", () => {
    const result = nonConstructibleChange([1, 1]);
    expect(result).toBe(3);
  });
});
