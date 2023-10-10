import { describe, it } from "vitest";
import { quickSort } from "../QuickSort";

describe("QuickSort", () => {
  // Best-case scenario: Array is already sorted (ascending).
  it("Best Case: Sorted array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const sortedArray = quickSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  // Average-case scenario: Random order of elements.
  it("Average Case: Random order", () => {
    const inputArray = [5, 2, 1, 6, 4, 3];
    const sortedArray = quickSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Worst-case scenario: Array is sorted in descending order.
  it("Worst Case: Reverse order", () => {
    const inputArray = [5, 4, 3, 2, 1];
    const sortedArray = quickSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];
    const sortedArray = quickSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const singleElementArray = [42];
    const sortedArray = quickSort(singleElementArray);
    expect(sortedArray).toEqual([42]);
  });

  it("should sort a large array of integers in ascending order", () => {
    const inputArray = [
      -823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842,
      422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160,
      -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490,
      995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372,
      -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631,
      -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254,
      -941, -738, -469, -167, -420, -126, -410, 59,
    ];
    const sortedArray = quickSort(inputArray);
    expect(sortedArray).toEqual([
      -987, -950, -949, -942, -941, -935, -908, -874, -855, -846, -823, -817,
      -796, -738, -733, -730, -685, -578, -575, -575, -544, -542, -469, -441,
      -420, -415, -410, -376, -371, -363, -359, -353, -337, -293, -265, -257,
      -254, -191, -167, -160, -155, -126, -120, -51, -36, -13, 14, 48, 52, 59,
      59, 125, 157, 164, 183, 201, 238, 243, 295, 323, 328, 341, 355, 356, 372,
      399, 422, 490, 490, 540, 572, 610, 631, 646, 700, 724, 746, 800, 829, 842,
      888, 892, 892, 919, 950, 965, 980, 995,
    ]);
  });
});
