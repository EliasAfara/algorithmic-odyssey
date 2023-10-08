import { swap } from "../Arrays/Swap";

/**
 * Sorts an array in ascending order using the Selection Sort algorithm.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @description
 * Selection Sort is a simple sorting algorithm that repeatedly selects the minimum element from the unsorted part of the array
 * and places it at the beginning. The algorithm maintains two subarrays: one that is sorted and one that is unsorted.
 *
 * @complexity
 * Time complexity:
 *   - Best-case time complexity: O(n^2) - In all cases, Selection Sort performs the same number of comparisons and swaps, resulting in a quadratic time complexity.
 *   - Average-case time complexity: O(n^2) - The algorithm's performance is similar for all cases, leading to a quadratic time complexity.
 *   - Worst-case time complexity: O(n^2) - Selection Sort always performs n*(n-1)/2 comparisons and n-1 swaps, resulting in a quadratic time complexity.
 * Space complexity: O(1) - Constant space complexity, as the sorting is done in-place.
 */
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element in the unsorted part
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
}

export { selectionSort };
