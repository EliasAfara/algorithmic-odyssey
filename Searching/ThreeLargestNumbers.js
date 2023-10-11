/**
 * Find Three Largest Numbers • §
 *
 * Description:
 * Write a function that takes in an array of at least three integers and, without sorting the input array,
 * returns a sorted array of the three largest integers in the input array. The function should return
 * duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of
 * [10, 5, 9, 10, 12].
 *
 * @param {number[]} array - An array of at least three integers.
 * @returns {number[]} - A sorted array containing the three largest integers from the input array.
 *
 * @complexity
 * Time Complexity: O(n) - where "n" is the length of the input array.
 *   The function iterates through the array once.
 * Space Complexity: O(1) - The function uses a constant amount of extra space.
 */
function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];

  for (const num of array) {
    updateLargest(threeLargest, num);
  }

  return threeLargest;
}

function updateLargest(threeLargest, num) {
  for (let i = 2; i >= 0; i--) {
    if (threeLargest[i] === null || num > threeLargest[i]) {
      shiftAndUpdate(threeLargest, num, i);
      break; // Exit the loop once updated.
    }
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

export { findThreeLargestNumbers };
