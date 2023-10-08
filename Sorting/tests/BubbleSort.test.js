import { bubbleSort } from "../BubbleSort";

describe("bubbleSort function", () => {
  it("should sort an array of integers in ascending order", () => {
    // Arrange
    const unsortedArray = [64, 25, 12, 22, 11];
    const expectedArray = [11, 12, 22, 25, 64];

    // Act
    const sortedArray = bubbleSort(unsortedArray);

    // Assert
    expect(sortedArray).toEqual(expectedArray);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];

    const sortedArray = bubbleSort(emptyArray);

    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const singleElementArray = [42];

    const sortedArray = bubbleSort(singleElementArray);

    expect(sortedArray).toEqual([42]);
  });

  it("should handle an already sorted array", () => {
    // Arrange
    const sortedArray = [1, 2, 3, 4, 5];

    // Act
    const result = bubbleSort(sortedArray);

    // Assert
    expect(result).toEqual(sortedArray);
  });
});
