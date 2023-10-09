import { swap } from "./Swap";

/**
 * Moves all instances of a specified integer to the end of the array.
 *
 * @param {number[]} array - The input array of integers.
 * @param {number} toMove - The integer to be moved to the end.
 * @returns {number[]} - The modified array with the specified integer at the end.
 *
 * @description
 * Given an array of integers and an integer value, this function mutates the input array
 * by moving all instances of the specified integer to the end of the array while maintaining
 * the order of the other integers.
 *
 * @complexity
 * Time complexity:
 *   - Best-case time complexity: O(n) - Occurs when there are no instances of the specified integer in the array, and the function performs a single pass through the array.
 *   - Average-case time complexity: O(n) - In typical scenarios, the function iterates through the array once to move the specified integer to the end.
 *   - Worst-case time complexity: O(n) - Happens when all elements in the array are the specified integer. The function still performs a single pass through the array.
 * Space complexity: O(1) - Constant space complexity, as the function performs the operation in place.
 */
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) {
      right--;
    }

    if (array[left] === toMove) {
      // Swap the element at 'left' with the element at 'right'
      swap(array, left, right);
    }

    left++;
  }

  return array;
}

export { moveElementToEnd };
