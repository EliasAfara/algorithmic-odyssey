import { swap } from "../Arrays/Swap";

/**
 * Sorts an array containing three unique values based on the specified order.
 *
 * @param {number[]} array - The input array containing three unique values.
 * @param {number[]} order - The desired order in which the values should appear in the sorted array.
 * @returns {number[]} - The sorted array based on the specified order.
 *
 * @description
 * Given an array containing three unique values and a specified order, this function sorts the array
 * in such a way that the values appear in the specified order. The array is sorted in place.
 *
 * @complexity
 * Time complexity: O(n) - The function makes a single pass through the array.
 * Space complexity: O(1) - Constant space complexity, as the sorting is done in place.
 */
function threeNumberSort(array, order) {
  const firstValue = order[0];
  const secondValue = order[1];

  // Keep track of the indices where the values are stored
  let firstIdx = 0,
    secondIdx = 0,
    thirdIdx = array.length - 1;

  while (secondIdx <= thirdIdx) {
    const value = array[secondIdx];

    if (value === firstValue) {
      swap(array, firstIdx, secondIdx);
      firstIdx++;
      secondIdx++;
    } else if (value === secondValue) {
      secondIdx++;
    } else {
      swap(array, secondIdx, thirdIdx);
      thirdIdx--;
    }
  }

  return array;
}

export { threeNumberSort };
