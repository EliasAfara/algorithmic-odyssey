/**
 * Sorts an array using the Quick Sort algorithm.
 *
 * @description
 * Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array
 * and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively.
 *
 * @complexity
 * - Time Complexity:
 *   - Average Case: O(n log n) - Quick Sort is highly efficient on average, with a time complexity of O(n log n) due to balanced partitioning.
 *   - Worst Case: O(n^2) - In the worst case, when the pivot selection is unbalanced, the time complexity becomes O(n^2).
 * - Space Complexity: O(log n) (in-place) - Quick Sort's space complexity is O(log n) due to the call stack in recursive calls.
 *
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function quickSort(array) {
  // Base case: If the array has 0 or 1 elements, it is already sorted.
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0]; // Choose the first element as the pivot.
  const left = [];
  const right = [];

  // Partition the elements into left and right sub-arrays.
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  // Recursively sort the left and right sub-arrays, and combine them with the pivot.
  return quickSort(left).concat(pivot, quickSort(right));
}

export { quickSort };
