/**
 * Searches for a target value in a sorted array using the Binary Search algorithm.
 *
 * @description
 * Binary Search is an efficient divide-and-conquer algorithm that works by repeatedly dividing the search range in half.
 * It compares the target value to the middle element of the current range and adjusts the search boundaries accordingly.
 *
 * @complexity
 * - Time Complexity: O(log n) - Binary Search has a time complexity of O(log n) as it eliminates half of the remaining elements in each iteration.
 * - Space Complexity: O(1) - Binary Search is an in-place algorithm that does not require additional data structures.
 *
 * @param {number[]} array - The sorted array to search within.
 * @param {number} target - The target value to find.
 * @param {number} left - The left boundary of the current search range (default: 0).
 * @param {number} right - The right boundary of the current search range (default: array.length - 1).
 * @returns {number} - The index of the target value if found; otherwise, -1.
 */
function binarySearch(array, target, left = 0, right = array.length - 1) {
  // Edge case: If left boundary is greater than right boundary, the target is not found.
  if (left > right) {
    return -1;
  }

  // Calculate the middle index of the current search range.
  const middleIndex = Math.floor((left + right) / 2);

  // Get the potential target value at the middle index.
  const potentialTarget = array[middleIndex];

  if (target === potentialTarget) {
    // Target value found; return the index.
    return middleIndex;
  } else if (target > potentialTarget) {
    // Adjust the left boundary for the right half of the array.
    left = middleIndex + 1;
  } else {
    // Adjust the right boundary for the left half of the array.
    right = middleIndex - 1;
  }

  // Recursive call with updated boundaries.
  return binarySearch(array, target, left, right);
}

export { binarySearch };
