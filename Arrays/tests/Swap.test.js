import { swap } from "../Swap";

describe("Swap", () => {
  it("should swap two elements in an array", () => {
    // Arrange
    const myArray = [1, 2, 3, 4];
    const expectedArray = [3, 2, 1, 4];

    // Act
    swap(myArray, 0, 2);

    // Assert
    expect(myArray).toEqual(expectedArray);
  });

  it("should handle swapping with negative indices", () => {
    // Arrange
    const myArray = [1, 2, 3, 4];

    // Act and Assert
    expect(() => swap(myArray, -1, 2)).toThrow();
    expect(() => swap(myArray, 0, -2)).toThrow();
  });

  it("should handle swapping with out-of-bounds indices", () => {
    // Arrange
    const myArray = [1, 2, 3, 4];

    // Act and Assert
    expect(() => swap(myArray, 10, 2)).toThrow();
    expect(() => swap(myArray, 0, 5)).toThrow();
  });
});
