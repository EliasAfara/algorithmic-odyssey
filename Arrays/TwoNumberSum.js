/**
 * Finds a pair of distinct integers in the given array that sum up to the target sum.
 *
 * @param {number[]} array - An array of distinct integers.
 * @param {number} targetSum - The target sum to be achieved.
 * @returns {number[]} - An array containing the pair of integers that sum up to the target sum,
 *                      or an empty array if no such pair exists.
 */
function twoNumberSum(array, targetSum) {
  const numbers = {};
  for (let item of array) {
    let potentialNum = targetSum - item;
    if (potentialNum in numbers) return [potentialNum, item];
    else numbers[item] = true;
  }
  return [];
}

exports.twoNumberSum = twoNumberSum;
