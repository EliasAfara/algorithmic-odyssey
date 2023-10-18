import { productSum } from "../ProductSum";

describe("Product Sum", () => {
  it("should calculate product sum for a nested array", () => {
    const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    expect(productSum(array)).toBe(12);
  });

  it("should calculate product sum for a simple array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(productSum(array)).toBe(15);
  });

  it("should calculate product sum for a partially nested array", () => {
    const array = [1, 2, [3], 4, 5];
    expect(productSum(array)).toBe(18);
  });

  it("should calculate product sum for a deeply nested array", () => {
    const array = [[1, 2], 3, [4, 5]];
    expect(productSum(array)).toBe(27);
  });

  it("should calculate product sum for an extremely deeply nested array", () => {
    const array = [[[[[5]]]]];
    expect(productSum(array)).toBe(600);
  });

  it("should calculate product sum for a complex nested array", () => {
    const array = [
      9,
      [2, -3, 4],
      1,
      [1, 1, [1, 1, 1]],
      [[[[3, 4, 1]]], 8],
      [1, 2, 3, 4, 5, [6, 7], -7],
      [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
      [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
      -3,
    ];
    expect(productSum(array)).toBe(1351);
  });
});
