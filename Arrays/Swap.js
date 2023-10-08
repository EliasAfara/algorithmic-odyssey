/**
 * Swaps two elements in an array.
 *
 * @param {number[]} arr - The input array containing the elements to be swapped.
 * @param {number} index1 - The index of the first element to be swapped.
 * @param {number} index2 - The index of the second element to be swapped.
 *
 * @returns {void} - This function does not return a value. It directly modifies the input array in place.
 *
 * @example
 * const myArray = [1, 2, 3, 4];
 * swap(myArray, 0, 2);
 * console.log(myArray); // [3, 2, 1, 4]
 *
 * @complexity Time complexity: O(1) - Constant time complexity. Swapping two elements in an array is an atomic operation.
 *            Space complexity: O(1) - Constant space complexity. The function does not create any new data structures.
 */
function swap(arr, index1, index2) {
  // Check if the indices are valid
  if (
    index1 < 0 ||
    index1 >= arr.length ||
    index2 < 0 ||
    index2 >= arr.length
  ) {
    throw new Error("Invalid indices");
  }

  // Swap the elements
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

export { swap };
