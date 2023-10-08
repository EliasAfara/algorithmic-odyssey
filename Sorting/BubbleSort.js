import { swap } from "../Arrays/Swap";

/**
 * Sorts an array in ascending order using the Bubble Sort algorithm.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @description
 * Bubble Sort is a straightforward sorting algorithm that repeatedly steps through the list
 * of elements to be sorted, compares adjacent items, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until no swaps are needed, which means the list is sorted.
 *
 * @complexity
 * Time complexity: O(n^2) - Quadratic time complexity, where n is the length of the input array.
 * Space complexity: O(1) - Constant space complexity, as the sorting is done in-place.
 */
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

export { bubbleSort };
