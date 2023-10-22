/**
 * Finds the minimum amount of change that cannot be created using the given coins.
 *
 * @param {number[]} coins - An array of positive integers representing coin values.
 * @returns {number} - The minimum amount of change that cannot be created.
 */
function nonConstructibleChange(coins) {
  // Start with the smallest possible change, which is 1.
  let minChange = 1;

  // Sort the coins in ascending order. Sorting takes O(n log n) time.
  coins.sort((a, b) => a - b);

  // Iterate through the sorted coins to update the minimum change. This takes O(n) time.
  for (const coin of coins) {
    // If the current coin value is greater than minChange, we've found the minimum
    // non-constructible value, and we can break from the loop.
    if (coin > minChange) break;

    // Otherwise, we can increment minChange by the current coin value.
    minChange += coin;
  }

  return minChange;
}

// Complexity Analysis:
// - Time Complexity: O(n log n) for sorting + O(n) for iteration = O(n log n)
// - Space Complexity: O(1) (constant space used, not dependent on input size)

export { nonConstructibleChange };
