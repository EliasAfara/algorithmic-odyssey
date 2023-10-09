import { threeNumberSort } from "../ThreeNumberSort";

describe("threeNumberSort", () => {
  it("should sort an array with best-case complexity", () => {
    const array = [1, 2, 3];
    const order = [1, 2, 3];
    const expectedArray = [1, 2, 3];

    const result = threeNumberSort(array, order);

    expect(result).toEqual(expectedArray);
  });

  it("should sort an array with average-case complexity", () => {
    const array = [3, 1, 2, 2, 3, 1, 3, 2];
    const order = [1, 2, 3];
    const expectedArray = [1, 1, 2, 2, 2, 3, 3, 3];

    const result = threeNumberSort(array, order);

    expect(result).toEqual(expectedArray);
  });

  it("should sort an array with worst-case complexity", () => {
    const array = [2, 3, 1, 3, 2, 1];
    const order = [1, 2, 3];
    const expectedArray = [1, 1, 2, 2, 3, 3];

    const result = threeNumberSort(array, order);

    expect(result).toEqual(expectedArray);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];
    const order = [1, 2, 3];

    const result = threeNumberSort(emptyArray, order);

    expect(result).toEqual([]);
  });
});
