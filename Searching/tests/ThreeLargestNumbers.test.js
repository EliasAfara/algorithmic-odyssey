import { findThreeLargestNumbers } from "../ThreeLargestNumbers.js";

describe("findThreeLargestNumbers", () => {
  it("should return the three largest numbers in the array", () => {
    // Test case 1: Array contains distinct integers
    expect(findThreeLargestNumbers([10, 5, 9, 10, 12])).toEqual([10, 10, 12]);

    // Test case 2: Array contains duplicate integers
    expect(findThreeLargestNumbers([8, 8, 7, 6, 7, 9])).toEqual([8, 8, 9]);

    // Test case 3: Array contains negative numbers
    expect(findThreeLargestNumbers([-1, -5, -3, -2])).toEqual([-3, -2, -1]);

    // Test case 4: Array contains three largest numbers at the beginning
    expect(findThreeLargestNumbers([100, 99, 98, 97, 96, 1, 2, 3])).toEqual([
      98, 99, 100,
    ]);
  });
});
