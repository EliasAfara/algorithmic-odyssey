import { moveElementToEnd } from "../MoveElementToEnd";

describe("moveElementToEnd", () => {
  it("should move all instances of the specified integer to the end (best case)", () => {
    const array = [1, 2, 3, 4, 5];
    const toMove = 6;
    const expectedArray = [1, 2, 3, 4, 5];

    const result = moveElementToEnd(array, toMove);

    expect(result).toEqual(expectedArray);
  });

  it("should move all instances of the specified integer to the end (average case)", () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const toMove = 2;
    const expectedArray = [4, 1, 3, 2, 2, 2, 2, 2];

    const result = moveElementToEnd(array, toMove);

    expect(result).toEqual(expectedArray);
  });

  it("should move all instances of the specified integer to the end (worst case)", () => {
    const array = [3, 3, 3, 3, 3];
    const toMove = 3;
    const expectedArray = [3, 3, 3, 3, 3];

    const result = moveElementToEnd(array, toMove);

    expect(result).toEqual(expectedArray);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];
    const toMove = 5;

    const result = moveElementToEnd(emptyArray, toMove);

    expect(result).toEqual([]);
  });
});
