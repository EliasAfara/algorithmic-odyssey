/**
 * Sorts the squared values of an array in ascending order.
 *
 * @param {number[]} array - The input array of integers.
 * @returns {number[]} - An array containing the squared values of the input array, sorted in ascending order.
 *
 * @example
 * const inputArray = [-4, -2, 0, 2, 4];
 * const sortedSquares = sortedSquaredArray(inputArray);
 * console.log(sortedSquares); // [0, 4, 4, 16, 16]
 *
 * @complexity Time complexity: O(n * log(n)), where n is the length of the input array.
 *            Space complexity: O(n), where n is the length of the input array.
 */
function sortedSquaredArray(array) {
  // Square each element in the array
  const squaredArray = array.map((x) => Math.pow(x, 2));

  // Sort the squared values in ascending order
  squaredArray.sort((a, b) => a - b);

  return squaredArray;
}

export { sortedSquaredArray };
