import { binarySearch } from "../BinarySearch";

describe("binarySearch", () => {
  it("Best Case: Target in the middle", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(array, target);
    expect(result).toBe(2); // Target 3 is at index 2.
  });

  it("Average Case: Target in a random position", () => {
    const array = [10, 20, 30, 40, 50];
    const target = 40;
    const result = binarySearch(array, target);
    expect(result).toBe(3); // Target 40 is at index 3.
  });

  it("Worst Case: Target not in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 10;
    const result = binarySearch(array, target);
    expect(result).toBe(-1); // Target 10 is not in the array.
  });

  it("Empty Array: Target not in the array", () => {
    const array = [];
    const target = 5;
    const result = binarySearch(array, target);
    expect(result).toBe(-1); // Target is not in the empty array.
  });

  it("Single Element Array: Target at index 0", () => {
    const array = [10];
    const target = 10;
    const result = binarySearch(array, target);
    expect(result).toBe(0); // Target is found at index 0.
  });

  it("Two Element Array: Target not in the array", () => {
    const array = [30, 40];
    const target = 10;
    const result = binarySearch(array, target);
    expect(result).toBe(-1); // Target is not in the array.
  });

  it("Target Less than Min: Target not in the array", () => {
    const array = [50, 60, 70, 80];
    const target = 45;
    const result = binarySearch(array, target);
    expect(result).toBe(-1); // Target is not in the array.
  });

  it("Target Greater than Max: Target not in the array", () => {
    const array = [10, 20, 30, 40, 50];
    const target = 55;
    const result = binarySearch(array, target);
    expect(result).toBe(-1); // Target is not in the array.
  });

  it("Single Element Array: Target at index 0", () => {
    const array = [60];
    const target = 60;
    const result = binarySearch(array, target);
    expect(result).toBe(0); // Target is found at index 0.
  });
});
