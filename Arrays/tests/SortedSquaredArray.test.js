import { sortedSquaredArray } from "../SortedSquaredArray";

test("sortedSquaredArray", () => {
  const input = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  const actual = sortedSquaredArray(input);
  expect(actual).toEqual(expected);
});
