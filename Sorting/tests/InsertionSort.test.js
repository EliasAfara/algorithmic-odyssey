import { insertionSort } from "../InsertionSort";

describe("insertionSort", () => {
  it("should sort an array of integers in ascending order (best case)", () => {
    // Arrange
    const sortedArray = [1, 2, 3, 4, 5];

    // Act
    const result = insertionSort(sortedArray);

    // Assert
    expect(result).toEqual(sortedArray);
  });

  it("should sort an array of integers in ascending order (average case)", () => {
    // Arrange
    const unsortedArray = [64, 25, 12, 22, 11];
    const expectedArray = [11, 12, 22, 25, 64];

    // Act
    const sortedArray = insertionSort(unsortedArray);

    // Assert
    expect(sortedArray).toEqual(expectedArray);
  });

  it("should sort an array of integers in ascending order (worst case)", () => {
    // Arrange
    const reverseSortedArray = [5, 4, 3, 2, 1];
    const expectedArray = [1, 2, 3, 4, 5];

    // Act
    const sortedArray = insertionSort(reverseSortedArray);

    // Assert
    expect(sortedArray).toEqual(expectedArray);
  });

  it("should handle an empty array", () => {
    // Arrange
    const emptyArray = [];

    // Act
    const sortedArray = insertionSort(emptyArray);

    // Assert
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    // Arrange
    const singleElementArray = [42];

    // Act
    const sortedArray = insertionSort(singleElementArray);

    // Assert
    expect(sortedArray).toEqual([42]);
  });
});
