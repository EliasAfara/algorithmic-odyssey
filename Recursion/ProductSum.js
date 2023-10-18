/**
 * Calculate the product sum of a "special" array.
 *
 * @param {Array} array - The input "special" array to calculate the product sum for.
 * @param {number} depthLevelMultiplier - (Optional) The depth level multiplier used to calculate the depth.
 * @returns {number} - The product sum of the "special" array.
 *
 * @description
 * A "special" array is a non-empty array that contains either integers or other "special" arrays.
 * The product sum of a "special" array is the sum of its elements, where "special" arrays inside it
 * are summed themselves and then multiplied by their level of depth.
 *
 * The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth
 * of the inner array in [[J] is 2; the depth of the innermost array in [CEll is 3.
 *
 * The function uses recursion to traverse the nested arrays, calculating the product sum of each nested
 * array and multiplying it by its depth level. It then returns the product sum of the entire "special" array.
 *
 * @Complexity
 * - Time Complexity: O(n), where n is the total number of elements in the "special" array.
 * - Space Complexity: O(d), where d is the maximum depth of nesting in the "special" array.
 */
function productSum(array, depthLevelMultiplier = 1) {
  // Initialize the sum to 0 for this level of the "special" array.
  let sum = 0;

  // Iterate through the elements in the input array.
  for (let i = 0; i < array.length; i++) {
    // If the element is not an array, add it to the sum.
    if (!Array.isArray(array[i])) {
      sum += array[i];
    } else {
      // If the element is a "special" array, calculate its depth level.
      // The depth level is increased by 1 for each level of nesting.
      let depthLevel = depthLevelMultiplier + 1;

      // Recursively calculate the product sum of the nested "special" array.
      // Multiply the product sum of the nested array by its depth level and add it to the sum.
      sum += depthLevel * productSum(array[i], depthLevel);
    }
  }

  // Return the calculated product sum for the current level.
  return sum;
}

export { productSum };
