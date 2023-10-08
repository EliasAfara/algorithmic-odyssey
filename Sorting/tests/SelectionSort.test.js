import { selectionSort } from "../SelectionSort";

describe("selectionSort", () => {
  it("should sort an array of integers in ascending order (best case)", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = selectionSort(sortedArray);

    expect(result).toEqual(sortedArray);
  });

  it("should sort an array of integers in ascending order (average case)", () => {
    const unsortedArray = [64, 25, 12, 22, 11];
    const expectedArray = [11, 12, 22, 25, 64];
    const sortedArray = selectionSort(unsortedArray);

    expect(sortedArray).toEqual(expectedArray);
  });

  it("should sort an array of integers in ascending order (worst case)", () => {
    const reverseSortedArray = [5, 4, 3, 2, 1];
    const expectedArray = [1, 2, 3, 4, 5];
    const sortedArray = selectionSort(reverseSortedArray);

    expect(sortedArray).toEqual(expectedArray);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];
    const sortedArray = selectionSort(emptyArray);

    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const singleElementArray = [42];
    const sortedArray = selectionSort(singleElementArray);

    expect(sortedArray).toEqual([42]);
  });
});
